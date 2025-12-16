import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { CreditCard, Shield, Zap, Globe, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const gateways = [
  { name: "Stripe", description: "Global payments with advanced features" },
  { name: "PayPal", description: "Trusted worldwide payment solution" },
  { name: "Shopify Payments", description: "Native Shopify integration" },
  { name: "Razorpay", description: "Popular in India & UAE" },
  { name: "Telr", description: "Middle East focused gateway" },
  { name: "Network International", description: "UAE's leading processor" },
];

const benefits = [
  { icon: Shield, title: "Secure Transactions", description: "PCI-DSS compliant setup ensuring customer data safety" },
  { icon: Zap, title: "Fast Checkout", description: "Optimized payment flow for higher conversions" },
  { icon: Globe, title: "Multi-Currency", description: "Accept payments in multiple currencies globally" },
  { icon: CreditCard, title: "Multiple Methods", description: "Credit cards, digital wallets, and local options" },
];

export default function PaymentGateway() {
  return (
    <>
      <Helmet>
        <title>Payment Gateway Integration | PROLAB - Secure E-commerce Payments Dubai</title>
        <meta name="description" content="Professional payment gateway integration for your Shopify store. Stripe, PayPal, and UAE-specific solutions. Secure, fast checkout setup." />
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
                  Payment Gateway Integration
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Accept Payments <span className="text-gradient">Seamlessly</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Integrate secure, reliable payment gateways that work for your business and your customers.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Setup Payment Gateway
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
                Why Professional Integration Matters
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

        {/* Supported Gateways */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
                Supported Payment Gateways
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                We integrate with all major payment processors
              </p>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gateways.map((gateway, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{gateway.name}</h3>
                      <p className="text-muted-foreground text-sm">{gateway.description}</p>
                    </div>
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
                Start Accepting Payments Today
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let us handle the technical setup so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Get Started
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
