'use client';

import { useState } from 'react';
import { sendInquiry } from '@/lib/emailjs';
import { EVENT_TYPES, FAQ_ITEMS } from '@/lib/constants';
import { ChevronDown } from 'lucide-react';

export default function BookingCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [openFAQ, setOpenFAQ] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await sendInquiry(formData);
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
        setTimeout(() => setSubmitStatus(null), 4000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Booking Section */}
      <section id="booking" className="section-padding container-max">
        <h2 className="text-4xl md:text-5xl font-bold text-center gold mb-4">
          Request a Tour
        </h2>
        <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
          See our venue for yourself. Let's create something unforgettable together.
        </p>

        <div className="max-w-md mx-auto p-8 bg-white/2 border border-gold-600/20 rounded">
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-900/30 border border-green-600/50 rounded text-green-400 text-sm text-center">
              ✓ Thank you! We'll contact you within 24 hours.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-900/30 border border-red-600/50 rounded text-red-400 text-sm text-center">
              Something went wrong. Please try again.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-gold-600/20 text-white placeholder-gray-600 focus:border-gold-600 focus:outline-none focus:bg-white/10 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-gold-600/20 text-white placeholder-gray-600 focus:border-gold-600 focus:outline-none focus:bg-white/10 transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/5 border border-gold-600/20 text-white placeholder-gray-600 focus:border-gold-600 focus:outline-none focus:bg-white/10 transition"
            />

            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-gold-600/20 text-white focus:border-gold-600 focus:outline-none focus:bg-white/10 transition cursor-pointer"
            >
              <option value="">Select Event Type</option>
              {EVENT_TYPES.map((type) => (
                <option key={type.id} value={type.id}>
                  {type.label}
                </option>
              ))}
            </select>

            <textarea
              name="message"
              placeholder="Tell us about your vision..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-3 bg-white/5 border border-gold-600/20 text-white placeholder-gray-600 focus:border-gold-600 focus:outline-none focus:bg-white/10 transition resize-none"
            />

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-gradient-to-r from-gold-600 to-gold-500 text-dark-900 font-bold rounded hover:shadow-lg hover:shadow-gold-600/40 disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {isSubmitting ? 'SENDING...' : 'REQUEST TOUR'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gold-600/20 text-center text-sm text-gray-400">
            <p className="font-semibold text-gold mb-3">Direct Contact</p>
            <p>📞 918-830-3692</p>
            <p>📧 info@cepedasec.com</p>
            <p>📍 1444 S 193rd E Ave, Tulsa, OK 74108</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding container-max bg-gradient-to-br from-white/2 to-transparent">
        <h2 className="text-4xl md:text-5xl font-bold text-center gold mb-12">
          Frequently Asked
        </h2>

        <div className="max-w-2xl mx-auto space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <div key={item.id} className="border border-gold-600/20 overflow-hidden">
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className="w-full px-6 py-4 bg-white/2 hover:bg-white/3 text-left flex justify-between items-center transition"
              >
                <h4 className="font-semibold gold text-sm md:text-base pr-4">{item.question}</h4>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openFAQ === index && (
                <div className="px-6 py-4 bg-black/20 border-t border-gold-600/20 text-gray-300 text-sm leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
