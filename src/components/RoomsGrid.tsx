import { Wifi, Wind, UtensilsCrossed, BedDouble, Tv, ArrowRight } from "lucide-react";

export default function RoomsGrid() {
  const rooms = [
    {
      name: "Transit / Day-Use Room",
      image: "/images/hotel/transit-room.jpg",
      price: "₹2,500",
      period: "6 Hours / Day-use",
      description: "Perfect for refreshing between long flights. Cozy, functional, and fully-equipped layout with direct proximity to the airport.",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "High-speed Wi-Fi" },
        { icon: <Wind className="w-4 h-4" />, name: "Air Conditioning" },
        { icon: <UtensilsCrossed className="w-4 h-4" />, name: "24h Room Service" },
        { icon: <Tv className="w-4 h-4" />, name: "Smart TV" },
      ],
    },
    {
      name: "Executive Room",
      image: "/images/hotel/executive-room.jpg",
      price: "₹4,500",
      period: "Night",
      description: "Elegant layout styled with signature Kerala wood craftsmanship, premium executive workspace, and state-of-the-art features.",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "High-speed Wi-Fi" },
        { icon: <Wind className="w-4 h-4" />, name: "Air Conditioning" },
        { icon: <UtensilsCrossed className="w-4 h-4" />, name: "24h Room Service" },
        { icon: <BedDouble className="w-4 h-4" />, name: "King Bed" },
      ],
      featured: true,
    },
    {
      name: "Presidential Luxury Suite",
      image: "/images/hotel/presidential-bedroom.jpg",
      price: "₹9,000",
      period: "Night",
      description: "The peak of luxury. Features a spacious living area, premium wooden design touches, walk-in closets, and airport-facing views.",
      amenities: [
        { icon: <Wifi className="w-4 h-4" />, name: "High-speed Wi-Fi" },
        { icon: <Wind className="w-4 h-4" />, name: "Air Conditioning" },
        { icon: <UtensilsCrossed className="w-4 h-4" />, name: "Butler Service" },
        { icon: <BedDouble className="w-4 h-4" />, name: "Super King Bed" },
      ],
    },
  ];

  return (
    <section id="suites" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] text-gold-premium uppercase font-semibold font-sans">
            Accommodations
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-6">
            Refined Rooms & Suites
          </h2>
          <div className="w-20 h-0.5 bg-gold-premium mx-auto mb-6"></div>
          <p className="text-stone-600 font-sans text-sm md:text-base font-light leading-relaxed">
            Immerse yourself in spaces adorned with rich wood craftsmanship and state-of-the-art amenities. Tailored for airport transit travelers and leisure guests alike.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {rooms.map((room, index) => (
            <div
              key={index}
              className={`group flex flex-col justify-between rounded-2xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-gold-premium/5 ${
                room.featured
                  ? "bg-stone-50 border-gold-premium/50 hover:border-gold-premium/80 shadow-md"
                  : "bg-stone-50/40 border-stone-200/80 hover:border-stone-300 shadow-sm"
              }`}
            >
              {/* Image & Price Tag */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                
                {/* Price Tag Overlay */}
                <div className="absolute top-4 right-4 bg-neutral-950/90 backdrop-blur-md border border-gold-premium/30 px-3 py-1.5 rounded-lg">
                  <span className="text-gold-premium font-serif text-base font-bold">
                    {room.price}
                  </span>
                  <span className="text-[10px] text-stone-300 font-sans uppercase tracking-wider ml-1">
                    / {room.period}
                  </span>
                </div>

                {room.featured && (
                  <div className="absolute top-4 left-4 bg-gold-premium text-white px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-bold font-sans">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-stone-900 group-hover:text-gold-premium transition-colors duration-300 mb-3">
                    {room.name}
                  </h3>
                  <p className="text-stone-650 font-sans text-xs md:text-sm font-light leading-relaxed mb-6">
                    {room.description}
                  </p>
                </div>

                {/* Amenities & CTA */}
                <div>
                  <div className="border-t border-stone-200 pt-6 mb-6">
                    <span className="text-[10px] tracking-[0.2em] uppercase font-sans text-stone-400 font-bold block mb-4">
                      Key Amenities
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {room.amenities.map((amenity, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-stone-700">
                          <span className="text-gold-premium">{amenity.icon}</span>
                          <span className="text-xs font-sans tracking-wide truncate">
                            {amenity.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href="tel:+914842611111"
                    className={`flex items-center justify-center w-full py-3.5 rounded-xl text-xs uppercase tracking-widest font-bold font-sans transition-all duration-300 ${
                      room.featured
                        ? "bg-gold-premium text-white hover:bg-gold-dark hover:shadow-lg shadow-gold-premium/15"
                        : "bg-stone-100 hover:bg-stone-200 text-stone-850 hover:text-stone-900 border border-stone-200/85"
                    }`}
                  >
                    Reserve Room
                    <ArrowRight className="ml-2 w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
