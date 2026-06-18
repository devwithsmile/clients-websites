import { Link } from 'react-router-dom'
import { ArrowRight } from './icons'

interface DoctorCardProps {
  name: string
  credential: string
  image: string
  alt: string
  blurb: string
}

export function DoctorCard({ name, credential, image, alt, blurb }: DoctorCardProps) {
  return (
    <article
      data-reveal
      className="grid grid-cols-[120px_1fr] sm:grid-cols-[160px_1fr] gap-4 sm:gap-[22px] items-center bg-white border border-border rounded-[20px] p-5 sm:p-6 shadow-[0_10px_30px_rgba(11,49,75,0.06)]"
    >
      <div className="img-slot w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full shrink-0">
        <img src={image} alt={alt} />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <h3 className="font-display text-[20px] font-bold text-ink m-0">
          {name}
        </h3>
        <span className="block text-blue text-[13.5px] font-semibold mt-[6px] mb-3">
          {credential}
        </span>
        <p className="m-0 text-[14.5px] leading-[1.6] text-muted-soft">
          {blurb}
        </p>
        <Link
          to="/about"
          className="mt-[14px] inline-flex items-center gap-[7px] font-semibold text-[14px] text-blue no-underline"
        >
          Read bio <ArrowRight width={16} height={16} stroke="#1474D4" />
        </Link>
      </div>
    </article>
  )
}
