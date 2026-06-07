'use client';

export default function EventShowcase() {
  const events = [
    {
      title: 'Weddings',
      description: 'Elegant ceremonies and unforgettable receptions. From intimate gatherings to grand celebrations, your love story deserves our stage.',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop'
    },
    {
      title: 'Quinceañeras',
      description: 'Celebrate this momentous milestone in elegance. A space designed for joy, tradition, and the radiance of the guest of honor.',
      image: 'https://images.unsplash.com/photo-1519225421923-7bcbcf2099f1?w=400&h=400&fit=crop'
    },
    {
      title: 'Corporate Events',
      description: 'Galas, award banquets, conferences, and holiday celebrations. Impress your guests with a venue that combines sophistication and functionality.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop'
    },
    {
      title: 'Social Gatherings',
      description: 'Anniversaries, birthdays, family reunions. Any occasion becomes extraordinary within these walls.',
      image: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-16 font-normal">
          Events We Host
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Placeholder Image */}
              <div className="relative h-64 mb-6 bg-gray-800 rounded overflow-hidden">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <p className="text-gray-400 text-sm">Event Photo (Coming Soon)</p>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-serif text-gold mb-4 font-normal">
                {event.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
