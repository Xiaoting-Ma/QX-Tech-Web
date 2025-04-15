import Head from 'next/head';
import Navbar from "@/components/common/Navbar";
import NarrowBanner from "@/components/common/NarrowBanner";
import PortfolioGallery from "@/components/showcase/PortfolioGallery";
import Footer from "@/components/common/Footer";

export default function HomePage() {
    return (
      <>
        <Head>
          <title>Showcase | QX Tech</title>
          <meta
            name="description"
            content="Browse our portfolio of successful projects, showcasing our web development, branding, and digital expertise across industries."
          />
          <meta
            name="keywords"
            content="QX Tech showcase, portfolio, web development projects, design work, case studies"
          />
          <meta property="og:title" content="QX Tech Project Showcase" />
          <meta property="og:description" content="Discover the digital solutions we've crafted for businesses across Australia and beyond." />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://www.qxtech.com.au/showcase" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <main>
          <Navbar />
          <NarrowBanner
            imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Our Showcases"
            content="Explore the projects that reflect our commitment to quality, creativity, and long-term client success."
            height="350px"
          />
          
          <PortfolioGallery 
            defaultView="grid"
          />
          
          <Footer />
        </main>
      </>
    );
  }