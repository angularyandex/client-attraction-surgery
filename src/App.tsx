
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Contacts from "./pages/Contacts";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import Rhinoplasty from "./pages/Rhinoplasty";
import Mammoplasty from "./pages/Mammoplasty";
import Liposuction from "./pages/Liposuction";
import Facelift from "./pages/Facelift";
import Blepharoplasty from "./pages/Blepharoplasty";
import Consultation from "./pages/Consultation";
import BeforeAfter from "./pages/BeforeAfter";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import Certificates from "./pages/Certificates";
import Testimonials from "./pages/Testimonials";
import Financing from "./pages/Financing";
import Recovery from "./pages/Recovery";
import Preparation from "./pages/Preparation";
import Technology from "./pages/Technology";
import Safety from "./pages/Safety";
import Clinic from "./pages/Clinic";
import Insurance from "./pages/Insurance";
import Abdominoplasty from "./pages/Abdominoplasty";
import Otoplasty from "./pages/Otoplasty";
import Appointment from "./pages/Appointment";
import Emergency from "./pages/Emergency";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/rhinoplasty" element={<Rhinoplasty />} />
          <Route path="/mammoplasty" element={<Mammoplasty />} />
          <Route path="/liposuction" element={<Liposuction />} />
          <Route path="/facelift" element={<Facelift />} />
          <Route path="/blepharoplasty" element={<Blepharoplasty />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/before-after" element={<BeforeAfter />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/recovery" element={<Recovery />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/abdominoplasty" element={<Abdominoplasty />} />
          <Route path="/otoplasty" element={<Otoplasty />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/emergency" element={<Emergency />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
