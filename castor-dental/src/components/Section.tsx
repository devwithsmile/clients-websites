import type { HTMLAttributes, ReactNode } from 'react'

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  tone?: 'default' | 'mist'
}

export function Section({
  children,
  tone = 'default',
  className = '',
  ...rest
}: SectionProps) {
  const toneClass =
    tone === 'mist'
      ? 'bg-mist border-y border-[#EAF1F8]'
      : ''
  return (
    <section
      {...rest}
      className={`${toneClass} py-[54px] md:py-[78px] ${className}`}
    >
      {children}
    </section>
  )
}
