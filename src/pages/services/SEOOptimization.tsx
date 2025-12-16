import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Target, BarChart3, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  "Keyword research & strategy",
  "On-page SEO optimization",
  "Technical SEO audit",
  "Meta tags optimization",
  "Schema markup implementation",
  "Page speed optimization",
  "Mobile optimization",
  "Content optimization",
];

const benefits = [
  { icon: Search, title: "Higher Rankings", description: "Get found on Google when customers search for your products" },
  { icon: TrendingUp, title: "Organic Traffic", description: "Drive free, sustainable traffic to your store" },
  { icon: Target, title: "Targeted Visitors", description: "Attract customers actively looking to buy" },
  { icon: BarChart3, title: "Better ROI", description: "Long-term results that compound over time" },
];

export default function SEOOptimization() {
  return (
    <>
      <Helmet>
        <title>SEO Optimization | PROLAB - E-commerce SEO Services Dubai</title>
        <meta name="description" content="Boost your Shopify store's visibility with professional SEO services. Keyword research, on-page optimization, and technical SEO. Dubai SEO experts." />
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
                  SEO Optimization
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Get Found on <span className="text-gradient">Google</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Drive organic traffic to your store with professional SEO optimization. Rank higher, sell more.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Boost Your SEO
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
                Why SEO Matters for E-commerce
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

        {/* Services Section */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our SEO Services
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Comprehensive optimization for maximum visibility
              </p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{service}</span>
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
                Ready to Rank Higher?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Stop losing sales to competitors. Let's optimize your store for search engines.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get SEO Audit
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
