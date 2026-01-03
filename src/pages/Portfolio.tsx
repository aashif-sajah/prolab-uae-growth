import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import { portfolioProjects } from "@/data/portfolioData";

export default function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Portfolio | Website Developer Dubai | UI UX Agency UAE | PROLAB</title>
        <meta 
          name="description" 
          content="Explore our portfolio of conversion-focused websites and Shopify stores. See real case studies from UAE businesses we've helped grow with premium web development." 
        />
        <meta name="keywords" content="portfolio website developer Dubai, business website design Dubai, UI UX agency Dubai, ecommerce website development Dubai, conversion focused website Dubai" />
        <link rel="canonical" href="https://prolab.ae/portfolio" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-[700px] h-[700px] bg-gradient-to-br from-primary/25 via-primary/10 to-transparent rounded-full blur-3xl translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/15 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/4" />
          </div>

          <div className="container-custom relative px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-4xl mx-auto">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Portfolio</p>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                  Websites Designed to{" "}
                  <span className="text-gradient-gold">Drive Revenue</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                  Real projects. Real results. See how we transform ideas into high-converting digital experiences.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Animated Portfolio Showcase */}
        <PortfolioShowcase maxImages={5} />

        {/* Projects List */}
        <section className="section-padding">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-20">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Featured Projects
                </h2>
                <p className="text-lg text-muted-foreground">
                  From EdTech platforms to luxury e-commerce, we craft digital experiences that deliver.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-32">
              {portfolioProjects.map((project, index) => (
                <ScrollReveal 
                  key={project.id} 
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                >
                  <div className={`grid lg:grid-cols-12 gap-10 lg:gap-16 items-center`}>
                    {/* Image */}
                    <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                      <Link 
                        to={project.slug}
                        className="block group"
                      >
                        <div className="relative overflow-hidden rounded-2xl portfolio-image">
                          <img
                            src={project.images[0]}
                            alt={project.name}
                            className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                          
                          {/* View indicator */}
                          <div className="absolute bottom-8 left-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <span className="text-foreground font-display font-semibold text-lg">View Case Study</span>
                            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                              <ArrowRight className="w-5 h-5 text-primary-foreground" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                      <div className="space-y-5">
                        {/* Industry tag */}
                        <span className="inline-block px-4 py-1.5 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                          {project.industry}
                        </span>
                        
                        {/* Project name */}
                        <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                          {project.name}
                        </h3>
                        
                        {/* Description */}
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          {project.shortDescription}
                        </p>
                        
                        {/* Deliverables preview */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.deliverables.slice(0, 3).map((deliverable) => (
                            <span 
                              key={deliverable} 
                              className="text-xs text-muted-foreground bg-secondary/50 px-3 py-1.5 rounded-full"
                            >
                              {deliverable.split(' ').slice(0, 2).join(' ')}
                            </span>
                          ))}
                        </div>
                        
                        {/* Link */}
                        <Link 
                          to={project.slug}
                          className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 pt-4"
                        >
                          View Case Study
                          <ArrowRight className="w-5 h-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-b from-secondary/30 to-transparent">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to Be Our Next{" "}
                  <span className="text-gradient-gold">Success Story?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Let's build a website that drives real business results. Your vision, our expertise.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://wa.me/971507123574"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="btn-primary text-lg px-10 py-7 gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="outline" className="btn-secondary text-lg px-10 py-7">
                      Get a Free Quote
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
