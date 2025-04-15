'use client';

import { useParams, notFound } from 'next/navigation'; // Import useParams
import { blogPosts } from '@/lib/blogData';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { parseContent } from "@/lib/parseContent";
import PostMeta from "@/components/post-meta";
import Comments from '@/components/comments'
import Subscription from '@/components/subscription';
import { useRouter } from 'next/navigation';


interface blogPosts {
  slug: string;
  title: string;
  image: string;
  category: string;
  subtitle: string;
  content: string;
}

export default function BlogPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug; 
  const post = typeof slug === 'string'
    ? blogPosts.find((p) => p.slug === slug)
    : undefined;

  if (!post) {
    return (
      <div className='w-full h-screen'>
        <Header />
        <div className="container mx-auto px-4 py-10 text-center h-full pt-52">
          <h1 className="text-4xl font-bold font-della mb-8 text-[#74512D]">Post Not Found</h1>
          <p className='font-open'>Sorry, we couldn't find the post you were looking for.</p>
        </div>
      </div>
    );
  }


  return (
    <div>
      <Header />
      <div className="container mt-16 flex flex-col items-center pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6">
        <div className='relative border-dashed border-1 w-full max-h-[600px] rounded-4xl overflow-hidden mb-6'>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="object-cover w-full min-h-[350px]"
          priority
        />
        <div className="absolute inset-0 bg-[#FEBA17] mix-blend-multiply opacity-70 pointer-events-none" />
        </div>

        <div className="w-full max-w-[700px] mx-auto h-fit mt-4">
          <h1 className="text-3xl md:text-5xl text-[#74512D] font-della mb-6">{post.title}</h1>
          <p className="text-lg text-foreground mb-6 font-open font-semibold">{post.subtitle}</p>
          <button onClick={() => router.push(`/categories/${post.category.toLowerCase()}`)}
          className="rounded-full bg-foreground text-background text-sm px-3 py-1 mb-3 cursor-pointer">{post.category}</button>
          <PostMeta date="2025-04-13" />
          <div className="text-lg text-foreground prose lg:prose-xl max-w-none font-open">
            <div>{parseContent(post.content)}</div>
          </div>
        </div>
        <Subscription />
        <Comments />
      </div>
      <Footer />
    </div>
  );
}