'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  textColor?: string; // 添加可选的文本颜色参数
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  textColor = 'text-black' // 设置默认值为黑色
}) => {
  return (
    <h2 className={`relative text-center font-bold ${textColor} text-xl md:text-2xl lg:text-3xl pb-2 mb-10`}>
      {title}
      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-yellow"></span>
    </h2>
  );
};

export default SectionTitle;