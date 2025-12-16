import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, TrendingUp, Target, BarChart3, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const deliverables = [
  "50 winning product suggestions",
  "Competitor analysis report",
  "Pricing strategy recommendations",
  "Supplier suggestions",
  "Market trend insights",
  "Niche viability assessment",
  "Profit margin calculations",
  "Target audience profiles",
];

const process = [
  { icon: Search, title: "Market Research", description: "Deep dive into trending products and market demands" },
  { icon: Target, title: "Niche Analysis", description: "Identify profitable niches with low competition" },
  { icon: BarChart3, title: "Data Analysis", description: "Analyze sales data, trends, and profit potential" },
  { icon: TrendingUp, title: "Recommendations", description: "Curated list of products ready to sell" },
];

export default function ProductResearch() {
  return (
    <>
      <Helmet>
        <title>Product Research | PROLAB - Find Winning Products for Your Store</title>
        <meta name="description" content="Get expert product research for your e-commerce store. We find 50 winning products with high profit potential and low competition." />
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
                  Product Research
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Find <span className="text-gradient">Winning Products</span> That Sell
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Data-driven product research to help you launch with confidence. We identify 50 high-potential products for your store.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Get Product Research
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                What You'll Receive
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
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
                Our Research Process
              </h2>
              <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                Thorough analysis to find products with real profit potential
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
                Stop Guessing, Start Selling
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let our research team find the products that will drive your store's success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="btn-primary">
                  Order Research
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
