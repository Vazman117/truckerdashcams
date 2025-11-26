import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster.tsx";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { UcrPopup } from "@/components/UcrPopup";
import Home from "@/pages/Home";
import Reviews from "@/pages/Reviews";
import GarminReview from "@/pages/reviews/GarminReview";
import NextbaseReview from "@/pages/reviews/NextbaseReview";
import VIOFOReview from "@/pages/reviews/VIOFOReview";
import BlackVueReview from "@/pages/reviews/BlackVueReview";
import VantrueReview from "@/pages/reviews/VantrueReview";
import BuyingGuides from "@/pages/BuyingGuides";
import BestDashcam2025 from "@/pages/buying-guides/BestDashcam2025";
import BudgetDashcams from "@/pages/buying-guides/BudgetDashcams";
import GPSDashcams from "@/pages/buying-guides/GPSDashcams";
import DualCamera from "@/pages/buying-guides/DualCamera";
import Installation from "@/pages/Installation";
import FAQ from "@/pages/FAQ";
import Contact from "@/pages/Contact";
import NightVision from "@/pages/guides/NightVision";
import MemoryCards from "@/pages/guides/MemoryCards";
import ParkingMode from "@/pages/guides/ParkingMode";
import Hardwiring from "@/pages/guides/Hardwiring";
import InsuranceClaims from "@/pages/guides/InsuranceClaims";
import FleetManagement from "@/pages/guides/FleetManagement";
import LegalGuide from "@/pages/guides/LegalGuide";
import Blog from "@/pages/Blog";
import Cases from "@/pages/Cases";
import About from "@/pages/About";
import Privacy from "@/pages/legal/Privacy";
import Terms from "@/pages/legal/Terms";
import TruckGPS from "@/pages/accessories/TruckGPS";
import PowerInverters from "@/pages/accessories/PowerInverters";
import EmergencyGear from "@/pages/accessories/EmergencyGear";
import CBRadios from "@/pages/accessories/CBRadios";
import DashcamAccessories from "@/pages/accessories/DashcamAccessories";
import BackupCameras from "@/pages/accessories/BackupCameras";
import TruckComfort from "@/pages/accessories/TruckComfort";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/reviews/garmin-67w" component={GarminReview} />
      <Route path="/reviews/nextbase-622gw" component={NextbaseReview} />
      <Route path="/reviews/viofo-a129-pro" component={VIOFOReview} />
      <Route path="/reviews/blackvue-dr900x" component={BlackVueReview} />
      <Route path="/reviews/vantrue-n4" component={VantrueReview} />
      <Route path="/buying-guides" component={BuyingGuides} />
      <Route path="/buying-guides/best-dashcam-2025" component={BestDashcam2025} />
      <Route path="/buying-guides/budget-dashcams" component={BudgetDashcams} />
      <Route path="/buying-guides/gps-dashcams" component={GPSDashcams} />
      <Route path="/buying-guides/dual-camera" component={DualCamera} />
      <Route path="/guides/night-vision" component={NightVision} />
      <Route path="/guides/memory-cards" component={MemoryCards} />
      <Route path="/guides/parking-mode" component={ParkingMode} />
      <Route path="/guides/hardwiring" component={Hardwiring} />
      <Route path="/guides/insurance-claims" component={InsuranceClaims} />
      <Route path="/guides/fleet-management" component={FleetManagement} />
      <Route path="/guides/legal-guide" component={LegalGuide} />
      <Route path="/accessories/truck-gps" component={TruckGPS} />
      <Route path="/accessories/power-inverters" component={PowerInverters} />
      <Route path="/accessories/emergency-gear" component={EmergencyGear} />
      <Route path="/accessories/cb-radios" component={CBRadios} />
      <Route path="/accessories/dashcam-accessories" component={DashcamAccessories} />
      <Route path="/accessories/backup-cameras" component={BackupCameras} />
      <Route path="/accessories/truck-comfort" component={TruckComfort} />
      <Route path="/blog" component={Blog} />
      <Route path="/cases" component={Cases} />
      <Route path="/about" component={About} />
      <Route path="/legal/privacy" component={Privacy} />
      <Route path="/legal/terms" component={Terms} />
      <Route path="/installation" component={Installation} />
      <Route path="/faq" component={FAQ} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Router />
          </main>
          <Footer />
        </div>
        <UcrPopup />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
