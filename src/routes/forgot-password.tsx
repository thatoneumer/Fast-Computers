import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, KeyRound } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { useAuth } from "@/contexts/AuthContext";
import { sendResetOtpFn, verifyOtpFn, verifyOtpAndResetPasswordFn } from "@/functions/auth";
import Swal from "sweetalert2";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Forgot Password — Fast Computers" },
      { name: "description", content: "Recover your Fast Computers account password." },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [showConfirmPw, setShowConfirmPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Step 1: Send Reset OTP Code
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      await sendResetOtpFn({ data: { email } });
      setStep(2);
      Swal.fire({
        title: "Code Sent!",
        text: "We have sent a verification code to your email. Please check your inbox.",
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#dc2626",
      });
    } catch (err: any) {
      setError(err?.message || "Failed to send reset code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: Verify OTP code against server
  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!otp) return;

    if (otp.length !== 6 || isNaN(Number(otp))) {
      setError("Please enter a valid 6-digit verification code");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await verifyOtpFn({ data: { email, otp } });
      // OTP is valid — advance to password reset step
      setStep(3);
    } catch (err: any) {
      setError(err?.message || "Invalid or expired code. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 3: Reset password & log in
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password || !confirmPassword) return;

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // 1. Reset password on server (this also verifies OTP again)
      await verifyOtpAndResetPasswordFn({ data: { email, otp, newPassword: password } });

      // 2. Perform automatic login
      await login(email, password);

      await Swal.fire({
        title: "Password Updated!",
        text: "Your password has been reset successfully. You are now logged in.",
        icon: "success",
        background: "#1E1E1E",
        color: "#FFF",
        confirmButtonColor: "#dc2626",
      });

      // 3. Redirect to home
      navigate({ to: "/" });
    } catch (err: any) {
      setError(err?.message || "Verification failed or code expired. Please restart the process.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 overflow-hidden">
          {/* Left Visual Panel */}
          <div className="relative hidden lg:flex flex-col justify-between p-16 border-r border-border overflow-hidden slash-bg">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
            </div>

            <div className="relative flex items-center gap-3">
              <span className="text-3xl font-display font-bold tracking-widest">
                F<span className="text-primary">/</span>AST
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-3">COMPUTERS</span>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Account Security</span>
              </div>
              <h2 className="mt-4 text-5xl xl:text-6xl font-bold uppercase leading-none">
                Recover Your <br /><span className="text-primary">Credentials</span>
              </h2>
              <p className="mt-6 text-muted-foreground max-w-md">
                Follow the secure steps to restore access to your account. We will send a verification code using the Google Apps Script email service configured in your environment.
              </p>
            </div>

            <div className="relative text-xs text-muted-foreground uppercase tracking-widest">
              © 2026 Fast Computers · Lahore, Pakistan
            </div>
          </div>

          {/* Right Form Panel */}
          <div className="relative flex items-center justify-center p-6 sm:p-12">
            <div className="w-full max-w-md">
              <Link to="/auth" className="inline-flex items-center text-xs text-muted-foreground hover:text-primary transition gap-1.5 mb-8 uppercase tracking-widest font-bold">
                ← Back to Sign In
              </Link>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.form
                    key="step1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleSendOtp}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-10 bg-primary" />
                      <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Stage 1 of 3</span>
                    </div>
                    <h1 className="text-4xl font-bold uppercase leading-tight">Forgot Password</h1>
                    <p className="mt-2 text-sm text-muted-foreground">Enter your registered email address and we'll send you a 6-digit verification code.</p>

                    {error && (
                      <div className="mt-6 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded">
                        {error}
                      </div>
                    )}

                    <div className="mt-8 space-y-4">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Email Address</label>
                        <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary transition">
                          <Mail className="w-4 h-4 mx-3 text-muted-foreground" />
                          <input
                            required
                            type="email"
                            placeholder="you@fastcomputers.pk"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-transparent py-3 pr-3 outline-none text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Code...
                        </>
                      ) : (
                        <>
                          Send Reset Code <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}

                {step === 2 && (
                  <motion.form
                    key="step2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleVerifyOtp}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-10 bg-primary" />
                      <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Stage 2 of 3</span>
                    </div>
                    <h1 className="text-4xl font-bold uppercase leading-tight">Verify Code</h1>
                    <p className="mt-2 text-sm text-muted-foreground">
                      We sent a 6-digit recovery code to <strong className="text-foreground">{email}</strong>. Enter the code below.
                    </p>

                    {error && (
                      <div className="mt-6 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded">
                        {error}
                      </div>
                    )}

                    <div className="mt-8 space-y-4">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Verification Code</label>
                        <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary transition">
                          <KeyRound className="w-4 h-4 mx-3 text-muted-foreground" />
                          <input
                            required
                            type="text"
                            maxLength={6}
                            placeholder="e.g. 123456"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            className="flex-1 bg-transparent py-3 pr-3 outline-none text-sm tracking-widest font-mono font-bold"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between items-center text-xs">
                      <button
                        type="button"
                        onClick={() => { setStep(1); setError(""); }}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        Change Email
                      </button>
                      <button
                        type="button"
                        onClick={handleSendOtp}
                        className="text-primary font-bold hover:underline"
                      >
                        Resend Code
                      </button>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          Verify Code <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}

                {step === 3 && (
                  <motion.form
                    key="step3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onSubmit={handleResetPassword}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-10 bg-primary" />
                      <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Stage 3 of 3</span>
                    </div>
                    <h1 className="text-4xl font-bold uppercase leading-tight">Reset Password</h1>
                    <p className="mt-2 text-sm text-muted-foreground">Setup a secure new password for your account.</p>

                    {error && (
                      <div className="mt-6 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded">
                        {error}
                      </div>
                    )}

                    <div className="mt-8 space-y-4">
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">New Password</label>
                        <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary transition">
                          <Lock className="w-4 h-4 mx-3 text-muted-foreground" />
                          <input
                            required
                            minLength={6}
                            type={showPw ? "text" : "password"}
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="flex-1 bg-transparent py-3 outline-none text-sm"
                          />
                          <button type="button" onClick={() => setShowPw(!showPw)} className="px-3 text-muted-foreground hover:text-primary">
                            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Confirm New Password</label>
                        <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary transition">
                          <Lock className="w-4 h-4 mx-3 text-muted-foreground" />
                          <input
                            required
                            minLength={6}
                            type={showConfirmPw ? "text" : "password"}
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="flex-1 bg-transparent py-3 outline-none text-sm"
                          />
                          <button type="button" onClick={() => setShowConfirmPw(!showConfirmPw)} className="px-3 text-muted-foreground hover:text-primary">
                            {showConfirmPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Resetting Password...
                        </>
                      ) : (
                        <>
                          Reset & Sign In <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
