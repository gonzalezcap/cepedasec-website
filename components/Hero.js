'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen bg-black flex items-center justify-center pt-20">
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-40"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-serif text-gold mb-6 tracking-wide">
          CEPEDAS
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
          An elegant venue designed for your most celebrated moments. 334 guests, 
          premium amenities, and flawless execution.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/book" className="px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-colors font-light tracking-wide">
            Reserve Your Event
          </a>
          <a href="#experience" className="px-8 py-3 text-gold hover:text-gold/70 transition-colors font-light tracking-wide border-b border-gold">
            Explore More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-gold text-sm font-light animate-bounce">↓</div>
      </div>
    </section>
  );
}
