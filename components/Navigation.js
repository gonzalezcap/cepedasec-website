'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);

  return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-gold/20 z-50">
          <div className="container-max px-6 py-4">
            <div className="flex items-center justify-between">
  {/* Logo */}
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-serif text-gold tracking-wide">CEPEDAS</span>
    </Link>

  {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                          <Link href="#home" className="text-white hover:text-gold transition-colors font-light">Home</Link>
              <Link href="#spaces" className="text-white hover:text-gold transition-colors font-light">Spaces</Link>
              <Link href="#events" className="text-white hover:text-gold transition-colors font-light">Events</Link>
              <Link href="#gallery" className="text-white hover:text-gold transition-colors font-light">Gallery</Link>
              <Link href="#experience" className="text-white hover:text-gold transition-colors font-light">Experience</Link>
              <Link href="/book" className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-black transition-colors">Book</Link>
              </div>

  {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gold"
            >
              {isOpen ? '✕' : '☰'}
</button>
  </div>

{/* Mobile Navigation */}
{isOpen && (
            <div className="md:hidden pt-4 border-t border-gold/20 mt-4">
              <div className="flex flex-col gap-4">
                <Link href="#home" className="text-white hover:text-gold">Home</Link>
               <Link href="#spaces" className="text-white hover:text-gold">Spaces</Link>
               <Link href="#events" className="text-white hover:text-gold">Events</Link>
               <Link href="#gallery" className="text-white hover:text-gold">Gallery</Link>
               <Link href="#experience" className="text-white hover:text-gold">Experience</Link>
               <Link href="/book" className="px-4 py-2 border border-gold text-gold">Book</Link>
  </div>
  </div>
         )}
</div>
  </nav>
  );
}
