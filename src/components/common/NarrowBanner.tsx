"use client";
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import InView from '@/components/common/InView';

/**
 * NarrowBanner - A responsive narrow banner component with background image, title and content
 * Includes a zoom animation effect when the component enters the viewport
 * 
 * @param {Object} props
 * @param {string} props.imageUrl - URL of the background image
 * @param {string} props.title - Title text to display in uppercase
 * @param {string} props.content - Content paragraph
 * @param {string} [props.height='300px'] - Optional height of the banner
 * @param {string} [props.titleColor='white'] - Optional color for the title
 * @param {string} [props.contentColor='white'] - Optional color for the content
 * @param {string} [props.textAlignment='center'] - Optional text alignment: 'left', 'center', or 'right'
 * @param {string} [props.overlayColor='rgba(0,0,0,0.5)'] - Optional background overlay color
 * @param {number} [props.animationDuration=1.5] - Duration of the zoom animation in seconds
 */
const NarrowBanner = ({
  imageUrl = "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title = "About Us",
  content = "QX Tech specializes in creating visually stunning and user-friendly websites tailored to your business needs. From custom designs to seamless functionality, we ensure your online presence is both engaging and efficient, offering responsive designs.",
  height = '300px',
  titleColor = 'white',
  contentColor = 'white',
  textAlignment = 'center',
  overlayColor = 'rgba(0,0,0,0.5)',
  animationDuration = 1.5
}) => {
  // Refs and state
  const bannerRef = useRef(null);
  
  // Determine text alignment class
  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }[textAlignment] || 'text-center';

  return (
    <div 
      className="relative w-full overflow-hidden"
      style={{ height }}
      ref={bannerRef}
    >
      <InView>
        {({ inView }) => (
          <>
            {/* Background image with zoom animation */}
            <div className="absolute inset-0 w-full h-full">
              <div 
                className="w-full h-full transition-transform ease-out duration-1000"
                style={{ 
                  transform: inView ? 'scale(1.2)' : 'scale(1)',
                  transitionDuration: `${animationDuration}s`
                }}
              >
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  style={{ 
                    objectFit: 'cover',
                    opacity: inView ? 1 : 0.9,
                    transition: `opacity ${animationDuration * 0.5}s ease-in`
                  }}
                  priority
                />
              </div>
              {/* Overlay */}
              <div 
                className="absolute inset-0 w-full h-full" 
                style={{ backgroundColor: overlayColor }}
              ></div>
            </div>

            {/* Content container */}
            <div 
              className={`relative z-10 flex flex-col justify-center items-center h-full px-4 ${alignmentClass}`}
              style={{
                opacity: inView ? 1 : 0,
                transition: `opacity ${animationDuration * 0.8}s ease-in`,
                transitionDelay: '0.2s'
              }}
            >
              <div className="max-w-4xl mx-auto">
                <h2 
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wider mb-6 uppercase"
                  style={{ color: titleColor }}
                >
                  {title}
                </h2>
                <p 
                  className="text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
                  style={{ color: contentColor }}
                >
                  {content}
                </p>
              </div>
            </div>
          </>
        )}
      </InView>
    </div>
  );
};

export default NarrowBanner;