import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { OfferBand } from '../components/OfferBand'
import { ServiceCard } from '../components/ServiceCard'
import { DoctorCard } from '../components/DoctorCard'
import { FAQItem } from '../components/FAQItem'
import {
  ArrowRight,
  CalendarIcon,
  CheckIcon,
  ICON_MAP,
  MapPinIcon,
  PhoneIcon,
  ShieldIcon,
  HeartIcon,
  SmileIcon,
  CardIcon,
} from '../components/icons'
import { SITE } from '../data/site'
import { HOME_SERVICES, PATHWAYS } from '../data/services'
import { DOCTOR_CARDS } from '../data/doctors'
import { GALLERY_PREVIEW } from '../data/gallery'
import { FAQS } from '../data/faq'

const PATHWAY_ICONS: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  shield: ShieldIcon,
  bolt: ICON_MAP.bolt,
  smile: SmileIcon,
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F4F9FE_0%,#FFFFFF_100%)] border-b border-[#EAF1F8]">
        <div
          aria-hidden
          className="absolute w-[520px] h-[520px] rounded-full -top-[160px] -right-[80px] anim-floatA pointer-events-none blur-[8px]"
          style={{
            background:
              'radial-gradient(circle, rgba(20,116,212,0.16), transparent 70%)',
          }}
        />
        <div
          aria-hidden
          className="absolute w-[440px] h-[440px] rounded-full -bottom-[180px] -left-[120px] anim-floatB pointer-events-none blur-[8px]"
          style={{
            background:
              'radial-gradient(circle, rgba(17,181,166,0.14), transparent 70%)',
          }}
        />
        <Container className="relative grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-9 lg:gap-14 items-center py-[56px] md:py-[72px]">
          <div data-reveal>
            <span className="inline-flex items-center gap-2 bg-[rgba(20,116,212,0.08)] border border-[rgba(20,116,212,0.16)] text-blue-dark rounded-full px-[14px] py-[7px] text-[13px] font-semibold">
              <span className="w-[7px] h-[7px] rounded-full bg-teal shadow-[0_0_0_4px_rgba(17,181,166,0.18)]" />
              Accepting new patients in Northeast Philadelphia
            </span>
            <h1 className="font-display font-bold text-[42px] sm:text-[48px] md:text-[58px] leading-[1.04] tracking-[-0.025em] text-ink mt-[22px] max-w-[600px]">
              Modern dental care for{' '}
              <span className="text-blue">healthy, confident</span> smiles.
            </h1>
            <p className="mt-6 text-[17px] md:text-[19px] leading-[1.65] text-muted max-w-[520px]">
              Preventive, cosmetic, restorative, implant, Invisalign, and sedation
              dentistry — delivered in a calm, comfortable office on Castor
              Avenue.
            </p>
            <div className="flex flex-wrap gap-[13px] mt-[34px]">
              <Link
                to="/contact"
                className="inline-flex items-center gap-[9px] bg-blue text-white no-underline font-semibold text-[16px] px-[26px] py-[15px] rounded-full shadow-[0_12px_28px_rgba(20,116,212,0.32)] hover:-translate-y-[2px] hover:shadow-[0_16px_34px_rgba(20,116,212,0.4)] transition-all"
              >
                <CalendarIcon width={18} height={18} stroke="#fff" />
                Request an appointment
              </Link>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center gap-[9px] bg-white text-ink no-underline font-semibold text-[16px] px-[26px] py-[15px] rounded-full border border-border-3 hover:bg-mist hover:border-blue transition-colors"
              >
                <PhoneIcon width={18} height={18} stroke="#1474D4" />
                {SITE.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-[22px] mt-[34px]">
              {['UPenn-trained dentists', 'Sedation available', 'Flexible financing'].map(
                (txt) => (
                  <div key={txt} className="flex items-center gap-[9px] text-[14.5px] font-medium text-ink-soft">
                    <CheckIcon width={18} height={18} stroke="#11B5A6" />
                    {txt}
                  </div>
                ),
              )}
            </div>
          </div>
          <div data-reveal className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] lg:max-w-[440px]">
              <div className="img-slot w-full aspect-[460/590] rounded-3xl overflow-hidden shadow-[0_30px_70px_rgba(11,49,75,0.18)] border border-[#E6EDF4] bg-mist-2">
                <img
                  src="/assets/images/family.jpg"
                  alt="Castor Dental Care family dentistry welcome sign"
                />
              </div>
              <div className="absolute -left-[22px] bottom-9 bg-white border border-border rounded-2xl px-[18px] py-4 shadow-[0_18px_40px_rgba(11,49,75,0.16)] anim-floatCard">
              <div className="text-[12px] font-semibold tracking-[0.06em] uppercase text-faint">
                Open this week
              </div>
              <div className="font-display text-[17px] font-bold text-ink mt-1">
                Mon–Fri appointments
              </div>
              <div className="text-[13px] text-muted-soft mt-[2px]">
                {SITE.hoursSummary}
              </div>
            </div>
            <div className="absolute -right-4 top-8 bg-night text-white rounded-2xl px-[18px] py-[15px] shadow-[0_18px_40px_rgba(11,49,75,0.28)] anim-floatCard-2">
              <div className="font-display text-[24px] font-bold leading-none">
                $169
              </div>
              <div className="text-[12.5px] text-night-2 mt-[5px] max-w-[120px] leading-[1.4]">
                New-patient exam + X-rays
              </div>
            </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST STRIP */}
      <Container className="-translate-y-8 relative z-10">
        <div data-reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 bg-white border border-border rounded-[18px] shadow-[0_18px_44px_rgba(11,49,75,0.08)] overflow-hidden">
          <TrustItem
            icon={<MapPinIcon width={21} height={21} stroke="#1474D4" />}
            title="Castor Avenue"
            blurb="Local Northeast Philly care"
          />
          <TrustItem
            icon={<HeartIcon width={21} height={21} stroke="#1474D4" />}
            title="Family + specialty"
            blurb="Every stage, one practice"
          />
          <TrustItem
            icon={<CardIcon width={21} height={21} stroke="#1474D4" />}
            title="Flexible financing"
            blurb="Plans to ease the cost"
          />
          <TrustItem
            icon={<SmileIcon width={21} height={21} stroke="#1474D4" />}
            title="Comfort-first"
            blurb="Sedation & gentle care"
            last
          />
        </div>
      </Container>

      {/* PATHWAYS */}
      <section className="py-[54px] md:py-[78px]">
        <Container>
          <div data-reveal className="max-w-[680px]">
            <Eyebrow>Where to start</Eyebrow>
            <h2 className="font-display font-bold text-[30px] md:text-[38px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
              Choose care by what you need today
            </h2>
            <p className="mt-[14px] text-[16px] md:text-[17px] leading-[1.65] text-muted">
              Three simple paths make your next step obvious — no scrolling through dozens of pages.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {PATHWAYS.map((p) => {
              const Icon = PATHWAY_ICONS[p.iconKey] ?? ShieldIcon
              return (
                <Link
                  key={p.title}
                  to="/services"
                  data-reveal
                  className="no-underline bg-white border border-border rounded-[20px] p-[30px] flex flex-col min-h-[300px] hover:-translate-y-[6px] hover:shadow-[0_22px_48px_rgba(11,49,75,0.12)] transition-all"
                >
                  <span className="w-[52px] h-[52px] rounded-[14px] bg-[linear-gradient(145deg,#EAF3FC,#DDEBF9)] grid place-items-center">
                    <Icon width={24} height={24} stroke="#1474D4" />
                  </span>
                  <h3 className="font-display text-[21px] font-bold text-ink mt-5">
                    {p.title}
                  </h3>
                  <p className="mt-[10px] text-[15px] leading-[1.6] text-muted-soft">
                    {p.blurb}
                  </p>
                  <span className="mt-auto pt-[22px] inline-flex items-center gap-[7px] font-semibold text-[14.5px] text-blue">
                    {p.linkLabel} <ArrowRight width={17} height={17} stroke="#1474D4" />
                  </span>
                </Link>
              )
            })}
          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="bg-mist border-y border-[#EAF1F8] py-[54px] md:py-[78px]">
        <Container>
          <div data-reveal className="flex justify-between items-end gap-7 flex-wrap">
            <div className="max-w-[640px]">
              <Eyebrow>What we do</Eyebrow>
              <h2 className="font-display font-bold text-[30px] md:text-[38px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
                Comprehensive dentistry, under one roof
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-semibold text-[15px] text-blue no-underline whitespace-nowrap"
            >
              All services <ArrowRight width={17} height={17} stroke="#1474D4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[38px]">
            {HOME_SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </Container>
      </section>

      {/* DENTISTS */}
      <section className="py-[54px] md:py-[78px]">
        <Container>
          <div data-reveal className="text-center max-w-[640px] mx-auto">
            <Eyebrow>Your care team</Eyebrow>
            <h2 className="font-display font-bold text-[30px] md:text-[38px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
              Meet your dentists
            </h2>
            <p className="mt-[14px] text-[16px] md:text-[17px] leading-[1.65] text-muted">
              Board-trained, gentle, and committed to keeping your interests at the forefront of every visit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-[42px]">
            {DOCTOR_CARDS.map((d) => (
              <DoctorCard
                key={d.name}
                name={d.name}
                credential={d.credential}
                image={d.image}
                alt={d.alt}
                blurb={d.blurb}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* OFFER BAND */}
      <section className="pb-[54px] md:pb-[78px]">
        <Container>
          <OfferBand />
        </Container>
      </section>

      {/* GALLERY PREVIEW */}
      <section className="bg-mist border-y border-[#EAF1F8] py-[54px] md:py-[78px]">
        <Container>
          <div data-reveal className="flex justify-between items-end gap-7 flex-wrap">
            <div className="max-w-[600px]">
              <Eyebrow>Real results</Eyebrow>
              <h2 className="font-display font-bold text-[30px] md:text-[38px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
                A glimpse of our smile gallery
              </h2>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-semibold text-[15px] text-blue no-underline whitespace-nowrap"
            >
              View full gallery <ArrowRight width={17} height={17} stroke="#1474D4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-[38px]">
            {GALLERY_PREVIEW.map((g) => (
              <article
                key={g.tag}
                data-reveal
                className="bg-white border border-border rounded-2xl overflow-hidden shadow-[0_8px_24px_rgba(11,49,75,0.06)]"
              >
                <div className="relative">
                  <div className="img-slot is-split w-full h-[170px]">
                    <img src={g.case.before.src} alt={g.case.before.alt} />
                    <img src={g.case.after.src} alt={g.case.after.alt} />
                  </div>
                  <span className="absolute left-3 top-3 bg-night text-white rounded-full px-[11px] py-[5px] text-[12px] font-semibold">
                    {g.tag}
                  </span>
                </div>
                <div className="px-4 py-[14px]">
                  <strong className="block font-display text-[15px] text-ink">
                    Case study
                  </strong>
                  <span className="text-[13px] text-subtle">
                    Consented before &amp; after
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-[54px] md:py-[78px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
            <div data-reveal>
              <Eyebrow>Good to know</Eyebrow>
              <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.14] tracking-[-0.02em] text-ink mt-3">
                Questions before you call
              </h2>
              <p className="mt-[14px] mb-6 text-[16px] leading-[1.65] text-muted">
                Clear answers to help you pick the right next step.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-[9px] bg-blue text-white no-underline font-semibold text-[15px] px-[22px] py-[13px] rounded-full shadow-[0_12px_28px_rgba(20,116,212,0.28)]"
              >
                Request an appointment
              </Link>
            </div>
            <div data-reveal>
              <div className="bg-white border border-border rounded-[18px] overflow-hidden shadow-[0_10px_30px_rgba(11,49,75,0.05)]">
                {FAQS.map((faq, i) => (
                  <FAQItem key={faq.q} faq={faq} open={i === 0} divider={i > 0} />
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

function TrustItem({
  icon,
  title,
  blurb,
  last,
}: {
  icon: React.ReactNode
  title: string
  blurb: string
  last?: boolean
}) {
  return (
    <div
      className={
        'flex gap-[14px] items-center p-6 ' +
        (last ? '' : 'border-b sm:border-b-0 sm:border-r border-border-2')
      }
    >
      <span className="w-[44px] h-[44px] shrink-0 rounded-[12px] bg-mist-2 grid place-items-center">
        {icon}
      </span>
      <div>
        <strong className="block font-display text-[15px] text-ink">
          {title}
        </strong>
        <span className="text-[13px] text-subtle">{blurb}</span>
      </div>
    </div>
  )
}
