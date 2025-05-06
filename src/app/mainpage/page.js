import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AnimatedImage from './components/Mobileviewimage';
import FeaturesSection from './components/FeatureSection'; 
import ImageGridEffect from './components/ImageGridEffect';
import SubscriptionSection from './components/SubscriptionSection';
import InvestorDetails from './components/InvestorDetials';
import NewsroomSection from './components/NewsroomSection';
import Footer from '../components/Footer';


const MainPage = () => {
    return (
      <div style={{ backgroundColor: '#121212' }}  className="bg-zinc-900 text-white scroll-smooth">
        <Navbar />
        <HeroSection />
        <AnimatedImage />
        <FeaturesSection/>
        <ImageGridEffect />
        <SubscriptionSection/>
        <InvestorDetails/>
        <NewsroomSection/>
        <Footer/>
      </div>
    );
  };
  

export default MainPage;
