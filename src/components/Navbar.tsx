"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "py-4 bg-white/90 backdrop-blur-md border-b border-stone-200/80 shadow-md shadow-stone-150/10"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a href="#" className="flex flex-col group select-none">
            <span
              className={`font-serif text-xl md:text-2xl tracking-widest font-bold transition-colors duration-300 ${
                isScrolled ? "text-stone-900" : "text-stone-100"
              } group-hover:text-gold-premium`}
            >
              AIRLINK <span className="text-gold-premium font-light">CASTLE</span>
            </span>
            <span
              className={`text-[9px] tracking-[0.25em] transition-colors uppercase font-sans ${
                isScrolled ? "text-stone-500 group-hover:text-stone-700" : "text-stone-400 group-hover:text-stone-300"
              }`}
            >
              Luxury Hotel & Suites
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            {["Suites", "Dining", "Amenities", "Location"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-sans tracking-wider transition-colors duration-300 relative py-2 group uppercase ${
                  isScrolled ? "text-stone-850 hover:text-gold-premium" : "text-stone-300 hover:text-gold-premium"
                }`}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold-premium transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Book Direct Button */}
          <div className="hidden md:flex items-center">
            <a
              href="tel:+914842611111"
              className={`inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-gold-premium bg-gold-premium/5 hover:bg-gold-premium hover:text-white font-sans text-xs uppercase tracking-widest font-semibold transition-all duration-500 transform hover:scale-105 active:scale-95 ${
                isScrolled ? "text-gold-dark hover:border-gold-dark" : "text-gold-premium"
              }`}
            >
              Book Direct
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-stone-800 hover:text-gold-premium" : "text-stone-300 hover:text-gold-premium"
              }`}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 transition-transform hover:rotate-90 duration-300" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm transition-opacity duration-500 md:hidden ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-40 w-4/5 max-w-sm glassmorphism p-8 pt-24 transition-transform duration-500 ease-out transform md:hidden ${
          isMenuOpen ? "translate-x-0 shadow-2xl shadow-stone-200/50" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-8">
          {["Suites", "Dining", "Amenities", "Location"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="text-lg font-sans tracking-widest text-stone-800 hover:text-gold-premium transition-colors uppercase border-b border-stone-200/60 pb-4"
            >
              {item}
            </a>
          ))}
          <a
            href="tel:+914842611111"
            className="flex items-center justify-center w-full py-4 bg-gold-premium text-white hover:bg-gold-dark font-sans tracking-widest font-bold uppercase rounded-lg transition-all duration-300"
          >
            Book Direct
            <ArrowUpRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
