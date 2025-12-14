import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showBadges?: boolean;
}

export default function CTASection({
  title = "Ready to Start Making Money?",
  subtitle = "Your competitors are already selling. Every day you delay is lost revenue.",
  showBadges = true,
}: CTASectionProps) {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        <ScrollReveal animation="fade-up">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">{subtitle}</p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Link to="/contact">
                <Button className="btn-primary text-lg px-10 py-6 gap-2">
                  Start Your Revenue Store
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <a
                href="https://wa.me/971507123574"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="text-lg px-10 py-6 gap-2 border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us Now
                </Button>
              </a>
            </div>

            {showBadges && (
              <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">3-Day Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm">Dubai Registered</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm">24/7 Support</span>
                </div>
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
