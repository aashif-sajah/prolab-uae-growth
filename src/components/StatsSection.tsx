import AnimatedCounter from "./AnimatedCounter";
import ScrollReveal from "./ScrollReveal";
import { ShoppingBag, Package, Users, HeadphonesIcon } from "lucide-react";

const stats = [
  {
    icon: ShoppingBag,
    value: 500,
    suffix: "+",
    label: "Shopify Stores Built",
  },
  {
    icon: Package,
    value: 2000,
    suffix: "+",
    label: "Orders Generated",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Active Clients",
  },
  {
    icon: HeadphonesIcon,
    value: 24,
    suffix: "/7",
    label: "Support Availability",
  },
];

export default function StatsSection() {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative">
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-16">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Track Record</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Numbers That Speak for Themselves
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} animation="scale-in" delay={index * 100}>
              <div className="glass-card-hover p-8 text-center group">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient-gold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2500} />
                </div>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
