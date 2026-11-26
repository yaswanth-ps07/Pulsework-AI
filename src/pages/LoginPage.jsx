import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, ShieldCheck, Zap, Eye, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { validateLogin } from '@/lib/authValidation'

import './Auth.css'

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formValues, setFormValues] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.currentTarget
    const nextValues = { ...formValues, [name]: value }
    setFormValues(nextValues)

    if (hasSubmitted) setErrors(validateLogin(nextValues))
    setNotice(null)
  }

  const handleLogin = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const validationErrors = validateLogin(formValues)
    setHasSubmitted(true)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      setNotice({ type: 'error', message: 'Please correct the highlighted fields.' })
      return
    }

    setIsSubmitting(true)
    setNotice({ type: 'info', message: 'Checking your details…' })
    await new Promise((resolve) => setTimeout(resolve, 450))
    setIsSubmitting(false)
    setNotice({
      type: 'success',
      message: 'Your details passed frontend validation. Login is not connected yet.',
    })
  }

  return (
    <main className="auth-page">
      <div className="auth-glow auth-glow-one"></div>
      <div className="auth-glow auth-glow-two"></div>

      <div className="auth-container">

        {/* LEFT SHOWCASE PANEL */}
        <section className="auth-showcase">
          <Link to="/" className="auth-brand">
            <div className="auth-brand-icon">
              <Activity size={23} />
            </div>
            PulseWorks<span>.AI</span>
          </Link>

          <div className="auth-showcase-content">
            <h1>
              Work smarter.
              <br />
              Achieve <span>more together.</span>
            </h1>

            <p>
              Your workspace, your team, your productivity.
              Bring everything together with intelligent
              task management powered by AI.
            </p>

            <div className="auth-benefit">
              <div className="auth-benefit-icon">
                <Zap size={16} />
              </div>
              Smart productivity tools
            </div>

            <div className="auth-benefit">
              <div className="auth-benefit-icon">
                <ShieldCheck size={16} />
              </div>
              Secure and organized workspace
            </div>
          </div>

          <div className="auth-showcase-footer">
            © 2026 PulseWorks AI. All rights reserved.
          </div>
        </section>

        {/* RIGHT LOGIN FORM */}
        <section className="auth-form-panel">
          <div className="auth-form-heading">
            <h2>Welcome back!</h2>
            <p>Enter your credentials to access your workspace.</p>
          </div>

          {notice && (
            <div
              className={`auth-notice auth-notice-${notice.type}`}
              role={notice.type === 'error' ? 'alert' : 'status'}
              aria-live={notice.type === 'error' ? 'assertive' : 'polite'}
            >
              {notice.message}
            </div>
          )}

          <form className="auth-form" onSubmit={handleLogin} noValidate>
            <div className="auth-field">
              <Label htmlFor="login-email">Email address</Label>
              <Input
                id="login-email"
                name="email"
                className="auth-input"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'login-email-error' : undefined}
              />
              {errors.email && (
                <p id="login-email-error" className="auth-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="auth-field">
              <Label htmlFor="login-password">Password</Label>

              <div className="auth-input-wrapper">
                <Input
                  id="login-password"
                  name="password"
                  className="auth-input auth-input-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  value={formValues.password}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? 'login-password-error' : undefined
                  }
                />

                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p id="login-password-error" className="auth-error" role="alert">
                  {errors.password}
                </p>
              )}
            </div>

            <div className="auth-form-options">
              <label className="auth-remember">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password" className="auth-link">
                Forgot password?
              </Link>
            </div>

            <Button
              type="submit"
              className="auth-submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Checking…' : 'Sign In'}
            </Button>
          </form>

          <div className="auth-switch">
            Don't have an account?
            <Link to="/register">Create account</Link>
          </div>

          <div className="auth-terms">
            By continuing, you agree to our Terms of Service
            and Privacy Policy.
          </div>
        </section>

      </div>
    </main>
  )
}

export default LoginPage