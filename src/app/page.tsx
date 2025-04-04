import HeroSection from '../components/HeroSection';
import ClientsSection from '../components/ClientsSection';
import ProblemsSection from '../components/ProblemsSection';
import WhyUsSection from '../components/WhyUsSection';
import WebsiteShowcase from '../components/landing/LandingShowcase';
import ServicesCardSection from '../components/ServicesCardSection';
import ApproachSection from '../components/ApproachSection';
import DifferenceSection from '../components/DifferenceSection';
import ContactSection from '../components/ContactSection';
import CareersSection from '../components/CareersSection';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CircularCarousel from '../components/landing/CircularCarousel';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
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
        <WhyUsSection />
        <ClientsSection />
        <ApproachSection />
        <DifferenceSection />
        <ContactSection />
        <CareersSection />
      </main>
      <Footer />
    </div>
  );
}
