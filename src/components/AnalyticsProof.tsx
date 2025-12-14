import ScrollReveal from "./ScrollReveal";

const analyticsImages = [
  {
    image: "https://i.postimg.cc/R30BMq11/download.jpg",
    title: "Fashion Store Analytics",
    subtitle: "Real Shopify dashboard results",
  },
  {
    image: "https://i.postimg.cc/LqspHhkB/Shopify-Store-Sales-(1).jpg",
    title: "Electronics Store Revenue",
    subtitle: "Proven sales performance",
  },
  {
    image: "https://i.postimg.cc/f3bNwk7Y/Store-sales-proof.jpg",
    title: "Home & Living Performance",
    subtitle: "Consistent growth metrics",
  },
];

export default function AnalyticsProof() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Real Results</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Real Stores. Real Revenue. Real Growth.
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These aren't just pretty websites — they're profit-generating machines.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {analyticsImages.map((data, index) => (
            <ScrollReveal key={data.title} animation="fade-up" delay={index * 150}>
              <div className="glass-card-hover p-4 group">
                {/* Phone Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-muted/30">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-background rounded-b-2xl z-10 flex items-center justify-center">
                    <div className="w-12 h-2 bg-muted rounded-full" />
                  </div>
                  
                  {/* Image */}
                  <div className="aspect-[9/16] overflow-hidden">
                    <img
                      src={data.image}
                      alt={data.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Glow overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Caption */}
                <div className="mt-4 text-center">
                  <h3 className="font-semibold text-foreground text-lg mb-1">{data.title}</h3>
                  <p className="text-muted-foreground text-sm">{data.subtitle}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
