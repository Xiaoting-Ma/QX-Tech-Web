import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import NarrowBanner from "@/components/common/NarrowBanner";
import Footer from "@/components/common/Footer";
import BlogGallery from "@/components/blog/BlogGallery";

export default function HomePage() {
    return (
      <>
        <Head>
          <title>Blog | QX Tech</title>
          <meta
            name="description"
            content="Stay up-to-date with the latest industry trends, tech tips, and company insights from QX Tech's blog."
          />
          <meta
            name="keywords"
            content="QX Tech blog, tech insights, web development tips, SEO, digital strategy"
          />
          <meta property="og:title" content="QX Tech Blog" />
          <meta property="og:description" content="Explore expert advice and updates on web development, SEO, and digital transformation." />
          <meta property="og:image" content="/og-image.png" />
          <meta property="og:url" content="https://www.qxtech.com.au/blog" />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <main>
          <Navbar />
          <NarrowBanner
            imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Our Blog"
            content="Insights, tips, and updates from our tech team to help you stay ahead in the digital landscape."
            height="350px"
          />
          <BlogGallery
            defaultView="grid"
          />
          <Footer />
        </main>
      </>
    );
  }