import { useEffect, useRef, useState } from 'react'
import { CheckCircle } from '@phosphor-icons/react'
import { contact, services } from '../content.js'

const { form } = contact
const interests = [...services.items.map((s) => s.title), ...form.extraInterests]
const empty = { name: '', email: '', phone: '', interest: '', message: '', company: '' }

// Other components can preselect the "interested in" option, e.g. a package card:
//   window.dispatchEvent(new CustomEvent('enquiry:interest', { detail: 'One-on-One Coaching' }))
export const INTEREST_EVENT = 'enquiry:interest'

function mailtoFor(values) {
  const subject = `Enquiry from ${values.name}${values.interest ? ` · ${values.interest}` : ''}`
  const details = [
    `Name: ${values.name}`,
    values.email && `Email: ${values.email}`,
    values.phone && `Phone: ${values.phone}`,
    values.interest && `Interested in: ${values.interest}`,
  ].filter(Boolean)
  const body = [details.join('\n'), values.message.trim()].filter(Boolean).join('\n\n')
  return `${contact.email.href}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

const field =
  'w-full bg-charcoal border border-white/10 rounded-xl px-5 py-4 text-base text-white placeholder:text-white/30 focus:outline-none focus:border-accent transition-colors'
const label = 'block text-xs font-semibold uppercase tracking-widest text-soft-gray mb-2'

export default function EnquiryForm() {
  const [values, setValues] = useState(empty)
  const [status, setStatus] = useState('idle') // idle | sending | sent | fallback | error
  const [error, setError] = useState('')
  const emailRef = useRef(null)

  useEffect(() => {
    const onInterest = (e) => setValues((v) => ({ ...v, interest: e.detail }))
    window.addEventListener(INTEREST_EVENT, onInterest)
    return () => window.removeEventListener(INTEREST_EVENT, onInterest)
  }, [])

  const update = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
    if (error) setError('')
  }

  const submit = async (e) => {
    e.preventDefault()
    if (!values.email.trim() && !values.phone.trim()) {
      setError('Please add an email or phone number so I can reply.')
      emailRef.current?.focus()
      return
    }

    setStatus('sending')
    setError('')
    let response
    try {
      response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
    } catch {
      response = null
    }

    if (response?.ok) {
      setStatus('sent')
      setValues(empty)
      return
    }
    if (response?.status === 400) {
      const data = await response.json().catch(() => ({}))
      setStatus('idle')
      setError(data.error || form.error)
      return
    }
    // Not configured (503), not deployed (404, e.g. local dev) or offline:
    // hand the message to the visitor's email app instead of losing it.
    if (!response || response.status === 503 || response.status === 404) {
      window.location.href = mailtoFor(values)
      setStatus('fallback')
      return
    }
    setStatus('error')
  }

  if (status === 'sent') {
    return (
      <div role="status" className="bg-charcoal border border-accent/40 rounded-2xl p-10 text-center">
        <CheckCircle weight="fill" className="text-5xl text-accent mx-auto mb-4" />
        <p className="text-xl">{form.success}</p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} className="text-left">
      <div className="grid sm:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="enq-name" className={label}>
            Name
          </label>
          <input
            id="enq-name"
            name="name"
            required
            maxLength={100}
            autoComplete="name"
            value={values.name}
            onChange={update}
            className={field}
          />
        </div>
        <div>
          <label htmlFor="enq-interest" className={label}>
            {form.interestLabel}
          </label>
          <select
            id="enq-interest"
            name="interest"
            value={values.interest}
            onChange={update}
            className={`${field} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' fill='%23A1A1AA'%3E%3Cpath d='M213.7 101.7l-80 80a8 8 0 0 1-11.4 0l-80-80a8 8 0 0 1 11.4-11.4L128 164.7l74.3-74.4a8 8 0 0 1 11.4 11.4z'/%3E%3C/svg%3E")] bg-[length:18px] bg-[right_1.25rem_center] bg-no-repeat pr-12`}
          >
            <option value="">Choose one…</option>
            {interests.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="enq-email" className={label}>
            Email
          </label>
          <input
            id="enq-email"
            ref={emailRef}
            name="email"
            type="email"
            maxLength={200}
            autoComplete="email"
            value={values.email}
            onChange={update}
            aria-describedby="enq-contact-hint"
            className={field}
          />
        </div>
        <div>
          <label htmlFor="enq-phone" className={label}>
            Phone
          </label>
          <input
            id="enq-phone"
            name="phone"
            type="tel"
            maxLength={40}
            autoComplete="tel"
            value={values.phone}
            onChange={update}
            aria-describedby="enq-contact-hint"
            className={field}
          />
        </div>
        <p id="enq-contact-hint" className="sm:col-span-2 -mt-2 text-xs text-soft-gray">
          {form.contactHint}
        </p>
      </div>

      <label htmlFor="enq-message" className={label}>
        Message
      </label>
      <textarea
        id="enq-message"
        name="message"
        rows={4}
        maxLength={2000}
        placeholder={form.messagePlaceholder}
        value={values.message}
        onChange={update}
        className={`${field} resize-y mb-8`}
      />

      {/* Honeypot for bots: hidden from people and assistive tech */}
      <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
        <label htmlFor="enq-company">Company</label>
        <input
          id="enq-company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={update}
        />
      </div>

      <div aria-live="polite" className="text-center">
        {error && <p className="text-accent mb-6">{error}</p>}
        {status === 'fallback' && <p className="text-soft-gray mb-6">{form.fallback}</p>}
        {status === 'error' && <p className="text-accent mb-6">{form.error}</p>}
      </div>

      <div className="text-center">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-block bg-accent text-white px-16 py-8 rounded-full font-heading text-3xl hover:scale-105 transition-transform duration-300 shadow-[0_0_50px_rgba(255,61,0,0.3)] disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === 'sending' ? form.sendingLabel : form.submitLabel}
        </button>
      </div>
    </form>
  )
}
