import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Shopify Development", path: "/shopify" },
  { name: "Websites", path: "/websites" },
  { name: "Pricing", path: "/pricing" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Reviews", path: "/reviews" },
];

const services = [
  { name: "Shopify Store Setup", path: "/shopify" },
  { name: "Payment Gateway Integration", path: "/shopify" },
  { name: "Product Research", path: "/shopify" },
  { name: "Business Websites", path: "/websites" },
  { name: "Personal Brands", path: "/websites" },
  { name: "SEO Optimization", path: "/shopify" },
];

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Facebook, href: "#", label: "Facebook" },
];

export default function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border/50">
      <div className="container-custom section-padding px-4 md:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img
                src="https://i.postimg.cc/YqFGfHqV/PRO-LAB-(1).png"
                alt="PROLAB"
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Dubai's trusted Shopify development partner. We build revenue-ready stores that actually make money. 100% legitimate, Dubai-registered company.
            </p>
            <div className="flex items-center gap-2 text-primary text-sm font-medium">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Dubai Registered Company
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to={service.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://wa.me/971507123574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>+971 50 712 3574</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@eduraise.io"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span>info@eduraise.io</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://wa.me/971507123574"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Prolab. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <p className="text-primary font-medium">Dubai Registered Company</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
