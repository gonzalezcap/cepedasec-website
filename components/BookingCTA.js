'use client';

import { useState } from 'react';

export default function BookingCTA() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Netlify Forms will handle submission automatically
    // Just show success message after submit
    setTimeout(() => {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }, 500);
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-4 font-normal">
          Reserve Your Event
        </h2>
        <p className="text-gray-300 text-center mb-12">
          Complete the form below and our team will contact you within 24 hours.
        </p>

        {submitted && (
          <div className="mb-8 p-4 bg-green-900/20 border border-green-500/50 text-green-400 text-center rounded">
            ✓ Booking request received! We'll contact you soon.
          </div>
        )}

        <form name="booking" method="POST" onSubmit={handleSubmit} className="space-y-4">
          <input type="hidden" name="form-name" value="booking" />
          
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gold focus:outline-none" 
          />
          
          <input 
            type="email" 
            name="email" 
            placeholder="Email Address" 
            required 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gold focus:outline-none" 
          />
          
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gold focus:outline-none" 
          />
          
          <input 
            type="date" 
            name="eventDate" 
            placeholder="Preferred Event Date" 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gold focus:outline-none" 
          />
          
          <select 
            name="eventType" 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white focus:border-gold focus:outline-none"
          >
            <option value="">Select Event Type</option>
            <option value="Wedding">Wedding</option>
            <option value="Quinceañera">Quinceañera</option>
            <option value="Corporate">Corporate Event</option>
            <option value="Social">Social Gathering</option>
            <option value="Other">Other</option>
          </select>

          <input 
            type="number" 
            name="guests" 
            placeholder="Estimated Guest Count" 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gold focus:outline-none" 
          />
          
          <textarea 
            name="message" 
            placeholder="Additional Details or Questions" 
            rows="4" 
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:border-gold focus:outline-none resize-none"
          ></textarea>

          <button 
            type="submit" 
            className="w-full px-8 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-black transition-colors font-light tracking-wide"
          >
            Send Booking Request
          </button>
        </form>

        <p className="text-gray-500 text-center text-sm mt-6">
          Or call us directly: <span className="text-gold">918.830.3692</span>
        </p>
      </div>
    </section>
  );
}
