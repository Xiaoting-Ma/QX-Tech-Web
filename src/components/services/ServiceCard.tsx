'use client';

import React from "react";
import dynamic from "next/dynamic";
import { FaCode } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaRegChartBar } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { CgPacman } from "react-icons/cg";
import SectionTitle from "../common/TitleSection";

// Dynamically import Slider to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Import CSS for slider in component to avoid SSR issues
const SliderCSS = () => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css"
      />
      <style jsx global>{`
        /* Add custom spacing between slides */
        .slick-slide {
          padding: 0 15px;
        }
        
        /* Fix the active dot color */
        .slick-dots li.slick-active button:before {
          color: #f7cc11 !important;
        }
        
        /* Fix the dot color */
        .slick-dots li button:before {
          color: #333333 !important;
        }
      `}</style>
    </>
  );
};

const servicesData = [
  {
    id: 1,
    heading: "Web Design & Development",
    description: "We create user-friendly, high-quality websites tailored to your brand's needs, designed to engage visitors and drive business growth.",
    icon: FaCode,
  },
  {
    id: 2,
    heading: "Mobile App Development",
    description: "We help you build user-centered, high-performance mobile apps for iOS and Android, designed to engage customers and enhance employee efficiency.",
    icon: FaMobileAlt,
  },
  {
    id: 3,
    heading: "Data Analysis",
    description: "Our data analysis solutions help you unlock deeper insights and maximise data value. Through data modelling and visualization, we provide trusted insights that enhance business planning and decision-making.",
    icon: FaRegChartBar,
  },
  {
    id: 4,
    heading: "IT Support",
    description: "We offer expert support for software installation, data backup and more. With proactive and reactive solutions, including remote support or on-site assistance, we keep your business secure and productive.",
    icon: RiCustomerService2Fill,
  },
  {
    id: 5,
    heading: "Game Development",
    description: "From concept to visualization, our team delivers 2D and 3D games and visuals that bring your ideas to life. Combining creativity and technical expertise, we help you stand out in the industry.",
    icon: CgPacman,
  }
];

const ServiceCards = () => {
  const settings: import("react-slick").Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,  // Show 2 cards on tablets
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,  // Show 1 card on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 w-full h-fit flex flex-col gap-10 pt-16" id="services">
      {/* Import slider CSS */}
      <SliderCSS />
      
      {/* Page Title */}
      <SectionTitle title="What We Provide" />

      {/* Card Slider */}
      <div className="slider-container px-4">
        <Slider {...settings}>
          {servicesData.map((data) => (
            <div 
              key={data.id} 
              className="flex flex-col bg-white p-10 mx-5 rounded-3xl justify-center items-start shadow-sm transition-all duration-300 h-[350px]"
            >
              {/* group the icon and the title and change color */}
              <div className="text-black hover:text-darkyellow transition-all duration-300">
                {/* icon */}
                <div className="w-[49px] h-[49px] rounded-full border-2 border-[#333333] flex items-center justify-center">
                  {data.icon && <data.icon className="w-6 h-6" />}
                </div>
                {/* service title */}
                <div className="pt-5 font-semibold text-base md:text-xl">{data.heading}</div>
              </div>

              {/* service description */}
              <div className="pt-2 text-xs md:text-sm text-[#333333]">{data.description}</div>
            </div>
          ))}
        </Slider> 
      </div>
      <div className="pb-10"></div>
    </div>
  );
};

export default ServiceCards;