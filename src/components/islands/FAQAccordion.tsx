import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'

interface FAQ {
  question: string
  answer: string
}

interface Props {
  faqs: FAQ[]
}

export default function FAQAccordion({ faqs }: Props) {
  return (
    <dl className="mt-16 divide-y divide-gray-200 dark:divide-white/10">
      {faqs.map((faq) => (
        <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
          <dt>
            <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 dark:text-white">
              <span className="text-base/7 font-semibold">{faq.question}</span>
              <span className="ml-6 flex h-7 items-center">
                <svg className="size-6 group-data-[open]:hidden" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                </svg>
                <svg className="size-6 group-[&:not([data-open])]:hidden" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
                </svg>
              </span>
            </DisclosureButton>
          </dt>
          <DisclosurePanel as="dd" className="mt-2 pr-12">
            <p className="text-base/7 text-gray-600 dark:text-gray-400">{faq.answer}</p>
          </DisclosurePanel>
        </Disclosure>
      ))}
    </dl>
  )
}
