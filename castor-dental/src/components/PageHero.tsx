import type { ReactNode } from 'react'
import { Container } from './Container'
import { Eyebrow } from './Eyebrow'

interface PageHeroProps {
  eyebrow: string
  title: ReactNode
  lede?: ReactNode
}

export function PageHero({ eyebrow, title, lede }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F4F9FE,#FFFFFF)] border-b border-[#EAF1F8]">
      <div
        aria-hidden
        className="absolute w-[480px] h-[480px] rounded-full top-[-180px] right-[-60px] anim-floatA pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(20,116,212,0.14), transparent 70%)',
        }}
      />
      <Container className="relative py-[64px] md:py-[70px] text-center">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="font-display font-bold text-[33px] sm:text-[42px] md:text-[54px] leading-[1.06] tracking-[-0.025em] text-ink mt-[14px] mx-auto max-w-[760px]">
          {title}
        </h1>
        {lede && (
          <p className="mt-5 text-[16.5px] md:text-[18.5px] leading-[1.65] text-muted mx-auto max-w-[660px]">
            {lede}
          </p>
        )}
      </Container>
    </section>
  )
}
