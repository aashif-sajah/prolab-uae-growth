import { useEffect, useRef, useState } from "react";
import { portfolioProjects } from "@/data/portfolioData";

interface PortfolioShowcaseProps {
  maxImages?: number;
}

export default function PortfolioShowcase({ maxImages = 5 }: PortfolioShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get first image from each project
  const showcaseImages = portfolioProjects
    .slice(0, maxImages)
    .map((project, index) => ({
      src: project.images[0],
      alt: project.name,
      id: project.id,
    }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Calculate stacked positions
  const getStackStyles = (index: number, total: number) => {
    const centerIndex = Math.floor(total / 2);
    const offset = index - centerIndex;
    
    return {
      "--stack-offset-x": `${offset * -15}px`,
      "--stack-offset-y": `${Math.abs(offset) * 10}px`,
      "--stack-rotation": `${offset * -5}deg`,
      "--stack-scale": `${1 - Math.abs(offset) * 0.05}`,
      "--spread-offset-x": `${offset * 220}px`,
      "--float-rotation": `${offset * 2}deg`,
      zIndex: total - Math.abs(offset),
    } as React.CSSProperties;
  };

  return (
    <div 
      ref={containerRef}
      className="relative py-20 overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      {/* Showcase container */}
      <div className="relative flex items-center justify-center min-h-[500px] md:min-h-[600px]">
        <div className="relative flex items-center justify-center">
          {showcaseImages.map((image, index) => (
            <div
              key={image.id}
              className={`absolute w-[280px] md:w-[360px] lg:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated
                ${isVisible ? 'animate-stack-spread' : ''}
                ${!isVisible && !hasAnimated ? 'opacity-0' : ''}
              `}
              style={{
                ...getStackStyles(index, showcaseImages.length),
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
              
              {/* Project name on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-foreground font-display font-semibold text-lg">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-float animation-delay-500" />
    </div>
  );
}
