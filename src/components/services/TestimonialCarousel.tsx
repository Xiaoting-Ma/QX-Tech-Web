'use client';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import SectionTitle from '../common/TitleSection';
// Import Swiper styles
import 'swiper/css';

const testimonials = [
  {
    id: 1,
    name: "Alison Thompson",
    position: "CFO, Global Retail Solutions",
    text: "4data have proved to be a good business partner to us over the years. Most importantly, they don't just provide products and services, but scaled and strategic solutions that fit our business model and budget."
  },
  {
    id: 2,
    name: "Careena Rodriguez",
    position: "Director of Operations, HealthTech Labs",
    text: "I am pleased to tell you that at this point, every file that was encrypted by today's malware infection, has been restored from back up. Their team worked tirelessly to get our systems back online."
  },
  {
    id: 3,
    name: "Nicole Patel",
    position: "CEO, Innovative Startups Inc.",
    text: "I would like to take this opportunity to thank you very much for all the assistance you have provided us over the past 4 or so years. If you ever require a business reference I would be more than happy to help."
  },
  {
    id: 4,
    name: "Michael Chen",
    position: "IT Manager, Pacific Financial Group",
    text: "Your cloud migration services have transformed how our business operates. The seamless transition and ongoing support have exceeded our expectations. Our team can now work efficiently from anywhere."
  },
  {
    id: 5,
    name: "Sarah Williams",
    position: "Marketing Director, Creative Solutions",
    text: "What impresses me most about your IT support is the consistency. For three years now, your team has provided us with reliable, knowledgeable assistance whenever we need it."
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gradient-to-r from-black to-gray-100">
      <div className="container mx-auto px-4">

        <SectionTitle title="What Our Clients Say" textColor='text-white' />
       
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="py-8"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-teal-500 bg-opacity-80 p-8 rounded-lg shadow-lg h-full min-h-[320px]">
                <div className="mb-6">
                  <p className="text-white text-base">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="text-white mt-4">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm opacity-80">{testimonial.position}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const swiperInstance = (document.querySelector('.swiper') as any)?.swiper;
                if (swiperInstance) {
                  swiperInstance.slideToLoop(index);
                }
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;