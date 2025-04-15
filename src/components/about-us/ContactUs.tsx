'use client';

import React from 'react';
import SectionTitle from "@/components/common/TitleSection";
import ContactSection from './ContactSection';
import { MapPin, Mail, Phone } from "lucide-react";

const ContactUsSection = () => {

  return (
    <div className="bg-gray-100">

    <div className="container mx-auto px-4 py-12 max-w-6xl overflow-hidden" id="contact" >
        {/* title */}
        <SectionTitle title="Contact Us" />

        {/* content + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-0 md:px-8">
            {/* Section 1: our team */}
            <div className="col-start-1 px-4">
                <div className="my-4 py-4 text-sm md:text-base lg:text-lg text-gray-700">
                  We provide 7 * 12 hours services, you can contact us for anything, We will get back to you within 24 hours! </div>
                <br/>
                
                <div className="space-y-4">
                  {/* Location */}
                  <div className="flex items-center space-x-4">
                    <MapPin size={30} className="text-teal-500" />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm text-gray-600">
                        547 / Level 5, 15 Moore Street, Canberra ACT 2601
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-4">
                    <Mail size={30} className="text-teal-500" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-gray-600">info@qixin.com.au</div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-4">
                    <Phone size={30} className="text-teal-500" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm text-gray-600">+61 484411111</div>
                    </div>
                  </div>
                </div>
            </div>
            {/* photo */}
            <div className="md:col-start-2">
                <ContactSection />
            </div>
        </div>
    </div>   
    </div>
  );
};


export default ContactUsSection;
