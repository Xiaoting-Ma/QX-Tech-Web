'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionTitle from '../common/TitleSection';

const ServiceProcess = () => {
  const steps = [
    {
      number: 'Step 1',
      title: 'Gathering Requirements',
      subtitle: 'We meet with your team to define goals, features, and timelines, ensuring a clear project roadmap.',
      active: true
    },
    {
      number: 'Step 2',
      title: 'Development Process',
      subtitle: 'We build the app in stages, sharing progress and collecting feedback at each step.',
      active: false
    },
    {
      number: 'Step 3',
      title: 'Review & Final Delivery',
      subtitle: 'We conduct a final review to ensure all requirements are met before launching the app.',
      active: false
    },
    {
      number: 'Step 4',
      title: 'Project Closure',
      subtitle: 'After launch, we provide support, gather feedback, and make necessary updates.',
      active: false
    }
  ];

  return (
    <div className="relative w-full py-16 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left text content */}
          <div className="w-full lg:w-2/3 mb-10 md:mb-0 lg:mr-20">
            <SectionTitle title="Our Delivery Approach" />
            <p className="text-base text-black mb-12">
                With just four steps, we can quickly fulfill your requirements, saving you time and reducing your enterprise digitalization costs.
            </p>

            {/* Process steps */}
            <div className="relative">
              {/* Progress line */}
              <div className="hidden md:block absolute top-[30px] left-[60px] right-10 h-[2px] bg-gray-200 z-0"></div>
              
              <div className="flex flex-col sm:flex-row justify-between gap-6 relative">
              {steps.map((step) => (
                <div key={step.number}>
                    {/* Step Number */}
                    <p className="text-sm font-semibold text-darkyellow">{step.number}</p>
                    
                    {/* Step Title */}
                    <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                    {step.title}
                    </p>

                    {/* Step Description */}
                    <p className="mt-1 text-sm text-pretty leading-7 text-gray-500">
                    {step.subtitle}
                    </p>
                </div>
                ))}
              </div>
            </div>

            {/* Free consultation button */}
            <div className="mt-12">
              <Link 
                href="/contact" 
                className="inline-block border-2 border-black text-black hover:bg-black hover:text-white hover:border-black transition-colors duration-300 px-8 py-3 font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right image and circular text */}
          <div className="w-full lg:w-1/3 relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-full overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="IT professional working" 
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-full"
              />
              
              {/* Purple paper plane animation */}
              <div className="absolute top-[15%] right-[25%] w-16 h-16 z-20">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-purple-400">
                  <path d="M21.75 3.75L2.25 10.5L9.75 12.75L12 20.25L21.75 3.75Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                
                {/* Dotted path */}
                <div className="absolute top-[80%] left-[80%] w-16 h-16 border-2 border-dashed border-purple-400 rounded-full opacity-60"></div>
              </div>
              
              {/* Orange circle decoration */}
              <div className="absolute top-[10%] right-[5%] w-8 h-8 bg-orange-400 rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProcess;