import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  href?: string;
}

export default function PricingCard({
  name,
  price,
  description,
  features,
  featured = false,
  href = "/contact",
}: PricingCardProps) {
  return (
    <div
      className={`relative glass-card p-8 flex flex-col h-full transition-all duration-500 hover:scale-105 ${
        featured
          ? "border-primary/50 shadow-gold bg-gradient-to-b from-primary/5 to-transparent mt-8 md:mt-0"
          : "hover:border-primary/30"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gradient-gold text-primary-foreground text-xs md:text-sm font-bold rounded-full shadow-gold whitespace-nowrap">
          Most Popular
        </div>
      )}

      <div className={`mb-8 ${featured ? "pt-2" : ""}`}>
        <h3 className="font-display font-bold text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-display font-bold text-gradient-gold">{price}</span>
          <span className="text-muted-foreground">AED</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-muted-foreground text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Link to={href} className="w-full">
        <Button
          className={`w-full py-6 font-semibold ${
            featured
              ? "bg-gradient-gold text-primary-foreground hover:opacity-90"
              : "bg-secondary hover:bg-secondary/80 text-foreground border border-border"
          }`}
        >
          Get Started
        </Button>
      </Link>
    </div>
  );
}
