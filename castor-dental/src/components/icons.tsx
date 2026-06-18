import type { SVGProps } from 'react'

const base = {
  fill: 'none',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

type IconProps = SVGProps<SVGSVGElement>

export function PhoneIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.74a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function CalendarIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M8 2v4M16 2v4M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  )
}

export function CheckIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} strokeWidth={2.4} {...p}>
      <path d="M20 6 9 17l-5-5" />
    </svg>
  )
}

export function ArrowRight(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  )
}

export function MailIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

export function MapPinIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function ShieldIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export function HeartIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z" />
    </svg>
  )
}

export function CardIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20M6 15h4" />
    </svg>
  )
}

export function SmileIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" />
    </svg>
  )
}

export function BoltIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M13 2 3 14h8l-1 8 11-14h-8z" />
    </svg>
  )
}

export function ToothIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 2a5 5 0 0 0-5 5c0 2 1 3 1 5l1 9a2 2 0 0 0 4 0l1-9c0-2 1-3 1-5a5 5 0 0 0-5-5z" />
    </svg>
  )
}

export function MoonIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36A5.39 5.39 0 0 1 12 3z" />
    </svg>
  )
}

export function UsersIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

export function ClockIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

export function ChatIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}

export function PlusIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} className={'plus-icon ' + (p.className ?? '')} {...p}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function ArrowExternal(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}

export function ToothLogo(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 5.5c-2-2.2-5.5-2-7 .5-1.4 2.4-.4 5.2 1 7.6.8 1.4 1.6 3 2 4.6.3 1.2 1.8 1.2 2.1 0 .4-1.6 1.2-3.2 2-4.6 1.4-2.4 2.4-5.2 1-7.6-1.5-2.5-5-2.7-7-.5" />
    </svg>
  )
}

export function BurgerIcon(p: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...p}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export const ICON_MAP = {
  shield: ShieldIcon,
  heart: HeartIcon,
  tooth: ToothIcon,
  tooth2: ToothIcon,
  bolt: BoltIcon,
  moon: MoonIcon,
  users: UsersIcon,
  smile: SmileIcon,
  card: CardIcon,
}

export type IconKey = keyof typeof ICON_MAP
