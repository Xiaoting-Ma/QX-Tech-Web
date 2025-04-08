import React from 'react';
import Image from 'next/image';

const AboutUsTech = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-black mb-8">About 
        <span className='text-yellow'> QX Tech</span>
      </h1>
      
      <div className="text-center mb-12 text-gray-700 max-w-4xl mx-auto">
        <p className="text-base md:text-lg leading-relaxed">
          QX Tech 2014年在澳洲悉尼正式成立，下属于澳洲同城网。7年来为五百余家公司提供了网站设计开发、谷歌
          SEO/SEM搜索优化、网站服务器托管、IT技术支持、平面设计，品牌推广等专业服务。我们的目标是希望通过我们的
          努力，帮助越来越多的澳洲公司完成企业信息化建设。
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row items-center mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 relative ">
          <Image 
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="QX Tech illustration" 
            width={550} 
            height={450}
            className="mx-auto rounded-xl"
          />
        </div>
        
        <div className="md:w-1/2 relative pl-4">
          <div className="border-l-2 border-blue-400 pl-8">
            {/* Timeline items */}
            <div className="mb-16 relative">
              <div className="absolute -left-11 top-1 w-6 h-6 bg-white rounded-full border-4 border-blue-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2014－2015</h3>
              <p className="text-gray-700">
                AliveTech 悉尼研发中心组建成立，次年上线综合类信息网站"澳洲同城网"，内容涵盖新闻资讯、征婚交友、生活服务、租房、招聘等。
              </p>
            </div>
            
            <div className="mb-16 relative">
              <div className="absolute -left-11 top-1 w-6 h-6 bg-white rounded-full border-4 border-blue-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2016-2017</h3>
              <p className="text-gray-700">
                AliveTech快速发展，技术团队扩增至20人。依靠同城网的建厚研发实力，我们开始为澳洲的中小企业提供全方位的技术服务。并先后与谷歌、IBM、亚马逊云建立战略合作伙伴关系。
              </p>
            </div>
            
            <div className="mb-4 relative">
              <div className="absolute -left-11 top-1 w-6 h-6 bg-white rounded-full border-4 border-blue-500"></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">2018-2021</h3>
              <p className="text-gray-700">
                随着公司的快速发展，AliveTech的UE/UI设计师及IT开发工程师超过了30人，服务区域也扩展到亚太地区。截止到2020年底，已先后与超过500余家公司或个人进行了友好合作。
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* <div className="bg-gradient-to-r from-yellow to-gray-100 text-white p-8 rounded-xl text-center">
        <h2 className="text-5xl font-bold mb-2">2+</h2>
        <p className="text-xl">年专业服务经验</p>
      </div> */}
    </div>
  );
};

export default AboutUsTech;