import { Clock, Check } from "lucide-react";

export default function DiningSection() {
  const venues = [
    {
      name: "Royal Dine Restaurant",
      tagline: "Global Flavors & Elite Ambience",
      image: "/images/hotel/royal-dine.jpg",
      hours: "12:00 PM - 11:30 PM",
      description:
        "Indulge in a premium multi-cuisine experience under royal wooden craftsmanship arches. Featuring authentic Kerala delicacies, premium Mughlai flavors, and continental classics curated by our master chefs.",
      highlights: ["Authentic Kerala Sadhya", "Premium Private Dining Area", "Master Chef Curated Menus"],
    },
    {
      name: "Castle Cafe",
      tagline: "24-Hour Premium Coffee Shop & Lounge",
      image: "/images/hotel/castle-cafe.jpg",
      hours: "Open 24 Hours / 7 Days",
      description:
        "The ideal airport-adjacent lounge. Unwind at any hour with premium brews, freshly baked pastries, signature mocktails, and a light gourmet snacking menu. Perfect for pre-flight meetings and late-night arrivals.",
      highlights: ["Specialty Coffee Blends", "Freshly Baked Croissants & Pastries", "Airport Flight Status Boards"],
    },
    {
      name: "Simply Fish",
      tagline: "Signature Coastal & Seafood Specialities",
      image: "/images/hotel/simply-fish.jpg",
      hours: "11:00 AM - 11:00 PM",
      description:
        "Experience the true bounty of the Arabian Sea. Simply Fish brings you fresh coastal catches prepared to your preference, from traditional spicy Kerala fish curries to continental grilled fillets.",
      highlights: ["Catch-of-the-day Custom Grills", "Traditional clay pot fish curries", "Premium seafood platters"],
    },
  ];

  return (
    <section id="dining" className="py-24 bg-stone-50/50 border-t border-stone-200/80 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] text-gold-premium uppercase font-semibold font-sans">
            Gastronomy
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-6">
            Elite Dining & Cafes
          </h2>
          <div className="w-20 h-0.5 bg-gold-premium mx-auto mb-6"></div>
          <p className="text-stone-655 font-sans text-sm md:text-base font-light leading-relaxed">
            Delight your palate with award-winning cuisines and 24-hour convenience. Our dining destinations offer a mix of traditional Kerala heritage and international flavors.
          </p>
        </div>

        {/* Venues List - Alternating layout */}
        <div className="space-y-24">
          {venues.map((venue, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
              >
                {/* Visual Side */}
                <div
                  className={`w-full lg:w-1/2 order-1 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative group overflow-hidden rounded-2xl border border-stone-200 shadow-xl shadow-stone-150/15">
                    {/* Subtle Gold Outline Glow */}
                    <div className="absolute inset-0 border border-gold-premium/0 group-hover:border-gold-premium/30 transition-colors duration-500 rounded-2xl z-20 pointer-events-none" />
                    
                    <img
                      src={venue.image}
                      alt={venue.name}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                {/* Info Side */}
                <div
                  className={`w-full lg:w-1/2 order-2 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Hours Tag */}
                  <div className="inline-flex items-center space-x-2 bg-stone-100 border border-stone-200 px-3.5 py-1.5 rounded-lg mb-4 text-xs text-stone-700 font-sans">
                    <Clock className="w-3.5 h-3.5 text-gold-premium" />
                    <span className="font-semibold">{venue.hours}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl font-bold text-stone-900 mb-2">
                    {venue.name}
                  </h3>
                  <p className="text-gold-premium font-sans text-xs md:text-sm tracking-widest uppercase font-semibold mb-6">
                    {venue.tagline}
                  </p>

                  <p className="text-stone-600 font-sans text-sm md:text-base font-light leading-relaxed mb-8">
                    {venue.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="space-y-3.5">
                    {venue.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-stone-850">
                        <span className="flex-shrink-0 p-0.5 rounded-full bg-gold-premium/15 border border-gold-premium/45 mr-3 mt-0.5">
                          <Check className="w-3 h-3 text-gold-premium" />
                        </span>
                        <span className="text-sm font-sans tracking-wide">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
