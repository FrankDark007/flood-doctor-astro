import { useState, type FormEvent } from 'react'

const WORKER_URL = 'https://flood-doctor-forms.frankd-fd.workers.dev'

interface Props {
  city?: string
}

export default function RequestForm({ city }: Props) {
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
      city: city || '',
    }

    try {
      const res = await fetch(`${WORKER_URL}/api/request`, {
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
      <div className="flex flex-col items-center justify-center py-16 text-center lg:col-span-3">
        <div className="flex size-16 items-center justify-center rounded-full bg-green-500/10">
          <svg viewBox="0 0 20 20" fill="currentColor" className="size-8 text-green-400">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">Request Submitted!</h3>
        <p className="mt-2 text-sm text-gray-400">We'll contact you within 30 minutes during business hours.</p>
        <p className="mt-1 text-sm text-gray-400">For emergencies, call <a href="tel:+17032851100" className="text-indigo-400 hover:text-indigo-300">(703) 285-1100</a> now.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="lg:col-span-3">
      {status === 'error' && (
        <div className="mb-6 rounded-md bg-red-500/10 p-4 text-sm text-red-400 ring-1 ring-red-500/20">
          {errorMsg}
        </div>
      )}
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <div>
          <label htmlFor="req-first-name" className="block text-sm/6 font-semibold text-white">
            First name
          </label>
          <div className="mt-2.5">
            <input
              id="req-first-name"
              name="first-name"
              type="text"
              required
              autoComplete="given-name"
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="req-last-name" className="block text-sm/6 font-semibold text-white">
            Last name
          </label>
          <div className="mt-2.5">
            <input
              id="req-last-name"
              name="last-name"
              type="text"
              required
              autoComplete="family-name"
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="req-email" className="block text-sm/6 font-semibold text-white">
            Email
          </label>
          <div className="mt-2.5">
            <input
              id="req-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div>
          <label htmlFor="req-phone" className="block text-sm/6 font-semibold text-white">
            Phone number
          </label>
          <div className="mt-2.5">
            <input
              id="req-phone"
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="req-address" className="block text-sm/6 font-semibold text-white">
            Property address
          </label>
          <div className="mt-2.5">
            <input
              id="req-address"
              name="address"
              type="text"
              required
              autoComplete="street-address"
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="req-service-type" className="block text-sm/6 font-semibold text-white">
            Type of service needed
          </label>
          <div className="mt-2.5">
            <select
              id="req-service-type"
              name="service-type"
              required
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            >
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
          <label className="block text-sm/6 font-semibold text-white">
            Urgency level
          </label>
          <div className="mt-2.5 flex gap-x-6">
            <label className="flex items-center gap-x-2 text-sm text-gray-300">
              <input
                type="radio"
                name="urgency"
                value="emergency"
                required
                className="size-4 border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500"
              />
              Emergency (now)
            </label>
            <label className="flex items-center gap-x-2 text-sm text-gray-300">
              <input
                type="radio"
                name="urgency"
                value="urgent"
                className="size-4 border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500"
              />
              Urgent (24-48 hrs)
            </label>
            <label className="flex items-center gap-x-2 text-sm text-gray-300">
              <input
                type="radio"
                name="urgency"
                value="routine"
                className="size-4 border-white/10 bg-white/5 text-indigo-500 focus:ring-indigo-500"
              />
              Routine estimate
            </label>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="req-message" className="block text-sm/6 font-semibold text-white">
            Describe the damage
          </label>
          <div className="mt-2.5">
            <textarea
              id="req-message"
              name="message"
              rows={4}
              placeholder="Please describe the damage, when it occurred, and any steps you've already taken..."
              className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500"
            />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <button
          type="submit"
          disabled={status === 'sending'}
          className="block w-full rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 disabled:opacity-50"
        >
          {status === 'sending' ? 'Submitting...' : 'Submit Request'}
        </button>
      </div>
    </form>
  )
}
