import type { GalleryCase } from '../data/gallery'

interface BeforeAfterPairProps {
  case: GalleryCase
}

export function BeforeAfterPair({ case: c }: BeforeAfterPairProps) {
  return (
    <article
      data-reveal
      className="bg-white border border-border rounded-[20px] overflow-hidden shadow-[0_10px_30px_rgba(11,49,75,0.06)]"
    >
      <div className="grid grid-cols-1 max-[560px]:grid-cols-1 sm:grid-cols-2 gap-[2px] bg-[#E6EDF4]">
        <div className="relative">
          <div className="img-slot w-full h-[200px] sm:h-[180px]">
            <img src={c.before.src} alt={c.before.alt} />
          </div>
          <span className="absolute left-[10px] top-[10px] bg-[rgba(11,34,48,0.82)] text-white rounded-full px-[10px] py-[3px] text-[11px] font-semibold tracking-[0.04em]">
            BEFORE
          </span>
        </div>
        <div className="relative">
          <div className="img-slot w-full h-[200px] sm:h-[180px]">
            <img src={c.after.src} alt={c.after.alt} />
          </div>
          <span className="absolute left-[10px] top-[10px] bg-teal text-white rounded-full px-[10px] py-[3px] text-[11px] font-semibold tracking-[0.04em]">
            AFTER
          </span>
        </div>
      </div>
      <div className="px-5 py-[18px]">
        <span className="inline-block bg-mist-2 text-blue-dark rounded-full px-[11px] py-[4px] text-[12px] font-semibold">
          {c.tag}
        </span>
        <h3 className="font-display text-[17px] font-bold text-ink mt-3">
          {c.caption}
        </h3>
      </div>
    </article>
  )
}
