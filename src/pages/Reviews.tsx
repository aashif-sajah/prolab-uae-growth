import { Helmet } from "react-helmet-async";
import { Star, Quote, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import CTASection from "@/components/CTASection";
import AnimatedCounter from "@/components/AnimatedCounter";

const testimonials = [
  {
    name: "Ahmed Al-Rashid",
    role: "Founder",
    company: "Desert Luxe",
    content: "Prolab delivered my store in exactly 3 days. The quality exceeded my expectations. Already made $15,000 in my first month! The team understood exactly what I needed.",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "CEO",
    company: "Glow Beauty UAE",
    content: "The team at Prolab truly understands e-commerce. My conversion rate jumped from 1.2% to 4.1% after they optimized my store. Best investment I've made for my business.",
    rating: 5,
  },
  {
    name: "Mohammed Hassan",
    role: "Owner",
    company: "TechZone Dubai",
    content: "Professional, fast, and reliable. They handled everything from setup to product research. Highly recommended for anyone serious about selling online!",
    rating: 5,
  },
  {
    name: "Fatima Al-Maktoum",
    role: "Entrepreneur",
    company: "Abaya House",
    content: "I was skeptical at first, but Prolab proved me wrong. My traditional fashion store now reaches customers across the GCC. Amazing work!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Founder",
    company: "Fitness First UAE",
    content: "They didn't just build a store, they built a revenue machine. The product research they provided was spot-on. Already doing 6 figures!",
    rating: 5,
  },
  {
    name: "Layla Ahmed",
    role: "Marketing Director",
    company: "Scent of Arabia",
    content: "Our perfume business needed an online presence that matched our luxury brand. Prolab delivered exactly that. Premium quality work.",
    rating: 5,
  },
  {
    name: "Omar Khalid",
    role: "Owner",
    company: "Pet Paradise UAE",
    content: "The 3-day delivery seemed too good to be true, but they actually did it! My pet supplies store was up and running before the weekend.",
    rating: 5,
  },
  {
    name: "Christina Lee",
    role: "Founder",
    company: "Organic Kitchen",
    content: "As someone with zero technical knowledge, I was worried. But Prolab made everything so easy. They even trained me on how to manage my store.",
    rating: 5,
  },
];

const stats = [
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "", label: "Average Rating" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Client Reviews & Testimonials | PROLAB Dubai</title>
        <meta name="description" content="Read what our clients say about Prolab. 100+ satisfied clients across UAE trust us with their Shopify stores and websites." />
        <meta name="keywords" content="Prolab reviews, Shopify agency reviews Dubai, web development testimonials UAE" />
      </Helmet>

      <Header />

      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

          <div className="container-custom relative">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Users className="w-4 h-4 text-primary" />
                  <span className="text-primary text-sm font-medium">100+ Satisfied Clients</span>
                </div>

                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
                  What Our Clients Say
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Real feedback from real businesses we've helped succeed.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-border/50 bg-secondary/30">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} animation="scale-in" delay={index * 100}>
                  <div className="text-center">
                    <p className="text-4xl font-display font-bold text-gradient-gold">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={testimonial.name} animation="fade-up" delay={index * 50}>
                  <div className="glass-card-hover p-6 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Quote className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < testimonial.rating ? "text-primary fill-primary" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>

                    <p className="text-foreground leading-relaxed mb-6 flex-grow">
                      "{testimonial.content}"
                    </p>

                    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                      <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                        <p className="text-muted-foreground text-xs">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Join Our Happy Clients"
          subtitle="Be the next success story. Get your store built by the team UAE trusts."
        />
      </main>

      <Footer />
    </>
  );
}
