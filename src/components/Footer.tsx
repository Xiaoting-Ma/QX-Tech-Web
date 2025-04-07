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
    { id: 1, icon: <FaTwitter />, link: 'https://twitter.com' },
    { id: 2, icon: <FaFacebookF />, link: 'https://facebook.com' },
    { id: 3, icon: <FaInstagram />, link: 'https://instagram.com' },
    { id: 4, icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
  ];

  return (
    <footer
      className="bg-cover bg-center text-white py-16 relative"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1585412168334-8fa91429cc64?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
      }}
    >
      
      {/* Mask Layer */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      <div className="relative z-20 container mx-auto px-6 sm:px-8 md:px-10 lg:px-20">
        {/* Logo and Description */}
        <div className="flex flex-col md:flex-row justify-center items-center text-center mb-12">
          <div className="relative h-14 md:h-20 w-40 md:w-60 mb-4 md:mb-0 md:mr-6">
            <Image 
              src="/images/logo.png" 
              alt="QX Tech logo" 
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
            Connecting Technology With Business Success
          </h2>
        </div>

        {/* Navigation Links - Only the ones you specified */}
        <div className="flex justify-center mb-10">
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
            <Link href="/contact" className={linkClass("/contact")}>
              About Us
            </Link>
            <Link href="/?redirect=off" className={linkClass("/?redirect=off")}>
              EN
            </Link>
          </nav>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-8">
          <p className="mb-2">547 / Level 5, 15 Moore Street, Canberra ACT 2601</p>
          <p className="mb-4">
            <a href="mailto:info@qixin.com.au" className="hover:text-blue-300 transition-colors">
              info@qixin.com.au
            </a>
          </p>
          <p className="mb-2">
            <a href="tel:+61484411111" className="hover:text-blue-300 transition-colors">
              +61 484411111
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div className="flex justify-center space-x-6 mt-10">
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
        <div className="text-center mt-10">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} QX Tech. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;