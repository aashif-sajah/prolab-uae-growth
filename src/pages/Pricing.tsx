import { Helmet } from "react-helmet-async";
import { Check, HelpCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PricingCard from "@/components/PricingCard";
import CTASection from "@/components/CTASection";

const shopifyPackages = [
  {
    name: "Starter",
    price: "799",
    description: "Perfect for testing your business idea",
    features: [
      "Shopify store setup",
      "Free theme installation",
      "20 products added",
      "Payment gateway setup",
      "Basic SEO setup",
      "Mobile responsive",
      "7 days support",
    ],
  },
  {
    name: "Professional",
    price: "1,199",
    description: "Most popular choice for serious sellers",
    features: [
      "Premium theme setup",
      "50 high-selling products",
      "Full payment gateway setup",
      "Speed optimization",
      "SEO-ready structure",
      "Product descriptions",
      "30 days support",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "1,699",
    description: "For entrepreneurs ready to scale",
    features: [
      "Fully custom Shopify store",
      "Advanced SEO optimization",
      "Conversion-optimized layout",
      "Automation setup",
      "Priority 24/7 support",
      "Marketing strategy session",
      "90 days support",
    ],
  },
];

const websitePackages = [
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

const faqs = [
  {
    question: "How fast can you deliver my store?",
    answer: "We deliver complete Shopify stores within 3 business days. This includes setup, products, payment gateway, and all optimizations.",
  },
  {
    question: "Do I need to pay anything else after the package?",
    answer: "No hidden costs! The package price is all-inclusive. You only pay your monthly Shopify subscription ($29/month) which goes directly to Shopify.",
  },
  {
    question: "What payment gateways do you integrate?",
    answer: "We set up Stripe, PayTabs, Telr, PayPal, and any other UAE-compatible payment gateway you prefer.",
  },
  {
    question: "Do you provide the products or do I need to have them?",
    answer: "We provide niche-researched winning products for dropshipping. If you have your own products, we'll set those up instead.",
  },
  {
    question: "What if I need changes after the store is live?",
    answer: "All packages include support period for minor changes. For major updates, we offer affordable maintenance packages.",
  },
  {
    question: "Is Prolab a real Dubai company?",
    answer: "Yes! We are a fully registered Dubai company. You can verify our trade license. No scams, no freelancer risks.",
  },
];

export default function Pricing() {
  return (
    <>
      <Helmet>
        <title>Pricing - Shopify & Website Packages | PROLAB Dubai</title>
        <meta name="description" content="Transparent pricing for Shopify stores and websites. Starting from 799 AED. All packages include 3-day delivery, payment setup, and support." />
        <meta name="keywords" content="Shopify pricing Dubai, website pricing UAE, ecommerce packages Dubai" />
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
                  Simple, Transparent Pricing
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  No hidden fees. No surprises. Just clear pricing for quality work.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Shopify Packages */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Shopify Development</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Shopify Store Packages
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Complete Shopify stores delivered in 3 days. All packages include everything you need to start selling.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {shopifyPackages.map((pkg, index) => (
                <ScrollReveal key={pkg.name} animation="fade-up" delay={index * 100}>
                  <PricingCard {...pkg} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Website Packages */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Website Development</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Website Packages
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Professional websites for businesses and personal brands. SEO-optimized and mobile-first.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {websitePackages.map((pkg, index) => (
                <ScrollReveal key={pkg.name} animation="fade-up" delay={index * 100}>
                  <PricingCard {...pkg} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="section-padding">
          <div className="container-custom">
            <ScrollReveal animation="fade-up">
              <div className="text-center mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">FAQs</p>
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
                  Common Questions
                </h2>
              </div>
            </ScrollReveal>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <ScrollReveal key={faq.question} animation="fade-up" delay={index * 50}>
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Ready to Get Started?"
          subtitle="Contact us for a custom quote or to discuss your project."
        />
      </main>

      <Footer />
    </>
  );
}
