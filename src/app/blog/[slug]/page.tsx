// src/pages/blog/[slug].tsx
import Head from "next/head";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import NarrowBanner from "@/components/common/NarrowBanner";
import Image from 'next/image';
import Link from 'next/link';
import BlogContentCn from "@/components/blog/BlogContentCn";
import BlogContentEn from "@/components/blog/BlogContentEn";
import {blogs , blogDatas } from "@/components/blog/BlogData";
import SectionTitle from "@/components/common/TitleSection";

interface BlogDetailPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogDatas.map((blog) => ({
    slug: blog.slug,
  }));
}

async function BlogDetailPage({ params }: BlogDetailPageProps) {

  const { slug } = await params;

  const blogContent = 
    blogDatas.find(
    (blog) => blog.slug === slug
  );

  if (!blogContent) {
    return (
      <>
        <Navbar />
        <NarrowBanner
          imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Our Collaboration"
          content="QX Tech specializes in creating visually stunning and user-friendly websites tailored to your business needs. From custom designs to seamless functionality, we ensure your online presence is both engaging and efficient, offering responsive designs."
          height="350px"
        />
        <main className="p-4 sm:p-6 md:p-10 lg:p-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <Link href="/blog" className="text-blue-500 hover:text-blue-600">
              {blogs.goBack}
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              {blogs.blogNotFound}
            </h1>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{`${blogContent.titleDetail} | QX Tech Blog`}</title>
        <meta
          name="description"
          content={`Explore in-depth insights and updates from QX Tech.`}
        />
        <meta
          name="keywords"
          content={`QX Tech, Blog, ${blogContent.title}, Web Development, SEO, Tech Tips`}
        />
        <meta property="og:title" content={`${blogContent.titleDetail} | QX Tech`} />
        <meta property="og:description" content={`Explore our latest insights and tech updates.`} />
        <meta property="og:image" content={blogContent.imageUrl} />
        <meta property="og:url" content={`https://www.qxtech.com.au/blog/${blogContent.slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Navbar />
      <NarrowBanner
          imageUrl="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title=""
          content="Welcome to QIXIN Tech, this is our blog page."
          height="150px"
        />
      <main className="p-4 sm:p-6 md:p-10 lg:p-16"> {/* Add padding-top to account for fixed header */}
        {/* 面包屑导航 */}
        <div className="mx-auto mt-16">
          <Link href="/blog" className="text-yellow hover:text-yellow text-sm md:text-base">
            {blogs.goBack}
          </Link>
        </div>

        {/* 文章主体 */}
        <article className="mx-auto max-w-4xl">
          {/* 文章标题区 */}
          <div className="mb-4 md:mb-8 mt-4">
            <SectionTitle title={blogContent.titleDetail}/>
            {/* <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
              {blogContent.titleDetail}
            </h1> */}
            <div className="flex items-center text-gray-600 justify-center text-sm md:text-base">
              <span>{blogContent.date}</span>
              <span className="mx-2">|</span>
              <span>{blogContent.author}</span>
            </div>
          </div>

          {/* 主图 */}
          <div className="relative h-[300px] md:h-[400px] w-full mb-4 md:mb-8 rounded-lg overflow-hidden">
            <Image
              src={blogContent.imageUrl}
              alt={blogContent.title}
              fill
              className="object-cover"
            />
          </div>

          {/* 文章内容 */}
          <div className="prose max-w-none">
            <div className="text-gray-700 leading-relaxed mb-4">
              {<BlogContentEn slug={Array.isArray(slug) ? slug[0] : slug ?? ""} />}
            </div>

          </div>
        </article>
        <div className="mx-auto mt-16">
          <Link href="/blog" className="text-black hover:text-yellow text-sm md:text-base">
            {blogs.goBack}
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};


export default BlogDetailPage;