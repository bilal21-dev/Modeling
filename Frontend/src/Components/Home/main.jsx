import React from 'react';

// Import your sections
import HeroSection from '../Sections/HeroSection';
import AboutSection from '../Sections/AboutSection';
import ServicesSection from '../Sections/ServicesSection';
import ContactSection from '../Sections/ContactSection';
import TopModels from '../Sections/TopModels';
import ModelsPak from '../Sections/ModelsPak';
import HowToJoin from '../Sections/HowToJoin';
import HowToBookModel from '../Sections/HowToBookModel';
import BestModels from '../Sections/BestModels';
import Locations from '../Sections/Locations';
import JoinModelingAgency from '../Sections/JoinModelingAgency';
import ModelingServices from '../Sections/ModelingServices';
import BrandsServed from '../Sections/BrandsServed';
import Faqs from '../Sections/Faqs';
import ContactSpark from '../Sections/ContactSpark';
import ContactSparkBanner from '../Sections/ContactSparkBanner';


const MainPage = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <TopModels/>
      <ModelsPak/>
      <HowToJoin/>
      <HowToBookModel/>
      <BestModels/>
      <Locations/>
      <ContactSpark/>
      <JoinModelingAgency/>
      <ModelingServices/>
      <BrandsServed/>
      <Faqs/>
      {/* <ServicesSection /> */}
      <ContactSparkBanner/>
      <ContactSection />
    </main>
  );
};

export default MainPage;
