import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", whatsapp: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get Your Free Consultation | PROLAB Dubai</title>
        <meta name="description" content="Contact Prolab for your Shopify store or website project. Free consultation, fast response. Dubai-based team ready to help you succeed online." />
        <meta name="keywords" content="contact Shopify agency Dubai, web development inquiry UAE, Prolab contact" />
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
                  Let's Build Something Great
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Ready to start your e-commerce journey? Get in touch for a free consultation.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <ScrollReveal animation="slide-left">
                <div className="glass-card p-8">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                    Book a Free Consultation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Your Name
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        WhatsApp Number
                      </label>
                      <Input
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                        required
                        className="bg-secondary/50 border-border"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Tell us about your project
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="I want to start a Shopify store for..."
                        rows={4}
                        required
                        className="bg-secondary/50 border-border resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-6 gap-2"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-5 h-5" />
                    </Button>
                  </form>
                </div>
              </ScrollReveal>

              {/* Contact Info */}
              <ScrollReveal animation="slide-right" delay={200}>
                <div className="space-y-8">
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                      Get in Touch
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Have questions? We're here to help. Reach out through any of these channels and we'll respond within hours.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <a
                      href="https://wa.me/94726602908"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 glass-card-hover p-6 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                        <MessageCircle className="w-6 h-6 text-green-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                        <p className="text-muted-foreground">+94 726 602 908</p>
                        <p className="text-sm text-green-500 mt-1">Fastest response</p>
                      </div>
                    </a>

                    <a
                      href="mailto:info@eduraise.io"
                      className="flex items-start gap-4 glass-card-hover p-6 group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Email</h3>
                        <p className="text-muted-foreground">info@eduraise.io</p>
                        <p className="text-sm text-muted-foreground mt-1">We reply within 24h</p>
                      </div>
                    </a>

                    <div className="flex items-start gap-4 glass-card p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">Location</h3>
                        <p className="text-muted-foreground">Dubai, United Arab Emirates</p>
                        <p className="text-sm text-primary mt-1">Dubai Registered Company</p>
                      </div>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="glass-card p-6">
                    <h3 className="font-semibold text-foreground mb-4">Why Contact Us?</h3>
                    <ul className="space-y-3">
                      {[
                        "Free consultation - no obligations",
                        "Fast response guaranteed",
                        "Dubai registered company",
                        "100+ projects delivered",
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
