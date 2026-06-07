'use client';

export default function ValueProps() {
  const values = [
    {
      icon: '✨',
      title: 'Elegance',
      description: 'Pristine spaces designed for your most celebrated moments',
    },
    {
      icon: '👥',
      title: 'Capacity',
      description: '334 Seated Guests + Standing Room Available',
    },
    {
      icon: '🎯',
      title: 'Full Service',
      description: 'Bridal Suite, Prep Area, Premium AV Systems',
    },
  ];

  return (
    <section className="section-padding container-max">
      <div className="grid md:grid-cols-3 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-8 bg-white/2 border border-gold-600/20 hover:border-gold-600/40 transition-all hover:bg-gold-600/5 text-center group"
            style={{
              animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
            }}
          >
            <div className="text-5xl mb-4 inline-block group-hover:scale-110 transition-transform">
              {value.icon}
            </div>
            <h3 className="text-xl font-bold gold mb-3 group-hover:text-gold-accent transition">
              {value.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
