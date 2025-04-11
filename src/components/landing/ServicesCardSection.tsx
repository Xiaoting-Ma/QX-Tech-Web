"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BiDevices } from 'react-icons/bi';
import { MdMarkEmailRead } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import ViewAll from '../common/ViewAllButton';
import SectionTitle from '../common/TitleSection';
import InView from '../common/InView';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  inView: boolean;
  animationDirection: 'left' | 'bottom' | 'right';
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, subtitle, href, inView, animationDirection }) => {
  // 添加状态检测屏幕尺寸
  const [isMobile, setIsMobile] = useState(false);
  
  // 监听屏幕尺寸变化
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初始检查
    checkMobile();
    
    // 添加事件监听器
    window.addEventListener('resize', checkMobile);
    
    // 清理函数
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // 调整动画距离基于屏幕尺寸
  const getAnimationProps = () => {
    const baseProps = {
      initial: { opacity: 0 },
      animate: inView ? { opacity: 1 } : { opacity: 0 },
      transition: { duration: 0.6, delay: 0.2 }
    };

    // 小屏幕使用较小的移动距离
    const moveDistance = isMobile ? 40 : 100;

    switch (animationDirection) {
      case 'left':
        return {
          ...baseProps,
          initial: { ...baseProps.initial, x: -moveDistance, y: moveDistance },
          animate: inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: -moveDistance, y: moveDistance }
        };
      case 'bottom':
        return {
          ...baseProps,
          initial: { ...baseProps.initial, y: moveDistance },
          animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: moveDistance }
        };
      case 'right':
        return {
          ...baseProps,
          initial: { ...baseProps.initial, x: moveDistance, y: moveDistance },
          animate: inView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: moveDistance, y: moveDistance }
        };
      default:
        return baseProps;
    }
  };

  return (
    <Link href={href} className="block h-full">
      <motion.div 
        className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center h-full min-h-[180px] md:min-h-[300px] transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl"
        {...getAnimationProps()}
      >
        <div className="mb-6 h-20 flex items-center justify-center text-teal-500">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800">{title}</h3>
        <p className="text-gray-700 text-center mt-2 text-sm md:text-base lg:text-lg">{subtitle}</p>
      </motion.div>
    </Link>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <BiDevices size={70} />,
      title: "Website Development",
      subtitle: "Tailored Web Solutions for Your Business Growth",
      href: "/services",
      direction: 'left' as const
    },
    {
      id: 2,
      icon: <MdMarkEmailRead size={70} />,
      title: "ERP System",
      subtitle: "Streamline Your Operations with Smart, Scalable ERP Solutions",
      href: "/services",
      direction: 'bottom' as const
    },
    {
      id: 3,
      icon: <TbCertificate size={70} />,
      title: "Digital Marketing & SEO",
      subtitle: "Build Trust with Our Secure Website Solutions",
      href: "/services",
      direction: 'right' as const
    }
  ];

  return (
    <InView>
      {({ inView }) => (
        <section className="py-16 px-4 bg-white overflow-hidden">
          <div className="container mx-auto max-w-7xl">
            
            <SectionTitle title="Our Services" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard
                  key={service.id}
                  icon={service.icon}
                  title={service.title}
                  subtitle={service.subtitle}
                  href={service.href}
                  inView={inView}
                  animationDirection={service.direction}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='flex justify-center mt-8'
            >
              <ViewAll href="/services" text="Read Details" />
            </motion.div>
          </div>
        </section>
      )}
    </InView>
  );
};

export default ServicesSection;