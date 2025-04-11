'use client';

import React from 'react';
import Image from 'next/image';
import SectionTitle from "@/components/common/TitleSection";
import ContactSection from '../landing/ContactSection';
import { MapPin, Mail, Phone } from "lucide-react";

const ContactUsSection = () => {

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl overflow-hidden" id="contact" >
        {/* title */}
        <SectionTitle title="Contact Us" />

        {/* content + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-0 md:px-8">
            {/* Section 1: our team */}
            <div className="col-start-1">
                {/* title + text */}
                <h1 className="font-semibold mb-2 text-base md:text-lg lg:text-xl">Contact Qixin</h1>
                
                <div className="my-4 border-l-4 border-darkyellow p-4 text-darkyellow">
                 We provide 7 * 12 hours services, you can contact us for anything, We will get back to you within 24 hours! </div>
                {/* <p className="mb-3 text-sm md:text-base">We will reach out to you within 24 hours!  </p> */}
                <br/>
                <InfoCard
                    icon={<MapPin size={50} color="#3B82F6" />}
                    title="Location"
                    text="547 / Level 5, 15 Moore Street, Canberra ACT 2601"
                />
                <br/>
                <InfoCard
                    icon={<Mail size={50} color="#3B82F6" />}
                    title="Email"
                    text="info@qixin.com.au"
                />
                <br/>
                <InfoCard
                    icon={<Phone size={50} color="#3B82F6" />}
                    title="Phone"
                    text="+61 484411111"
                />
            </div>
            {/* photo */}
            <div className="md:col-start-2">
                <ContactSection />
            </div>
        </div>
    </div>   
    
  );
};


interface InfoCardProps {
    icon:React.ReactNode;
    title: string;
    text: string;
  }

  const InfoCard: React.FC<InfoCardProps> = ({ icon, title, text }) => {
    return (
      <div className="flex items-start p-4 bg-white shadow-lg rounded-lg">
        {/* 左侧图片 */}
        <div className="w-1/5">
          {icon }
        </div>
        
        {/* 右侧内容 */}
        <div className="w-4/5 pl-4">
          <div className="text-xl font-bold text-gray-800">{title}</div>
          <div className="mt-2 text-sm text-gray-600">{text}</div>
        </div>
      </div>
    );
  };

export default ContactUsSection;
