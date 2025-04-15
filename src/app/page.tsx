import Head from 'next/head';
import HeroSection from '../components/landing/HeroSection';
import ProblemsSection from '../components/landing/ProblemsSection';
import WhyUsSection from '../components/landing/WhyUsSection';
import ServicesCardSection from '../components/landing/ServicesCardSection';
import DifferenceSection from '../components/landing/DifferenceSection';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import CircularCarousel from '../components/landing/CircularCarousel';
import GetQuotesSection from '@/components/landing/GetQuoteSection';
import ContactAboutUs from '@/components/landing/ContactAboutUs';

export default function Home() {
  return (
    <>
      <Head>
        <title>QX Tech | Reliable IT Solutions for Your Business Success</title>
        <meta
          name="description"
          content="QX Tech offers expert website development, SEO, branding, and digital strategy services to help your business grow online."
        />
        <meta
          name="keywords"
          content="QX Tech, website design, web development, SEO, Canberra IT, digital marketing, tech solutions, IT support"
        />
        <meta name="author" content="QX Tech" />
        <meta property="og:title" content="QX Tech | Your Digital Bussiness IT Solution Partner" />
        <meta property="og:description" content="Reliable tech solutions from website design to SEO, tailored for your business success." />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://www.qxtech.com.au" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "QX Tech",
              url: "https://www.qxtech.com.au",
              logo: "https://www.qxtech.com.au/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+61 484411111",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </Head>
      <div>
        <Navbar />
        <div>
          <HeroSection />
          <ServicesCardSection />
          <ProblemsSection />
          <CircularCarousel />
          <GetQuotesSection />
          <WhyUsSection />
          <ContactAboutUs />
          <DifferenceSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
