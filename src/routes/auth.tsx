import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck, Zap, Trophy, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Tilt3D } from "@/components/ui/Tilt3D";
import { useAuth } from "@/contexts/AuthContext";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Sign In or Create Account — Fast Computers" },
      { name: "description", content: "Access your Fast Computers account to track orders, save wishlists and speed through checkout." },
      { property: "og:title", content: "Sign In — Fast Computers" },
      { property: "og:description", content: "Sign in or create your Fast Computers account." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const handleGoogleLogin = () => {
    const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    const redirectUri = `${window.location.origin}/auth/google/callback`;
    const scope = 'openid email profile';
    const params = new URLSearchParams({
      client_id: clientId,
      redirect_uri: redirectUri,
      response_type: 'code',
      scope,
      access_type: 'offline',
      prompt: 'select_account',
    });
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const name = formData.get("name") as string;

    try {
      if (mode === "signin") {
        await login(email, password);
      } else {
        await register(email, password, name);
      }
      navigate({ to: "/" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 overflow-hidden" style={{ perspective: "1400px" }}>

          {/* ── Left visual panel ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -60, rotateY: 18, transformPerspective: 1400 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative hidden lg:flex flex-col justify-between p-16 border-r border-border overflow-hidden slash-bg"
          >
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full animate-float-slow" />
              <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
            </div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative flex items-center gap-3"
            >
              <span className="text-3xl font-display font-bold tracking-widest">
                F<span className="text-primary">/</span>AST
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-3">COMPUTERS</span>
            </motion.div>

            {/* Hero copy */}
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="h-px w-10 bg-primary" />
                <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Members Only</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 35, rotateX: 20, transformPerspective: 800 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
                className="mt-4 text-5xl xl:text-6xl font-bold uppercase leading-none"
              >
                Enter the <br /><span className="text-primary">Fast Zone</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 text-muted-foreground max-w-md"
              >
                Join thousands of Pakistani gamers and creators. Track orders, unlock member deals, and pre-order the newest hardware first.
              </motion.p>

              {/* Feature cards with Tilt3D */}
              <div className="mt-12 space-y-4">
                {[
                  { icon: Zap, title: "Early access", desc: "Get first dibs on new GPU drops and flash sales." },
                  { icon: ShieldCheck, title: "Warranty vault", desc: "All your purchase warranties stored in one place." },
                  { icon: Trophy, title: "Loyalty XP", desc: "Earn XP on every order and redeem for gear." },
                ].map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: -30, rotateY: 10, transformPerspective: 800 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ delay: 0.65 + i * 0.12, duration: 0.6 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <Tilt3D maxTilt={6} scale={1.03} className="flex gap-4 border border-border bg-card/50 backdrop-blur p-4 hover:border-primary transition">
                      <div className="w-10 h-10 border border-border bg-background flex items-center justify-center text-primary shrink-0">
                        <f.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-sm uppercase tracking-wider">{f.title}</div>
                        <div className="text-xs text-muted-foreground">{f.desc}</div>
                      </div>
                    </Tilt3D>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative text-xs text-muted-foreground uppercase tracking-widest">
              © 2026 Fast Computers · Lahore, Pakistan
            </div>
          </motion.div>

          {/* ── Right form panel ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -18, transformPerspective: 1400 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{ transformStyle: "preserve-3d" }}
            className="relative flex items-center justify-center p-6 sm:p-12"
          >
            <div className="w-full max-w-md">
              {/* Mode tabs with spring underline */}
              <div className="flex items-center gap-1 border border-border bg-card p-1">
                {(["signin", "signup"] as const).map((m) => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    className={`relative flex-1 py-3 text-xs font-bold uppercase tracking-widest transition ${mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    {mode === m && (
                      <motion.span layoutId="auth-tab" className="absolute inset-0 bg-primary" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                    )}
                    <span className="relative">{m === "signin" ? "Sign In" : "Sign Up"}</span>
                  </button>
                ))}
              </div>

              {/* 3D Card Flip on mode change */}
              <div style={{ perspective: "1000px" }}>
                <AnimatePresence mode="wait">
                  <motion.form
                    key={mode}
                    initial={{ opacity: 0, rotateY: mode === "signup" ? 90 : -90, transformPerspective: 1000 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: mode === "signin" ? 90 : -90 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    style={{ transformStyle: "preserve-3d" }}
                    onSubmit={handleSubmit}
                    className="mt-8"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="h-px w-10 bg-primary" />
                      <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">
                        {mode === "signin" ? "Welcome Back" : "Create Account"}
                      </span>
                    </div>
                    <h1 className="text-4xl font-bold uppercase leading-tight">
                      {mode === "signin" ? "Sign in to your rig" : "Join the community"}
                    </h1>

                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-3 bg-destructive/10 border border-destructive text-destructive text-sm rounded"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div className="mt-8 space-y-4">
                      {mode === "signup" && (
                        <Field icon={User} label="Full Name" name="name" type="text" placeholder="e.g. Ali Raza" />
                      )}
                      <Field icon={Mail} label="Email Address" name="email" type="email" placeholder="you@fastcomputers.pk" />
                      <div>
                        <label className="text-xs uppercase tracking-widest text-muted-foreground">Password</label>
                        <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary transition">
                          <Lock className="w-4 h-4 mx-3 text-muted-foreground" />
                          <input required minLength={6} name="password" type={showPw ? "text" : "password"} placeholder="••••••••"
                            className="flex-1 bg-transparent py-3 outline-none text-sm" />
                          <button type="button" onClick={() => setShowPw(!showPw)} className="px-3 text-muted-foreground hover:text-primary">
                            {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {mode === "signin" ? (
                        <div className="flex items-center justify-between text-xs">
                          <label className="flex items-center gap-2 cursor-pointer text-muted-foreground">
                            <input type="checkbox" className="accent-primary" /> Remember me
                          </label>
                          <Link to="/forgot-password" className="text-primary uppercase tracking-widest hover:brightness-125">Forgot password?</Link>
                        </div>
                      ) : (
                        <label className="flex items-start gap-2 text-xs text-muted-foreground cursor-pointer">
                          <input required type="checkbox" className="mt-0.5 accent-primary" />
                          <span>I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>.</span>
                        </label>
                      )}
                    </div>

                    <button type="submit" disabled={loading}
                      className="mt-8 w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground py-4 font-bold uppercase tracking-widest text-sm red-glow hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          {mode === "signin" ? "Signing In..." : "Creating Account..."}
                        </>
                      ) : (
                        <>
                          {mode === "signin" ? "Sign In" : "Create Account"} <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <div className="mt-8 flex items-center gap-4">
                      <div className="flex-1 h-px bg-border" />
                      <span className="text-xs uppercase tracking-widest text-muted-foreground">or continue with</span>
                      <div className="flex-1 h-px bg-border" />
                    </div>

                    <div className="mt-6">
                      <button
                        type="button"
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-3 border border-border bg-card py-3 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                        </svg>
                        Continue with Google
                      </button>
                    </div>

                    <p className="mt-8 text-sm text-center text-muted-foreground">
                      {mode === "signin" ? (
                        <>New to Fast Computers?{" "}
                          <button type="button" onClick={() => setMode("signup")} className="text-primary font-bold uppercase tracking-widest text-xs hover:brightness-125">Create account</button>
                        </>
                      ) : (
                        <>Already a member?{" "}
                          <button type="button" onClick={() => setMode("signin")} className="text-primary font-bold uppercase tracking-widest text-xs hover:brightness-125">Sign in</button>
                        </>
                      )}
                    </p>

                    <p className="mt-4 text-xs text-center text-muted-foreground">
                      <Link to="/" className="hover:text-primary">← Back to homepage</Link>
                    </p>
                  </motion.form>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({ icon: Icon, label, name, type, placeholder }: { icon: typeof Mail; label: string; name: string; type: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <div className="mt-2 flex items-center border border-border bg-background focus-within:border-primary transition">
        <Icon className="w-4 h-4 mx-3 text-muted-foreground" />
        <input required name={name} type={type} placeholder={placeholder}
          className="flex-1 bg-transparent py-3 pr-3 outline-none text-sm" />
      </div>
    </div>
  );
}
