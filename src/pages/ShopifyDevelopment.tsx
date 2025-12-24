                                                                                                                                                                                                                                   import { Link } from "react-router-dom";import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  Check, 
  ShoppingBag, 
  CreditCard, 
  Package, 
  Truck, 
  Search, 
  Zap, 
  Smartphone, 
  HeadphonesIcon,
  Clock,
  Shield,
  TrendingUp,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";

const includedFeatures = [
  { icon: ShoppingBag, title: "Complete Store Setup", desc: "Full Shopify store configuration from scratch" },
  { icon: Package, title: "Premium Theme Setup", desc: "Professional theme customized for your brand" },
  { icon: TrendingUp, title: "50 Winning Products", desc: "Niche-researched high-selling products added" },
  { icon: CreditCard, title: "Payment Gateway", desc: "Stripe, PayTabs, Telr integration" },
  { icon: Truck, title: "Shipping Setup", desc: "Complete shipping zones and rates" },
  { icon: Search, title: "Basic SEO", desc: "On-page SEO optimization for Google" },
  { icon: Zap, title: "Speed Optimization", desc: "Fast loading times for better conversions" },
  { icon: Smartphone, title: "Mobile Optimization", desc: "Perfect on all devices" },
  { icon: HeadphonesIcon, title: "Training + Support", desc: "Video training and ongoing support" },
];

const processSteps = [
  {
    day: "Day 1",
    title: "Strategy & Setup",
    tasks: [
      "Consultation call to understand your business",
      "Niche & product research",
      "Shopify store creation",
      "Theme selection & initial setup",
    ],
  },
  {
    day: "Day 2",
    title: "Products & Integration",
    tasks: [
      "Add 50 high-selling products",
      "Payment gateway integration",
      "Shipping configuration",
      "Essential apps installation",
    ],
  },
  {
    day: "Day 3",
    title: "Polish & Launch",
    tasks: [
      "SEO optimization",
      "Speed optimization",
      "Mobile testing",
      "Final review & launch prep",
    ],
  },
];

const comparisonData = [
  { feature: "Delivery Time", prolab: "3 Days", freelancer: "2-4 Weeks" },
  { feature: "Product Research", prolab: "Included", freelancer: "Extra Cost" },
  { feature: "Payment Setup", prolab: "Full Setup", freelancer: "Basic Only" },
  { feature: "Support", prolab: "24/7 Available", freelancer: "Limited" },
  { feature: "Revisions", prolab: "Unlimited", freelancer: "2-3 Max" },
  { feature: "Training", prolab: "Full Training", freelancer: "Rarely" },
];

export default function ShopifyDevelopment() {
  return (
    <>
      <Helmet>
        <title>Shopify Store Development Dubai | 3-Day Delivery | PROLAB</title>
        <meta name="description" content="Get your complete Shopify store in just 3 days. Premium theme, 50 products, payment gateway, SEO - all included. Dubai's fastest Shopify development agency." />
        <meta name="keywords" content="Shopify development Dubai, Shopify store UAE, Shopify experts Dubai, ecommerce development UAE" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

          <div className="container-custom relative">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">3-Day Delivery Guaranteed</span>
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                  Complete Shopify Store Development
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  From zero to selling in just 3 days. We handle everything — setup, products, payments, and optimization.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="btn-primary text-lg px-8 py-6 gap-2">
                      Get Your Store in 3 Days
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/pricing">
                    <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
                      View Pricing
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* What's Included */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Complete Package</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Everything Included
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  No hidden costs. No surprises. Just a complete, ready-to-sell store.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includedFeatures.map((feature, index) => (
                <ScrollReveal key={feature.title} animation="fade-up" delay={index * 50}>
                  <div className="glass-card-hover p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Process</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Day 1 → Day 3 Delivery
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  A streamlined process designed for speed without compromising quality.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.day} animation="fade-up" delay={index * 150}>
                  <div className="glass-card-hover p-8 h-full relative">
                    {index < processSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                    )}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-gold flex items-center justify-center text-primary-foreground font-display font-bold text-xl mb-6">
                      {step.day}
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-4">{step.title}</h3>
                    <ul className="space-y-3">
                      {step.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Why Us</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Prolab vs Freelancers
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  See why UAE businesses choose Prolab over random freelancers.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <div className="max-w-3xl mx-auto glass-card overflow-hidden">
                <div className="grid grid-cols-3 bg-primary/10 p-4">
                  <div className="font-semibold text-foreground">Feature</div>
                  <div className="font-semibold text-primary text-center">Prolab</div>
                  <div className="font-semibold text-muted-foreground text-center">Freelancers</div>
                </div>
                {comparisonData.map((row, index) => (
                  <div key={row.feature} className={`grid grid-cols-3 p-4 ${index % 2 === 0 ? 'bg-secondary/30' : ''}`}>
                    <div className="text-foreground">{row.feature}</div>
                    <div className="text-primary font-semibold text-center">{row.prolab}</div>
                    <div className="text-muted-foreground text-center">{row.freelancer}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTASection 
          title="Ready to Launch Your Store?"
          subtitle="Stop waiting. Start selling. Get your Shopify store in 3 days."
        />
      </main>

      <Footer />
    </>
  );
}
