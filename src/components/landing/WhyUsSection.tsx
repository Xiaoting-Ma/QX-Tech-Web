'use client';

import React from 'react';
import Image from 'next/image';
import SectionTitle from '../common/TitleSection';
import { HiLightningBolt } from 'react-icons/hi';
import { FiDollarSign, FiHeadphones, FiShield } from 'react-icons/fi';
import InView from '../common/InView';

const WhyChooseUsSection = () => {
  const features = [
    {
      id: 1,
      icon: <HiLightningBolt size={24} className="text-white" />,
      iconBgColor: 'bg-teal-500',
      title: 'Fast Delivery',
      description: 'We have a dedicated development team ready to launch your project quickly and efficiently.'
    },
    {
      id: 2,
      icon: <FiDollarSign size={24} className="text-white" />,
      iconBgColor: 'bg-teal-500',
      title: 'Affordable',
      description: 'High-quality development without the high price tag — tailored to your budget.'
    },
    {
      id: 3,
      icon: <FiHeadphones size={24} className="text-white" />,
      iconBgColor: 'bg-teal-500',
      title: '24/7 Local Support',
      description: 'Our Australian-based support team is always available to respond promptly to your needs.'
    },
    {
      id: 4,
      icon: <FiShield size={24} className="text-white" />,
      iconBgColor: 'bg-teal-500',
      title: 'Secure & Reliable',
      description: 'We prioritize system security and stability to keep your business running smoothly.'
    }
  ];

  const images = [
    'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  ]

  return (
    <section className="py-8 px-4 md:py-12 bg-white mb-10 md:mb-20 lg:mb-24">
      <InView>
        {({ inView }) => (
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          {/* Left side - Phone image */}
          <div className="relative w-full md:w-1/2 h-[380px]">
            {images.map((img, index) => (
              <div
                key={index}
                className="absolute transition-all duration-1000"
                style={{
                  transform: inView 
                    ? `translate(${index * 30}px, ${index * 30}px)` 
                    : 'translate(0, 100px)',
                  opacity: inView ? 1 : 0,
                  transitionDelay: `${index * 200}ms`,
                  zIndex: index,
                  width: '85%', 
                  height: '300px',
                }}
              >
                <Image
                  fill
                  src={img}
                  alt={`QX Tech Stacked ${index + 1}`}
                  className="w-full h-full object-cover shadow-lg rounded-xl"
                />
              </div>
            ))}
          </div>

          {/* Right side - Why choose us content */}
          <div className="w-full lg:w-1/2">
            <SectionTitle title="Why Choose Us?" />

            {/* Features grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              {features.map(feature => (
                <div key={feature.id} className="flex flex-col">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-8 h-8 md:w-10 md:h-10 ${feature.iconBgColor} rounded-lg flex items-center justify-center`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-gray-800">{feature.title}</h3>
                  </div>

                  
                  {/* Title and description */}
                  <p className="text-sm md:text-base text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}
      </InView>
    </section>
  );
};

export default WhyChooseUsSection;
