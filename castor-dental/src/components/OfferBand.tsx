import { Link } from 'react-router-dom'
import { SITE } from '../data/site'

interface OfferBandProps {
  badge?: string
  heading?: string
  blurb?: string
}

export function OfferBand({
  badge = 'NEW PATIENT OFFER',
  heading = 'Comprehensive exam + X-rays for $169',
  blurb = 'A savings of over $200 for new patients. Call our office to book your first visit on Castor Avenue.',
}: OfferBandProps) {
  return (
    <div
      data-reveal
      className="relative overflow-hidden grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-8 items-center bg-[linear-gradient(130deg,#0B5FB0,#1474D4_55%,#11B5A6)] rounded-3xl p-8 md:p-[48px_52px] shadow-[0_26px_60px_rgba(20,116,212,0.3)]"
    >
      <div
        aria-hidden
        className="absolute w-[360px] h-[360px] rounded-full bg-white/10 -top-[140px] right-[60px]"
      />
      <div className="relative">
        <span className="inline-block bg-white/[0.16] text-white rounded-full px-[14px] py-[6px] text-[12.5px] font-semibold tracking-[0.04em]">
          {badge}
        </span>
        <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.12] tracking-[-0.02em] text-white mt-4">
          {heading}
        </h2>
        <p className="mt-3 text-[16px] md:text-[17px] leading-[1.6] text-white/85 max-w-[460px]">
          {blurb}
        </p>
      </div>
      <div className="relative flex flex-col gap-3">
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-blue-dark no-underline font-bold text-[16px] px-6 py-4 rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.18)] hover:-translate-y-[2px] transition-transform"
        >
          Claim the offer
        </Link>
        <a
          href={`tel:${SITE.phoneTel}`}
          className="inline-flex items-center justify-center gap-2 bg-white/[0.12] text-white no-underline font-semibold text-[16px] px-6 py-4 rounded-full border border-white/30"
        >
          Call {SITE.phone}
        </a>
      </div>
    </div>
  )
}
