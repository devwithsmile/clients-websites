import { Link } from 'react-router-dom'
import type { ServiceCardData } from '../data/services'
import { ICON_MAP, ArrowRight, type IconKey } from './icons'

export function ServiceCard({ service }: { service: ServiceCardData }) {
  const Icon = ICON_MAP[service.iconKey as IconKey] ?? ICON_MAP.shield
  return (
    <Link
      to="/services"
      data-reveal
      className="no-underline bg-white border border-border rounded-[18px] p-[26px] flex flex-col min-h-[212px] transition-all duration-200 hover:-translate-y-[6px] hover:shadow-[0_22px_48px_rgba(11,49,75,0.12)] hover:border-[#CFE0F2]"
    >
      <span className="w-12 h-12 rounded-[13px] bg-mist-2 grid place-items-center">
        <Icon width={22} height={22} stroke="#1474D4" />
      </span>
      <h3 className="font-display text-[18px] font-bold text-ink mt-[18px]">
        {service.title}
      </h3>
      <p className="mt-[9px] text-[14px] leading-[1.6] text-muted-soft">
        {service.blurb}
      </p>
      <span className="mt-auto pt-[18px] inline-flex items-center gap-[7px] font-semibold text-[13.5px] text-blue">
        Learn more <ArrowRight width={15} height={15} stroke="#1474D4" />
      </span>
    </Link>
  )
}
