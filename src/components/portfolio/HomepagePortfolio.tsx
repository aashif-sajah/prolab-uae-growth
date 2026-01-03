import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from "@/data/portfolioData";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomepagePortfolio() {
  const featuredProjects = getFeaturedProjects(3);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 via-transparent to-secondary/20" />
      
      <div className="container-custom relative px-4 md:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal animation="fade-up">
          <div className="text-center mb-20">
            <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Work</p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Projects That Drive{" "}
              <span className="text-gradient-gold">Real Results</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From startups to established brands, we create digital experiences that convert.
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Projects - Asymmetric Editorial Layout */}
        <div className="space-y-24 md:space-y-32">
          {featuredProjects.map((project, index) => (
            <ScrollReveal 
              key={project.id} 
              animation={index % 2 === 0 ? "slide-left" : "slide-right"}
              delay={index * 100}
            >
              <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <Link 
                    to={project.slug}
                    className="block portfolio-image rounded-2xl group"
                  >
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.images[0]}
                        alt={project.name}
                        className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                      
                      {/* View Project indicator */}
                      <div className="absolute bottom-6 left-6 flex items-center gap-2 text-foreground opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <span className="font-semibold">View Case Study</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </div>

                {/* Content */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-4">
                    {/* Industry tag */}
                    <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full">
                      {project.industry}
                    </span>
                    
                    {/* Project name */}
                    <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                      {project.name}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {project.shortDescription}
                    </p>
                    
                    {/* Link */}
                    <Link 
                      to={project.slug}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 mt-4"
                    >
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View Full Portfolio CTA */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="text-center mt-24">
            <Link to="/portfolio">
              <Button className="btn-primary text-lg px-10 py-7 gap-2">
                View Full Portfolio
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
