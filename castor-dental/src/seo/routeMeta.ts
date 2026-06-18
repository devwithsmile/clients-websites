import { SITE } from '../data/site'
import { buildDentistSchema } from '../schemas/dentist'
import { buildFaqSchema } from '../schemas/faq'
import { buildMedicalProcedureSchema } from '../schemas/medicalProcedure'

export interface RouteMeta {
  path: string // app route path
  outPath: string // file path under dist
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
  schemas: Record<string, unknown>[]
}

const dentist = buildDentistSchema()

export const ROUTE_META: RouteMeta[] = [
  {
    path: '/',
    outPath: 'index.html',
    title: 'Castor Dental Care | Dentist on Castor Avenue, Philadelphia PA 19149',
    description:
      'Castor Dental Care — family, cosmetic, implant, Invisalign & sedation dentistry on Castor Avenue, Northeast Philadelphia. New patients welcome. Call (215) 728-1144.',
    canonical: `${SITE.url}/`,
    ogTitle:
      'Castor Dental Care | Dentist on Castor Avenue, Philadelphia PA',
    ogDescription:
      'Modern dental care for every stage of life — preventive, cosmetic, restorative, implants, Invisalign, and sedation dentistry in Northeast Philadelphia. New patients: $169 exam + X-rays.',
    ogImage: `${SITE.url}/assets/images/family.jpg`,
    twitterTitle:
      'Castor Dental Care | Dentist on Castor Avenue, Philadelphia PA',
    twitterDescription:
      'Modern dental care in Northeast Philadelphia — family, cosmetic, implants, Invisalign & sedation. New patient offer: $169 exam + X-rays.',
    twitterImage: `${SITE.url}/assets/images/family.jpg`,
    schemas: [dentist, buildFaqSchema()],
  },
  {
    path: '/about',
    outPath: 'about/index.html',
    title: 'Meet Our Dentists | Castor Dental Care — Philadelphia, PA',
    description:
      'Dr. Joseph Mikolajewski DMD (UPenn 2001) and Dr. Livia Stancu DDS bring board-certified, patient-first care to Castor Avenue, Northeast Philadelphia. Learn about our practice.',
    canonical: `${SITE.url}/about`,
    ogTitle: 'Meet Our Dentists | Castor Dental Care Philadelphia',
    ogDescription:
      'Dr. Joseph Mikolajewski DMD and Dr. Livia Stancu DDS — board-certified dentists serving Northeast Philadelphia families from 7258 Castor Avenue.',
    ogImage: `${SITE.url}/assets/images/dr-mikolajewski.jpg`,
    twitterTitle: 'Meet Our Dentists | Castor Dental Care Philadelphia',
    twitterDescription:
      'Dr. Mikolajewski DMD (UPenn) and Dr. Stancu DDS — board-certified care at 7258 Castor Avenue, Philadelphia PA 19149.',
    twitterImage: `${SITE.url}/assets/images/dr-mikolajewski.jpg`,
    schemas: [dentist],
  },
  {
    path: '/services',
    outPath: 'services/index.html',
    title: 'Dental Services in Philadelphia | Castor Dental Care — Castor Avenue',
    description:
      'Full-service dentistry in Northeast Philadelphia: preventive, cosmetic, implants, Invisalign, sedation & restorative care. Castor Dental Care, 7258 Castor Ave, Philadelphia PA 19149.',
    canonical: `${SITE.url}/services`,
    ogTitle: 'Dental Services in Philadelphia | Castor Dental Care',
    ogDescription:
      'Preventive, cosmetic, restorative, implant, Invisalign, and sedation dentistry — all under one roof on Castor Avenue, Northeast Philadelphia.',
    ogImage: `${SITE.url}/assets/images/service-family-dentistry.jpg`,
    twitterTitle: 'Dental Services | Castor Dental Care, Philadelphia PA',
    twitterDescription:
      'Family, cosmetic, implant, Invisalign, restorative, and sedation dentistry at 7258 Castor Avenue, Northeast Philadelphia.',
    twitterImage: `${SITE.url}/assets/images/service-family-dentistry.jpg`,
    schemas: [dentist, buildMedicalProcedureSchema()],
  },
  {
    path: '/gallery',
    outPath: 'gallery/index.html',
    title:
      'Smile Gallery | Before & After Results — Castor Dental Care Philadelphia',
    description:
      'View before-and-after smile results from Castor Dental Care on Castor Avenue, Philadelphia. Cosmetic, restorative, and implant cases from our Northeast Philadelphia practice.',
    canonical: `${SITE.url}/gallery`,
    ogTitle:
      'Smile Gallery | Before & After — Castor Dental Care Philadelphia',
    ogDescription:
      'Before and after dental results from our Northeast Philadelphia practice — cosmetic, whitening, implants, and smile makeovers at Castor Dental Care.',
    ogImage: `${SITE.url}/assets/images/gallery-1-after.png`,
    twitterTitle: 'Smile Gallery | Castor Dental Care Philadelphia',
    twitterDescription:
      'Before and after cases from our Philadelphia dental practice — veneers, whitening, implants, and cosmetic dentistry results.',
    twitterImage: `${SITE.url}/assets/images/gallery-1-after.png`,
    schemas: [dentist],
  },
  {
    path: '/financing',
    outPath: 'financing/index.html',
    title:
      'New Patients & Dental Financing | Castor Dental Care — Philadelphia PA',
    description:
      'New patient offer: comprehensive exam + X-rays for $169. Castor Dental Care accepts 35+ insurance plans including Delta Dental, Aetna, CIGNA & MetLife. Philadelphia PA 19149.',
    canonical: `${SITE.url}/financing`,
    ogTitle:
      'New Patients & Dental Financing | Castor Dental Care Philadelphia',
    ogDescription:
      '$169 new patient exam + X-rays. We accept Delta Dental, Aetna, CIGNA, MetLife, Blue Cross, Guardian, United Healthcare and 35+ other insurance plans in Philadelphia PA.',
    ogImage: `${SITE.url}/assets/images/family.jpg`,
    twitterTitle:
      'Dental Financing & Insurance | Castor Dental Care Philadelphia',
    twitterDescription:
      'New patient exam + X-rays for $169. Accepts Delta Dental, Aetna, CIGNA, MetLife and 35+ carriers. Northeast Philadelphia dentist.',
    twitterImage: `${SITE.url}/assets/images/family.jpg`,
    schemas: [dentist],
  },
  {
    path: '/contact',
    outPath: 'contact/index.html',
    title:
      'Contact & Appointments | Castor Dental Care — 7258 Castor Ave, Philadelphia PA',
    description:
      'Request an appointment at Castor Dental Care, 7258 Castor Avenue, Philadelphia PA 19149. Call (215) 728-1144. Open Mon–Fri. New patients welcome.',
    canonical: `${SITE.url}/contact`,
    ogTitle:
      'Contact Castor Dental Care | Request an Appointment in Philadelphia',
    ogDescription:
      'Book your visit at 7258 Castor Avenue, Philadelphia PA 19149. Call (215) 728-1144 or request online. Open Mon–Tue 9–7, Wed–Thu 9–6, Fri 9–2.',
    ogImage: `${SITE.url}/assets/images/family.jpg`,
    twitterTitle: 'Contact Castor Dental Care | Philadelphia PA 19149',
    twitterDescription:
      'Request an appointment online or call (215) 728-1144. 7258 Castor Avenue, Philadelphia PA. Open Mon–Fri.',
    twitterImage: `${SITE.url}/assets/images/family.jpg`,
    schemas: [dentist],
  },
  {
    path: '/privacy',
    outPath: 'privacy/index.html',
    title: 'Privacy Notice | Castor Dental Care — Philadelphia PA',
    description:
      'Privacy notice for Castor Dental Care, 7258 Castor Avenue, Philadelphia PA 19149. How we handle information submitted through our website.',
    canonical: `${SITE.url}/privacy`,
    ogTitle: 'Privacy Notice | Castor Dental Care Philadelphia',
    ogDescription:
      'How Castor Dental Care handles information submitted through our website appointment request form.',
    ogImage: `${SITE.url}/assets/images/family.jpg`,
    twitterTitle: 'Privacy Notice | Castor Dental Care Philadelphia',
    twitterDescription:
      'How Castor Dental Care handles information submitted through our website.',
    twitterImage: `${SITE.url}/assets/images/family.jpg`,
    schemas: [dentist],
  },
]

