import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { getProjectBySlug } from "@/data/portfolioData";

export default function Eduraise() {
  const project = getProjectBySlug("eduraise");

  if (!project) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{project.name} Case Study | Portfolio Website Developer Dubai | PROLAB</title>
        <meta 
          name="description" 
          content={`${project.shortDescription} See how PROLAB delivered a conversion-focused website for ${project.name}.`} 
        />
        <meta name="keywords" content="portfolio website developer Dubai, EdTech website Dubai, conversion focused website UAE" />
      </Helmet>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 via-primary/5 to-transparent rounded-full blur-3xl translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/10 via-transparent to-transparent rounded-full blur-3xl -translate-x-1/4" />
          </div>

          <div className="container-custom relative px-4 md:px-6 lg:px-8">
            {/* Back link */}
            <ScrollReveal animation="fade-up">
              <Link 
                to="/portfolio" 
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Portfolio
              </Link>
            </ScrollReveal>

            <div className="max-w-4xl">
              <ScrollReveal animation="fade-up" delay={100}>
                {/* Industry badge */}
                <span className="inline-block px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full mb-6">
                  {project.industry}
                </span>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={200}>
                <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
                  {project.name}
                </h1>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={300}>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                  {project.shortDescription}
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-20">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="scale-in">
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={`${project.name} - Main view`}
                  className="w-full aspect-[16/9] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Overview Section */}
        <section className="section-padding">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <ScrollReveal animation="slide-left">
                <div>
                  <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Overview</p>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                    The Challenge
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={200}>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Target Audience</h3>
                    <p className="text-muted-foreground">
                      International students and parents seeking quality online tutoring across multiple curriculums including IB, British, American, and local education systems.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">Business Goal</h3>
                    <p className="text-muted-foreground">
                      Create a trusted marketplace that generates consistent revenue through tutor-student connections while building long-term customer relationships.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* What Prolab Delivered */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">Our Solution</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  What Prolab Delivered
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.deliverables.map((deliverable, index) => (
                <ScrollReveal key={deliverable} animation="fade-up" delay={index * 100}>
                  <div className="flex items-start gap-4 p-6 rounded-2xl bg-background/50 backdrop-blur-sm">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-foreground font-medium">{deliverable}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Section - Project Screenshots */}
        <section className="section-padding">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">The Design</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Visual Showcase
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {project.images.slice(1).map((image, index) => (
                <ScrollReveal key={index} animation="fade-up" delay={index * 150}>
                  <div className="relative rounded-2xl overflow-hidden portfolio-image">
                    <img
                      src={image}
                      alt={`${project.name} - Screenshot ${index + 2}`}
                      className="w-full aspect-[16/9] object-cover"
                      loading="lazy"
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Impact */}
        <section className="section-padding bg-secondary/30">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <p className="text-primary font-semibold mb-4 tracking-wide uppercase">The Outcome</p>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                  Results & Impact
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {project.results.map((result, index) => (
                <ScrollReveal key={result.label} animation="fade-up" delay={index * 100}>
                  <div className="text-center p-8 rounded-2xl bg-background/50 backdrop-blur-sm">
                    <h3 className="font-display text-xl font-bold text-gradient-gold mb-3">
                      {result.label}
                    </h3>
                    <p className="text-muted-foreground">
                      {result.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding">
          <div className="container-custom px-4 md:px-6 lg:px-8">
            <ScrollReveal animation="fade-up">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                  Ready to Build Your{" "}
                  <span className="text-gradient-gold">Success Story?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10">
                  Let's create a website that drives real business results. Just like we did for {project.name}.
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
                  <Link to="/portfolio">
                    <Button variant="outline" className="btn-secondary text-lg px-10 py-7">
                      View More Projects
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
