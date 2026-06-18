export const SITE = {
  name: 'Castor Dental Care',
  url: 'https://castor-dental.vedryxtech.com',
  phone: '215-728-1144',
  phoneTel: '+12157281144',
  email: 'castordentist@gmail.com',
  street: '7258 Castor Avenue',
  city: 'Philadelphia',
  region: 'PA',
  postalCode: '19149',
  region_full: 'Philadelphia, PA 19149',
  geo: { lat: 40.0523, lng: -75.0647 },
  hours: [
    { label: 'Monday – Tuesday', time: '9 AM – 7 PM' },
    { label: 'Wednesday – Thursday', time: '9 AM – 6 PM' },
    { label: 'Friday', time: '9 AM – 2 PM' },
    { label: 'Saturday – Sunday', time: 'Closed' },
  ],
  hoursSummary: 'Mon–Tue 9–7 · Wed–Thu 9–6 · Fri 9–2',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=7258%20Castor%20Avenue%20Philadelphia%20PA%2019149',
  mapsEmbed:
    'https://www.google.com/maps?q=7258+Castor+Ave,+Philadelphia,+PA+19149&output=embed',
  social: {
    facebook: 'https://www.facebook.com/CastorDentalCare/',
    youtube: 'https://www.youtube.com/user/castordentalcare',
  },
} as const

export const NAV = [
  { path: '/', label: 'Home', key: 'home' },
  { path: '/about', label: 'About', key: 'about' },
  { path: '/services', label: 'Services', key: 'services' },
  { path: '/gallery', label: 'Smile Gallery', key: 'gallery' },
  { path: '/financing', label: 'Financing', key: 'financing' },
  { path: '/contact', label: 'Contact', key: 'contact' },
] as const

export const MAILTO_APPOINTMENT =
  'mailto:castordentist@gmail.com?subject=Appointment%20request%20%E2%80%94%20Castor%20Dental%20Care&body=Hi%20Castor%20Dental%20Care%2C%0A%0AI%27d%20like%20to%20request%20an%20appointment.%0A%0AName%3A%0APhone%3A%0APreferred%20service%3A%0APreferred%20day%2Ftime%3A%0A%0AThank%20you.'
