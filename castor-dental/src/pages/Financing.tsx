import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { PageHero } from '../components/PageHero'
import { OfferBand } from '../components/OfferBand'
import {
  CardIcon,
  ShieldIcon,
  ClockIcon,
  ChatIcon,
} from '../components/icons'
import { CARRIERS } from '../data/carriers'
import { SITE } from '../data/site'

const FIN_OPTIONS = [
  {
    title: 'Flexible payment plans',
    blurb: 'Spread treatment costs into manageable monthly amounts.',
    Icon: CardIcon,
  },
  {
    title: 'Insurance friendly',
    blurb: "We'll help you understand and maximize your dental benefits.",
    Icon: ShieldIcon,
  },
  {
    title: 'In-office savings',
    blurb: 'Ask about membership-style options for routine care.',
    Icon: ClockIcon,
  },
  {
    title: 'Transparent costs',
    blurb: 'Clear estimates before treatment — no surprises.',
    Icon: ChatIcon,
  },
] as const

const STEPS = [
  {
    n: 1,
    title: 'Call or request online',
    blurb: "Reach us by phone or the appointment form — whatever's easiest for you.",
  },
  {
    n: 2,
    title: 'Share your goals',
    blurb: 'Tell us whether you need prevention, repair, cosmetic, or specialty care.',
  },
  {
    n: 3,
    title: 'Visit Castor Avenue',
    blurb: 'Arrive for a clear exam, a treatment plan, and confident next steps.',
  },
] as const

export default function Financing() {
  return (
    <>
      <PageHero
        eyebrow="New patients & financing"
        title="Care that fits your life — and your budget"
        lede="A simple path from first call to first visit, with flexible options so cost never stands between you and a healthy smile."
      />

      {/* OFFER */}
      <section className="pt-[54px] md:pt-[64px]">
        <Container>
          <OfferBand
            badge="LIMITED-TIME NEW PATIENT OFFER"
            heading="Comprehensive exam + X-rays for $169"
            blurb="A savings of over $200. Includes a full comprehensive exam and X-rays for new patients. Contact our office to book."
          />
        </Container>
      </section>

      {/* STEPS */}
      <section className="py-[54px] md:py-[72px]">
        <Container>
          <div data-reveal className="text-center max-w-[620px] mx-auto">
            <Eyebrow>Your first visit</Eyebrow>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
              Three simple steps
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[42px]">
            {STEPS.map((s) => (
              <div
                key={s.n}
                data-reveal
                className="bg-white border border-border rounded-[20px] p-[30px]"
              >
                <span className="w-12 h-12 rounded-[14px] bg-night text-white grid place-items-center font-display font-bold text-[19px]">
                  {s.n}
                </span>
                <h3 className="font-display text-[19px] font-bold text-ink mt-[18px]">
                  {s.title}
                </h3>
                <p className="mt-[9px] text-[14.5px] leading-[1.6] text-muted-soft">
                  {s.blurb}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FINANCING OPTIONS */}
      <section className="bg-mist border-y border-[#EAF1F8] py-[54px] md:py-[78px]">
        <Container>
          <div data-reveal className="text-center max-w-[620px] mx-auto">
            <Eyebrow>Financing</Eyebrow>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
              Ways we make care affordable
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-[42px]">
            {FIN_OPTIONS.map(({ title, blurb, Icon }) => (
              <div
                key={title}
                data-reveal
                className="bg-white border border-border rounded-[18px] p-[26px]"
              >
                <span className="w-[46px] h-[46px] rounded-[13px] bg-mist-2 grid place-items-center">
                  <Icon width={22} height={22} stroke="#1474D4" />
                </span>
                <h3 className="font-display text-[17px] font-bold text-ink mt-4">
                  {title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-muted-soft">
                  {blurb}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-7 text-[14px] text-faint text-center max-w-[640px] mx-auto">
            Have a question about cost or coverage? Call{' '}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-blue font-semibold no-underline"
            >
              {SITE.phone}
            </a>{' '}
            and our team will walk you through your options before you schedule.
          </p>
        </Container>
      </section>

      {/* INSURANCE CARRIERS */}
      <section className="pt-[54px] md:pt-[78px] pb-6">
        <Container>
          <div data-reveal className="text-center max-w-[680px] mx-auto">
            <Eyebrow>Insurance</Eyebrow>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
              Plans we accept
            </h2>
            <p className="mt-[14px] text-[16px] md:text-[17px] leading-[1.65] text-muted max-w-[560px] mx-auto">
              We accept 35+ insurance plans and work with most major dental
              insurance carriers. Below are some of the plans we routinely
              accept. If your plan isn't listed, call our office — we work with
              many more.
            </p>
          </div>
          <div
            data-reveal
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-9"
          >
            {CARRIERS.map((c) => (
              <div
                key={c}
                className="bg-white border border-border rounded-[14px] px-5 py-[18px] font-display text-[15px] font-semibold text-ink flex items-center gap-[10px]"
              >
                <span className="w-2 h-2 rounded-full bg-teal shrink-0" />
                {c}
              </div>
            ))}
          </div>
          <p
            data-reveal
            className="mt-7 text-[15px] leading-[1.6] text-ink-soft text-center max-w-[640px] mx-auto"
          >
            Don't see your plan? Call us at{' '}
            <a
              href={`tel:${SITE.phoneTel}`}
              className="text-blue font-semibold no-underline"
            >
              {SITE.phone}
            </a>{' '}
            — we work with most major carriers and can verify your specific
            plan before your visit.
          </p>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-[54px] md:py-[78px]">
        <Container>
          <div data-reveal className="text-center">
            <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.12] tracking-[-0.02em] text-ink m-0">
              Become a new patient today
            </h2>
            <p className="mt-3 text-[16px] md:text-[17px] text-muted max-w-[500px] mx-auto">
              Book your $169 comprehensive exam and X-rays on Castor Avenue.
            </p>
            <div className="flex justify-center flex-wrap gap-3 mt-[26px]">
              <Link
                to="/contact"
                className="bg-blue text-white no-underline font-semibold text-[16px] px-7 py-[15px] rounded-full shadow-[0_12px_28px_rgba(20,116,212,0.28)]"
              >
                Request an appointment
              </Link>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="bg-white text-ink no-underline font-semibold text-[16px] px-7 py-[15px] rounded-full border border-border-3"
              >
                Call {SITE.phone}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
