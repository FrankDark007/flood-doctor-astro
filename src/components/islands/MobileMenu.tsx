import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
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

  return (
    <>
      {/* Mobile menu button — visible only on small screens */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        className="relative z-30 -m-2.5 inline-flex min-h-11 min-w-11 items-center justify-center rounded-md p-2.5 text-slate-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 lg:hidden"
      >
        <span className="sr-only">Open main menu</span>
        <Bars3Icon className="size-6" />
      </button>

      <Dialog open={open} onClose={setOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel
          id="mobile-navigation"
          className="fixed inset-y-0 right-0 z-50 flex w-full flex-col justify-between overflow-y-auto bg-white dark:bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:sm:ring-white/10"
        >
          <div className="p-6">
            <div className="flex items-center justify-between">
              <a
                href="/"
                aria-label={`Flood Doctor ${cityName}`}
                className="-m-1.5 inline-flex items-center gap-x-2.5 rounded-lg p-1.5 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              >
                <span className="sr-only">Flood Doctor {cityName}</span>
                <img
                  alt=""
                  src="/graphics/flood-doctor-mark.svg"
                  className="h-9 w-9"
                />
                <span className="text-lg font-black tracking-tight text-slate-950 dark:text-white">
                  Flood <span className="text-blue-600">Doctor</span>
                  <span className="ml-2 hidden border-l-2 border-orange-500 pl-2 text-sm font-bold text-slate-500 dark:text-slate-300 min-[430px]:inline">
                    {cityName}
                  </span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-slate-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:text-slate-300 dark:focus:ring-offset-gray-900"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-200 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white dark:hover:bg-white/5"
                    >
                      {navLabel(item)}
                    </a>
                  ))}
                </div>
                <div className="space-y-2 py-6">
                  {secondaryNav.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-white dark:hover:bg-white/5"
                    >
                      {navLabel(item)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="sticky bottom-0 space-y-3 bg-gray-50 p-6 dark:bg-gray-800/50">
            <a
              href={toTelHref(phone)}
              aria-label={`Call Now ${phone}`}
              className="flex items-center justify-center gap-x-2.5 rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
            >
              <PhoneIcon className="size-5" />
              Call Now
            </a>
            <a
              href="/request"
              className="flex items-center justify-center rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-900 shadow-xs hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 dark:border-white/15 dark:bg-gray-900 dark:text-white dark:hover:bg-white/5 dark:focus:ring-offset-gray-800"
            >
              Request Emergency Service
            </a>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  )
}
