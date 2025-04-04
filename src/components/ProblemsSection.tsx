"use client";
import React from 'react';
import Image from 'next/image';
import SectionTitle from './common/TitleSection';

interface ProblemCardProps {
  imageUrl: string;
  description: string;
  alt: string;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ imageUrl, description, alt }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full h-48 md:h-52 lg:h-56 mb-4 overflow-hidden rounded-lg">
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

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        
        <SectionTitle title="Do You Have Any of These Problems?" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
    </section>
  );
};

export default ProblemsSection;