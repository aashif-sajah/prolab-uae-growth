import { ExternalLink, TrendingUp } from "lucide-react";

interface PortfolioCardProps {
  title: string;
  category: string;
  description: string;
  result: string;
  image: string;
}

export default function PortfolioCard({
  title,
  category,
  description,
  result,
  image,
}: PortfolioCardProps) {
  return (
    <div className="glass-card-hover overflow-hidden group">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full">
          {category}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-14 h-14 rounded-full bg-foreground/90 flex items-center justify-center">
            <ExternalLink className="w-6 h-6 text-background" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display font-bold text-xl text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{description}</p>
        
        {/* Result Badge */}
        <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-lg w-fit">
          <TrendingUp className="w-4 h-4 text-green-400" />
          <span className="text-green-400 text-sm font-semibold">{result}</span>
        </div>
      </div>
    </div>
  );
}