export function renderHeadHtml(meta: RouteMeta): string {
  const esc = (s: string) =>
    s
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  const lines: string[] = []
  lines.push(`<title>${esc(meta.title)}</title>`)
  lines.push(`<meta name="description" content="${esc(meta.description)}" />`)
  lines.push(`<link rel="canonical" href="${esc(meta.canonical)}" />`)
  lines.push(`<meta property="og:title" content="${esc(meta.ogTitle)}" />`)
  lines.push(
    `<meta property="og:description" content="${esc(meta.ogDescription)}" />`,
  )
  lines.push(`<meta property="og:url" content="${esc(meta.canonical)}" />`)
  lines.push(`<meta property="og:type" content="website" />`)
  lines.push(`<meta property="og:image" content="${esc(meta.ogImage)}" />`)
  lines.push(`<meta name="twitter:card" content="summary_large_image" />`)
  lines.push(
    `<meta name="twitter:title" content="${esc(meta.twitterTitle)}" />`,
  )
  lines.push(
    `<meta name="twitter:description" content="${esc(meta.twitterDescription)}" />`,
  )
  lines.push(
    `<meta name="twitter:image" content="${esc(meta.twitterImage)}" />`,
  )
  for (const schema of meta.schemas) {
    lines.push(
      `<script type="application/ld+json">${JSON.stringify(schema)}</script>`,
    )
  }
  return lines.join('\n    ')
}
