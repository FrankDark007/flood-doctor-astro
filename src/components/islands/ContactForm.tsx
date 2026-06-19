import { useState, type FormEvent } from 'react'
import { FORM_WORKER_URL } from '../../config/forms'

const CONTACT_CONSENT_TEXT = 'I agree to be contacted by Flood Doctor by phone, text, or email about this message. Consent is not required to purchase services.'
const labelClass = 'fd-label'
const inputClass = 'fd-input'
const choiceClass = 'fd-choice mt-1 shrink-0 rounded'

interface Props {
  city?: string
}

export default function ContactForm({ city }: Props) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')

    const form = e.currentTarget
    const data = {
      'first-name': (form.elements.namedItem('first-name') as HTMLInputElement).value,
      'last-name': (form.elements.namedItem('last-name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      'phone-number': (form.elements.namedItem('phone-number') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      consent: (form.elements.namedItem('consent') as HTMLInputElement).checked,
      consentText: CONTACT_CONSENT_TEXT,
      consentTimestamp: new Date().toISOString(),
      city: city || '',
    }

    try {
      const res = await fetch(`${FORM_WORKER_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (result.success) {
        setStatus('sent')
      } else {
        setStatus('error')
        setErrorMsg(result.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please check your connection and try again.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="fd-form-card mx-6 my-12 flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8 lg:my-24" aria-live="polite">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-400/[0.12] ring-1 ring-green-300/25">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-8 text-green-300" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-black tracking-tight text-white">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">Thanks. We will review your message and follow up with next steps.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
      <div className="fd-form-card mx-auto max-w-xl p-6 sm:p-8 lg:mr-0 lg:max-w-lg">
        <div className="mb-8">
          <p className="fd-badge fd-badge-emergency">Contact dispatch</p>
          <h2 className="mt-4 text-2xl font-black tracking-tight text-white">Tell us what happened</h2>
          <p className="mt-2 text-sm leading-6 text-slate-300">Share the basics and the team will route your message.</p>
        </div>

        {status === 'error' && (
          <div className="fd-status mb-6 border-red-400/25 bg-red-500/10 text-red-100" role="alert">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className={labelClass}>First name</label>
            <div className="mt-2">
              <input id="first-name" name="first-name" type="text" required autoComplete="given-name" className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className={labelClass}>Last name</label>
            <div className="mt-2">
              <input id="last-name" name="last-name" type="text" required autoComplete="family-name" className={inputClass} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className={labelClass}>Email</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className={labelClass}>Phone number</label>
            <div className="mt-2">
              <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" className={inputClass} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className={labelClass}>Message</label>
            <div className="mt-2">
              <textarea id="message" name="message" rows={4} required placeholder="How can we help?" className={inputClass} />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className="flex gap-x-3 text-sm leading-6 text-slate-300">
              <input id="contact-consent" name="consent" type="checkbox" required className={choiceClass} />
              <span>{CONTACT_CONSENT_TEXT}</span>
            </label>
          </div>
        </div>

        <div className="mt-8">
          <button type="submit" disabled={status === 'sending'} className="fd-btn fd-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  )
}
