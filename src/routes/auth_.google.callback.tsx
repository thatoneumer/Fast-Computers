import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { googleLoginFn } from "@/functions/googleAuth";
import { sendEmail } from "@/functions/email";
import { generateWelcomeEmailHTML } from "@/lib/email-templates";
import Swal from "sweetalert2";

export const Route = createFileRoute("/auth_/google/callback")({
  component: GoogleCallbackPage,
});

function GoogleCallbackPage() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const processedRef = useRef(false);

  useEffect(() => {
    if (processedRef.current) return;
    processedRef.current = true;

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const errorParam = params.get("error");

    if (errorParam) {
      setError("Google sign-in was cancelled or failed.");
      setTimeout(() => navigate({ to: "/auth" }), 2000);
      return;
    }

    if (!code) {
      setError("No authorization code received.");
      setTimeout(() => navigate({ to: "/auth" }), 2000);
      return;
    }

    const handleCallback = async () => {
      try {
        const redirectUri = `${window.location.origin}/auth/google/callback`;
        const result = await googleLoginFn({ data: { code, redirectUri } });
        await loginWithGoogle(result.user, result.token);

        // Send welcome email only for brand-new Google accounts
        if (result.isNewUser) {
          sendEmail({
            to: result.user.email,
            subject: `Welcome to Fast Computers, ${result.user.name}! 🎮`,
            htmlBody: generateWelcomeEmailHTML(result.user.name, 'google'),
          }).catch((err) => console.error('Welcome email (Google) error:', err));
        }

        await Swal.fire({
          title: "Welcome!",
          text: `Signed in as ${result.user.name}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          background: "#1E1E1E",
          color: "#FFF",
        });

        navigate({ to: "/" });
      } catch (err: any) {
        setError(err?.message || "Google sign-in failed. Please try again.");
        setTimeout(() => navigate({ to: "/auth" }), 3000);
      }
    };

    handleCallback();
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {error ? (
        <div className="text-center space-y-4">
          <p className="text-destructive font-medium">{error}</p>
          <p className="text-muted-foreground text-sm">Redirecting back to login...</p>
        </div>
      ) : (
        <div className="text-center space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-primary mx-auto" />
          <p className="text-foreground font-medium uppercase tracking-widest text-sm">Completing Google Sign-In...</p>
        </div>
      )}
    </div>
  );
}
