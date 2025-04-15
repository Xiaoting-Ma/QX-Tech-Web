'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { showcaseData } from './ShowcaseData';

/**
 * PortfolioGallery component with view switching functionality
 * @param {Object} props
 * @param {Array} props.projects - Array of project items
 * @param {string} props.defaultView - Default view type: 'grid', 'squares', or 'list'
 */
const PortfolioGallery = ({defaultView = 'grid' }) => {
  // State to manage current view type
  const [viewType, setViewType] = useState(defaultView);

  // Get CSS classes based on current view type
  const getViewClasses = () => {
    switch(viewType) {
      case 'squares': // 2xn grid (larger items, 2 columns)
        return 'grid grid-cols-2 gap-4 md:gap-20';
      case 'grid': // Gallery 4*n view (more items, 4 columns)
        return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4';
      case 'list': // List view (vertical stack)
        return 'flex flex-col space-y-4 sm:space-y-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-8';
    }
  };

  return (
    <div className="w-full bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* View switcher buttons */}
        <div className="flex items-center mb-8 border-b border-gray-200 pb-4">
          <div className="flex border border-gray-300 rounded-sm bg-white">
            {/* Grid view (4xn) */}
            <button 
              onClick={() => setViewType('grid')}
              className={`hidden sm:block p-2 transition-colors ${viewType === 'grid' ? 'bg-lightyellow' : 'hover:bg-gray-100'}`}
              aria-label="Grid view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
                        
            
            {/* Squares view (2 columns) */}
            <button 
              onClick={() => setViewType('squares')}
              className={`p-2 transition-colors ${viewType === 'squares' ? 'bg-lightyellow' : 'hover:bg-gray-100'}`}
              aria-label="Gallery view"
            >
              <div className="h-5 w-5 flex items-center justify-between">
                <div className="h-2 w-2 rounded-full border border-gray-600 bg-transparent"></div>
                <div className="h-2 w-2 rounded-full border border-gray-600 bg-transparent"></div>
              </div>
            </button>
            
            {/* List view */}
            <button 
              onClick={() => setViewType('list')}
              className={`md:hidden p-2 transition-colors ${viewType === 'list' ? 'bg-lightyellow' : 'hover:bg-gray-100'}`}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Projects gallery with dynamic layout */}
        <div className={getViewClasses()}>
          {showcaseData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              viewType={viewType}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * ProjectCard component that adapts based on the view type
 */
interface Project {
  title: string;
  imageUrl: string;
  link: string;
}

const ProjectCard = ({ project, viewType }: { project: Project; viewType: string }) => {
  const { title, imageUrl, link } = project;
  
  // Different rendering based on view type
  if (viewType === 'list') {
    return (
      <div className="group overflow-hidden flex flex-col">
        <Link href={link}>
          <div className="w-full relative overflow-hidden border border-gray-200 rounded">
            <div className="pt-[100%] md:pt-[90%] relative">
              <Image 
                src={imageUrl} 
                alt={title} 
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105 will-change-transform"
                loading="lazy" // 启用原生懒加载
              />
            </div>
          </div>
          <div className="p-6">
            <h3 className="text-base lg:text-lg text-center font-light text-gray-700">
              {title}
            </h3>
          </div>
        </Link>
      </div>
    );
  }
  
  // Grid and Squares views (just different sizing handled by parent)
  return (
    <div className="group overflow-hidden">
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {/* 👇 控制图片比例 & 裁剪放大区域 */}
        <div className="relative pt-[120%] overflow-hidden border border-gray-200 rounded">
          <Image 
            src={imageUrl} 
            alt={title} 
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105 will-change-transform"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
        </div>
  
        {/* 👇 下方文本区域 */}
        <div className="p-4">
          <h3 className="text-sm md:text-base text-center font-light text-gray-700">
            {title}
          </h3>
        </div>
      </Link>
    </div>
  );  
};

export default PortfolioGallery;