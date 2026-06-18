import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { ICON_MAP, CheckIcon, type IconKey } from '../components/icons'
import { SERVICE_CATEGORIES } from '../data/services'
import { SITE } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Comprehensive dentistry for every need"
        lede="We specialize in preventive and cosmetic dentistry — plus restorative, implant, orthodontic, and sedation care, all under one roof on Castor Avenue."
      />

      <section className="py-[54px] md:py-[72px]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            {SERVICE_CATEGORIES.map((cat) => {
              const Icon = ICON_MAP[cat.iconKey as IconKey] ?? ICON_MAP.shield
              return (
                <article
                  key={cat.title}
                  data-reveal
                  className="bg-white border border-border rounded-[22px] p-7 md:p-[34px] shadow-[0_10px_30px_rgba(11,49,75,0.05)]"
                >
                  <div className="flex items-center gap-4">
                    <span className="w-14 h-14 rounded-[15px] bg-[linear-gradient(145deg,#EAF3FC,#DDEBF9)] grid place-items-center shrink-0">
                      <Icon width={26} height={26} stroke="#1474D4" />
                    </span>
                    <div>
                      <h2 className="font-display text-[22px] md:text-[24px] font-bold text-ink m-0">
                        {cat.title}
                      </h2>
                      <p className="m-0 text-[14.5px] text-subtle mt-1">
                        {cat.blurb}
                      </p>
                    </div>
                  </div>
                  <ul className="list-none grid grid-cols-1 sm:grid-cols-2 gap-3 mt-[22px] m-0 p-0">
                    {cat.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-[9px] text-[14.5px] text-ink-soft"
                      >
                        <CheckIcon
                          width={17}
                          height={17}
                          stroke="#11B5A6"
                        />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section className="bg-mist border-t border-[#EAF1F8] py-[54px] md:py-[72px]">
        <Container>
          <div data-reveal className="text-center">
            <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.12] tracking-[-0.02em] text-ink m-0">
              Not sure which service you need?
            </h2>
            <p className="mt-3 text-[16px] md:text-[17px] text-muted max-w-[520px] mx-auto">
              Tell us your goals and our team will guide you to the right first visit.
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
