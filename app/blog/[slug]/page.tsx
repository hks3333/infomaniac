'use client'; // <-- Add this at the very top

import { useEffect, useState } from 'react'; // Import hooks if needed later
import { useParams, notFound } from 'next/navigation'; // Import useParams
import { blogPosts } from '@/lib/blogData';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

// Define the structure of a blog post if not already globally defined
interface blogPosts {
  slug: string;
  title: string;
  image: string; // Or StaticImageData
  category: string;
  subtitle: string;
  content: string;
}

// Remove 'async' - Client components cannot be async
export default function BlogPage() {
  const params = useParams(); // Get params using the hook
  const slug = params.slug; // Access the slug property

  // Note: blogPosts is now filtered on the client side
  // Ensure slug is a string before using it (useParams can return string | string[])
  const post = typeof slug === 'string'
    ? blogPosts.find((p) => p.slug === slug)
    : undefined;

  // Client-side not found handling (can be basic for a hackathon)
  // Option 1: Use Next.js notFound() - might require specific setup in client components sometimes.
  // Option 2: Render a "Not Found" message directly.
  if (!post) {
     // Option 1 (try this first):
     // useEffect(() => {
     //   if (!post) {
     //     notFound();
     //   }
     // }, [post]); // Trigger notFound if post is missing

     // Option 2 (simpler fallback for hackathon):
     return (
       <div>
         <Header />
         <div className="container mx-auto px-4 py-10 text-center">
           <h1 className="text-2xl font-bold">Post Not Found</h1>
           <p>Sorry, we couldn't find the post you were looking for.</p>
         </div>
         <Footer />
       </div>
     );

     // Or potentially just return null or an empty fragment if notFound() works via useEffect
     // return null;
  }

  // If post is found, render the content
  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <div className="w-full max-w-4xl mx-auto h-fit mt-16 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 ">
          <Image
             src={post.image}
             alt={post.title}
             width={800}
             height={400}
             className="rounded-xl mb-6 w-full h-auto object-cover"
             priority
           />
          <p className="text-sm text-gray-500 uppercase">{post.category}</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-gray-700 mb-4">{post.subtitle}</p>
          <div className="text-lg text-gray-800 prose lg:prose-xl max-w-none">
             <p>{post.content}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}