"use client";

import { Phone, Mail, MapPin, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <footer id="location" className="bg-stone-100 border-t border-stone-200 pt-20 pb-10 relative z-30 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-stone-200">
            
            {/* Column 1: Brand & Bio */}
            <div className="flex flex-col space-y-6">
              <a href="#" className="flex flex-col group select-none">
                <span className="font-serif text-2xl tracking-widest font-bold text-stone-900 group-hover:text-gold-premium transition-colors duration-300">
                  AIRLINK <span className="text-gold-premium font-light">CASTLE</span>
                </span>
                <span className="text-[10px] tracking-[0.25em] text-stone-500 group-hover:text-stone-700 transition-colors uppercase font-sans mt-0.5">
                  Luxury Hotel & Suites
                </span>
              </a>
              <p className="text-stone-600 font-sans text-xs md:text-sm font-light leading-relaxed">
                Experience unparalleled hospitality located strategically just 2 minutes away from Cochin International Airport (CIAL). Designed to cater to global business executives, premium leisure travelers, and airport transit visitors.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="text-stone-900 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-6">
                Accommodations
              </h4>
              <ul className="space-y-4">
                {["Executive Room", "Presidential Luxury Suite", "Transit / Day-Use Room"].map((item) => (
                  <li key={item}>
                    <a
                      href="#suites"
                      className="text-stone-605 hover:text-gold-premium font-sans text-xs md:text-sm font-light transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Dining & Amenities */}
            <div>
              <h4 className="text-stone-900 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-6">
                Gastronomy & Services
              </h4>
              <ul className="space-y-4">
                {["Royal Dine Restaurant", "Castle Cafe (24 Hours)", "Simply Fish Seafood", "Horizon Rooftop Pool"].map((item) => (
                  <li key={item}>
                    <a
                      href="#dining"
                      className="text-stone-605 hover:text-gold-premium font-sans text-xs md:text-sm font-light transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact details */}
            <div id="contact" className="space-y-6">
              <h4 className="text-stone-900 font-sans text-xs tracking-[0.2em] uppercase font-bold mb-6">
                Reservations & Location
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start text-stone-600">
                  <MapPin className="w-4 h-4 text-gold-premium mr-3.5 mt-0.5 flex-shrink-0" />
                  <span className="font-sans text-xs md:text-sm font-light leading-relaxed">
                    Near Cochin International Airport, Nedumbassery, Athani P.O., Kochi, Kerala 683585, India
                  </span>
                </li>
                <li className="flex items-center text-stone-600">
                  <Phone className="w-4 h-4 text-gold-premium mr-3.5 flex-shrink-0" />
                  <a
                    href="tel:+914842611111"
                    className="font-sans text-xs md:text-sm font-light hover:text-gold-premium transition-colors"
                  >
                    +91 484 261 1111
                  </a>
                </li>
                <li className="flex items-center text-stone-600">
                  <Mail className="w-4 h-4 text-gold-premium mr-3.5 flex-shrink-0" />
                  <a
                    href="mailto:info@airlinkcastle.com"
                    className="font-sans text-xs md:text-sm font-light hover:text-gold-premium transition-colors"
                  >
                    info@airlinkcastle.com
                  </a>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Copyright */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-stone-500 font-sans text-[11px] tracking-wider uppercase font-semibold">
            <span>© {new Date().getFullYear()} Hotel Airlink Castle. All Rights Reserved.</span>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-gold-premium transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-premium transition-colors">Terms of Service</a>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating Buttons: WhatsApp & Scroll To Top */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className={`p-3 rounded-full bg-white border border-stone-200 text-stone-700 hover:text-gold-premium hover:border-gold-premium/50 transition-all duration-500 shadow-xl cursor-pointer ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>

        {/* WhatsApp Pinned Contact */}
        <a
          href="https://wa.me/919961111111"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-4 rounded-full bg-emerald-650 hover:bg-emerald-550 text-stone-100 hover:text-white transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 hover:scale-105 active:scale-95 group relative"
          aria-label="Chat on WhatsApp"
        >
          {/* Pulsing glow effect */}
          <span className="absolute inset-0 rounded-full bg-emerald-600/30 animate-ping z-0"></span>
          <MessageCircle className="w-6 h-6 relative z-10" />
          
          {/* Tooltip on hover */}
          <span className="absolute right-14 bg-neutral-950/95 border border-white/5 text-stone-200 text-[10px] tracking-widest uppercase font-bold py-2 px-3.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl pointer-events-none mr-2">
            Chat with Concierge
          </span>
        </a>
      </div>
    </>
  );
}
