import { Calendar, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Image overlay to ensure legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-neutral-950 z-10" />
        <img
          src="/images/hotel/pool-night.jpg"
          alt="Hotel Airlink Castle Rooftop Pool"
          className="w-full h-full object-cover object-center transform scale-100 hover:scale-105 transition-transform duration-[10s] ease-out"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Small Gold Tag */}
        <div className="inline-flex items-center space-x-2 border border-gold-premium/30 bg-gold-premium/10 px-4 py-1.5 rounded-full mb-6 animate-pulse">
          <span className="w-1.5 h-1.5 bg-gold-premium rounded-full"></span>
          <span className="text-[10px] md:text-xs tracking-[0.2em] font-sans text-gold-premium uppercase font-semibold">
            Premier Gateway Luxury
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-stone-100 tracking-tight leading-[1.15] mb-8 max-w-4xl">
          5-Star Luxury, <br />
          <span className="luxury-gradient-text">2 Minutes From</span> <br />
          Cochin Airport
        </h1>

        {/* Hero Subtitle */}
        <p className="text-stone-300 font-sans text-base md:text-lg lg:text-xl tracking-wide max-w-2xl mb-12 font-light leading-relaxed">
          Escape the transit fatigue. Immerse yourself in high-end comfort, premium wooden suites, and a breathtaking rooftop garden oasis adjacent to CIAL.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="tel:+914842611111"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-gold-premium hover:bg-gold-light text-neutral-950 font-sans tracking-widest font-bold uppercase rounded-lg shadow-lg hover:shadow-gold-premium/10 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Calendar className="w-4 h-4" />
            Check Availability
          </a>
          <a
            href="#suites"
            className="flex items-center justify-center w-full sm:w-auto px-8 py-4 border border-stone-400 hover:border-gold-premium text-stone-100 hover:text-gold-premium font-sans tracking-widest font-bold uppercase rounded-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
          >
            Explore Suites
          </a>
        </div>
      </div>

      {/* Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center animate-bounce">
        <span className="text-[10px] tracking-[0.25em] text-stone-400 uppercase font-sans mb-1">
          Scroll Discover
        </span>
        <a href="#amenities" aria-label="Scroll down">
          <ChevronDown className="w-5 h-5 text-gold-premium" />
        </a>
      </div>
    </section>
  );
}
