import { Link } from 'react-router-dom'
import { SITE } from '../data/site'
import { ToothLogo } from './icons'

export function Footer() {
  return (
    <footer className="bg-night text-night-3 font-body">
      <div className="mx-auto w-[min(100%-48px,1240px)] pt-[68px] pb-[30px]">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-[11px] mb-[18px]">
              <span className="w-[36px] h-[36px] rounded-[10px] bg-[linear-gradient(145deg,#2A93F0,#0B5FB0)] grid place-items-center">
                <ToothLogo width={19} height={19} stroke="#fff" />
              </span>
              <strong className="font-display text-[18px] font-bold text-white tracking-[-0.01em]">
                Castor Dental Care
              </strong>
            </div>
            <p className="m-0 max-w-[320px] text-[14.5px] leading-[1.7] text-night-2">
              Comprehensive family, cosmetic, restorative, implant, and specialty
              dental care in Northeast Philadelphia. Comfortable, modern,
              patient-first.
            </p>
            <div className="flex gap-[10px] mt-[22px]">
              <a
                href={SITE.social.facebook}
                aria-label="Facebook"
                className="w-[38px] h-[38px] rounded-[10px] border border-white/10 grid place-items-center no-underline hover:bg-white/10 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#C7D6E0">
                  <path d="M14 9h3V6h-3c-1.7 0-3 1.3-3 3v2H9v3h2v6h3v-6h2.5l.5-3H14V9z" />
                </svg>
              </a>
              <a
                href={SITE.social.youtube}
                aria-label="YouTube"
                className="w-[38px] h-[38px] rounded-[10px] border border-white/10 grid place-items-center no-underline hover:bg-white/10 transition-colors"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#C7D6E0">
                  <path d="M22 12s0-3-.4-4.4a2.5 2.5 0 0 0-1.8-1.8C18.4 5.4 12 5.4 12 5.4s-6.4 0-7.8.4A2.5 2.5 0 0 0 2.4 7.6C2 9 2 12 2 12s0 3 .4 4.4a2.5 2.5 0 0 0 1.8 1.8c1.4.4 7.8.4 7.8.4s6.4 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8C22 15 22 12 22 12zM10 15V9l5 3-5 3z" />
                </svg>
              </a>
            </div>
          </div>
          <FootCol title="Practice">
            <FootLink to="/">Home</FootLink>
            <FootLink to="/about">Meet the Dentists</FootLink>
            <FootLink to="/services">Services</FootLink>
            <FootLink to="/gallery">Smile Gallery</FootLink>
          </FootCol>
          <FootCol title="Patients">
            <FootLink to="/financing">Financing</FootLink>
            <FootLink to="/financing">New Patient Offer</FootLink>
            <FootLink to="/contact">Request Appointment</FootLink>
            <FootLink to="/contact">Contact &amp; Hours</FootLink>
          </FootCol>
          <FootCol title="Get in touch">
            <p className="m-0 mb-3 text-[14.5px] leading-[1.6] text-night-2">
              {SITE.street}
              <br />
              {SITE.region_full}
            </p>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="block text-white no-underline text-[16px] font-semibold mb-2"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="block text-night-2 no-underline text-[14.5px] mb-4 hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
            <div className="text-[13.5px] leading-[1.7] text-night-4">
              Mon–Tue 9–7 · Wed–Thu 9–6
              <br />
              Fri 9–2 · Sat–Sun closed
            </div>
          </FootCol>
        </div>
        <div className="flex justify-between items-center gap-4 flex-wrap border-t border-white/10 mt-12 pt-6 text-[13px] text-night-4">
          <span>© 2026 Castor Dental Care. All rights reserved.</span>
          <span className="flex gap-[18px] items-center flex-wrap">
            <Link to="/privacy" className="no-underline text-night-4 hover:text-white transition-colors">
              Privacy
            </Link>
            <span>{SITE.street}, {SITE.region_full}</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

function FootCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-display text-white text-[14px] font-semibold tracking-[0.04em] uppercase m-0 mb-4">
        {title}
      </h3>
      {children}
    </div>
  )
}

function FootLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block text-night-2 no-underline text-[14.5px] mb-[11px] hover:text-white transition-colors"
    >
      {children}
    </Link>
  )
}
