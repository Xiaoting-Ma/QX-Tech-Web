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
    name: "Ella Nguyen",
    position: "Founder, Bloom Interiors",
    text: "Our website looks amazing and functions exactly how we envisioned it. The QX Tech team was efficient, creative, and really listened to what we needed."
  },  
  {
    id: 2,
    name: "Jason Liu",
    position: "Marketing Manager, CafeCo",
    text: "Honestly, it’s the first time I’ve worked with a dev team that got everything right on the first pass. Clean design, fast load speed — we’ve seen a bump in online orders already."
  },
  {
    id: 3,
    name: "Stephanie Grant",
    position: "Operations Director, MedixCare",
    text: "What used to take our staff hours now takes minutes. Their ERP setup didn’t just solve problems — it made our daily operations make sense again."
  },
  {
    id: 4,
    name: "Rachel Gomez",
    position: "Co-founder, The Artisan Studio",
    text: "Since partnering with QX Tech, we’ve seen a steady boost in search traffic and engagement. Their SEO insights really work."
  },
  {
    id: 5,
    name: "Tom Reynolds",
    position: "Head of Sales, CityTech Solutions",
    text: "Their digital marketing strategy brought in leads we were missing before. They know what they're doing and keep things clear and simple."
  }
];

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">

        <SectionTitle title="What Our Clients Say" textColor='text-gray-800' />
       
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
              <div className="bg-teal-500 bg-opacity-80 p-8 rounded-lg shadow-lg h-full min-h-[200px]">
                <div className="mb-6">
                  <p className="text-white text-base">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="text-white mt-4">
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  {/* <p className="text-sm opacity-80">{testimonial.position}</p> */}
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeIndex === index ? 'bg-yellow w-6' : 'bg-gray-300'
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