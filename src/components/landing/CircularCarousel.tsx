'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/TitleSection";
import ContactButton from "@/components/common/ViewAllButton";

// Sample images - replace with your actual images
const images = [
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const EllipticalCarousel = () => {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const [isMobile, setIsMobile] = useState(false);
    
    // 检测设备类型
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  useEffect(() => {
    if (isHovering) return;
    
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, [isHovering]);

  const windowPositions = [
    { x: 0, y: -160, scale: 0.9, opacity: 0.3, zIndex: 2 },
    { x: 300, y: -130, scale: 0.85, opacity: 0.3, zIndex: 2 },
    { x: 500, y: -50, scale: 0.85, opacity: 0.3, zIndex: 2 },
    { x: 300, y: 60, scale: 1, opacity: 0.6, zIndex: 5 },
    { x: 0, y: 90, scale: 1.5, opacity: 1, zIndex: 10 },
    { x: -300, y: 60, scale: 1, opacity: 0.6, zIndex: 5 },
    { x: -500, y: -50, scale: 0.85, opacity: 0.3, zIndex: 2 },
    { x: -300, y: -130, scale: 0.85, opacity: 0.3, zIndex: 2 },
  ];

  const mobilePositions = [
    { x: 0, y: 0, scale: 1, opacity: 0.5, zIndex: 2 },
    { x: 60, y: 0, scale: 1.2, opacity: 0.5, zIndex: 3 },
    { x: 40, y: 0, scale: 1.3, opacity: 0.6, zIndex: 4 },
    { x: 20, y: 0, scale: 1.4, opacity: 0.8, zIndex: 5 },
    { x: 0, y: 0, scale: 1.5, opacity: 1, zIndex: 10 },
    { x: -20, y: 0, scale: 1.4, opacity: 0.8, zIndex: 5 },
    { x: -40, y: 0, scale: 1.3, opacity: 0.6, zIndex: 4 },
    { x: -60, y: 0, scale: 1.2, opacity: 0.5, zIndex: 3 },
  ];
 

  return (
    <div className="mt-20">
      <SectionTitle title="OUR SHOWCASE" />
      <div
        className="relative z-10 w-screen h-[400px] sm:h-[600px] flex items-center justify-center mb-36 mt-10 pointer-events-auto"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {images.map((src, i) => {
          const isActive = i === index;
          let x = 0;
          let y = 0;
          let scale = 0.8;
          let opacity = 0.3;
          let zIndex = 1;
          let rotate = 0;

          // Calculate position for each image in the wider, shorter elliptical arrangement
          // Optimized for MacBook display (wider horizontally, shorter vertically)
          if (isMobile) {
            // Adjust positions for mobile
            const posIndex = (i - index + images.length) % images.length;
            const parray = mobilePositions[posIndex];
            x=parray.x;
            y=parray.y;
            scale=parray.scale;
            opacity=parray.opacity;
            zIndex=parray.zIndex;
          }
          else{
            const posIndex = (i - index + images.length) % images.length;
            const parray = windowPositions[posIndex];
            x=parray.x;
            y=parray.y;
            scale=parray.scale;
            opacity=parray.opacity;
            zIndex=parray.zIndex;
          }

          return (
            <motion.div 
              key={i}
              className="absolute cursor-pointer"
              // onClick={() => setIndex(i)}
              onClick={() => {
                // 让点击的图片成为 active（也就是第 index + 4 张）
                const newIndex = (i - 4 + images.length) % images.length;
                setIndex(newIndex);
              }}
              initial={{ opacity: 0  }}
              animate={{ opacity: 1 , zIndex}}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src={src}
                alt={`Showcase ${i + 1}`}
                className="object-cover shadow-lg border border-black border-2 rounded-lg"
                style={{ width: '180px', height: '270px' }} // Slightly smaller images
                initial={{ opacity: 0.5, scale: 0.8 }}
                animate={{
                  opacity,
                  scale,
                  x,
                  y,
                  zIndex,
                  rotate: isActive ? 0 : 0,
                  boxShadow: isActive ? "0 10px 25px rgba(0,0,0,0.3)" : "0 5px 15px rgba(0,0,0,0.1)"
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeInOut",
                  delay: 0.05 * i
                }}
                whileHover={{ 
                  scale: scale * 1.05,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          );
        })}

        {/* Navigation indicators */}
        <div className="absolute bottom-[-60px] flex space-x-2 z-30">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === i ? 'bg-black w-6' : 'bg-gray-300'
              }`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        {/* Button centered at the bottom */}
        <div className="absolute bottom-[-120px]">
          <ContactButton 
            href="/showcase" 
            text="View All Projects"
          />
        </div>
      </div>
    </div>
  );
};

export default EllipticalCarousel;