import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Check, ShoppingCart, Palette, Settings, Rocket } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  "Custom theme design & development",
  "Mobile-responsive storefront",
  "Product catalog setup (up to 50 products)",
  "Payment gateway integration",
  "Shipping configuration",
  "SEO optimization",
  "Social media integration",
  "Analytics setup",
];

const process = [
  { icon: ShoppingCart, title: "Discovery", description: "We understand your business, products, and target audience" },
  { icon: Palette, title: "Design", description: "Custom theme selection and branding implementation" },
  { icon: Settings, title: "Development", description: "Full store setup with all features configured" },
  { icon: Rocket, title: "Launch", description: "Testing, optimization, and go-live support" },
];

export default function ShopifyStoreSetup() {
  return (
    <>
      <Helmet>
        <title>Shopify Store Setup | PROLAB - Professional E-commerce Solutions Dubai</title>
        <meta name="description" content="Get your Shopify store set up professionally in 3 days. Custom design, payment integration, and SEO optimization included. Dubai's trusted Shopify experts." />
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
                  Shopify Store Setup
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Launch Your <span className="text-gradient">Shopify Store</span> in 3 Days
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Get a fully functional, beautifully designed Shopify store ready to start selling. We handle everything from setup to launch.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get Started Today
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Features Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What's Included
              </h2>
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

        {/* Process Section */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Our Process
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                A streamlined approach to get your store live quickly
              </p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <ScrollReveal key={index} delay={index * 150}>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
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
                Ready to Launch Your Store?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Get a professional Shopify store that's built to convert visitors into customers.
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
