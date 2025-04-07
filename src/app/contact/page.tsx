import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import NarrowBanner from "@/components/NarrowBanner";
import Footer from "@/components/Footer";

export default function HomePage() {
    return (
      <main>
        <Navbar />
        <NarrowBanner
          imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="About Us"
          content="QX Tech specializes in creating visually stunning and user-friendly websites tailored to your business needs. From custom designs to seamless functionality, we ensure your online presence is both engaging and efficient, offering responsive designs."
          height="350px"
        />
        <div className='pt-20'>
          <Timeline />
        </div>
        <Footer />
      </main>
    );
  }