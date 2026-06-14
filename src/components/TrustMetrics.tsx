import { Star, ShieldCheck, MapPin } from "lucide-react";

export default function TrustMetrics() {
  const metrics = [
    {
      icon: <Star className="w-5 h-5 text-gold-premium" />,
      value: "5-Star Classified",
      label: "Ministry of Tourism Certified",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-gold-premium" />,
      value: "54 Premium Rooms",
      label: "Handcrafted Wooden Craftsmanship",
    },
    {
      icon: <MapPin className="w-5 h-5 text-gold-premium" />,
      value: "2 Mins to CIAL",
      label: "Direct Airport Access & Pickup",
    },
  ];

  return (
    <section id="amenities" className="relative z-20 border-y border-stone-200/80 bg-stone-100/60 backdrop-blur-sm py-10 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-stone-200/60">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="flex items-center space-x-5 px-2 md:px-8 first:pl-0 last:pr-0 justify-center md:justify-start pt-6 md:pt-0 first:pt-0"
            >
              <div className="flex-shrink-0 p-3 rounded-full bg-white border border-stone-200/60 shadow-sm">
                {metric.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-serif font-bold text-stone-900 tracking-wide">
                  {metric.value}
                </span>
                <span className="text-xs font-sans tracking-widest text-stone-500 uppercase mt-0.5">
                  {metric.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
