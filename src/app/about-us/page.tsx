import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Timeline from "@/components/about-us/Timeline";
import NarrowBanner from "@/components/common/NarrowBanner";
import Footer from "@/components/common/Footer";
import TeamSection from "@/components/about-us/TeamSection";
import ContactUsSection from "@/components/about-us/ContactUs";

export default function HomePage() {
    return (
      <>
        <Head>
          <title>About Us | QX Tech</title>
          <meta
            name="description"
            content="QX Tech is a trusted Canberra-based tech partner dedicated to helping businesses grow through smart, scalable solutions."
          />
          <meta
            name="keywords"
            content="QX Tech team, web development projects, design work, Canberra tech company, IT solutions"
          />
          <meta property="og:title" content="QX Tech Team" />
          <meta property="og:description" content="we are dedicated to helping businesses accelerate their digital transformation. " />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://qixin.com.au/about-us" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <main>
          <Navbar />
          <NarrowBanner
            imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="About Us"
            content="QX Tech is a trusted Canberra-based tech partner dedicated to helping businesses grow through smart, scalable solutions."
            height="350px"
          />
          <div className='pt-20'>
            <Timeline />
          </div>
          <TeamSection />
          <ContactUsSection />

          <Footer />
        </main>
      </>
    );
  }