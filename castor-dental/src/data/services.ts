export interface ServiceCategory {
  title: string
  blurb: string
  iconKey: string
  items: string[]
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    title: 'Family & Preventive',
    blurb: 'Routine care that keeps every smile healthy.',
    iconKey: 'shield',
    items: [
      'Dental exams',
      'Cleanings',
      'Digital X-rays',
      'Dental sealants',
      'Home care guidance',
      'Wisdom teeth',
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    blurb: 'Brighter, even, more confident smiles.',
    iconKey: 'heart',
    items: [
      'Porcelain veneers',
      'Teeth whitening',
      'Composite fillings',
      'Lumineers',
      'Smile makeovers',
      'Cosmetic bonding',
    ],
  },
  {
    title: 'Restorative Dentistry',
    blurb: 'Repair damaged, worn, or painful teeth.',
    iconKey: 'tooth',
    items: [
      'Porcelain crowns',
      'Fixed bridges',
      'Root canal therapy',
      'Bone grafting',
      'Inlays & onlays',
      'Tooth extractions',
    ],
  },
  {
    title: 'Dental Implants',
    blurb: 'A permanent solution for missing teeth.',
    iconKey: 'tooth2',
    items: [
      'Single implants',
      'Multiple implants',
      'Implant restorations',
      'Full treatment plan',
    ],
  },
  {
    title: 'Invisalign',
    blurb: 'Straighten teeth discreetly with clear aligners.',
    iconKey: 'bolt',
    items: [
      'Clear aligner therapy',
      'Custom treatment plan',
      'Discreet & removable',
      'Adults & teens',
    ],
  },
  {
    title: 'Sedation Dentistry',
    blurb: 'Calm, anxiety-free visits for nervous patients.',
    iconKey: 'moon',
    items: [
      'Oral sedation',
      'Anxiety management',
      'Comfortable procedures',
      'Dentist-guided plan',
    ],
  },
]

// short cards for the home services preview
export interface ServiceCardData {
  title: string
  blurb: string
  iconKey: string
}

export const HOME_SERVICES: ServiceCardData[] = [
  {
    title: 'Dental Implants',
    blurb: 'Replace missing teeth with a stable, natural-looking, permanent solution.',
    iconKey: 'tooth',
  },
  {
    title: 'Invisalign',
    blurb: 'Straighten teeth discreetly with clear aligner therapy built around your goals.',
    iconKey: 'bolt',
  },
  {
    title: 'Cosmetic Dentistry',
    blurb: 'Veneers, whitening, and aesthetic makeovers for a brighter, even smile.',
    iconKey: 'heart',
  },
  {
    title: 'Crowns & Restorations',
    blurb: 'Composite fillings, porcelain crowns, bridges, and root canal therapy.',
    iconKey: 'shield',
  },
  {
    title: 'Sedation Dentistry',
    blurb: 'Oral sedation helps anxious patients complete care with a calm visit.',
    iconKey: 'moon',
  },
  {
    title: 'Family Dentistry',
    blurb: 'Cleanings, exams, X-rays, sealants, and gentle care for every age.',
    iconKey: 'users',
  },
]

export const PATHWAYS = [
  {
    title: 'Keep my teeth healthy',
    blurb:
      'Preventive care for families — cleanings, exams, X-rays, sealants, and long-term oral health.',
    iconKey: 'shield',
    linkLabel: 'Explore preventive care',
  },
  {
    title: 'Fix pain or damage',
    blurb:
      'Restorative pathways for cracked, missing, infected, or painful teeth — from fillings to oral surgery.',
    iconKey: 'bolt',
    linkLabel: 'Explore restorative care',
  },
  {
    title: 'Improve my smile',
    blurb:
      'Cosmetic and alignment care — whitening, veneers, Invisalign, and implants for lasting confidence.',
    iconKey: 'smile',
    linkLabel: 'Explore smile care',
  },
] as const
