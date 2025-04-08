'use client';

import React from 'react';
import Image from 'next/image';
import company1 from '../../../public/images/Team1.jpg';
import company2 from '../../../public/images/Team2.jpg';
import company3 from '../../../public/images/Team3.png';
import SectionTitle from "@/components/common/TitleSection";

const TeamSection = () => {

  return (
    <>
    <div 
        className="text-white p-8 text-center h-[200px]"
        style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599763485707-ee5ee3979370?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, 
            backgroundPosition: 'center',    
            backgroundSize: 'cover',       
            backgroundRepeat: 'no-repeat',    
        }}
    >
        <h2 className="text-5xl font-bold mb-2">2+</h2>
        <p className="text-xl">年专业服务经验</p>
    </div>
    <div className="container mx-auto px-4 py-12 max-w-6xl overflow-hidden" id="about" >
        {/* title */}
        <SectionTitle title="About Us" />

        {/* content + photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-0 md:px-8">
            {/* Section 1: our team */}
            <div className="col-start-1">
                {/* title + text */}
                <h2 className="font-semibold mb-3 text-base md:text-lg lg:text-xl">Our Team</h2>
                <p className="mb-3 text-sm md:text-base">All of our team members hold at least a Master's degree or PhD in their areas of expertise, which include software development, computer vision, and AI / machine learning.  </p>
                <p className="text-sm md:text-base">Our team is more than just a group of technical experts – we are a passionate and forward-thinking collective that believes in the power of IT to reshape industries and create lasting impact. We are developing intelligent systems that improve business efficiency, creating innovative solutions that help businesses to grow. </p>
                <div className="my-4 border-l-4 border-darkyellow p-4 text-darkyellow">
                    "At QX Tech, we’re not just here to build IT solutions—we’re here to help you grow."</div>
                <figcaption className="mt-6 flex items-center justify-start space-x-3">
                    {/* <Avatar rounded size="xs" img={edison} alt="Edison - CEO at QX Tech" />  */}
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <cite className="pr-3 font-xs">Edison Wu</cite>
                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Co-founder & CEO at QX Tech</cite>
                    </div>
                </figcaption> 
            </div>
            {/* photo */}
            <div className="md:col-start-2">
                {/* 放一张办公室照片 */}
                <Image src={company1} alt="QX Tech staffs during a meeting"
                className="w-full h-full"/>
            </div>

            {/* Section 2: we believe in */}
            <div className="row-start-4 md:row-start-2 md:col-start-1">
                {/* 放第二张办公室照片 */}
                <Image src={company3} alt="Edison doing a code review"
                className="w-full h-full"/>
            </div>
            <div className="row-start-3 md:row-start-2 md:col-start-2">
                <h2 className="font-semibold mb-3 text-base md:text-lg lg:text-xl">We believe in</h2>
                <p className="mb-3 text-sm md:text-base">At QX Tech, we believe in building relationships founded on trust, collaboration, and shared success. From the first consultation to post-launch support, we work closely with you, aligning our strategies with your business goals to maximise value and ensure every investment counts. </p>
                <div className="my-4 border-l-4 border-darkyellow p-4 text-darkyellow">
                    "The future is unwritten, yet it is our vision and innovation that will make it extraordinary."</div>
                {/* <figcaption className="mt-6 flex items-center justify-start space-x-3"> */}
                    {/* 把老板照片放这里 */}
                    {/* <Avatar rounded size="xs" img={paul} alt="Paul - CTO at QX Tech" />  */}
                    {/* <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <cite className="pr-3 font-xs">Paul Liu</cite>
                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Founder & CTO at QX Tech</cite>
                    </div>
                </figcaption>  */}
            </div>

            {/* Section 3: our value */}
            <div className="row-start-5 md:row-start-3 md:col-start-1">
                <h2 className="font-semibold mb-3 text-base md:text-lg lg:text-xl">Our Value</h2>
                <p className="mb-3 text-sm md:text-base">We believe in innovation, collaboration, and excellence. We are dedicated to making your vision a reality and empowering your business to thrive in today’s digital world.</p>
                <p className="mb-3 text-sm md:text-base">Our focus on quality, transparency, and long-term partnerships ensures that our clients achieve their goals and realise lasting value.</p>
                <div className="my-4 border-l-4 border-darkyellow p-4 text-darkyellow">
                    "We help your business cross the bridge to a smarter, more connected future."</div>
                {/* <figcaption className="mt-6 flex items-center justify-start space-x-3"> */}
                    {/* 把员工照片放这里 */}
                    {/* <Avatar rounded size="xs" img={tina} alt="Tina - Project Manager at QX Tech" />  */}
                    {/* <div className="flex items-center divide-x-2 divide-gray-500">
                        <cite className="pr-3 font-xs">Tina Ma</cite>
                        <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">Project Manager at QX Tech</cite>
                    </div>
                </figcaption>  */}
            </div>
            <div className="row-start-6 md:row-start-3 md:col-start-2">
                <Image src={company2} alt="QX Tech staffs during a meeting" />
            </div>

        </div> 
        </div>
    </>
  );
};

export default TeamSection;