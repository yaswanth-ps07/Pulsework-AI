import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Activity, ShieldCheck, Zap, Eye, EyeOff } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { validateRegistration } from '@/lib/authValidation'

import './Auth.css'

function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState({})
  const [hasSubmitted, setHasSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notice, setNotice] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.currentTarget
    const nextValues = { ...formValues, [name]: value }
    setFormValues(nextValues)

    if (hasSubmitted) setErrors(validateRegistration(nextValues))
    setNotice(null)
  }

  const handleRegister = async (event) => {
    event.preventDefault()
    if (isSubmitting) return

    const validationErrors = validateRegistration(formValues)
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
      message: 'Your details passed frontend validation. No account has been created.',
    })
  }

  return (
    <main className="auth-page auth-register">
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
              Start your journey
              <br />
              towards <span>better work.</span>
            </h1>

            <p>
              Create your account and discover a smarter
              way to manage tasks, collaborate with your
              team and stay productive.
            </p>

            <div className="auth-benefit">
              <div className="auth-benefit-icon">
                <Zap size={16} />
              </div>
              Get more done with less effort
            </div>

            <div className="auth-benefit">
              <div className="auth-benefit-icon">
                <ShieldCheck size={16} />
              </div>
              Your information stays protected
            </div>
          </div>

          <div className="auth-showcase-footer">
            © 2026 PulseWorks AI. All rights reserved.
          </div>
        </section>

        {/* RIGHT REGISTRATION FORM */}
        <section className="auth-form-panel">
          <div className="auth-form-heading">
            <h2>Create an account</h2>
            <p>Join PulseWorks AI and organize your work better.</p>
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

          <form className="auth-form" onSubmit={handleRegister} noValidate>
            <div className="auth-field">
              <Label htmlFor="register-name">Full name</Label>
              <Input
                id="register-name"
                name="fullName"
                className="auth-input"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                value={formValues.fullName}
                onChange={handleChange}
                aria-invalid={Boolean(errors.fullName)}
                aria-describedby={
                  errors.fullName ? 'register-name-error' : undefined
                }
              />
              {errors.fullName && (
                <p id="register-name-error" className="auth-error" role="alert">
                  {errors.fullName}
                </p>
              )}
            </div>

            <div className="auth-field">
              <Label htmlFor="register-email">Email address</Label>
              <Input
                id="register-email"
                name="email"
                className="auth-input"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                required
                value={formValues.email}
                onChange={handleChange}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? 'register-email-error' : undefined
                }
              />
              {errors.email && (
                <p id="register-email-error" className="auth-error" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="auth-field">
              <Label htmlFor="register-password">Password</Label>

              <div className="auth-input-wrapper">
                <Input
                  id="register-password"
                  name="password"
                  className="auth-input auth-input-password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Create a password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={formValues.password}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password ? 'register-password-error' : undefined
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
                <p
                  id="register-password-error"
                  className="auth-error"
                  role="alert"
                >
                  {errors.password}
                </p>
              )}
            </div>

            <div className="auth-field">
              <Label htmlFor="register-confirm-password">
                Confirm password
              </Label>

              <div className="auth-input-wrapper">
                <Input
                  id="register-confirm-password"
                  name="confirmPassword"
                  className="auth-input auth-input-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter your password"
                  autoComplete="new-password"
                  minLength={8}
                  required
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.confirmPassword)}
                  aria-describedby={
                    errors.confirmPassword
                      ? 'register-confirm-password-error'
                      : undefined
                  }
                />

                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  aria-label={
                    showConfirmPassword ? 'Hide password' : 'Show password'
                  }
                >
                  {showConfirmPassword
                    ? <EyeOff size={18} />
                    : <Eye size={18} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p
                  id="register-confirm-password-error"
                  className="auth-error"
                  role="alert"
                >
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="auth-submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              {isSubmitting ? 'Checking…' : 'Create Account'}
            </Button>
          </form>

          <div className="auth-switch">
            Already have an account?
            <Link to="/login">Sign in</Link>
          </div>

          <div className="auth-terms">
            By creating an account, you agree to our Terms of Service
            and Privacy Policy.
          </div>
        </section>

      </div>
    </main>
  )
}

export default RegisterPage