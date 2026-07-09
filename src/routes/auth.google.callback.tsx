import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { googleLoginFn } from "@/functions/googleAuth";
import Swal from "sweetalert2";

export const Route = createFileRoute("/auth/google/callback")({
  component: GoogleCallbackPage,
});

function GoogleCallbackPage() {
  const navigate = useNavigate();
  const { loginWithGoogle } = useAuth();
  const [error, setError] = useState("");

  useEffect(() => {
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
        const result = await googleLoginFn({ data: { code } });
        await loginWithGoogle(result.user, result.token);

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
