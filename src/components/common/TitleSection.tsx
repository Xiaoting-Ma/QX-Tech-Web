'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  return (
    <div className="relative text-center font-bold text-black text-xl md:text-2xl lg:text-3xl pb-2 mb-10">
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow"></span>
    </div>
  );
};

export default SectionTitle;
