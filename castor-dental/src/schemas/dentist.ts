import { SITE } from '../data/site'

export function buildDentistSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: SITE.name,
    url: `${SITE.url}/`,
    logo: `${SITE.url}/assets/images/castor-logo.png`,
    image: `${SITE.url}/assets/images/family.jpg`,
    description:
      'Full-service dental practice in Northeast Philadelphia offering preventive, cosmetic, restorative, implant, Invisalign, and sedation dentistry.',
    telephone: SITE.phoneTel,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.street,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      postalCode: SITE.postalCode,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Wednesday', 'Thursday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '09:00',
        closes: '14:00',
      },
    ],
    priceRange: '$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Check, Credit Card',
    areaServed: { '@type': 'City', name: 'Philadelphia' },
    medicalSpecialty: ['Dentistry', 'CosmeticDentistry'],
    employee: [
      {
        '@type': 'Physician',
        name: 'Dr. Joseph Mikolajewski',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'DMD',
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'University of Pennsylvania School of Dental Medicine',
        },
        jobTitle: 'Dentist',
      },
      {
        '@type': 'Physician',
        name: 'Dr. Livia Stancu',
        honorificPrefix: 'Dr.',
        honorificSuffix: 'DDS',
        jobTitle: 'Dentist',
      },
    ],
    hasMap: 'https://maps.google.com/?q=7258+Castor+Avenue+Philadelphia+PA+19149',
    sameAs: ['https://www.castordentalcare.com'],
  }
}
