import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import ShopifyDevelopment from "./pages/ShopifyDevelopment";
import Websites from "./pages/Websites";
import Pricing from "./pages/Pricing";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import ShopifyStoreSetup from "./pages/services/ShopifyStoreSetup";
import PaymentGateway from "./pages/services/PaymentGateway";
import ProductResearch from "./pages/services/ProductResearch";
import BusinessWebsites from "./pages/services/BusinessWebsites";
import PersonalBrands from "./pages/services/PersonalBrands";
import SEOOptimization from "./pages/services/SEOOptimization";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/shopify" element={<ShopifyDevelopment />} />
            <Route path="/websites" element={<Websites />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/services/shopify-setup" element={<ShopifyStoreSetup />} />
            <Route path="/services/payment-gateway" element={<PaymentGateway />} />
            <Route path="/services/product-research" element={<ProductResearch />} />
            <Route path="/services/business-websites" element={<BusinessWebsites />} />
            <Route path="/services/personal-brands" element={<PersonalBrands />} />
            <Route path="/services/seo-optimization" element={<SEOOptimization />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
