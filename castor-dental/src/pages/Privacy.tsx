import { Container } from '../components/Container'
import { Eyebrow } from '../components/Eyebrow'
import { SITE } from '../data/site'

export default function Privacy() {
  return (
    <>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#F4F9FE,#FFFFFF)] border-b border-[#EAF1F8]">
        <Container className="relative py-[52px] md:py-[64px] text-center">
          <Eyebrow>Legal</Eyebrow>
          <h1 className="font-display font-bold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.08] tracking-[-0.025em] text-ink mt-[14px] mx-auto max-w-[720px]">
            Privacy notice
          </h1>
          <p className="mt-[18px] text-[16px] md:text-[17.5px] leading-[1.6] text-muted mx-auto max-w-[580px]">
            How we handle information you share with us through this website.
          </p>
        </Container>
      </section>

      <section className="py-[56px] md:py-[56px] md:pb-[80px]">
        <Container>
          <div
            data-reveal
            className="prose max-w-[760px] mx-auto bg-white border border-border rounded-[22px] p-7 sm:p-10 md:p-[48px_52px] shadow-[0_12px_34px_rgba(11,49,75,0.05)]"
          >
            <p className="text-[14px] text-faint m-0 mb-2">Effective: June 18, 2026</p>
            <p>
              This notice explains how Castor Dental Care (&quot;we,&quot; &quot;our,&quot; &quot;the practice&quot;) handles personal information submitted through this website (
              <a href={SITE.url + '/'}>castor-dental.vedryxtech.com</a>). It does <strong>not</strong> describe how we handle protected health information (PHI) collected during your in-office care — that information is governed separately by HIPAA and the Notice of Privacy Practices you receive at the office.
            </p>

            <h2>1. What this website collects</h2>
            <p>
              The only information this website actively collects is what you choose to send through the appointment request form. That is typically:
            </p>
            <ul>
              <li>Your name</li>
              <li>Your phone number</li>
              <li>Your email address (optional)</li>
              <li>The type of care you're interested in</li>
              <li>A preferred time and any short message you choose to include</li>
            </ul>
            <p>
              Please do <strong>not</strong> submit medical history, diagnoses, insurance ID numbers, or other sensitive health information through the website form. If you need to discuss medical details, call our office at{' '}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a>.
            </p>

            <h2>2. How we use what you send</h2>
            <p>
              We use the information you submit through this site for one purpose: to contact you back so we can confirm an appointment time, answer your question, or follow up about your visit. We do not sell or share form submissions with advertisers or unrelated third parties.
            </p>

            <h2>3. How we protect it</h2>
            <p>
              Form submissions are transmitted over an encrypted (HTTPS) connection and are accessed only by office staff who handle scheduling. Where the request is processed by trusted infrastructure providers (such as our website host), those providers are bound by their own confidentiality and security obligations.
            </p>

            <h2>4. Cookies and analytics</h2>
            <p>
              This site does not set advertising cookies. We may use basic, privacy-respecting analytics to understand how visitors find and use the site (e.g., which pages are most useful). These analytics do not identify you personally.
            </p>

            <h2>5. Children's privacy</h2>
            <p>
              This site is not directed at children under 13. We do not knowingly collect information from children online. Parents and guardians of pediatric patients should contact the office directly to schedule.
            </p>

            <h2>6. HIPAA and your dental records</h2>
            <p>
              Once you become a patient, the dental records and protected health information we collect during care are governed by our Notice of Privacy Practices under HIPAA. We provide that notice in-office at your first visit. Nothing on this website is intended to replace or modify it.
            </p>

            <h2>7. Updates to this notice</h2>
            <p>
              We may update this notice from time to time. Any material change will be reflected in the &quot;Effective&quot; date above. Continued use of the website after a change indicates acceptance of the updated notice.
            </p>

            <h2>8. Contact us</h2>
            <p>
              Questions about this notice or about how we handle your information? Call{' '}
              <a href={`tel:${SITE.phoneTel}`}>{SITE.phone}</a> or email{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Our office is located at {SITE.street}, {SITE.region_full}.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
