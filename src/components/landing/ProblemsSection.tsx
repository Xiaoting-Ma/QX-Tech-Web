"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import SectionTitle from '../common/TitleSection';

interface ProblemCardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ imageUrl, description, alt }) => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="relative w-full h-52 md:h-64 mb-4 overflow-hidden rounded-lg">
        <Image 
          src={imageUrl} 
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
      <p className="text-center text-black text-sm md:text-base lg:text-lg">
        {description}
      </p>
    </div>
  );
};

const ProblemsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0.5);
  const prevProgressRef = useRef(0.5);
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
  
  // 监听滚动以控制透视效果
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // 使用更大的范围来计算滚动进度
      const totalScrollDistance = windowHeight * 2;
      
      // 计算相对滚动位置
      const sectionCenter = rect.top + rect.height / 2;
      const windowCenter = windowHeight / 2;
      const distanceFromCenter = windowCenter - sectionCenter;
      
      // 归一化到0-1范围
      const normalizedPosition = (distanceFromCenter / totalScrollDistance) + 0.5;
      const rawProgress = Math.min(Math.max(normalizedPosition, 0), 1);
      
      // 平滑过渡
      const prevProgress = prevProgressRef.current;
      const diff = rawProgress - prevProgress;
      const newProgress = prevProgress + diff * 0.05; 
      
      prevProgressRef.current = newProgress;
      setScrollProgress(newProgress);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const problems = [
    {
      id: 1,
      imageUrl: "https://images.unsplash.com/photo-1617440168937-c6497eaa8db5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Businessman frustrated with laptop",
      description: "Non responsive IT – Your IT guy never calls back or follows through in a timely manner."
    },
    {
      id: 2,
      imageUrl: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=2980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "IT technician working on computer",
      description: "Your IT problems never get fixed, the IT guy keeps coming back and back, just applying a Band-Aid and billing you."
    },
    {
      id: 3,
      imageUrl: "https://images.unsplash.com/photo-1707769775473-468a261c5cf1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Person looking at confusing charts",
      description: "Don't understand the billing or support provided. It just seems to be changing all the time and made up as you go along."
    },
    {
      id: 4,
      imageUrl: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Business person stressed about finances",
      description: "You are bleeding money – the issues, upgrades, tickets, and subscriptions just keep on coming month after month."
    }
  ];

  // 计算旋转角度，在移动设备上减少倾斜角度
  let rotateX = 0;
  
  // 移动设备上角度较小
  const maxAngle = isMobile ? 30 : 40;
  
  if (scrollProgress < 0.5) {
    // 0 到 0.5 范围：从 -maxAngle 度逐渐变为 0 度
    const progressInRange = scrollProgress / 0.5; // 在这个区间的进度（0-1）
    rotateX = -maxAngle * (1 - progressInRange);
  } else if (scrollProgress > 0.5) {
    // 0.5 到 1 范围：从 0 度逐渐变为 maxAngle 度
    const progressInRange = (scrollProgress - 0.5) / 0.5; // 在这个区间的进度（0-1）
    rotateX = maxAngle * progressInRange;
  }
  
  // 移动设备的特殊样式
  const mobileContainerStyle = isMobile ? {
    padding: '15px',
    transform: `rotateX(${rotateX}deg)`,
    width: '100%',
    maxWidth: '100vw',
    overflow: 'hidden' // 防止溢出
  } : {
    transform: `rotateX(${rotateX}deg)`,
    transition: 'transform 0.8s ease-out',
    transformOrigin: 'center bottom',
    backfaceVisibility: 'hidden',
    padding: '30px',
    minHeight: '400px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 bg-gray-100 overflow-hidden md:overflow-visible" // 添加overflow-hidden防止溢出
    >
      <div className="container mx-auto max-w-7xl">
        <SectionTitle title="Do You Have Any of These Problems?" />
        
        <div 
          className="relative mx-auto overflow-hidden md:overflow-visible" // 添加overflow-hidden
          ref={containerRef}
        >
          {/* 3D变换容器 - 移动设备上降低透视效果 */}
          <div
            style={{
              transformStyle: 'preserve-3d',
              perspective: isMobile ? '2000px' : '1000px', // 移动设备增加透视距离，减弱效果
              perspectiveOrigin: 'center 30%',
              overflow: isMobile ?'hidden': 'visible' // 再次确保溢出控制
            }}
          >
            {/* 应用3D变换的内容 */}
            <div style={mobileContainerStyle as React.CSSProperties}>
              {/* 卡片网格 - 移动设备单列 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 py-10">
                {problems.map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    imageUrl={problem.imageUrl}
                    alt={problem.alt}
                    description={problem.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;