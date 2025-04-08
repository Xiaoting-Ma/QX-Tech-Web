'use client';

import React, { useState } from 'react';
import Link from 'next/link';

/**
 * ViewAll component with left-to-right gradient animation on hover
 * @param {Object} props
 * @param {string} props.href - The URL to navigate to
 * @param {string} [props.text="View All"] - Optional custom text
 * @param {string} [props.color="#3b82f6"] - Optional gradient color (default: blue-500)
 * @param {string} [props.className=""] - Optional additional CSS classes
 * @returns {React.JSX.Element}
 */
interface ViewAllProps {
  href: string;
  text?: string;
  color?: string;
  className?: string;
}

const ViewAll: React.FC<ViewAllProps> = ({ 
  href, 
  text = "View All", 
  color = "#000000", 
  className = "" 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link 
      href={href}
      className={`relative flex flex-col justify-center mt-8 items-center overflow-hidden px-1 py-1 font-medium transition-colors`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="flex items-center gap-2">
        {text}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" 
          />
        </svg>
      </span>

      {/* Animated gradient background */}
      <span 
        className="flex items-center bottom-0 left-0 h-0.5 w-[100px] transition-all duration-500 ease-out"
        style={{
          background: color,
          transform: isHovered ? 'scaleX(1)' : 'scaleX(0)',
          transformOrigin: 'left'
        }}
      />

    </Link>
  );
};

export default ViewAll;