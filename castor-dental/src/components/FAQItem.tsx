import type { FAQ } from '../data/faq'
import { PlusIcon } from './icons'

interface FAQItemProps {
  faq: FAQ
  open?: boolean
  divider?: boolean
}

export function FAQItem({ faq, open, divider }: FAQItemProps) {
  return (
    <details open={open} className={divider ? 'border-t border-border-2' : ''}>
      <summary className="list-none cursor-pointer flex items-center justify-between gap-4 px-[22px] py-5 font-display text-[16.5px] font-semibold text-ink">
        <span>{faq.q}</span>
        <PlusIcon width={20} height={20} stroke="#1474D4" className="shrink-0" />
      </summary>
      <p className="m-0 px-[22px] pb-[22px] text-[15px] leading-[1.65] text-muted-soft max-w-[640px]">
        {faq.a}
      </p>
    </details>
  )
}
