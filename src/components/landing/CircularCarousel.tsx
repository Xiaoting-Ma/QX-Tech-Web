'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "@/components/common/TitleSection";
import ContactButton from "@/components/ViewAllButton";

const images = [
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const CircularCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 每 3 秒切换

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-20">
    <SectionTitle title="OUR SHOWCASE" />
    <div className="relative w-full h-[600px] flex items-center justify-center mb-36">
      {images.map((src, i) => {
        const isActive = i === index;
        let x = 0;
        let y = 0;

        // 计算每张图片的位置
        if (i === (index + 0) % images.length) { // 底部放大图片
          x = -20;
          y = -100;
        } else if (i === (index + 1) % images.length) { // 右侧
          x = 360;
          y = -200;
        } else if (i === (index + 2) % images.length) { // 右上
          x = 130;
          y = -300;
        } else if (i === (index + 3) % images.length) { // 左上
          x = -180;
          y = -300;
        } else if (i === (index + 4) % images.length) { // 左侧
          x = -410;
          y = -200;
        }

        return (
          <div key={i} className="">
            <motion.img
              key={src}
              src={src}
              alt={`Slide ${i}`}
              className="absolute w-[200px] h-[300px] object-cover shadow-lg"
              initial={{ opacity: 0.5, scale: 0.8 }}
              animate={{
                opacity: isActive ? 1 : 0.3,
                scale: isActive ? 1.4 : 0.8, // 放大最底部的图片
                x,
                y,
                zIndex: isActive ? 10 : 1, // 确保放大的图片在最上层
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>
        );
      })}
      {/* Button centered at the bottom */}
      <div className="flex justify-center mt-[620px]">
        <ContactButton 
          href="/showcase" 
          text="View All Projects"
        />
      </div>
    </div>
    </div>
  );
};

export default CircularCarousel;
