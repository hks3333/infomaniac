'use client'

import { useParams, notFound } from 'next/navigation'
import { blogPosts } from '@/lib/blogData'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Cards from '@/components/cards' 

export default function CategoryPage() {
  const params = useParams()
  const slug = params?.slug as string

  const filteredPosts = blogPosts.filter(
    (post) => post.category.toLowerCase() === slug.toLowerCase()
  )

  const categoryTitle = slug.charAt(0).toUpperCase() + slug.slice(1)

  if (filteredPosts.length === 0) {
    notFound()
  }

  return (
    <>
    <div className="mt-16 pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <Header />
      <div className="container mx-auto pt-6">
        <h1 className="text-5xl font-della text-[#74512D] mb-10 text-center">
          {categoryTitle}
        </h1>
        <div className="flex flex-wrap justify-center gap-6">
          {filteredPosts.map((post) => (
            <Cards
              key={post.slug}
              title={post.title}
              category={post.category}
              subtitle={post.subtitle}
              image={post.image}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
