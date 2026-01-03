import { Link } from "react-router-dom";
import { ArrowRight, Zap, Palette, ShieldCheck, Clock, Globe, Smartphone, ShoppingBag, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TrustBadges from "@/components/TrustBadges";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCard from "@/components/TestimonialCard";
import StatsSection from "@/components/StatsSection";
import AnalyticsProof from "@/components/AnalyticsProof";
import PartnerBrands from "@/components/PartnerBrands";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import HomepagePortfolio from "@/components/portfolio/HomepagePortfolio";
import { Helmet } from "react-helmet-async";

const services = [
  {
    icon: ShoppingBag,
    title: "Shopify Store Development",
    description: "Complete e-commerce stores that convert visitors into customers. Delivered in just 3 days.",
    features: [
      "Premium theme setup & customization",
      "50 winning products included",
      "Payment gateway integration",
      "Mobile-first design",
    ],
    href: "/shopify",
    featured: true,
  },
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional websites that establish authority and generate leads for your business.",
    features: [
      "Custom design & development",
      "SEO-optimized structure",
      "Fast loading speeds",
      "Lead capture forms",
    ],
    href: "/websites",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored solutions for unique requirements. From apps to complex integrations.",
    features: [
      "Custom functionality",
      "Third-party integrations",
      "API development",
      "Ongoing maintenance",
    ],
    href: "/contact",
  },
];

