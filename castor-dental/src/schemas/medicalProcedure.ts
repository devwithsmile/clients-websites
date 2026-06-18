const PROVIDER = {
  '@type': 'Dentist',
  name: 'Castor Dental Care',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '7258 Castor Avenue',
    addressLocality: 'Philadelphia',
    addressRegion: 'PA',
    postalCode: '19149',
  },
}

export function buildMedicalProcedureSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalProcedure',
        name: 'Teeth Whitening',
        procedureType: 'CosmeticProcedure',
        description:
          'Professional teeth whitening to lighten tooth enamel and remove stains, producing a brighter smile. Available at Castor Dental Care, Philadelphia PA.',
        bodyLocation: 'Teeth',
        followup: 'Results typically last 6–12 months with proper maintenance.',
        howPerformed:
          'In-office or take-home whitening trays prescribed by a dentist.',
        indication: {
          '@type': 'MedicalIndication',
          name: 'Tooth discoloration or staining',
        },
        provider: PROVIDER,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Dental Implant Placement',
        procedureType: 'SurgicalProcedure',
        description:
          'Surgical placement of a titanium implant post into the jaw to support a permanent replacement tooth. Single and multiple implants available at Castor Dental Care, Philadelphia PA.',
        bodyLocation: 'Jaw and teeth',
        followup:
          'Healing period of 3–6 months before final restoration attachment.',
        howPerformed:
          'Oral surgical procedure performed under local anesthesia; bone grafting may be required before implant placement.',
        indication: {
          '@type': 'MedicalIndication',
          name: 'Missing or extracted teeth',
        },
        provider: PROVIDER,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Invisalign Clear Aligner Therapy',
        procedureType: 'TherapeuticProcedure',
        description:
          'Custom clear aligner therapy to straighten misaligned teeth without traditional metal braces. Available for adults and teens at Castor Dental Care, Philadelphia PA.',
        bodyLocation: 'Teeth and jaw',
        followup:
          'Retainer use recommended after completion to maintain results.',
        howPerformed:
          'Series of custom-fitted, removable clear plastic aligners worn progressively to shift teeth into alignment.',
        indication: {
          '@type': 'MedicalIndication',
          name: 'Malocclusion, crowding, or spacing issues',
        },
        provider: PROVIDER,
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Oral Sedation Dentistry',
        procedureType: 'TherapeuticProcedure',
        description:
          'Oral sedation using prescribed medication to help anxious patients relax during dental procedures. Available at Castor Dental Care, Northeast Philadelphia.',
        bodyLocation: 'Systemic (central nervous system)',
        preparation:
          'Patient must arrange a driver; avoid food/drink as instructed pre-appointment.',
        howPerformed:
          'Oral sedative medication taken before the procedure; patient remains conscious but deeply relaxed.',
        indication: {
          '@type': 'MedicalIndication',
          name: 'Dental anxiety or phobia',
        },
        provider: PROVIDER,
      },
    ],
  }
}
