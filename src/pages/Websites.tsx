import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, User, Building2, Briefcase, Zap, Search, Smartphone, Palette, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import PricingCard from "@/components/PricingCard";

const websiteTypes = [
  {
    icon: User,
    title: "Personal Brands",
    description: "Establish your authority with a professional personal website that showcases your expertise and attracts opportunities.",
    features: ["Portfolio showcase", "About & bio section", "Contact integration", "Social media links"],
  },
  {
    icon: Building2,
    title: "Company Websites",
    description: "Professional corporate websites that build trust and generate leads for your business.",
    features: ["Company profile", "Services showcase", "Team section", "Lead capture forms"],
  },
  {
    icon: Briefcase,
    title: "Service Businesses",
    description: "Convert visitors into clients with service-focused websites optimized for lead generation.",
    features: ["Service listings", "Booking system", "Testimonials", "FAQ section"],
  },
];

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed and performance" },
  { icon: Search, title: "SEO Ready", desc: "Built to rank on Google" },
  { icon: Smartphone, title: "Mobile First", desc: "Perfect on all devices" },
  { icon: Palette, title: "Modern Design", desc: "Clean, professional aesthetics" },
];

const packages = [
  {
    name: "Basic",
    price: "999",
    description: "For individuals and small projects",
    features: [
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "Basic SEO",
      "7 days support",
    ],
  },
  {
    name: "Business",
    price: "1,999",
    description: "For growing businesses",
    features: [
      "Up to 10 pages",
      "Custom design",
      "Advanced SEO",
      "Blog integration",
      "30 days support",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "3,499",
    description: "For established companies",
    features: [
      "Unlimited pages",
      "Premium design",
      "Full SEO package",
      "CMS integration",
      "90 days support",
    ],
  },
];

export default function Websites() {
  return (
    <>
      <Helmet>
        <title>Professional Website Development Dubai | Business & Personal | PROLAB</title>
        <meta name="description" content="Professional website development in Dubai for businesses and personal brands. SEO-optimized, mobile-first, fast-loading websites that generate leads." />
        <meta name="keywords" content="website development Dubai, web design UAE, business website Dubai, personal website UAE" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent" />
          
          <div className="container-custom relative">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-accent text-sm font-medium">Dubai's Premium Web Agency</span>
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                  Professional Websites That Convert
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  From personal brands to corporate websites — we create digital experiences that establish authority and generate results.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact">
                    <Button className="btn-primary text-lg px-8 py-6 gap-2">
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button variant="outline" className="btn-secondary text-lg px-8 py-6">
                      View Our Work
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Website Types */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Website Types</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Websites for Every Need
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {websiteTypes.map((type, index) => (
                <ScrollReveal key={type.title} animation="fade-up" delay={index * 100}>
                  <div className="glass-card-hover p-8 h-full">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                      <type.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground mb-3">{type.title}</h3>
                    <p className="text-muted-foreground mb-6">{type.description}</p>
                    <ul className="space-y-2">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="slide-left">
                <div>
                  <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Why Our Websites</p>
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Built for Performance
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Every website we build is optimized for speed, SEO, and conversions. We don't just make it look good — we make it work.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-sm text-muted-foreground">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={200}>
                <div className="glass-card p-8">
                  <h3 className="font-display font-bold text-2xl text-foreground mb-6 text-center">
                    Website Packages
                  </h3>
                  <div className="space-y-4">
                    {packages.map((pkg, index) => (
                      <div key={pkg.name} className={`p-4 rounded-xl border ${pkg.featured ? 'border-primary bg-primary/5' : 'border-border'}`}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-foreground">{pkg.name}</span>
                          <span className="text-primary font-bold">{pkg.price} AED</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{pkg.description}</p>
                      </div>
                    ))}
                  </div>
                  <Link to="/contact" className="block mt-6">
                    <Button className="w-full btn-primary">Get a Custom Quote</Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <CTASection 
          title="Need a Website That Works?"
          subtitle="Let's build something that generates real results for your business."
        />
      </main>

      <Footer />
    </>
  );
}
