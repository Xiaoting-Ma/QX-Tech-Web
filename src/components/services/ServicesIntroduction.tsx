'use client';

import React, { useState } from 'react';
import { FaCode } from "react-icons/fa6";
import { FaRegChartBar } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { cn } from '@/lib/utils';

const cardData = [
  {
    id: 1,
    icon: FaCode,
    title: 'Website Development',
    subtitle: 'Tailored solutions for your online presence',
    content: 'We build fast, responsive, and scalable websites to help your business grow.'
  },
  {
    id: 2,
    icon: RiCustomerService2Fill,
    title: 'ERP Systems',
    subtitle: 'Streamline your operations',
    content: 'Our ERP solutions integrate your business processes into one efficient platform.'
  },
  {
    id: 3,
    icon: FaRegChartBar,
    title: 'Digital Marketing & SEO',
    subtitle: 'Reach your audience effectively',
    content: 'From SEO to social media campaigns, we help you connect with more customers.'
  }
];

const ServicesSection = () => {
  const [selected, setSelected] = useState(1);

  const selectedCard = cardData.find((card) => card.id === selected);

  return (
    <section className="bg-gray-50 py-12 px-4 max-w-6xl mx-auto">
      {/* Top Cards */}
      {/* <div className="flex justify-center gap-6 mb-12">
        {cardData.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelected(card.id)}
            className={cn(
              'cursor-pointer rounded-xl shadow-md p-6 w-64 transition-all duration-300',
              selected === card.id
                ? 'bg-teal-500 text-white scale-105'
                : 'bg-white text-gray-800 hover:shadow-lg hover:scale-105'
            )}
          >
            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
            <p className="text-sm">{card.subtitle}</p>
          </div>
        ))}
      </div> */}

      <div className="flex flex-col md:flex-row justify-between px-4 mx-auto mb-10">      
        {cardData.map((data) => (
          <div 
            key={data.id} 
            // className="flex flex-col bg-white p-10 mx-5 rounded-3xl justify-center items-start shadow-sm transition-all duration-300 h-[350px]"
            onClick={() => setSelected(data.id)}
            className={cn(
              'cursor-pointer rounded-xl shadow-md p-6 w-64 transition-all duration-300',
              selected === data.id
                ? 'bg-lightyellow text-white scale-105'
                : 'bg-white text-gray-800 hover:shadow-lg hover:scale-105'
            )}
          >
            {/* group the icon and the title and change color */}
            <div className="text-black hover:text-teal-500 transition-all duration-300">
              {/* icon */}
              <div className="w-[20px] h-[30px] md:w-[49px] md:h-[49px] rounded-full border-2 border-gray-700 flex items-center justify-center">
                {data.icon && <data.icon className="w-6 h-6" />}
              </div>
              {/* service title */}
              <div className="pt-5 font-semibold text-base md:text-xl">{data.title}</div>
            </div>
            
            {/* service description */}
            <div className="pt-2 text-xs md:text-sm text-gray-700">{data.content}</div>
          </div>
        ))}
      </div>

      {/* Bottom Content */}
      <div className="bg-white rounded-xl p-8 shadow-md transition-all duration-300">
        <h2 className="text-2xl font-bold mb-2">{selectedCard?.title}</h2>
        <h4 className="text-lg text-gray-700 mb-4">{selectedCard?.subtitle}</h4>
        <p className="text-gray-600 leading-relaxed">{selectedCard?.content}</p>
      </div>
    </section>
  );
};

export default ServicesSection;
