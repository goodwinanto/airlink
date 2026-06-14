import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rohan Malhotra",
      type: "Business Traveler",
      stay: "Executive Room",
      rating: 5,
      title: "Perfect Transit Luxury",
      content:
        "The proximity to Cochin Airport is unmatched—literally 2 minutes. The room was gorgeous, dominated by premium wood craftsmanship. The high-speed Wi-Fi allowed me to attend client calls smoothly. Highly recommended for business travelers.",
      initials: "RM",
    },
    {
      name: "Sarah Jenkins",
      type: "Transit Passenger",
      stay: "Luxury Suite",
      rating: 5,
      title: "An Oasis Near CIAL",
      content:
        "Had a 10-hour layover and booked their Day-Use room. The rooftop 'Horizon' swimming pool is absolute bliss! Looking at the runway while swimming in the garden view pool is amazing. The service was top-notch and prompt.",
      initials: "SJ",
    },
    {
      name: "Dr. Ananya Nair",
      type: "Family Vacation",
      stay: "Presidential Suite",
      rating: 5,
      title: "Exquisite Woodwork & Hospitality",
      content:
        "My family loved our stay. The woodwork throughout the suite is executive-class and looks extremely premium. We dined at the Royal Dine restaurant and the local curries were authentic and delicious. A true 5-star experience.",
      initials: "AN",
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-200/80 relative overflow-hidden">
      {/* Decorative radial gradient to add depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold-premium/3 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs tracking-[0.3em] text-gold-premium uppercase font-semibold font-sans">
            Reviews
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mt-3 mb-6">
            Guest Stories
          </h2>
          <div className="w-20 h-0.5 bg-gold-premium mx-auto mb-6"></div>
          <p className="text-stone-600 font-sans text-sm md:text-base font-light leading-relaxed">
            Read about the experiences of our international travelers, business executives, and transit guests who stayed at Airlink Castle.
          </p>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-stone-50/50 border border-stone-200/80 hover:border-gold-premium/40 rounded-2xl p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 group shadow-sm"
            >
              {/* Quote Icon Background */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-stone-200/40 group-hover:text-gold-premium/10 transition-colors duration-500" />

              <div>
                {/* Stars */}
                <div className="flex items-center space-x-1 mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-premium text-gold-premium" />
                  ))}
                </div>

                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2 group-hover:text-gold-premium transition-colors duration-300">
                  "{review.title}"
                </h3>
                
                <p className="text-stone-600 font-sans text-xs md:text-sm font-light leading-relaxed mb-8">
                  {review.content}
                </p>
              </div>

              {/* Guest Profile */}
              <div className="flex items-center space-x-4 border-t border-stone-200 pt-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center">
                  <span className="text-gold-premium font-sans text-xs font-bold tracking-wide">
                    {review.initials}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-stone-900 font-sans text-sm font-bold tracking-wide">
                    {review.name}
                  </span>
                  <span className="text-stone-400 font-sans text-[10px] tracking-wider uppercase font-semibold">
                    {review.type} • {review.stay}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
