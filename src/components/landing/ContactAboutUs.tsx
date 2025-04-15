"use client";
import Link from "next/link";
import InView from "../common/InView";

const img = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export default function ContactAboutUs() {
  return (
    <InView>
      {({ inView }) => (
        <section className="py-20 relative overflow-hidden h-[200px] md:h-[300px]">
          {/* 背景图片层 */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform: `scale(${inView ? 1 : 1.2})`,
              transition: 'transform 1s ease, opacity 1s ease',
            }}
          >
            {/* 背景遮罩层 */}
            <div className="absolute inset-0 z-10 bg-black opacity-20"></div>
          </div>

          {/* 内容层 */}
          <div 
            className="container-custom relative z-20 h-full flex flex-col items-end justify-end pr-6 md:pr-12 mt-6 text-white text-right transition-all duration-1000 ease-out"
            style={{
              transform: `translateY(${inView ? '0' : '60px'})`,
              opacity: inView ? 1 : 0,
            }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2">About Our Team</h2>
            <div className="flex space-x-4">
              <Link href="/about-us">
                <div className="bg-white text-black px-2 md:px-6 py-2 shadow hover:bg-yellow transition duration-300">
                  About Us
                </div>
              </Link>
              <Link href="/about-us#contact">
                <div className="bg-white text-black px-2 md:px-6 py-2 shadow hover:bg-yellow transition duration-300">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
}
