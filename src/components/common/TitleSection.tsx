'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  textColor?: string; // 添加可选的文本颜色参数
  textPosition?: string; // 添加可选的文本位置参数
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  textColor = 'text-black', // 设置默认值为黑色
  textPosition = 'text-center', // 设置默认值为居中
}) => {
  return (
    <h2 className={`relative ${textPosition} text-xl md:text-2xl lg:text-3xl pb-2 mb-10 font-bold ${textColor} text-gray-900`}>
      <span className="inline-block relative">
        {title}
      <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow"></span>
    </span>
  </h2>
  
  );
};

export default SectionTitle;