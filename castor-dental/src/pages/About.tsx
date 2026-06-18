import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { PageHero } from '../components/PageHero'
import {
  ArrowRight,
  HeartIcon,
  ShieldIcon,
  UsersIcon,
  CheckIcon,
} from '../components/icons'
import { DOCTORS } from '../data/doctors'
import { SITE } from '../data/site'

const VALUES = [
  {
    title: 'Gentle & relaxed',
    blurb: 'Comfort-first care, with sedation available for anxious patients.',
    Icon: HeartIcon,
  },
  {
    title: 'Modern equipment',
    blurb: 'State-of-the-art technology backed by an experienced clinical team.',
    Icon: ShieldIcon,
  },
  {
    title: 'Family-friendly',
    blurb: 'One practice for every stage of life, from children to grandparents.',
    Icon: UsersIcon,
  },
  {
    title: 'Always learning',
    blurb: 'Continual education for doctors and staff keeps care excellent.',
    Icon: CheckIcon,
  },
] as const

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the practice"
        title="Comfortable, modern care from a team that puts patients first"
        lede="Our mission is to provide a broad selection of superior-quality dental services in a comfortable, relaxed way — fulfilling the unique needs of every patient."
      />

      {/* DOCTORS */}
      {DOCTORS.map((d, i) => (
        <section
          key={d.name}
          className={
            i === 0
              ? 'pt-[54px] md:pt-[80px]'
              : 'py-[54px] md:py-[64px] md:pb-[80px]'
          }
        >
          <Container>
            <div
              data-reveal
              className={
                'grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-center ' +
                (i === 1 ? 'lg:grid-cols-[1.15fr_0.85fr]' : '')
              }
            >
              {i === 0 ? (
                <>
                  <DoctorFigure doctor={d} />
                  <DoctorBody doctor={d} />
                </>
              ) : (
                <>
                  <DoctorBody doctor={d} withCta />
                  <DoctorFigure doctor={d} />
                </>
              )}
            </div>
          </Container>
        </section>
      ))}

      {/* VALUES */}
      <section className="bg-mist border-y border-[#EAF1F8] py-[54px] md:py-[80px]">
        <Container>
          <div data-reveal className="text-center max-w-[620px] mx-auto">
            <Eyebrow>Why patients choose us</Eyebrow>
            <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
              A practice built around comfort
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] mt-[42px]">
            {VALUES.map(({ title, blurb, Icon }) => (
              <div
                key={title}
                data-reveal
                className="bg-white border border-border rounded-[18px] p-[26px]"
              >
                <span className="w-[48px] h-[48px] rounded-[13px] bg-mist-2 grid place-items-center">
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
        </Container>
      </section>

      {/* CLINICAL TEAM */}
      <section className="py-[54px] md:py-[80px]">
        <Container>
          <div
            data-reveal
            className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center"
          >
            <div>
              <Eyebrow>Behind the chair</Eyebrow>
              <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.12] tracking-[-0.02em] text-ink mt-3">
                Our clinical team
              </h2>
              <p className="mt-4 text-[16.5px] leading-[1.7] text-muted-soft">
                Our clinical team of dental hygienists and dental assistants
                provides chairside support and hygiene care. The entire team
                trains each year so we can keep delivering high-quality,
                patient-focused dentistry.
              </p>
              <p className="mt-[14px] text-[16.5px] leading-[1.7] text-muted-soft">
                At Castor Dental Care, patients come first. We are devoted to
                your comfort and we respect your time — if we can make your
                visit better in any way, please let us know.
              </p>
              <Link
                to="/contact"
                className="mt-[22px] inline-flex items-center gap-2 font-semibold text-[15px] text-blue no-underline"
              >
                Join our team <ArrowRight width={16} height={16} stroke="#1474D4" />
              </Link>
            </div>
            <div className="img-slot w-full h-[260px] sm:h-[380px] rounded-[22px] shadow-[0_24px_56px_rgba(11,49,75,0.12)]">
              <img
                src="/assets/images/teeth-theme.jpg"
                alt="Dental treatment room image from Castor Dental Care"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* CTA BAND */}
      <section className="pb-[54px] md:pb-[80px]">
        <Container>
          <div
            data-reveal
            className="text-center bg-[linear-gradient(130deg,#0B5FB0,#1474D4_60%,#11B5A6)] rounded-3xl p-10 md:px-10 md:py-14 shadow-[0_26px_60px_rgba(20,116,212,0.3)]"
          >
            <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.12] tracking-[-0.02em] text-white m-0">
              Ready to meet the team?
            </h2>
            <p className="mt-3 text-[16px] md:text-[17px] text-white/85 max-w-[480px] mx-auto">
              New patients receive a comprehensive exam and X-rays for $169.
            </p>
            <div className="flex justify-center flex-wrap gap-3 mt-[26px]">
              <Link
                to="/contact"
                className="bg-white text-blue-dark no-underline font-bold text-[16px] px-7 py-[15px] rounded-full shadow-[0_12px_28px_rgba(0,0,0,0.18)]"
              >
                Request an appointment
              </Link>
              <a
                href={`tel:${SITE.phoneTel}`}
                className="bg-white/[0.12] text-white no-underline font-semibold text-[16px] px-7 py-[15px] rounded-full border border-white/30"
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

function DoctorFigure({ doctor }: { doctor: (typeof DOCTORS)[number] }) {
  return (
    <div className="flex justify-center items-center min-w-0">
      <figure className="m-0 inline-flex flex-col items-center bg-white border border-border rounded-3xl p-[18px] shadow-[0_24px_56px_rgba(11,49,75,0.12)] max-w-full">
        {/* per CTO/founder spec: small framed treatment, not blown up */}
        <div className="img-slot w-[225px] h-[150px] max-w-full rounded-2xl bg-mist-2">
          <img src={doctor.image} alt={doctor.alt} />
        </div>
        <figcaption className="mt-[14px] font-display text-[13px] font-semibold tracking-[0.06em] uppercase text-blue">
          {doctor.badge}
        </figcaption>
      </figure>
    </div>
  )
}

function DoctorBody({
  doctor,
  withCta,
}: {
  doctor: (typeof DOCTORS)[number]
  withCta?: boolean
}) {
  return (
    <div>
      <Eyebrow>Dentist</Eyebrow>
      <h2 className="font-display font-bold text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em] text-ink mt-[10px]">
        {doctor.name}
      </h2>
      <div className="flex flex-wrap gap-[10px] my-4">
        {doctor.tags.map((t) => (
          <span
            key={t}
            className="bg-mist-2 text-blue-dark rounded-full px-[13px] py-[6px] text-[13px] font-semibold"
          >
            {t}
          </span>
        ))}
      </div>
      <p className="m-0 text-[16.5px] leading-[1.7] text-[#4F6878]">
        {doctor.bio}
      </p>
      {doctor.quote && (
        <blockquote className="mt-[22px] py-[18px] px-[22px] border-l-[3px] border-blue bg-mist rounded-r-xl font-display text-[18px] leading-[1.5] text-ink italic">
          “{doctor.quote}”
        </blockquote>
      )}
      {withCta && (
        <Link
          to="/contact"
          className="mt-[22px] inline-flex items-center gap-2 bg-blue text-white no-underline font-semibold text-[15px] px-[22px] py-[13px] rounded-full shadow-[0_12px_28px_rgba(20,116,212,0.28)]"
        >
          Schedule with our team{' '}
          <ArrowRight width={16} height={16} stroke="#fff" />
        </Link>
      )}
    </div>
  )
}
