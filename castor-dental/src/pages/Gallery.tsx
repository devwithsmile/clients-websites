import { Link } from 'react-router-dom'
import { Container } from '../components/Container'
import { PageHero } from '../components/PageHero'
import { BeforeAfterPair } from '../components/BeforeAfterPair'
import { GALLERY_CASES } from '../data/gallery'
import { SITE } from '../data/site'

export default function Gallery() {
  return (
    <>
      <PageHero
        eyebrow="Smile gallery"
        title="Real smiles, transformed"
        lede="A look at selected patient-result images from Castor Dental Care's original smile gallery."
      />

      <section className="py-[40px] md:py-[56px]">
        <Container>
          <div
            data-reveal
            className="max-w-[780px] mx-auto mb-[36px] text-center"
          >
            <p className="m-0 text-[16px] md:text-[17px] leading-[1.7] text-ink-soft">
              The cases below show a mix of{' '}
              <strong>cosmetic, restorative, and implant work</strong> completed
              at our Castor Avenue practice — veneers, professional whitening,
              porcelain crowns, Invisalign clear aligners, dental implants, and
              cosmetic bonding. Each result is the work of our team in our
              Northeast Philadelphia office. If you see a result you'd like to
              talk through for your own smile, call{' '}
              <a
                href={`tel:${SITE.phoneTel}`}
                className="text-blue font-semibold no-underline"
              >
                {SITE.phone}
              </a>{' '}
              or{' '}
              <Link
                to="/contact"
                className="text-blue font-semibold no-underline"
              >
                request a consultation
              </Link>
              , and we'll walk you through what your plan might look like.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
            {GALLERY_CASES.map((c) => (
              <BeforeAfterPair key={c.tag} case={c} />
            ))}
          </div>
          <p className="mt-8 text-[13.5px] text-faint text-center max-w-[680px] mx-auto">
            Results vary by patient. Gallery should only display consented patient cases.
          </p>
        </Container>
      </section>

      <section className="bg-mist border-t border-[#EAF1F8] py-[54px] md:py-[72px] mt-12">
        <Container>
          <div data-reveal className="text-center">
            <h2 className="font-display font-bold text-[28px] md:text-[34px] leading-[1.12] tracking-[-0.02em] text-ink m-0">
              Imagine your own before &amp; after
            </h2>
            <p className="mt-3 text-[16px] md:text-[17px] text-muted max-w-[500px] mx-auto">
              Book a consultation and we'll map out a plan for your smile.
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
