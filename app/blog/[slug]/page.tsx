import { blogPosts } from '@/lib/blogData';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return notFound();

  return (
    <div>
      <Header />
      <div className="w-full h-fit mt-16 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 ">
        <Image src={post.image} alt={post.title} width={800} height={400} className="rounded-xl mb-6" />
        <p className="text-sm text-gray-500 uppercase">{post.category}</p>
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-lg text-gray-700">{post.subtitle}</p>
        <p className="text-lg text-gray-700">{post.content}</p>
      </div>
      <Footer />
    </div>
  );
}
