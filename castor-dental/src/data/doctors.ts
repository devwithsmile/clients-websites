export interface Doctor {
  name: string
  credential: string
  badge: string
  image: string
  alt: string
  bio: string
  quote?: string
  tags: string[]
}

export const DOCTORS: Doctor[] = [
  {
    name: 'Dr. Joseph Mikolajewski, DMD',
    credential: 'University of Pennsylvania, 2001',
    badge: 'Dr. Mikolajewski · DMD',
    image: '/assets/images/dr-mikolajewski.jpg',
    alt: 'Dr. Joseph Mikolajewski, DMD — Castor Dental Care',
    bio: 'Dr. Joseph Mikolajewski graduated from the University of Pennsylvania School of Dental Medicine in 2001 and is gifted in the art of cosmetic dentistry. He is always sensitive to your needs and focused on comprehensive, lasting results.',
    quote:
      'I believe in providing my patients with comprehensive treatment that keeps their interests at the forefront.',
    tags: ['University of Pennsylvania, 2001', 'Cosmetic dentistry'],
  },
  {
    name: 'Dr. Livia Stancu, DDS',
    credential: 'Castor Dental Care',
    badge: 'Dr. Stancu · DDS',
    image: '/assets/images/dr-stancu.jpg',
    alt: 'Dr. Livia Stancu, DDS — Castor Dental Care',
    bio: 'Dr. Livia Stancu helps patients understand their options across preventive, restorative, cosmetic, and specialty dental needs. Her calm, relaxed approach makes every visit feel reassuring — and her goal is always excellent, lasting oral health.',
    tags: ['Comprehensive care', 'Restorative & cosmetic'],
  },
]

// short, homepage-style cards
export const DOCTOR_CARDS = [
  {
    name: 'Dr. Joseph Mikolajewski, DMD',
    credential: 'University of Pennsylvania, 2001',
    image: '/assets/images/dr-mikolajewski.jpg',
    alt: 'Dr. Joseph Mikolajewski, DMD',
    blurb:
      'Gifted in the art of cosmetic dentistry. “I believe in providing my patients with comprehensive treatment that keeps their interests at the forefront.”',
  },
  {
    name: 'Dr. Livia Stancu, DDS',
    credential: 'Castor Dental Care',
    image: '/assets/images/dr-stancu.jpg',
    alt: 'Dr. Livia Stancu, DDS',
    blurb:
      'Helps patients understand their options across preventive, restorative, cosmetic, and specialty dental needs — always with a calm, relaxed approach.',
  },
] as const
