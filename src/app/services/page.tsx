import Head from 'next/head';
import Navbar from "@/components/common/Navbar";
import NarrowBanner from "@/components/common/NarrowBanner";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceProcess from "@/components/services/ServiceProcess";
import TestimonialCarousel from "@/components/services/TestimonialCarousel";
import Footer from "@/components/common/Footer";
import ServicesIntroduction from "@/components/services/ServicesIntroduction";

export default function HomePage() {
    return (
      <>
        <Head>
          <title>Our Services | QX Tech</title>
          <meta
            name="description"
            content="Explore QX Tech's professional services including website development, SEO, IT support, and digital solutions tailored to your business needs."
          />
          <meta
            name="keywords"
            content="QX Tech services, website development, SEO, IT solutions, Canberra tech company"
          />
          <meta property="og:title" content="QX Tech Services" />
          <meta property="og:description" content="Discover our full range of digital services to boost your online presence and grow your business." />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://www.qxtech.com.au/services" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <main>
          <Navbar />
          <NarrowBanner
            imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Our Services"
            content="Tailored digital solutions designed to meet the unique needs of your business — from web development to ongoing tech support.."
            height="350px"
          />
          <ServiceCard />
          {/* <ServicesIntroduction /> */}
          <ServiceProcess />
          <TestimonialCarousel />
          <Footer />
        </main>
      </>
    );
}