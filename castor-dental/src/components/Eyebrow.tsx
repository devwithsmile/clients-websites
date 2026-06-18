import type { ReactNode } from 'react'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-blue">
      {children}
    </span>
  )
}
