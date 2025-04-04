"use client";
import React from 'react';
import Link from 'next/link';
import { BiDevices } from 'react-icons/bi';
import { MdMarkEmailRead } from 'react-icons/md';
import { TbCertificate } from 'react-icons/tb';
import ViewAll from './ViewAllButton';
import SectionTitle from './common/TitleSection';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, href }) => {
  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl">
        <div className="mb-6 h-20 flex items-center justify-center text-teal-500">
          {icon}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-center text-gray-800">{title}</h3>
      </div>
    </Link>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      id: 1,
      icon: <BiDevices size={70} />,
      title: "Managed Services",
      href: "/services/managed-services"
    },
    {
      id: 2,
      icon: <MdMarkEmailRead size={70} />,
      title: "Secure Email",
      href: "/services/secure-email"
    },
    {
      id: 3,
      icon: <TbCertificate size={70} />,
      title: "Secure Websites",
      href: "/services/secure-websites"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        
        <SectionTitle title="Our Services" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              href={service.href}
            />
          ))}
        </div>

        <ViewAll href="/services" text="Read Details" className='flex justify-center mt-8' />

      </div>
    </section>
  );
};

export default ServicesSection;