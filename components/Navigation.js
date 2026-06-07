'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-dark-900/85 border-b border-gold-600/15 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold gold hover:text-gold-accent transition">
            CEPEDAS
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#home" className="text-sm font-medium text-gray-300 hover:gold transition">
              HOME
            </Link>
            <Link href="#spaces" className="text-sm font-medium text-gray-300 hover:gold transition">
              SPACES
            </Link>
            <Link href="#events" className="text-sm font-medium text-gray-300 hover:gold transition">
              EVENTS
            </Link>
            <Link href="#gallery" className="text-sm font-medium text-gray-300 hover:gold transition">
              GALLERY
            </Link>
            <Link href="#booking" className="text-sm font-medium text-gray-300 hover:gold transition">
              BOOK
            </Link>
          </div>

          {/* CTA Button */}
          <a
            href="#booking"
            className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-semibold text-sm rounded hover:shadow-lg hover:shadow-gold-600/30 transition"
          >
            TOUR
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a
              href="#home"
              className="block px-4 py-2 text-sm font-medium text-gray-300 hover:gold transition"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </a>
            <a
              href="#spaces"
              className="block px-4 py-2 text-sm font-medium text-gray-300 hover:gold transition"
              onClick={() => setIsOpen(false)}
            >
              SPACES
            </a>
            <a
              href="#events"
              className="block px-4 py-2 text-sm font-medium text-gray-300 hover:gold transition"
              onClick={() => setIsOpen(false)}
            >
              EVENTS
            </a>
            <a
              href="#gallery"
              className="block px-4 py-2 text-sm font-medium text-gray-300 hover:gold transition"
              onClick={() => setIsOpen(false)}
            >
              GALLERY
            </a>
            <a
              href="#booking"
              className="block px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-semibold text-sm rounded hover:shadow-lg transition"
              onClick={() => setIsOpen(false)}
            >
              BOOK TOUR
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
