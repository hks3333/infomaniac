'use client'

import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'


const categories = [
  {
    slug: 'travel',
    title: 'Travel',
    subtitle: 'Wander far, find yourself.',
    image: '/img2.jpg',
  },
  {
    slug: 'science',
    title: 'Science',
    subtitle: 'Question everything. Learn infinitely.',
    image: '/img3.jpg',
  },
  {
    slug: 'technology',
    title: 'Technology',
    subtitle: 'Tomorrow is built today.',
    image: '/img5.jpg',
  },
  {
    slug: 'books',
    title: 'Books',
    subtitle: 'Lose yourself in pages, find new worlds.',
    image: '/img6.jpg',
  },
]

export default function CategoriesPage() {
  return (
    <>
    <Header />
    <div className="w-full mt-16 pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6">
      {categories.map((cat) => (
        <Link key={cat.slug} href={`/categories/${cat.slug}`}>
          <div className="relative w-full h-[300px] sm:h-[400px] mb-6 group overflow-hidden cursor-pointer rounded-4xl border border-dashed">
            <Image
              src={cat.image}
              alt={cat.title}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-in-out"
              priority
            />
              <div className="absolute inset-0 bg-[#FEBA17] mix-blend-multiply opacity-100 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
              <h2 className="text-background text-3xl sm:text-6xl font-della mb-4">{cat.title}</h2>
              <p className="text-white text-sm sm:text-xl font-open">{cat.subtitle}</p>
            </div>
          </div>
        </Link>
      ))}
      <Footer />
    </div>
    </>
  )
}
