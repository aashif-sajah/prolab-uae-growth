import { Helmet } from "react-helmet-async";
import { ExternalLink, TrendingUp, ShoppingBag, DollarSign, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

const portfolioItems = [
  {
    title: "Desert Luxe Fashion",
    category: "Fashion & Apparel",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "A premium fashion boutique targeting UAE's luxury market. Complete Shopify store with custom theme and 150+ products.",
    goal: "Launch an online presence to compete with established fashion retailers in Dubai.",
    solution: "Built a high-converting Shopify store with premium visuals, seamless checkout, and Instagram shopping integration.",
    results: [
      { label: "First Month Revenue", value: "$24,500" },
      { label: "Conversion Rate", value: "4.2%" },
      { label: "Orders", value: "487" },
    ],
    growth: "+156%",
  },
  {
    title: "TechZone Electronics",
    category: "Electronics & Gadgets",
    image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800&h=600&fit=crop",
    description: "Electronics dropshipping store focused on trending tech gadgets. Fully automated with supplier integrations.",
    goal: "Create an automated dropshipping business with minimal manual work.",
    solution: "Developed a Shopify store with DSers integration, automated order fulfillment, and optimized product pages.",
    results: [
      { label: "Monthly Revenue", value: "$18,200" },
      { label: "Conversion Rate", value: "3.8%" },
      { label: "Products", value: "200+" },
    ],
    growth: "+89%",
  },
  {
    title: "Bloom & Co Home",
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    description: "Home décor and furniture store catering to Dubai's interior design enthusiasts.",
    goal: "Establish a trusted online store for high-ticket home décor items.",
    solution: "Created a visually stunning store with high-quality imagery, 3D product views, and premium checkout experience.",
    results: [
      { label: "Average Order", value: "$340" },
      { label: "Conversion Rate", value: "5.1%" },
      { label: "Returning Customers", value: "42%" },
    ],
    growth: "+234%",
  },
];

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Our Portfolio - Shopify Store Case Studies | PROLAB Dubai</title>
        <meta name="description" content="See our successful Shopify stores and website projects. Real case studies with real results from UAE businesses we've helped grow." />
        <meta name="keywords" content="Shopify portfolio Dubai, web design portfolio UAE, ecommerce case studies" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          <div className="container-custom relative">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                  Our Work Speaks for Itself
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Real stores. Real results. See how we've helped UAE businesses succeed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Portfolio Items */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-20">
              {portfolioItems.map((item, index) => (
                <ScrollReveal key={item.title} animation="fade-up" delay={index * 100}>
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <div className="relative glass-card overflow-hidden group">
                        <img 
                          src={item.image} 
                          alt={item.title}
                          className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                          {item.category}
                        </div>
                        <div className="absolute bottom-4 right-4 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-lg flex items-center gap-2">
                          <TrendingUp className="w-4 h-4" />
                          {item.growth} Growth
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <h2 className="font-display text-3xl font-bold text-foreground mb-4">{item.title}</h2>
                      <p className="text-muted-foreground mb-6">{item.description}</p>

                      <div className="space-y-4 mb-8">
                        <div className="glass-card p-4">
                          <h4 className="font-semibold text-foreground mb-2">The Goal</h4>
                          <p className="text-muted-foreground text-sm">{item.goal}</p>
                        </div>
                        <div className="glass-card p-4">
                          <h4 className="font-semibold text-foreground mb-2">Our Solution</h4>
                          <p className="text-muted-foreground text-sm">{item.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-4">
                        {item.results.map((result, i) => (
                          <div key={i} className="glass-card p-4 text-center">
                            <p className="text-2xl font-display font-bold text-gradient-gold">{result.value}</p>
                            <p className="text-xs text-muted-foreground">{result.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Want Results Like These?"
          subtitle="Let's build your success story. Get started with your Shopify store today."
        />
      </main>

      <Footer />
    </>
  );
}
