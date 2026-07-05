import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, ShoppingBag, Shield, Zap, X } from 'lucide-react'
import logo from '/logo.png'

function AuthPage({ setActivePage }) {
  const [mode, setMode] = useState('signin') // 'signin' | 'signup'
  const [showPass, setShowPass] = useState(false)
  const [showConfirmPass, setShowConfirmPass] = useState(false)

  const [signInForm, setSignInForm] = useState({ email: '', password: '' })
  const [signUpForm, setSignUpForm] = useState({ name: '', email: '', password: '', confirmPassword: '' })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validateSignIn = () => {
    const e = {}
    if (!signInForm.email) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(signInForm.email)) e.email = 'Enter a valid email'
    if (!signInForm.password) e.password = 'Password is required'
    else if (signInForm.password.length < 6) e.password = 'Password must be at least 6 characters'
    return e
  }

  const validateSignUp = () => {
    const e = {}
    if (!signUpForm.name) e.name = 'Full name is required'
    if (!signUpForm.email) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(signUpForm.email)) e.email = 'Enter a valid email'
    if (!signUpForm.password) e.password = 'Password is required'
    else if (signUpForm.password.length < 6) e.password = 'Minimum 6 characters'
    if (!signUpForm.confirmPassword) e.confirmPassword = 'Please confirm your password'
    else if (signUpForm.password !== signUpForm.confirmPassword) e.confirmPassword = 'Passwords do not match'
    return e
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    const errs = validateSignIn()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setActivePage('Home')
      }, 1800)
    }
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    const errs = validateSignUp()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setMode('signin')
        setSignUpForm({ name: '', email: '', password: '', confirmPassword: '' })
      }, 1800)
    }
  }

  const switchMode = (m) => {
    setMode(m)
    setErrors({})
    setSubmitted(false)
    setShowPass(false)
    setShowConfirmPass(false)
  }

  const perks = [
    { icon: ShoppingBag, text: 'Track orders in real‑time' },
    { icon: Shield, text: '1-click reorder & saved addresses' },
    { icon: Zap, text: 'Exclusive member-only deals' },
  ]

  return (
    <div className="min-h-screen bg-[#08060d] flex items-stretch">

      {/* ── Left panel: branding / illustration ── */}
      <div
        className="hidden lg:flex flex-col justify-between w-[46%] relative overflow-hidden px-14 py-12"
        style={{
          background:
            'linear-gradient(135deg, #0e0b15 0%, #1a0005 60%, #0e0b15 100%)',
        }}
      >
        {/* subtle grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#F01B1D 1px, transparent 1px), linear-gradient(90deg, #F01B1D 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        {/* glow blob */}
        <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#F01B1D]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[320px] h-[320px] rounded-full bg-[#F01B1D]/8 blur-[100px] pointer-events-none" />

        {/* Logo */}
        <div className="relative z-10">
          <img
            src={logo}
            alt="Fast Computers"
            className="h-12 w-auto cursor-pointer"
            onClick={() => setActivePage('Home')}
          />
        </div>

        {/* Centre copy */}
        <div className="relative z-10 flex flex-col gap-8">
          <div>
            <p className="text-[#F01B1D] text-xs font-extrabold tracking-widest uppercase mb-3">
              Build Your Dream
            </p>
            <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight uppercase">
              Game Without<br />
              <span className="text-[#F01B1D]">Compromise</span>
            </h2>
            <p className="text-gray-500 text-sm mt-4 max-w-sm leading-relaxed">
              Join thousands of gamers and builders who trust Fast Computers for authentic hardware and lightning-fast delivery across Pakistan.
            </p>
          </div>

          {/* Perk chips */}
          <ul className="flex flex-col gap-3">
            {perks.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-center gap-3">
                <span className="w-8 h-8 rounded bg-[#F01B1D]/10 border border-[#F01B1D]/20 flex items-center justify-center shrink-0">
                  <Icon className="h-4 w-4 text-[#F01B1D]" />
                </span>
                <span className="text-xs text-gray-400 font-medium">{text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom quote */}
        <p className="relative z-10 text-[11px] text-gray-700 tracking-wide">
          © {new Date().getFullYear()} FAST COMPUTERS — All rights reserved.
        </p>
      </div>

      {/* ── Right panel: form ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 bg-[#0c0a12] relative overflow-hidden">

        {/* mobile logo */}
        <div className="lg:hidden mb-8">
          <img
            src={logo}
            alt="Fast Computers"
            className="h-10 w-auto cursor-pointer mx-auto"
            onClick={() => setActivePage('Home')}
          />
        </div>

        {/* glow */}
        <div className="absolute top-0 right-0 w-[360px] h-[360px] rounded-full bg-[#F01B1D]/5 blur-[100px] pointer-events-none" />

        {/* ── Close button ── */}
        <motion.button
          onClick={() => setActivePage('Home')}
          className="absolute top-5 right-5 z-20 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#F01B1D]/50 hover:bg-[#F01B1D]/10 transition-all cursor-pointer"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          title="Back to Home"
        >
          <X className="h-4 w-4" />
        </motion.button>

        <div className="w-full max-w-md relative z-10">

          {/* Tab switcher */}
          <div className="flex rounded-lg overflow-hidden border border-gray-800 mb-8 bg-[#121016]">
            {['signin', 'signup'].map((tab) => (
              <button
                key={tab}
                onClick={() => switchMode(tab)}
                className={`flex-1 py-3 text-xs font-extrabold uppercase tracking-widest transition-all cursor-pointer ${
                  mode === tab
                    ? 'bg-[#F01B1D] text-white'
                    : 'text-gray-500 hover:text-white'
                }`}
              >
                {tab === 'signin' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          {/* ────── SIGN IN FORM ────── */}
          <AnimatePresence mode="wait">
            {mode === 'signin' && (
              <motion.div
                key="signin"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h1 className="text-2xl font-black text-white uppercase tracking-wide mb-1">
                  Welcome Back
                </h1>
                <p className="text-xs text-gray-500 mb-8">
                  Sign in to your account to continue shopping.
                </p>

                {submitted ? (
                  <SuccessMessage message="Signed in successfully! Redirecting…" />
                ) : (
                  <form onSubmit={handleSignIn} noValidate className="flex flex-col gap-5">

                    {/* Email */}
                    <Field label="Email Address" error={errors.email}>
                      <InputWrapper icon={<Mail className="h-4 w-4" />}>
                        <input
                          type="email"
                          placeholder="ali@example.com"
                          value={signInForm.email}
                          onChange={(e) => setSignInForm({ ...signInForm, email: e.target.value })}
                          className={inputCls(errors.email)}
                        />
                      </InputWrapper>
                    </Field>

                    {/* Password */}
                    <Field label="Password" error={errors.password}>
                      <InputWrapper
                        icon={<Lock className="h-4 w-4" />}
                        right={
                          <button type="button" onClick={() => setShowPass(!showPass)} className="text-gray-500 hover:text-white transition-colors">
                            {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        }
                      >
                        <input
                          type={showPass ? 'text' : 'password'}
                          placeholder="••••••••"
                          value={signInForm.password}
                          onChange={(e) => setSignInForm({ ...signInForm, password: e.target.value })}
                          className={inputCls(errors.password)}
                        />
                      </InputWrapper>
                    </Field>

                    <div className="flex items-center justify-between text-xs">
                      <label className="flex items-center gap-2 text-gray-400 cursor-pointer select-none">
                        <input type="checkbox" className="accent-[#F01B1D] rounded" />
                        Remember me
                      </label>
                      <button type="button" className="text-[#F01B1D] hover:underline font-semibold">
                        Forgot password?
                      </button>
                    </div>

                    <SubmitButton label="Sign In" />

                    <p className="text-center text-xs text-gray-500 mt-1">
                      Don't have an account?{' '}
                      <button type="button" onClick={() => switchMode('signup')} className="text-[#F01B1D] hover:underline font-semibold cursor-pointer">
                        Create one
                      </button>
                    </p>
                  </form>
                )}
              </motion.div>
            )}

            {/* ────── SIGN UP FORM ────── */}
            {mode === 'signup' && (
              <motion.div
                key="signup"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.25 }}
              >
                <h1 className="text-2xl font-black text-white uppercase tracking-wide mb-1">
                  Create Account
                </h1>
                <p className="text-xs text-gray-500 mb-8">
                  Join the Fast Computers community today.
                </p>

                {submitted ? (
                  <SuccessMessage message="Account created! Please sign in." />
                ) : (
                  <form onSubmit={handleSignUp} noValidate className="flex flex-col gap-5">

                    {/* Full Name */}
                    <Field label="Full Name" error={errors.name}>
                      <InputWrapper icon={<User className="h-4 w-4" />}>
                        <input
                          type="text"
                          placeholder="Ali Raza"
                          value={signUpForm.name}
                          onChange={(e) => setSignUpForm({ ...signUpForm, name: e.target.value })}
                          className={inputCls(errors.name)}
                        />
                      </InputWrapper>
                    </Field>

                    {/* Email */}
                    <Field label="Email Address" error={errors.email}>
                      <InputWrapper icon={<Mail className="h-4 w-4" />}>
                        <input
                          type="email"
                          placeholder="ali@example.com"
                          value={signUpForm.email}
                          onChange={(e) => setSignUpForm({ ...signUpForm, email: e.target.value })}
                          className={inputCls(errors.email)}
                        />
                      </InputWrapper>
                    </Field>

                    {/* Password */}
                    <Field label="Password" error={errors.password}>
                      <InputWrapper
                        icon={<Lock className="h-4 w-4" />}
                        right={
                          <button type="button" onClick={() => setShowPass(!showPass)} className="text-gray-500 hover:text-white transition-colors">
                            {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        }
                      >
                        <input
                          type={showPass ? 'text' : 'password'}
                          placeholder="Min. 6 characters"
                          value={signUpForm.password}
                          onChange={(e) => setSignUpForm({ ...signUpForm, password: e.target.value })}
                          className={inputCls(errors.password)}
                        />
                      </InputWrapper>
                      {/* Strength bar */}
                      {signUpForm.password && (
                        <StrengthBar password={signUpForm.password} />
                      )}
                    </Field>

                    {/* Confirm Password */}
                    <Field label="Confirm Password" error={errors.confirmPassword}>
                      <InputWrapper
                        icon={<Lock className="h-4 w-4" />}
                        right={
                          <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} className="text-gray-500 hover:text-white transition-colors">
                            {showConfirmPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        }
                      >
                        <input
                          type={showConfirmPass ? 'text' : 'password'}
                          placeholder="Re-enter password"
                          value={signUpForm.confirmPassword}
                          onChange={(e) => setSignUpForm({ ...signUpForm, confirmPassword: e.target.value })}
                          className={inputCls(errors.confirmPassword)}
                        />
                      </InputWrapper>
                    </Field>

                    <label className="flex items-start gap-2 text-xs text-gray-400 cursor-pointer select-none">
                      <input type="checkbox" required className="accent-[#F01B1D] mt-0.5 rounded shrink-0" />
                      I agree to the{' '}
                      <span className="text-[#F01B1D] hover:underline cursor-pointer">Terms & Conditions</span>
                      &nbsp;and&nbsp;
                      <span className="text-[#F01B1D] hover:underline cursor-pointer">Privacy Policy</span>
                    </label>

                    <SubmitButton label="Create Account" />

                    <p className="text-center text-xs text-gray-500 mt-1">
                      Already have an account?{' '}
                      <button type="button" onClick={() => switchMode('signin')} className="text-[#F01B1D] hover:underline font-semibold cursor-pointer">
                        Sign in
                      </button>
                    </p>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

/* ─── Small helper components ─── */

function Field({ label, error, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</label>
      {children}
      {error && <p className="text-[10px] text-[#F01B1D] font-semibold">{error}</p>}
    </div>
  )
}

function InputWrapper({ icon, right, children }) {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-3.5 text-gray-500 pointer-events-none">{icon}</span>
      <div className="w-full">{children}</div>
      {right && <span className="absolute right-3.5">{right}</span>}
    </div>
  )
}

const inputCls = (hasError) =>
  `w-full bg-[#121016] border ${
    hasError ? 'border-[#F01B1D]/60' : 'border-gray-800'
  } text-white placeholder-gray-600 text-xs pl-10 pr-10 py-3 rounded-lg focus:outline-none focus:border-[#F01B1D] transition-colors`

function SubmitButton({ label }) {
  return (
    <motion.button
      type="submit"
      className="w-full h-12 bg-[#F01B1D] hover:bg-red-700 text-white font-black text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 cursor-pointer transition-colors shadow-lg shadow-red-900/30 mt-1"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <span>{label}</span>
      <ArrowRight className="h-4 w-4" />
    </motion.button>
  )
}

function SuccessMessage({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-16 flex flex-col items-center gap-4 text-center"
    >
      <span className="w-16 h-16 rounded-full bg-[#F01B1D]/10 border border-[#F01B1D]/30 flex items-center justify-center">
        <svg className="h-8 w-8 text-[#F01B1D]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <p className="text-white font-bold text-sm">{message}</p>
    </motion.div>
  )
}

function StrengthBar({ password }) {
  let strength = 0
  if (password.length >= 6) strength++
  if (password.length >= 10) strength++
  if (/[A-Z]/.test(password)) strength++
  if (/[0-9]/.test(password)) strength++
  if (/[^A-Za-z0-9]/.test(password)) strength++

  const label = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][strength]
  const color = ['', '#ef4444', '#f97316', '#eab308', '#22c55e', '#F01B1D'][strength]

  return (
    <div className="mt-2 flex flex-col gap-1">
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className="h-1 flex-1 rounded-full transition-all duration-300"
            style={{ backgroundColor: n <= strength ? color : '#1f1a2e' }}
          />
        ))}
      </div>
      {label && (
        <p className="text-[10px] font-bold" style={{ color }}>
          {label}
        </p>
      )}
    </div>
  )
}

export default AuthPage
