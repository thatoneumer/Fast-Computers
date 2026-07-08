import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, ShieldCheck, Zap, Trophy, Loader2 } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
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
        <section className="relative min-h-[calc(100vh-5rem)] grid lg:grid-cols-2 overflow-hidden">
          {/* Left visual panel */}
          <div className="relative hidden lg:flex flex-col justify-between p-16 border-r border-border overflow-hidden slash-bg">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-primary/20 blur-3xl rounded-full animate-float-slow" />
              <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary/10 blur-3xl rounded-full" />
            </div>

            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              className="relative flex items-center gap-3">
              <span className="text-3xl font-display font-bold tracking-widest">
                F<span className="text-primary">/</span>AST
              </span>
              <span className="text-xs tracking-[0.3em] text-muted-foreground border-l border-border pl-3">COMPUTERS</span>
            </motion.div>

            <div className="relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-primary tracking-[0.3em] text-xs font-semibold uppercase">Members Only</span>
              </motion.div>
              <motion.h2 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
                className="mt-4 text-5xl xl:text-6xl font-bold uppercase leading-none">
                Enter the <br /><span className="text-primary">Fast Zone</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                className="mt-6 text-muted-foreground max-w-md">
                Join thousands of Pakistani gamers and creators. Track orders, unlock member deals, and pre-order the newest hardware first.
              </motion.p>

              <div className="mt-12 space-y-4">
                {[
                  { icon: Zap, title: "Early access", desc: "Get first dibs on new GPU drops and flash sales." },
                  { icon: ShieldCheck, title: "Warranty vault", desc: "All your purchase warranties stored in one place." },
                  { icon: Trophy, title: "Loyalty XP", desc: "Earn XP on every order and redeem for gear." },
                ].map((f, i) => (
                  <motion.div key={f.title}
                    initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.1 }}
                    className="flex gap-4 border border-border bg-card/50 backdrop-blur p-4 hover:border-primary transition">
                    <div className="w-10 h-10 border border-border bg-background flex items-center justify-center text-primary shrink-0">
                      <f.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-sm uppercase tracking-wider">{f.title}</div>
                      <div className="text-xs text-muted-foreground">{f.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative text-xs text-muted-foreground uppercase tracking-widest">
              © 2026 Fast Computers · Lahore, Pakistan
            </div>
          </div>

          {/* Right form panel */}
          <div className="relative flex items-center justify-center p-6 sm:p-12">
            <div className="w-full max-w-md">
              <div className="flex items-center gap-1 border border-border bg-card p-1">
                {(["signin", "signup"] as const).map((m) => (
                  <button key={m} onClick={() => setMode(m)}
                    className={`relative flex-1 py-3 text-xs font-bold uppercase tracking-widest transition ${mode === m ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}>
                    {mode === m && (
                      <motion.span layoutId="auth-tab" className="absolute inset-0 bg-primary" transition={{ type: "spring", stiffness: 400, damping: 30 }} />
                    )}
                    <span className="relative">{m === "signin" ? "Sign In" : "Sign Up"}</span>
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.form key={mode}
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="mt-8">
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
                        <a href="#" className="text-primary uppercase tracking-widest hover:brightness-125">Forgot password?</a>
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

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {["Google", "Apple"].map((p) => (
                      <button key={p} type="button"
                        className="border border-border bg-card py-3 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition">
                        {p}
                      </button>
                    ))}
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
