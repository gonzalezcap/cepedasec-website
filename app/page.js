import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ValueProps from '@/components/ValueProps';
import EventShowcase from '@/components/EventShowcase';
import Testimonials from '@/components/Testimonials';
import BookingCTA from '@/components/BookingCTA';

export const metadata = {
  title: 'Cepedas Event Center - Premier Venue in Tulsa',
  description:
    'Elegant event center in Tulsa, OK. Perfect for weddings, quinceañeras, corporate galas, and celebrations. 334 guests, full AV, bridal suite.',
  openGraph: {
    title: 'Cepedas Event Center - Premier Venue in Tulsa',
    description: 'Elegant venue for weddings, quinceañeras, corporate events, and celebrations.',
    url: 'https://cepedasec.com',
  },
};

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Cepedas Event Center',
    image: 'https://cepedasec.com/images/logo.png',
    description:
      'Elegant event center in Tulsa, Oklahoma for weddings, quinceañeras, corporate galas, and celebrations.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1444 S 193rd E Ave',
      addressLocality: 'Tulsa',
      addressRegion: 'OK',
      postalCode: '74108',
      addressCountry: 'US',
    },
    telephone: '918-830-3692',
    email: 'info@cepedasec.com',
    priceRange: '$$',
    sameAs: ['https://www.instagram.com/cepedasec'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '36.1699',
      longitude: '-95.8711',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero />
      <ValueProps />
      <EventShowcase />
      <section id="spaces" className="section-padding container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center gold mb-12">
          Our Spaces
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Main Hall', desc: '334 Seated • 14,000+ sq ft • Full AV • Professional Lighting' },
            { title: 'Bridal Suite', desc: 'Private Prep • Full Mirrors • Vanities • Seating' },
            { title: 'Prep Kitchen', desc: 'Catering Support • Refrigeration • Warming Equipment' },
            { title: 'Parking', desc: '40 Dedicated Spots • Climate-Controlled • Well-Lit' },
          ].map((space, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-gold-600/20 hover:border-gold-600/40 transition-all hover:bg-gold-600/5 group"
            >
              <h3 className="text-xl font-bold gold mb-3 group-hover:text-gold-accent transition">
                {space.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">{space.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Testimonials />
      <BookingCTA />
    </>
  );
}
