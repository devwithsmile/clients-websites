import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import {
  ArrowExternal,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../components/icons'
import { SITE, MAILTO_APPOINTMENT } from '../data/site'

export default function Contact() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F4F9FE,#FFFFFF)] border-b border-[#EAF1F8]">
        <div
          aria-hidden
          className="absolute w-[460px] h-[460px] rounded-full -top-[160px] -left-[50px] anim-floatA pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(20,116,212,0.13), transparent 70%)',
          }}
        />
        <Container className="relative py-[56px] md:py-[64px] text-center">
          <Eyebrow>Contact us</Eyebrow>
          <h1 className="font-display font-bold text-[32px] sm:text-[42px] md:text-[52px] leading-[1.06] tracking-[-0.025em] text-ink mt-[14px] mx-auto max-w-[680px]">
            Get in touch
          </h1>
          <p className="mt-[18px] text-[16px] md:text-[18px] leading-[1.6] text-muted mx-auto max-w-[560px]">
            Call{' '}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-blue font-semibold no-underline"
            >
              {SITE.phone}
            </a>{' '}
            or email us — we'll get you on the schedule and answer anything you
            need before your first visit.
          </p>
        </Container>
      </section>

      <section className="py-[54px] md:py-[64px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-7 items-start">
            {/* PHONE-FIRST HONEST CTA — no fake form */}
            <div data-reveal>
              <div className="bg-white border border-border rounded-[22px] p-7 md:p-9 shadow-[0_12px_34px_rgba(11,49,75,0.07)]">
                <span className="inline-flex items-center gap-2 bg-mist-2 text-blue-dark rounded-full px-[14px] py-[7px] text-[12.5px] font-bold tracking-[0.04em] uppercase">
                  <PhoneIcon width={14} height={14} stroke="#0B5FB0" />
                  Call to book
                </span>
                <h2 className="font-display text-[24px] md:text-[26px] font-bold leading-[1.2] text-ink mt-[18px]">
                  Call the office to book your visit
                </h2>
                <p className="mt-[14px] text-[16px] leading-[1.65] text-muted">
                  Our front desk takes appointment requests by phone or email so
                  we can confirm a time on the spot and walk you through
                  anything we need before your first visit. We do not currently
                  accept online appointment requests through this form.
                </p>

                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="mt-6 w-full inline-flex items-center justify-center gap-[10px] bg-blue text-white no-underline font-body font-bold text-[17px] px-6 py-4 rounded-full shadow-[0_12px_28px_rgba(20,116,212,0.28)] hover:-translate-y-[2px] hover:shadow-[0_16px_32px_rgba(20,116,212,0.34)] transition-all"
                >
                  <PhoneIcon width={19} height={19} stroke="#fff" />
                  Call {SITE.phone}
                </a>
                <a
                  href={MAILTO_APPOINTMENT}
                  className="mt-3 w-full inline-flex items-center justify-center gap-[10px] bg-white text-ink no-underline font-body font-semibold text-[16px] px-[22px] py-[15px] rounded-full border border-border-3"
                >
                  <MailIcon width={18} height={18} stroke="#0E2A3D" />
                  Email {SITE.email}
                </a>

                <div className="mt-[26px] p-[18px_20px] bg-mist border border-border rounded-[14px] text-[14.5px] leading-[1.6] text-ink-soft">
                  <strong className="block text-ink font-display text-[15px] mb-1">
                    Best times to reach us
                  </strong>
                  Mon–Tue 9&nbsp;AM–7&nbsp;PM · Wed–Thu 9&nbsp;AM–6&nbsp;PM · Fri 9&nbsp;AM–2&nbsp;PM.
                  Outside those hours, leave a voicemail or email and we'll get back to you the next business day.
                </div>

                <p className="mt-[18px] text-[12.5px] text-faint text-center">
                  For your privacy, please don't share medical history or
                  insurance numbers by email. See our{' '}
                  <Link
                    to="/privacy"
                    className="text-blue font-semibold no-underline"
                  >
                    privacy notice
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* VISIT & HOURS */}
            <div data-reveal>
              <div className="bg-white border border-border rounded-[22px] p-7 shadow-[0_12px_34px_rgba(11,49,75,0.07)]">
                <h2 className="font-display text-[20px] font-bold text-ink m-0 mb-5">
                  Visit &amp; hours
                </h2>
                <InfoRow
                  icon={<PhoneIcon width={20} height={20} stroke="#1474D4" />}
                  label="Phone"
                  value={
                    <a
                      href={`tel:${SITE.phoneTel}`}
                      className="font-display text-[18px] font-bold text-ink no-underline"
                    >
                      {SITE.phone}
                    </a>
                  }
                />
                <InfoRow
                  icon={<MailIcon width={20} height={20} stroke="#1474D4" />}
                  label="Email"
                  value={
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[15px] font-semibold text-ink no-underline"
                    >
                      {SITE.email}
                    </a>
                  }
                />
                <InfoRow
                  icon={
                    <MapPinIcon width={20} height={20} stroke="#1474D4" />
                  }
                  label="Address"
                  value={
                    <span className="text-[15px] text-ink leading-[1.5]">
                      {SITE.street}
                      <br />
                      {SITE.region_full}
                    </span>
                  }
                />
                <table className="w-full border-collapse mt-4 text-[14.5px]">
                  <tbody>
                    {SITE.hours.map((h, i) => (
                      <tr
                        key={h.label}
                        className={i > 0 ? 'border-t border-[#F1F5F9]' : ''}
                      >
                        <td className="py-[7px] text-muted-soft">
                          {h.label}
                        </td>
                        <td
                          className={
                            'py-[7px] text-right font-semibold ' +
                            (h.time === 'Closed' ? 'text-faint' : 'text-ink')
                          }
                        >
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener"
                  className="mt-[18px] flex items-center justify-center gap-2 bg-night text-white no-underline font-semibold text-[14.5px] px-5 py-[13px] rounded-[12px]"
                >
                  Get directions{' '}
                  <ArrowExternal width={16} height={16} stroke="#fff" />
                </a>
              </div>
            </div>
          </div>

          {/* MAP */}
          <div
            data-reveal
            className="mt-7 rounded-[22px] overflow-hidden border border-border shadow-[0_12px_34px_rgba(11,49,75,0.07)]"
          >
            <iframe
              title="Castor Dental Care location"
              src={SITE.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[360px] border-0 block"
            />
          </div>
        </Container>
      </section>
    </>
  )
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
}) {
  return (
    <div className="flex gap-[13px] items-start py-4 border-b border-border-2 first:pt-0 last:border-b-0">
      <span className="w-[42px] h-[42px] shrink-0 rounded-[11px] bg-mist-2 grid place-items-center">
        {icon}
      </span>
      <div>
        <div className="text-[13px] text-faint font-semibold">{label}</div>
        {value}
      </div>
    </div>
  )
}
