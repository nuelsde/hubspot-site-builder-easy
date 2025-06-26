
import { Hero } from "@/components/Hero";
import { Painpoints } from "@/components/Painpoints";
import { Methodology } from "@/components/Methodology";
import { CaseStudies } from "@/components/CaseStudies";
import { Packages } from "@/components/Packages";
import { HubSpotMeeting } from "@/components/HubSpotMeeting";
import { Downloads } from "@/components/Downloads";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Painpoints />
      <Methodology />
      <CaseStudies />
      <Packages />
      <Downloads />
      <HubSpotMeeting />
      <Footer />
    </div>
  );
};

export default Index;