const packages = [
  {
    name: "Starter",
    price: "799",
    description: "Perfect for testing the waters",
    features: [
      "Shopify store setup",
      "Free theme installation",
      "20 products added",
      "Payment gateway setup",
      "Basic SEO setup",
      "7 days support",
    ],
  },
  {
    name: "Professional",
    price: "1,199",
    description: "Most popular choice",
    features: [
      "Premium theme setup",
      "50 high-selling products",
      "Full payment gateway setup",
      "Speed optimization",
      "SEO-ready structure",
      "30 days support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "1,699",
    description: "For serious entrepreneurs",
    features: [
      "Fully custom Shopify store",
      "Advanced SEO optimization",
      "Conversion-optimized layout",
      "Automation setup",
      "Priority support",
      "90 days support",
    ],
  },
];

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder",
    company: "Desert Luxe",
    content: "Prolab delivered my store in exactly 3 days. The quality exceeded my expectations. Already made $15,000 in my first month!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "CEO",
    company: "Glow Beauty UAE",
    content: "The team at Prolab truly understands e-commerce. My conversion rate jumped from 1.2% to 4.1% after they optimized my store.",
    rating: 5,
  },
  {
    name: "Mohammed Hassan",
    role: "Owner",
    company: "TechZone Dubai",
    content: "Professional, fast, and reliable. They handled everything from setup to product research. Highly recommended!",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>PROLAB - Dubai's #1 Web Development Agency | Websites & Shopify Stores</title>
        <meta name="description" content="Dubai's trusted web development partner. Custom portfolio websites & revenue-ready Shopify stores. 100+ projects delivered, 24/7 support, Dubai registered company." />
        <meta name="keywords" content="web development Dubai, portfolio website developer Dubai, Shopify store UAE, business website Dubai, UI UX agency Dubai" />
        <link rel="canonical" href="https://prolab.ae/" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section - Clean & CTA Focused */}
        <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
          {/* Abstract Background Illustrations */}
          <div className="absolute inset-0">
            {/* Large Gold Orb */}
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse-slow translate-x-1/4" />
            {/* Cyan Orb */}
            <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/20 via-accent/5 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-500 -translate-x-1/4" />
            {/* Small floating orbs */}
            <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float" />
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-accent/20 rounded-full blur-2xl animate-float animation-delay-300" />
            {/* Geometric lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10">
              <svg viewBox="0 0 800 800" className="w-full h-full">
                <circle cx="400" cy="400" r="300" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" strokeDasharray="10 20" className="animate-spin-slow" style={{ animationDuration: "60s" }} />
                <circle cx="400" cy="400" r="350" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="5 15" className="animate-spin-slow" style={{ animationDuration: "45s", animationDirection: "reverse" }} />
              </svg>
            </div>
          </div>

          <div className="container-custom relative py-20 px-4 md:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal animation="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-primary text-sm font-medium">Dubai's #1 Web Development Partner</span>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={100}>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                  We Build Websites & Stores That{" "}
                  <span className="text-gradient-gold">Actually Make Money</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                  Dubai-based web experts delivering custom portfolio websites & revenue-ready{" "}
                  <span className="text-primary font-semibold">Shopify stores</span>. 
                  Your online presence should make money — not just exist.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                  <Link to="/contact">
                    <Button className="btn-primary text-lg px-10 py-7 gap-2 w-full sm:w-auto">
                      Start Your Project Today
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </Link>
                  <a
                    href="https://wa.me/971507123574"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="btn-secondary text-lg px-10 py-7 w-full sm:w-auto border-green-500/50 text-green-400 hover:bg-green-500/10">
                      Talk to Our Expert
                    </Button>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={400}>
                <TrustBadges />
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Analytics Proof Section */}
        <AnalyticsProof />

        {/* Stats Section */}
        <StatsSection />

        {/* Partner Brands Section */}
        <PartnerBrands />

        {/* Homepage Portfolio Section */}
        <HomepagePortfolio />

        {/* Services Section */}
        <section className="section-padding" id="services">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Services</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Everything You Need to Sell Online
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  From complete Shopify stores to professional websites, we handle it all.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} animation="fade-up" delay={index * 100}>
                  <ServiceCard {...service} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Prolab Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal animation="slide-left">
                <div>
                  <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Why Choose Prolab</p>
                  <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                    Not Just Another Web Agency
                  </h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    We don't just build stores — we build revenue machines. Every decision we make is focused on one thing: making you money.
                  </p>

                  <div className="space-y-6">
                    {[
                      { icon: Clock, title: "3-Day Delivery", desc: "We move fast because your time is money" },
                      { icon: ShieldCheck, title: "Dubai Registered", desc: "100% legitimate, no scams, real company" },
                      { icon: Zap, title: "Conversion Focused", desc: "Every element designed to convert visitors" },
                      { icon: Smartphone, title: "Mobile-First", desc: "70% of traffic is mobile — we optimize for it" },
                    ].map((item, index) => (
                      <div key={item.title} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-lg">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={200}>
                <div className="glass-card p-8">
                  <div className="text-center mb-8">
                    <p className="text-muted-foreground mb-2">What you get when you don't delay:</p>
                    <h3 className="font-display text-2xl font-bold text-foreground">Your First Sale Within a Week</h3>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Day 1: Strategy & Store Setup",
                      "Day 2: Products & Payment Integration",
                      "Day 3: Polish & Launch Ready",
                      "Day 4+: You're Already Selling",
                    ].map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                          index === 3 ? "bg-green-500 text-white" : "bg-primary/10 text-primary"
                        }`}>
                          {index + 1}
                        </div>
                        <p className={`font-medium ${index === 3 ? "text-green-400" : "text-foreground"}`}>
                          {step}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <p className="text-center text-muted-foreground text-sm">
                      <span className="text-primary font-semibold">Every day you delay</span> is lost revenue. Your competitors are already selling.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Packages Preview */}
        <section className="section-padding" id="pricing">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Pricing</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Simple, Transparent Pricing
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Choose the package that fits your business. All include our 3-day delivery guarantee.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {packages.map((pkg, index) => (
                <ScrollReveal key={pkg.name} animation="fade-up" delay={index * 100}>
                  <PricingCard {...pkg} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="text-center mt-12">
                <Link to="/pricing" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                  View Full Pricing Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Client Reviews</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  What Our Clients Say
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  100+ satisfied clients across the UAE trust Prolab with their e-commerce success.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} animation="fade-up" delay={index * 100}>
                  <TestimonialCard {...testimonial} />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="text-center mt-12">
                <Link to="/reviews" className="text-primary font-semibold hover:underline inline-flex items-center gap-2">
                  Read All Reviews
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
