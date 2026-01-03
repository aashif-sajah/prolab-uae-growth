export interface PortfolioProject {
  id: string;
  name: string;
  industry: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  slug: string;
  deliverables: string[];
  results: {
    label: string;
    description: string;
  }[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "eduraise",
    name: "Eduraise",
    industry: "Education / EdTech",
    shortDescription: "A high-conversion online tutoring platform connecting international students with pre-vetted teachers across global curriculums.",
    fullDescription: "Eduraise approached us with a vision to revolutionize online tutoring for international students. They needed a platform that could handle complex scheduling across time zones, seamless video integration, and a robust payment system for global transactions. The goal was to create a trusted marketplace that parents and students could rely on for quality education.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&h=800&fit=crop",
    ],
    slug: "/portfolio/eduraise",
    deliverables: [
      "Conversion-focused UI/UX design",
      "High-performance React development",
      "SEO-first architecture",
      "Monetization-ready payment integration",
      "Scalable component design system",
    ],
    results: [
      { label: "Designed for Conversions", description: "Strategic CTAs and trust signals placed throughout the user journey" },
      { label: "Optimized for Engagement", description: "Interactive elements and smooth animations to keep users engaged" },
      { label: "Built for Scalability", description: "Modular architecture ready to handle thousands of concurrent users" },
    ],
  },
  {
    id: "luxe-interiors",
    name: "Luxe Interiors",
    industry: "Interior Design / Luxury",
    shortDescription: "A premium portfolio website for Dubai's leading interior design studio, showcasing their high-end residential and commercial projects.",
    fullDescription: "Luxe Interiors needed a digital presence that matched the elegance of their physical work. We created an immersive visual experience that lets their stunning projects speak for themselves, with subtle animations and a sophisticated color palette that appeals to their affluent clientele.",
    images: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop",
    ],
    slug: "/portfolio/luxe-interiors",
    deliverables: [
      "Bespoke visual design system",
      "Immersive gallery experiences",
      "Performance-optimized image loading",
      "Lead generation integration",
      "Mobile-first responsive design",
    ],
    results: [
      { label: "Premium Brand Positioning", description: "Visual language that resonates with high-net-worth clients" },
      { label: "Increased Inquiries", description: "Streamlined contact flow designed to capture qualified leads" },
      { label: "Faster Load Times", description: "Optimized assets for quick loading without sacrificing quality" },
    ],
  },
  {
    id: "fintech-pro",
    name: "FinTech Pro",
    industry: "Finance / Technology",
    shortDescription: "A modern fintech platform offering AI-powered investment insights for retail investors in the MENA region.",
    fullDescription: "FinTech Pro required a platform that could simplify complex financial data into actionable insights. We built an intuitive dashboard that makes sophisticated investment tools accessible to everyday investors, with real-time data visualization and personalized recommendations.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    ],
    slug: "/portfolio/fintech-pro",
    deliverables: [
      "Complex data visualization",
      "Real-time dashboard development",
      "Secure authentication system",
      "API integration architecture",
      "Compliance-ready design",
    ],
    results: [
      { label: "User-Friendly Interface", description: "Complex financial data presented in digestible formats" },
      { label: "Enhanced Trust", description: "Security-focused design that builds user confidence" },
      { label: "Scalable Infrastructure", description: "Built to handle high-frequency data updates" },
    ],
  },
  {
    id: "wellness-hub",
    name: "Wellness Hub",
    industry: "Health / Wellness",
    shortDescription: "A holistic wellness platform connecting users with certified practitioners for mental health, nutrition, and fitness services.",
    fullDescription: "Wellness Hub wanted to create a safe, calming digital space where users could find and book sessions with wellness practitioners. We designed an experience that embodies tranquility while maintaining the functionality needed for seamless bookings and practitioner management.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=1200&h=800&fit=crop",
    ],
    slug: "/portfolio/wellness-hub",
    deliverables: [
      "Calming visual design language",
      "Booking system integration",
      "Practitioner dashboard",
      "User profile management",
      "SEO-optimized content structure",
    ],
    results: [
      { label: "Serene User Experience", description: "Design choices that promote calm and trust" },
      { label: "Streamlined Bookings", description: "Reduced friction in the booking process" },
      { label: "Strong SEO Foundation", description: "Optimized for wellness-related search queries" },
    ],
  },
  {
    id: "artisan-eats",
    name: "Artisan Eats",
    industry: "Food & Beverage / E-commerce",
    shortDescription: "A gourmet food marketplace featuring artisanal products from local producers across the UAE.",
    fullDescription: "Artisan Eats needed an e-commerce platform that could tell the story of their producers while driving sales. We created a visually rich shopping experience that highlights product origins, quality, and the people behind each item, resulting in higher average order values and customer loyalty.",
    images: [
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=800&fit=crop",
    ],
    slug: "/portfolio/artisan-eats",
    deliverables: [
      "E-commerce platform development",
      "Product storytelling layouts",
      "Subscription model integration",
      "Inventory management system",
      "Multi-payment gateway setup",
    ],
    results: [
      { label: "Compelling Product Stories", description: "Content structure that increases perceived value" },
      { label: "Higher Cart Values", description: "UX optimizations that encourage larger purchases" },
      { label: "Repeat Customer Growth", description: "Subscription features for recurring revenue" },
    ],
  },
];

export const getFeaturedProjects = (count: number = 3) => {
  return portfolioProjects.slice(0, count);
};

export const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find(project => project.slug === slug || project.id === slug);
};
