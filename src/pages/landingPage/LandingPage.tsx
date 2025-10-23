import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatementSection } from './components/StatementSection';
import { InfrastructureSection } from './components/InfrastructureSection';
import { SuccessStorySection } from './components/SuccessStorySection';
import { BrandSection } from './components/BrandSection';
import { TimelineSection } from './components/TimelineSection';
import { FinalCTASection } from './components/FinalCTASection';
import { FooterSection } from './components/FooterSection';
// import { ContactForm } from './components/ContactForm';
// import { useState } from 'react';

export const LandingPage = () => {
  // const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <>
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <HeroSection />
      <StatementSection />
      <InfrastructureSection />
      <SuccessStorySection />
      <BrandSection/>
      <TimelineSection/>
      <FinalCTASection />
      <FooterSection/>
      {/* <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} /> */}
    </div>
    </>

  )
}
