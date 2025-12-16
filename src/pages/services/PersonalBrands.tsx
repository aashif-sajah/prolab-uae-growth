import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { User, Star, Camera, Megaphone, Check } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  "Personal portfolio design",
  "About & bio sections",
  "Services/offerings page",
  "Testimonials section",
  "Blog integration",
  "Social media links",
  "Contact form",
  "SEO optimization",
];

const idealFor = [
  { icon: User, title: "Consultants", description: "Showcase your expertise and attract clients" },
  { icon: Star, title: "Influencers", description: "Build your brand and grow your audience" },
  { icon: Camera, title: "Creatives", description: "Display your portfolio beautifully" },
  { icon: Megaphone, title: "Speakers", description: "Promote your talks and book events" },
];

export default function PersonalBrands() {
  return (
    <>
      <Helmet>
        <title>Personal Brand Websites | PROLAB - Build Your Online Presence Dubai</title>
        <meta name="description" content="Build a powerful personal brand with a custom website. Perfect for consultants, influencers, creatives, and entrepreneurs. Dubai's web experts." />
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
                  Personal Brand Websites
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Build Your <span className="text-gradient">Personal Brand</span> Online
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Stand out from the crowd with a website that showcases your unique value and attracts opportunities.
                </p>
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Build Your Brand
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Ideal For Section */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Perfect For
              </h2>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {idealFor.map((item, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="glass-card p-6 text-center">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
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
                Everything you need to establish your personal brand
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
                Ready to Stand Out?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Your personal brand deserves a website that reflects your unique value. Let's make it happen.
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
