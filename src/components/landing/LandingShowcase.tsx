'use client';

import React from 'react';
import Image from 'next/image';
import { showcaseData } from '../showcase/ShowcaseData';
import ContactButton from '../ViewAllButton'; 
import SectionTitle from '../common/TitleSection';

/**
 * WebsiteShowcase - A component to display a grid of website showcases with titles
 * @param {Object} props
 * @param {Array} props.showcases - Array of showcase items 
 * @param {string} props.title - Section title
 * @param {string} props.buttonText - Text for the button
 * @param {string} props.buttonLink - Link for the button
 * @returns {React.JSX.Element}
 */
const WebsiteShowcase = ({  
  title = "OUR SHOWCASE", 
  buttonText = "VIEW ALL PROJECTS",
  buttonLink = "/projects"
}) => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className=' container mx-auto max-w-7xl'>
        {/* Section title */}
        <SectionTitle title={title} />
        
        {/* Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-auto mb-12">
          {showcaseData.map((item, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              {/* Website preview image with hover effect */}
              <div className="relative overflow-hidden mb-4">
                <div className="w-full max-w-xs mx-auto aspect-[3/4]">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Website title */}
              <h3 className="text-center text-gray-800 text-lg font-medium">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
        
        {/* Button centered at the bottom */}
        <div className="flex justify-center mt-12">
          <ContactButton 
            href={buttonLink} 
            text={buttonText}
          />
        </div>
      </div>
    </section>
  );
};

export default WebsiteShowcase;