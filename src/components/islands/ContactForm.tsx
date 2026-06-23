import { useState, type FormEvent } from 'react'
import { FORM_WORKER_URL } from '../../config/forms'

const CONTACT_CONSENT_TEXT = 'I agree to be contacted by Flood Doctor by phone, text, or email about this message. Consent is not required to purchase services.'

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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-8 text-green-400">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">Message Sent!</h3>
        <p className="mt-2 text-sm text-gray-400">We'll get back to you within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
      <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
        {status === 'error' && (
          <div className="mb-6 rounded-md bg-red-500/10 p-4 text-sm text-red-400 ring-1 ring-red-500/20">
            {errorMsg}
          </div>
        )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm/6 font-semibold text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                required
                autoComplete="family-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-white">
              Phone number
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="flex gap-x-3 text-sm text-gray-300">
              <input
                id="contact-consent"
                name="consent"
                type="checkbox"
                required
                className="mt-1 size-4 rounded border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500"
              />
              <span>{CONTACT_CONSENT_TEXT}</span>
            </label>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="How can we help?"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:opacity-50"
          >
            {status === 'sending' ? 'Sending...' : 'Send message'}
          </button>
        </div>
      </div>
    </form>
  )
}
