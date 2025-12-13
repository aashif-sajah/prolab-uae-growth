import { Shield, Clock, Users, CheckCircle2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const badges = [
  {
    icon: Shield,
    title: "Dubai Registered",
    description: "100% Legitimate Company",
  },
  {
    icon: Users,
    title: "100+ Stores Built",
    description: "Trusted by UAE Businesses",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always Here for You",
  },
  {
    icon: CheckCircle2,
    title: "100% Original",
    description: "No Templates, No Shortcuts",
  },
];

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-6">
      {badges.map((badge, index) => (
        <ScrollReveal key={badge.title} animation="scale-in" delay={index * 100}>
          <div className="flex items-center gap-3 px-4 py-3 glass-card">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <badge.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">{badge.title}</p>
              <p className="text-muted-foreground text-xs">{badge.description}</p>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}
