'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gold-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <h1
          className={`text-5xl md:text-7xl font-bold gold mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Cepedas Event Center
        </h1>

        <p
          className={`text-lg md:text-xl text-gray-300 mb-8 font-light letter-spacing-wide transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Your Vision. Our Venue. Unforgettable Moments.
        </p>

        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <a
            href="#booking"
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-bold text-lg rounded hover:shadow-lg hover:shadow-gold-600/40 hover:-translate-y-1 transition-all"
          >
            BOOK YOUR TOUR
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gold-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
