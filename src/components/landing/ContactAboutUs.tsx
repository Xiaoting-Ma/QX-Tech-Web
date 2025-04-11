"use client";
import Link from "next/link";

const img='https://images.unsplash.com/photo-1633410189542-36d96e3762b8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlYW1zfGVufDB8fDB8fHww'
export default function ContactAboutUs() {

  return (
    <section id="NuestrosServicios" className="py-20 relative">
      {/* 背景图片层（单独容器） */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('" + img + "')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.8,
        }}
      >
        {/* 阴影层（只覆盖背景图片） */}
        <div className="absolute inset-0 z-10"></div>
      </div>

      {/* 内容层（在阴影之上） */}
      <div className="container-custom relative z-20 h-full flex flex-col items-end justify-end pr-12 pb-12 text-black text-right">
        
        <h2 className="text-3xl font-bold mb-2">About our team</h2>
        <div className="flex space-x-4 text-lg">
          <Link href="/contact" className="hover:underline">
            About Us
          </Link>
          <span>|</span>
          <Link href="/contact#contact" className="hover:underline">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
