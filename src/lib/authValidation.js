const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function getEmailError(email) {
  const normalizedEmail = email.trim()

  if (!normalizedEmail) return 'Email address is required.'
  if (!EMAIL_PATTERN.test(normalizedEmail)) return 'Enter a valid email address.'
  return ''
}

export function getLoginPasswordError(password) {
  return password ? '' : 'Password is required.'
}

export function getFullNameError(fullName) {
  const normalizedName = fullName.trim()

  if (!normalizedName) return 'Full name is required.'
  if (normalizedName.length < 2) return 'Enter at least 2 characters.'
  return ''
}

export function getRegistrationPasswordError(password) {
  if (!password) return 'Password is required.'
  if (password.length < 8) return 'Password must be at least 8 characters.'
  if (!/[A-Z]/.test(password)) {
    return 'Password must include at least one uppercase letter.'
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must include at least one lowercase letter.'
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must include at least one number.'
  }
  return ''
}

export function getConfirmPasswordError(password, confirmPassword) {
  if (!confirmPassword) return 'Please confirm your password.'
  if (password !== confirmPassword) return 'Passwords do not match.'
  return ''
}

export function validateLogin(values) {
  const errors = {}
  const emailError = getEmailError(values.email)
  const passwordError = getLoginPasswordError(values.password)

  if (emailError) errors.email = emailError
  if (passwordError) errors.password = passwordError
  return errors
}

export function validateRegistration(values) {
  const errors = {}
  const fullNameError = getFullNameError(values.fullName)
  const emailError = getEmailError(values.email)
  const passwordError = getRegistrationPasswordError(values.password)
  const confirmPasswordError = getConfirmPasswordError(
    values.password,
    values.confirmPassword,
  )

  if (fullNameError) errors.fullName = fullNameError
  if (emailError) errors.email = emailError
  if (passwordError) errors.password = passwordError
  if (confirmPasswordError) errors.confirmPassword = confirmPasswordError
  return errors
}
