"use client";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const globeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 确保代码只在浏览器环境运行
    if (typeof window === 'undefined' || !globeRef.current) return;

    let globeInstance: any = null;
    
    // 动态导入Globe.gl
    import('globe.gl').then(({ default: Globe }) => {
      // 使用更安全的方式清除子元素
      if (globeRef.current) {
        globeRef.current.innerHTML = '';
      }

      // 创建Globe实例 - 注意Globe是一个函数而不是类
      globeInstance = new Globe(globeRef.current!)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .backgroundImageUrl('//unpkg.com/three-globe/example/img/night-sky.png')
        // 使用可选链操作符访问属性
        .width(globeRef.current?.clientWidth || window.innerWidth)
        .height(globeRef.current?.clientHeight || window.innerHeight);

      // 将Globe附加到DOM
      if (globeRef.current) {
        globeInstance(globeRef.current);
      }

      // 安全地访问controls方法
      const controls = globeInstance.controls();
      if (controls) {
        controls.autoRotate = true;
        controls.autoRotateSpeed = 1;
      }
      
      // 设置视角
      globeInstance.pointOfView({
        lat: 10, 
        lng: -80, 
        altitude: 2.5
      }, 0);
    }).catch(error => {
      console.error('Failed to load Globe.gl:', error);
    });

    // 清理函数
    // return () => {
    //   // 可能需要清理Globe实例
    //   if (globeInstance && typeof globeInstance.dispose === 'function') {
    //     globeInstance.dispose();
    //   }
    // };
    return () => {
      if (globeRef.current) {
        const canvas = globeRef.current.querySelector('canvas');
        const gl = canvas?.getContext('webgl') as WebGLRenderingContext || canvas?.getContext('experimental-webgl') as WebGLRenderingContext;
        const loseCtx = gl?.getExtension('WEBGL_lose_context');
        loseCtx?.loseContext(); // 正确释放 WebGL 资源
        globeRef.current.innerHTML = ''; // 清除 DOM 节点，防止残留
      }
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center bg-black pt-16"
    >
      <div className="container-custom z-10 relative">
        <div className="max-w-7xl ml-4 sm:ml-8 md:ml-12 lg:ml-16 xl:ml-20">
          <h1 className="font-bold leading-tight mb-4">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-yellow">QX Tech</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Custom Solutions</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white">Endless Possibilities</span>
          </h1>
          <h2 className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300">
            We help build, enhance, and transform your digital presence.
          </h2>
          <Link href="/about-us#contact" className="btn-primary text-darkyellow text-lg bg-white hover:bg-yellow hover:text-black transition duration-300">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Globe.js container */}
      <div 
        ref={globeRef} 
        className="absolute left-0 top-0 bottom-0 w-full -z-5"
        style={{ opacity: 0.8 }}
      ></div>

      {/* Background overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent -z-10"></div>
    </section>
  );
}