// Venue Information
export const VENUE_INFO = {
  name: 'Cepedas Event Center',
  address: '1444 S 193rd E Ave, Tulsa, OK 74108',
  phone: '918-830-3692',
  email: 'info@cepedasec.com',
  zipCode: '74108',
  capacity: 334,
  mainHallSqFt: 14000,
  parkingSpots: 40,
};

// Event Types
export const EVENT_TYPES = [
  { id: 'wedding', label: 'Wedding', emoji: '💍' },
  { id: 'quince', label: 'Quinceañera', emoji: '👑' },
  { id: 'corporate', label: 'Corporate Event', emoji: '🎯' },
  { id: 'social', label: 'Social Gathering', emoji: '🎊' },
  { id: 'other', label: 'Other', emoji: '✨' },
];

// Gallery Images (placeholder data - replace with actual images)
export const GALLERY_ITEMS = [
  {
    id: 1,
    category: 'weddings',
    title: 'Elegant Wedding Reception',
    src: '/images/gallery/wedding-1.jpg',
  },
  {
    id: 2,
    category: 'quinceañeras',
    title: 'Grand Quinceañera Ball',
    src: '/images/gallery/quince-1.jpg',
  },
  {
    id: 3,
    category: 'corporate',
    title: 'Corporate Gala Evening',
    src: '/images/gallery/corporate-1.jpg',
  },
  {
    id: 4,
    category: 'details',
    title: 'Elegant Table Details',
    src: '/images/gallery/details-1.jpg',
  },
  {
    id: 5,
    category: 'weddings',
    title: 'First Dance Moment',
    src: '/images/gallery/wedding-2.jpg',
  },
  {
    id: 6,
    category: 'corporate',
    title: 'Sophisticated Ambiance',
    src: '/images/gallery/corporate-2.jpg',
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    quote: 'Cepedas made our wedding absolutely perfect. From the bridal suite to the dance floor, every detail was impeccable.',
    author: 'The Johnson Family',
    eventType: 'wedding',
  },
  {
    id: 2,
    quote: 'The staff helped us create a quinceañera our daughter will never forget. The venue was stunning and the service was exceptional.',
    author: 'The Rodriguez Family',
    eventType: 'quince',
  },
  {
    id: 3,
    quote: 'Our corporate gala was a huge success. Cepedas provided the perfect elegant backdrop for impressing our clients.',
    author: 'Tech Solutions Inc.',
    eventType: 'corporate',
  },
];

// FAQ Items
export const FAQ_ITEMS = [
  {
    id: 1,
    question: "What's included in the venue rental?",
    answer: 'Our rental includes tables, chairs, premium linens, full AV system with projectors and screens, professional lighting control, parking for 40 vehicles, and event coordination support.',
  },
  {
    id: 2,
    question: 'Can I bring my own caterer?',
    answer: 'Absolutely. We work seamlessly with all catering partners. Our prep kitchen is fully equipped to support your caterer\'s needs.',
  },
  {
    id: 3,
    question: 'Can I decorate the venue?',
    answer: 'Yes. Our team will collaborate with you to bring your vision to life. We support all décor styles and themes.',
  },
  {
    id: 4,
    question: 'How far in advance should I book?',
    answer: 'We recommend 3–6 months in advance for peak seasons, but we\'ll work with you based on availability.',
  },
  {
    id: 5,
    question: 'What\'s your cancellation policy?',
    answer: 'Please contact our team directly for details on our cancellation and refund policies.',
  },
  {
    id: 6,
    question: 'Do you offer event planning services?',
    answer: 'We provide event coordination support as part of our package. For full planning services, we can recommend trusted partners in the area.',
  },
  {
    id: 7,
    question: 'Can I have a ceremony and reception in the same venue?',
    answer: 'Yes. Many of our couples hold both their ceremony and reception in our main hall with a décor transition between events.',
  },
  {
    id: 8,
    question: 'Are you available year-round?',
    answer: 'We\'re open by appointment year-round. Contact us to check availability for your preferred date.',
  },
];

// SEO Keywords
export const SEO_KEYWORDS = {
  home: 'event center Tulsa, wedding venue Tulsa, event space Tulsa, banquet hall Oklahoma',
  spaces: 'venue spaces, event hall, bridal suite, event center Tulsa',
  events: 'wedding venue, quinceañera venue, corporate event space, party venue Tulsa',
  gallery: 'event venue photos, wedding venue gallery, quinceañera venue, Tulsa events',
  booking: 'book event venue, reserve event center, tour venue, contact event center',
};

// Social Media
export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/cepedasec',
  facebook: 'https://facebook.com/cepedasec',
};

// Navigation Items
export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Book', href: '#booking' },
];
