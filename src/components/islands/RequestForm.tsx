import { useState, type FormEvent } from 'react'
import { FORM_WORKER_URL } from '../../config/forms'
import { toTelHref } from '../../utils/phone'

const REQUEST_CONSENT_TEXT = 'I agree to be contacted by Flood Doctor by phone, text, or email about this service request. Consent is not required to purchase services.'
const labelClass = 'fd-label'
const inputClass = 'fd-input'
const choiceClass = 'fd-choice shrink-0'

interface Props {
  city?: string
  phone?: string
}

export default function RequestForm({ city, phone = '(877) 497-0007' }: Props) {
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
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      address: (form.elements.namedItem('address') as HTMLInputElement).value,
      'service-type': (form.elements.namedItem('service-type') as HTMLSelectElement).value,
      urgency: (form.querySelector('input[name="urgency"]:checked') as HTMLInputElement)?.value || '',
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
      consent: (form.elements.namedItem('consent') as HTMLInputElement).checked,
      consentText: REQUEST_CONSENT_TEXT,
      consentTimestamp: new Date().toISOString(),
      city: city || '',
    }

    try {
      const res = await fetch(`${FORM_WORKER_URL}/api/request`, {
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
      <div className="fd-form-card flex flex-col items-center justify-center px-6 py-16 text-center lg:col-span-3" aria-live="polite">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-400/[0.12] ring-1 ring-green-300/25">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-8 text-green-300" aria-hidden="true">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-black tracking-tight text-white">Request submitted</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">Thanks. We will review your request and contact you with next steps.</p>
        <p className="mt-3 text-sm leading-6 text-slate-300">
          For emergencies, call <a href={toTelHref(phone)} className="font-bold text-orange-200 hover:text-white focus:rounded">{phone}</a> now.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="fd-form-card p-6 sm:p-8 lg:col-span-3">
      <div className="mb-8">
        <p className="fd-badge fd-badge-emergency">Emergency request</p>
        <h2 className="mt-4 text-2xl font-black tracking-tight text-white">Property response details</h2>
        <p className="mt-2 text-sm leading-6 text-slate-300">Use this form for water, mold, storm, sewage, fire, smoke, and commercial restoration requests.</p>
      </div>

      {status === 'error' && (
        <div className="fd-status mb-6 border-red-400/25 bg-red-500/10 text-red-100" role="alert">
          {errorMsg}
        </div>
      )}

      <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
        <div>
          <label htmlFor="req-first-name" className={labelClass}>First name</label>
          <div className="mt-2">
            <input id="req-first-name" name="first-name" type="text" required autoComplete="given-name" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="req-last-name" className={labelClass}>Last name</label>
          <div className="mt-2">
            <input id="req-last-name" name="last-name" type="text" required autoComplete="family-name" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="req-email" className={labelClass}>Email</label>
          <div className="mt-2">
            <input id="req-email" name="email" type="email" required autoComplete="email" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="req-phone" className={labelClass}>Phone number</label>
          <div className="mt-2">
            <input id="req-phone" name="phone" type="tel" required autoComplete="tel" className={inputClass} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="req-address" className={labelClass}>Property address</label>
          <div className="mt-2">
            <input id="req-address" name="address" type="text" required autoComplete="street-address" className={inputClass} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="req-service-type" className={labelClass}>Type of service needed</label>
          <div className="mt-2">
            <select id="req-service-type" name="service-type" required className={inputClass}>
              <option value="">Select a service...</option>
              <option value="water-damage">Water Damage Restoration</option>
              <option value="mold">Mold Remediation</option>
              <option value="flood">Flood Cleanup</option>
              <option value="storm">Storm Damage</option>
              <option value="sewage">Sewage Cleanup</option>
              <option value="fire-smoke">Fire &amp; Smoke Damage</option>
              <option value="commercial">Commercial Restoration</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        <div className="sm:col-span-2">
          <span className={labelClass}>Urgency level</span>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <label className="flex items-center gap-x-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-slate-200">
              <input type="radio" name="urgency" value="emergency" required className={choiceClass} />
              Emergency (now)
            </label>
            <label className="flex items-center gap-x-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-slate-200">
              <input type="radio" name="urgency" value="urgent" className={choiceClass} />
              Urgent (24-48 hrs)
            </label>
            <label className="flex items-center gap-x-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-semibold text-slate-200">
              <input type="radio" name="urgency" value="routine" className={choiceClass} />
              Scheduled assessment
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="req-message" className={labelClass}>Describe the damage</label>
          <div className="mt-2">
            <textarea id="req-message" name="message" rows={4} placeholder="Please describe the damage, when it occurred, and any steps you've already taken..." className={inputClass} />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label className="flex gap-x-3 text-sm leading-6 text-slate-300">
            <input id="req-consent" name="consent" type="checkbox" required className={`${choiceClass} mt-1 rounded`} />
            <span>{REQUEST_CONSENT_TEXT}</span>
          </label>
        </div>
      </div>

      <div className="mt-8">
        <button type="submit" disabled={status === 'sending'} className="fd-btn fd-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
          {status === 'sending' ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  )
}
