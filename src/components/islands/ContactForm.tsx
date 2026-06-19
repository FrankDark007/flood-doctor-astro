import { useState, type FormEvent } from 'react'
import { FORM_WORKER_URL } from '../../config/forms'
import { toTelHref } from '../../utils/phone'

const CONTACT_CONSENT_TEXT = 'I agree to be contacted by Flood Doctor by phone, text, or email about this message. Consent is not required to purchase services.'
const labelClass = 'fd-label'
const inputClass = 'fd-input'
const choiceClass = 'fd-choice mt-1 shrink-0 rounded'
const helperClass = 'mt-1 text-xs leading-5 text-slate-400'
const groupClass = 'rounded-2xl border border-white/10 bg-white/[0.035] p-4 sm:p-5'

interface Props {
  city?: string
  phone?: string
}

export default function ContactForm({ city, phone = '(877) 497-0007' }: Props) {
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
      <div className="fd-form-card flex flex-col items-center justify-center px-6 py-16 text-center sm:px-8" aria-live="polite">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-400/[0.12] ring-1 ring-green-300/25">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-8 text-green-300" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-black tracking-tight text-white">Message sent</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">Thanks. Your message was sent for review and routing.</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          If this becomes active water damage, call <a href={toTelHref(phone)} className="font-bold text-orange-200 hover:text-white focus:rounded">{phone}</a>.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="fd-form-card p-5 sm:p-8">
      <div className="mb-6 border-b border-white/10 pb-6">
        <p className="fd-badge fd-badge-emergency">Contact routing</p>
        <h2 className="mt-4 text-2xl font-black tracking-tight text-white">Send a written message</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">Best for scheduling, documentation, billing, and non-immediate questions. For active water or safety concerns, call <a href={toTelHref(phone)} className="font-bold text-orange-200 hover:text-white focus:rounded">{phone}</a>.</p>
      </div>

      {status === 'error' && (
        <div className="fd-status mb-6 border-red-400/25 bg-red-500/10 text-red-100" role="alert">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 gap-5">
        <fieldset className={groupClass}>
          <legend className="px-1 text-sm font-black uppercase tracking-[0.14em] text-orange-200">Your contact details</legend>
          <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
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
              <p className={helperClass}>Required so the team can respond in writing.</p>
              <div className="mt-2">
                <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className={labelClass}>Phone number</label>
              <p className={helperClass}>Optional, but helpful if the message needs faster clarification.</p>
              <div className="mt-2">
                <input id="phone-number" name="phone-number" type="tel" autoComplete="tel" className={inputClass} />
              </div>
            </div>
          </div>
        </fieldset>

        <fieldset className={groupClass}>
          <legend className="px-1 text-sm font-black uppercase tracking-[0.14em] text-orange-200">How can we help?</legend>
          <p className="mt-1 text-sm leading-6 text-slate-300">Include the property city, what you need, and whether this is tied to an existing service request.</p>
          <div className="mt-4">
            <label htmlFor="message" className={labelClass}>Message</label>
            <p className={helperClass}>For new active damage, the request form or a phone call is the better path.</p>
            <div className="mt-2">
              <textarea id="message" name="message" rows={5} required placeholder="Example: I need documentation from a recent service request, or I have a scheduling question for a property in Ashburn..." className={inputClass} />
            </div>
          </div>
        </fieldset>

        <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-4 sm:p-5">
          <label className="flex gap-x-3 text-sm leading-6 text-slate-300">
            <input id="contact-consent" name="consent" type="checkbox" required className={choiceClass} />
            <span>{CONTACT_CONSENT_TEXT}</span>
          </label>
        </div>
      </div>

      <div className="mt-6">
        <button type="submit" disabled={status === 'sending'} className="fd-btn fd-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'sending' ? 'Sending...' : 'Send message'}
        </button>
        <p className="mt-3 text-center text-xs leading-5 text-slate-400">Use the phone instead if conditions are active or safety is uncertain.</p>
      </div>
    </form>
  )
}
