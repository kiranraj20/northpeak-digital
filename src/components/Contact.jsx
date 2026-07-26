import { useState } from 'react'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// one rule per required field — returns an error string, or '' when valid
const rules = {
  name: (v) => (v.trim() ? '' : 'Please enter your name.'),
  email: (v) =>
    !v.trim()
      ? 'Please enter your email.'
      : emailPattern.test(v.trim())
        ? ''
        : 'Enter a valid email address.',
  message: (v) =>
    v.trim().length >= 10 ? '' : 'Tell us a little more — at least 10 characters.',
}

function Field({ id, label, type = 'text', value, onChange, error, autoComplete }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

const EMPTY = { name: '', email: '', company: '', message: '' }

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }))
    // re-validate a field only once it already has an error showing
    if (errors[field]) {
      setErrors((e) => ({ ...e, [field]: rules[field](value) || undefined }))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    setSent(false)

    const found = {}
    for (const field of Object.keys(rules)) {
      const message = rules[field](values[field])
      if (message) found[field] = message
    }
    setErrors(found)

    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    // Static site — acknowledge and reset.
    setValues(EMPTY)
    setSent(true)
  }

  return (
    <section className="section section-alt" id="contact" aria-labelledby="contact-title">
      <div className="container contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">Let's talk</p>
          <h2 id="contact-title">Tell us about your project</h2>
          <p className="section-lead">
            Fill in a few details and we'll get back within one business day.
          </p>
          <ul className="contact-points" role="list">
            <li>No sales scripts — you talk to the people who build.</li>
            <li>A clear scope and quote within 48 hours.</li>
          </ul>
        </div>

        <form className="contact-form card" onSubmit={handleSubmit} noValidate>
          <Field
            id="name"
            label="Name"
            value={values.name}
            onChange={update}
            error={errors.name}
            autoComplete="name"
          />
          <Field
            id="email"
            label="Email"
            type="email"
            value={values.email}
            onChange={update}
            error={errors.email}
            autoComplete="email"
          />
          <div className="field">
            <label htmlFor="company">
              Company <span className="optional">(optional)</span>
            </label>
            <input
              type="text"
              id="company"
              name="company"
              autoComplete="organization"
              value={values.company}
              onChange={(e) => update('company', e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Project details</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={values.message}
              onChange={(e) => update('message', e.target.value)}
              aria-invalid={errors.message ? 'true' : undefined}
              aria-describedby={errors.message ? 'message-error' : undefined}
            ></textarea>
            {errors.message && (
              <p className="field-error" id="message-error">
                {errors.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Send message
          </button>
          {sent && (
            <p className="form-success" role="status">
              Thanks — your message is on its way. We'll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
