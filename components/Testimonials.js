'use client';

import { TESTIMONIALS } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="section-padding container-max bg-gradient-to-br from-white/2 to-transparent">
      <h2 className="text-4xl md:text-5xl font-bold text-center gold mb-12">
        Client Stories
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="p-8 bg-white/2 border border-gold-600/20 hover:border-gold-600/40 transition-all hover:bg-white/3"
            style={{
              animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
            }}
          >
            <p className="text-gray-300 italic leading-relaxed mb-4">
              "{testimonial.quote}"
            </p>
            <p className="gold font-semibold">— {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
