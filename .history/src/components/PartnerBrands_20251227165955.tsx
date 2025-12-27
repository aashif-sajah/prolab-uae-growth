import ScrollReveal from "./ScrollReveal";

const baseLogos = [
  { logo: "/trusted_brands/logo1.png", name: "Company A" },
  { logo: "/trustedbrands/logo2.png", name: "Company B" },
];

// This creates an array of 10 items (5 pairs of your logos)
export const partners = [...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos, ...baseLogos];

export default function PartnerBrands() {
  return (
    <section className="section-padding bg-secondary/20 overflow-hidden">
      <div className="container-custom mb-12">
        <ScrollReveal animation="fade-up">
          <div className="text-center">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Partners</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Trusted by Leading Brands
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-secondary/20 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-secondary/20 to-transparent z-10" />

        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {/* First set of logos */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 transition-all duration-300 hover:scale-110 group"
            >
              <div className="glass-card p-6 md:p-8 rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 md:mx-12 transition-all duration-300 hover:scale-110 group"
            >
              <div className="glass-card p-6 md:p-8 rounded-2xl group-hover:border-primary/30 transition-all duration-300">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-12 md:h-16 w-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
