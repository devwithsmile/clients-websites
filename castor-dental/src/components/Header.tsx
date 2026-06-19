import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { NAV, SITE } from '../data/site'
import { PhoneIcon, BurgerIcon } from './icons'

export function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-[200] bg-white/80 backdrop-blur-[18px] border-b border-border">
      <div className="mx-auto w-[min(100%-48px,1240px)] h-[74px] flex items-center justify-between gap-6">
        <Link
          to="/"
          className="flex items-center gap-[11px] no-underline shrink-0"
          aria-label="Castor Dental Care — home"
        >
          <img
            src="/assets/images/castor-tooth.png"
            alt=""
            aria-hidden="true"
            width={56}
            height={43}
            className="h-[38px] w-auto"
          />
          <span className="flex flex-col leading-none">
            <strong className="font-display text-[17px] sm:text-[18px] font-bold text-ink tracking-[-0.01em]">
              Castor Dental Care
            </strong>
            <span className="hidden sm:inline font-body text-[11.5px] font-medium text-night-4 tracking-[0.04em] mt-[3px]">
              NORTHEAST PHILADELPHIA
            </span>
          </span>
        </Link>
        <nav className="hidden nav:flex items-center gap-[2px]">
          {NAV.map((n) => (
            <NavLink
              key={n.key}
              to={n.path}
              end={n.path === '/'}
              className={({ isActive }) =>
                'no-underline font-body text-[14.5px] font-medium px-[14px] py-[9px] rounded-full whitespace-nowrap transition-colors ' +
                (isActive
                  ? 'font-semibold text-blue bg-[rgba(20,116,212,0.09)]'
                  : 'text-ink-soft hover:text-blue')
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="hidden sm:flex items-center gap-2 no-underline font-body font-semibold text-[14.5px] text-ink"
          >
            <PhoneIcon width={16} height={16} stroke="#1474D4" />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="hidden nav:inline-flex items-center gap-2 bg-blue text-white no-underline font-body font-semibold text-[14.5px] px-[18px] py-[11px] rounded-full shadow-[0_8px_20px_rgba(20,116,212,0.28)] hover:-translate-y-[1px] hover:shadow-[0_12px_26px_rgba(20,116,212,0.36)] transition-transform"
          >
            Book a visit
          </Link>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="nav:hidden w-[42px] h-[42px] rounded-[11px] border border-[#E0E8F0] bg-white grid place-items-center cursor-pointer transition-colors hover:bg-mist-2"
          >
            <BurgerIcon width={20} height={20} stroke="#0E2A3D" />
          </button>
        </div>
      </div>
      {/* Mobile panel — animated slide-down via grid-rows 0fr→1fr (smooth auto height) + fade */}
      <div
        className={
          'nav:hidden mx-auto w-[min(100%-48px,1240px)] grid transition-[grid-template-rows] duration-300 ease-out ' +
          (open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')
        }
      >
        <div className="overflow-hidden">
          <div
            className={
              'flex flex-col py-[6px] pb-[18px] border-t border-border-2 transition-opacity duration-200 ' +
              (open ? 'opacity-100 delay-100' : 'opacity-0 pointer-events-none')
            }
          >
            {[...NAV, { path: '/contact', label: 'Book a visit', key: 'book' }].map((n) => (
              <NavLink
                key={n.key}
                to={n.path}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  'py-[14px] px-1 border-b border-border-2 last:border-b-0 no-underline font-body font-semibold text-[16px] ' +
                  (n.key === 'book'
                    ? 'text-blue'
                    : isActive
                      ? 'text-blue'
                      : 'text-ink')
                }
              >
                {n.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}
