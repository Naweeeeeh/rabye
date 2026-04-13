import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import WhatIsRabiesSection from "@/components/WhatIsRabiesSection";
import FirstAidSection from "@/components/FirstAidSection";
import PreventionSection from "@/components/PreventionSection";
import GetHelpSection from "@/components/GetHelpSection";
import GoalSection from "@/components/GoalSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <ProblemSection />
    <WhatIsRabiesSection />
    <FirstAidSection />
    <PreventionSection />
    <GetHelpSection />
    <GoalSection />
    <Footer />
  </div>
);

export default Index;
