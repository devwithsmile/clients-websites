export interface GalleryCase {
  tag: string
  caption: string
  before: { src: string; alt: string }
  after: { src: string; alt: string }
}

export const GALLERY_CASES: GalleryCase[] = [
  {
    tag: 'Porcelain Veneers',
    caption: 'A natural, even front smile',
    before: {
      src: '/assets/images/gallery-1-before.png',
      alt: 'Porcelain veneers — before treatment, Castor Dental Care Philadelphia',
    },
    after: {
      src: '/assets/images/gallery-1-after.png',
      alt: 'Porcelain veneers — after treatment, Castor Dental Care Philadelphia',
    },
  },
  {
    tag: 'Teeth Whitening',
    caption: 'Brighter by several shades',
    before: {
      src: '/assets/images/gallery-2-before.png',
      alt: 'Professional teeth whitening — before treatment, Castor Dental Care Philadelphia',
    },
    after: {
      src: '/assets/images/gallery-2-after.png',
      alt: 'Professional teeth whitening — after treatment, Castor Dental Care Philadelphia',
    },
  },
  {
    tag: 'Porcelain Crowns',
    caption: 'A damaged tooth restored',
    before: {
      src: '/assets/images/gallery-3-before.png',
      alt: 'Porcelain crown restoration — before treatment, Castor Dental Care Philadelphia',
    },
    after: {
      src: '/assets/images/gallery-3-after.png',
      alt: 'Porcelain crown restoration — after treatment, Castor Dental Care Philadelphia',
    },
  },
  {
    tag: 'Invisalign',
    caption: 'Straighter, aligned smile',
    before: {
      src: '/assets/images/gallery-4-before.png',
      alt: 'Invisalign clear aligner therapy — before treatment, Castor Dental Care Philadelphia',
    },
    after: {
      src: '/assets/images/gallery-4-after.png',
      alt: 'Invisalign clear aligner therapy — after treatment, Castor Dental Care Philadelphia',
    },
  },
  {
    tag: 'Dental Implants',
    caption: 'A missing tooth replaced',
    before: {
      src: '/assets/images/gallery-5-before.png',
      alt: 'Dental implant — before treatment, Castor Dental Care Philadelphia',
    },
    after: {
      src: '/assets/images/gallery-5-after.png',
      alt: 'Dental implant — after treatment, Castor Dental Care Philadelphia',
    },
  },
  {
    tag: 'Cosmetic Bonding',
    caption: 'Chips and gaps smoothed',
    before: {
      src: '/assets/images/gallery-6-before.png',
      alt: 'Cosmetic bonding for chips and gaps — before treatment, Castor Dental Care Philadelphia',
    },
    after: {
      src: '/assets/images/gallery-6-after.png',
      alt: 'Cosmetic bonding for chips and gaps — after treatment, Castor Dental Care Philadelphia',
    },
  },
]

// homepage preview tags (4 short ones)
export const GALLERY_PREVIEW = [
  { tag: 'Veneers', case: GALLERY_CASES[0] },
  { tag: 'Whitening', case: GALLERY_CASES[1] },
  { tag: 'Crowns', case: GALLERY_CASES[2] },
  { tag: 'Invisalign', case: GALLERY_CASES[3] },
] as const
