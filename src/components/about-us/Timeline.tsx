import React from 'react';
import Image from 'next/image';

const AboutUsTech = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">About 
        <span className='text-yellow'> QX Tech</span>
      </h1>
      
      <div className="text-left mb-12 text-gray-700 max-w-4xl mx-auto">
        <p className="text-base md:text-lg leading-relaxed">
          QX Tech was founded in 2023 and is proudly headquartered in Canberra, Australia. As a technology solutions provider under Qixin Group, we are dedicated to helping businesses of all sizes accelerate their digital transformation. Our core services include web development and design, SEO/SEM strategy, cloud hosting, IT support, graphic design, and branding.
        </p>
        <p className="text-base md:text-lg leading-relaxed mt-6">
          At QX Tech, we believe in building long-term partnerships through transparency, innovation, and reliability. Our mission is to empower Australian companies with tailored, future-ready digital solutions that drive growth and make technology simpler.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 relative ">
          <Image 
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="QX Tech illustration" 
            width={550} 
            height={450}
            className="mx-auto rounded-xl"
          />
        </div>
        
        <div className="md:w-1/2 relative pl-4">
          <div className="border-l-2 border-teal-400 pl-8">
            {/* Timeline items */}
            <div className="mb-16 relative">
              <div className="absolute -left-11 top-1 w-6 h-6 bg-white rounded-full border-4 border-teal-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2023</h3>
              <p className="text-gray-700">
                QX Tech was founded in Sydney, focusing on providing reliable and customized digital solutions for Australian businesses.              
              </p>
            </div>
            
            <div className="mb-16 relative">
              <div className="absolute -left-11 top-1 w-6 h-6 bg-white rounded-full border-4 border-teal-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2024</h3>
              <p className="text-gray-700">
                Expanded our services across multiple industries, building strong client relationships through quality work and technical excellence.              
              </p>
            </div>
            
            <div className="mb-4 relative">
              <div className="absolute -left-11 top-1 w-6 h-6 bg-white rounded-full border-4 border-teal-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2025</h3>
              <p className="text-gray-700">
                Continuing to grow, QX Tech strengthens its presence with a dedicated team, delivering scalable solutions and long-term support.              
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsTech;