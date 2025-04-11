import HeroSection from '../components/landing/HeroSection';
import ProblemsSection from '../components/landing/ProblemsSection';
import WhyUsSection from '../components/landing/WhyUsSection';
import WebsiteShowcase from '../components/landing/LandingShowcase';
import ServicesCardSection from '../components/landing/ServicesCardSection';
import DifferenceSection from '../components/landing/DifferenceSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import CircularCarousel from '../components/landing/CircularCarousel';
import GetQuotesSection from '@/components/landing/GetQuoteSection';
import ContactAboutUs from '@/components/landing/ContactAboutUs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <HeroSection />
        <ServicesCardSection />
        <ProblemsSection />
        {/* Showcase section */}
        {/* <WebsiteShowcase 
          title="OUR SHOWCASE"
          buttonText="VIEW ALL PROJECTS"
          buttonLink="/showcase"
        /> */}
        <CircularCarousel />
        <GetQuotesSection />
        <WhyUsSection />
        <ContactAboutUs />
        <DifferenceSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
