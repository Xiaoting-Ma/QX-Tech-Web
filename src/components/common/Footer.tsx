"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  
  const linkClass = (path: string) => {
    return pathname === path 
      ? "text-yellow hover:text-darkyellow border-b border-yellow hover:border-darkyellow pb-[2px] mb-[2px] transition-colors" 
      : "text-white hover:text-yellow transition-colors";
  };
  
  const socialMediaLinks = [
    { id: 1, icon: <FaFacebookF />, link: 'https://www.facebook.com/people/Qi-Xin/pfbid0sdrugS454wdJaoK2YXTk2AqcnNSAXMLb5Uo8SV1MnfkpS5ztyoBLMmen4jPSPJRil/' },
    { id: 2, icon: <FaInstagram />, link: 'https://www.instagram.com/qixincoptyltd/' },
    { id: 3, icon: <FaLinkedinIn />, link: 'https://www.linkedin.com/company/qixin-co-pty-ltd/about/' },
  ];

  return (
    <footer
      className="bg-cover bg-center text-white py-6 md:py-12 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1585412168334-8fa91429cc64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
      }}
    >
      
      {/* Mask Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      <div className="relative z-20 container mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        {/* Logo and Description */}
        <div className="flex flex-col justify-center items-center text-center mb-4 md:mb-6">
          <div className="flex flex-row justify-center items-center mb-4 md:mb-8">
            <div className="relative h-14 md:h-20 w-14 md:w-20 mr-4 md:mr-8">
              <Image 
                src="/images/logo.svg" 
                alt="QX Tech logo" 
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-2">
              QX Tech          
            </div>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Connecting Technology With Business Success
          </h2>
        </div>

        {/* Navigation Links - Only the ones you specified */}
        <div className="flex justify-center mb-4 md:mb-6">
          <nav className="flex flex-col md:flex-row items-center md:space-x-8 text-white">
            <Link href="/" className={linkClass("/")}>
              Home
            </Link>
            <Link href="/services" className={linkClass("/services")}>
              Services
            </Link>
            <Link href="/showcase" className={linkClass("/showcase")}>
              Showcase
            </Link>
            <Link href="/blog" className={linkClass("/blog")}>
              Blog
            </Link>
            <Link href="/about-us" className={linkClass("/about-us")}>
              About Us
            </Link>
            {/* <Link href="/?redirect=off" className={linkClass("/?redirect=off")}>
              EN
            </Link> */}
          </nav>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-4 md:mt-6">
          <p className="">547 / Level 5, 15 Moore Street, Canberra ACT 2601</p>
          <p className="">
            <a href="mailto:info@qixin.com.au" className="hover:text-yellow transition-colors">
              info@qixin.com.au
            </a>
          </p>
          <p className="">
            <a href="tel:+61484411111" className="hover:text-yellow transition-colors">
              +61 484411111
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-6">
          {socialMediaLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${social.link} in a new tab`} 
              className="text-lg md:text-2xl hover:text-blue-300 transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center mt-6">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} QX Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;