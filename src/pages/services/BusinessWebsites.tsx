import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Building2, Globe, Smartphone, Zap, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  "Custom responsive design",
  "Up to 10 pages",
  "Contact forms & lead capture",
  "SEO optimization",
  "Social media integration",
  "Google Analytics setup",
  "Fast loading speed",
  "SSL security certificate",
];

const benefits = [
  { icon: Building2, title: "Professional Image", description: "Establish credibility with a polished online presence" },
  { icon: Globe, title: "24/7 Visibility", description: "Your business is accessible to customers anytime" },
  { icon: Smartphone, title: "Mobile-First", description: "Perfect experience on all devices" },
  { icon: Zap, title: "Lead Generation", description: "Convert visitors into customers" },
];

export default function BusinessWebsites() {
  return (
    <>
      <Helmet>
        <title>Business Websites | PROLAB - Professional Web Design Dubai</title>
        <meta name="description" content="Get a professional business website that converts visitors into customers. Custom design, SEO optimized, mobile-responsive. Dubai web design experts." />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
          </div>
          
          <div className="container-custom relative z-10">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  Business Websites
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Websites That <span className="text-gradient">Grow Your Business</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Professional websites designed to establish your brand and convert visitors into loyal customers.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get Your Website
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Why Your Business Needs a Website
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Everything you need for a professional online presence
              </p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
          <div className="container-custom text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Elevate Your Business?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a website that works as hard as you do. Let's build something great together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/pricing" className="btn-outline">
                  View Pricing
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
