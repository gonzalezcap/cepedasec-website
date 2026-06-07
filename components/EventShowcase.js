'use client';

export default function EventShowcase() {
  const events = [
    {
      id: 'wedding',
      emoji: '💍',
      title: 'Weddings',
      description:
        'Elegant ceremonies and unforgettable receptions. From intimate gatherings to grand celebrations, your love story deserves our stage.',
    },
    {
      id: 'quince',
      emoji: '👑',
      title: 'Quinceañeras',
      description:
        'Celebrate this momentous milestone in elegance. A space designed for joy, tradition, and the radiance of the guest of honor.',
    },
    {
      id: 'corporate',
      emoji: '🎯',
      title: 'Corporate Events',
      description:
        'Galas, award banquets, conferences, and holiday celebrations. Impress your guests with a venue that combines sophistication and functionality.',
    },
    {
      id: 'social',
      emoji: '🎊',
      title: 'Social Gatherings',
      description:
        'Anniversaries, birthdays, family reunions. Any occasion becomes extraordinary within these walls.',
    },
  ];

  return (
    <section id="events" className="section-padding container-max">
      <h2 className="text-4xl md:text-5xl font-bold text-center gold mb-12">
        Events We Host
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="p-8 bg-gradient-to-br from-white/3 to-white/1 border border-gold-600/20 hover:border-gold-600/40 transition-all hover:bg-gradient-to-br hover:from-gold-600/10 hover:to-gold-600/5 group"
            style={{
              animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
            }}
          >
            <div className="text-5xl mb-4 inline-block group-hover:scale-125 transition-transform duration-300">
              {event.emoji}
            </div>
            <h3 className="text-2xl font-bold gold mb-3 group-hover:text-gold-accent transition">
              {event.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{event.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
