import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <div className="glass-card-hover p-8 h-full flex flex-col">
      {/* Quote Icon */}
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
        <Quote className="w-6 h-6 text-primary" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-primary fill-primary" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-foreground leading-relaxed mb-6 flex-grow">"{content}"</p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-6 border-t border-border/50">
        <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{name}</p>
          <p className="text-muted-foreground text-sm">
            {role} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
