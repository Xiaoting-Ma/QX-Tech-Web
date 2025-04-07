'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const GetQuotesSection = () => {
  return (
    <section className="w-full pt-16 pb-24 px-4 md:px-8 lg:px-16 bg-gray-100 border-t border-gray-100 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="w-full lg:w-5/12 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get free quotes
            </h2>
            <p className="text-base md:text-lg text-gray-700 mb-8 max-w-lg">
              Whether you need a builder or a locksmith, a hairdresser or a
              florist, Yellow Pages has thousands of local businesses ready to
              quote your job. Compare multiple quotes so you get the right fit,
              the first time.
            </p>

            {/* CTA Button */}
            <Link 
              href="/get-quotes" 
              className="inline-block bg-[#FECD35] hover:bg-[#ffc107] text-gray-900 font-medium text-center py-3 px-6 w-full md:w-auto md:min-w-[200px] transition-colors duration-300 rounded-sm"
            >
              Get Quotes
            </Link>
          </div>

          {/* Right Image with Numbering Graphics */}
          <div className="w-full lg:w-6/12 relative">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-lg overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1522273987129-4ca3c41871e2?q=80&w=3077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Service professional with client" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Numbered Steps Graphic */}
              <div className="absolute -left-10 bottom-10 md:-left-20 md:-bottom-10 w-[150px] md:w-[200px] h-auto">
                {/* White Card Background */}
                <div className="bg-white rounded-lg p-4 shadow-lg">
                  {/* Step 1 */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#FECD35] flex items-center justify-center text-gray-400 font-medium mr-3">
                      1
                    </div>
                    <div className="bg-[#FECD35] h-4 w-full rounded"></div>
                  </div>
                  
                  {/* Step 2 (Highlighted) */}
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-800 font-medium mr-3">
                      2
                    </div>
                    <div className="bg-gray-100 h-4 w-full rounded"></div>
                  </div>
                  
                  {/* Step 3 */}
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 font-medium mr-3">
                      3
                    </div>
                    <div className="bg-gray-100 h-4 w-full rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetQuotesSection;