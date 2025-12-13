import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  href: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  href,
  featured = false,
}: ServiceCardProps) {
  return (
    <div
      className={`glass-card-hover p-8 flex flex-col h-full group ${
        featured ? "border-primary/30 shadow-gold" : ""
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-gold text-primary-foreground text-xs font-bold rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
        <Icon className="w-7 h-7 text-primary" />
      </div>

      <h3 className="font-display font-bold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground mb-6 flex-grow">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to={href}
        className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
      >
        Learn More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
