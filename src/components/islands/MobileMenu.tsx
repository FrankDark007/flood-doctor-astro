import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/20/solid'
import { toTelHref } from '../../utils/phone'

interface NavItem {
  name: string
  href: string
}

interface Props {
  navigation: NavItem[]
  secondaryNav: NavItem[]
  phone: string
  cityName: string
}

export default function MobileMenu({ navigation, secondaryNav, phone, cityName }: Props) {
  const [open, setOpen] = useState(false)
  const navLabel = (item: NavItem) => item.href === '/request' ? 'Request Service' : item.name
  const navHref = (item: NavItem) => item.href === '/request' ? '/request/' : item.href

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="relative z-30 -m-2.5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/[0.15] bg-white/[0.10] p-2.5 text-white shadow-sm transition hover:bg-white/[0.16] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-[#06172e] lg:hidden"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="size-6" />
      </button>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel
          id="mobile-navigation"
          className="fixed inset-y-0 right-0 z-50 flex w-full flex-col justify-between overflow-y-auto border-l border-white/10 bg-[#06172e] text-white shadow-2xl sm:max-w-sm"
        >
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between gap-4">
              <a
                href="/"
                aria-label={`Flood Doctor ${cityName}`}
                className="-m-1.5 inline-flex min-w-0 items-center gap-x-2.5 rounded-xl p-1.5 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-[#06172e]"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-white shadow-lg shadow-slate-950/20">
                  <img alt="" src="/graphics/flood-doctor-mark.svg" className="h-8 w-8" />
                </span>
                <span className="min-w-0 text-lg font-black tracking-tight text-white">
                  Flood <span className="text-sky-300">Doctor</span>
                  <span className="ml-2 hidden border-l-2 border-orange-400 pl-2 text-sm font-extrabold text-slate-300 min-[430px]:inline">
                    {cityName}
                  </span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2.5 rounded-full border border-white/[0.15] bg-white/[0.10] p-2.5 text-slate-100 transition hover:bg-white/[0.16] focus:outline-none focus:ring-2 focus:ring-sky-300 focus:ring-offset-2 focus:ring-offset-[#06172e]"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" />
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-orange-300/20 bg-orange-400/10 p-4">
              <DialogTitle className="text-sm font-black uppercase tracking-[0.16em] text-orange-200">
                Emergency intake
              </DialogTitle>
              <p className="mt-1 text-sm text-slate-200">Call now or request service so we can confirm the next step.</p>
            </div>

            <nav className="mt-6" aria-label="Mobile navigation links">
              <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
                <div className="p-2">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={navHref(item)}
                      className="block rounded-xl px-4 py-3 text-base font-bold text-slate-100 transition hover:bg-white/[0.10] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
                    >
                      {navLabel(item)}
                    </a>
                  ))}
                </div>
                <div className="p-2">
                  {secondaryNav.map((item) => (
                    <a
                      key={item.name}
                      href={navHref(item)}
                      className="block rounded-xl px-4 py-3 text-base font-bold text-slate-100 transition hover:bg-white/[0.10] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300"
                    >
                      {navLabel(item)}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <div className="sticky bottom-0 space-y-3 border-t border-white/10 bg-[#08203f]/95 p-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] backdrop-blur sm:p-6">
            <a
              href={toTelHref(phone)}
              aria-label={`Call Flood Doctor at ${phone}`}
              className="fd-btn fd-btn-primary flex w-full"
            >
              <PhoneIcon className="size-5" />
              Call Now {phone}
            </a>
            <a href="/request/" className="fd-btn fd-btn-secondary flex w-full">
              Request Service
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}
