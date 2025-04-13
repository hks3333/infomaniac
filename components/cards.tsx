'use client';

import Image from 'next/image';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';

interface CardProps {
  title: string;
  category: string;
  subtitle: string;
  image: string;
  slug: string;
  content: string;
}

export default function Cards({ title, category, subtitle, image, slug, content }: CardProps) {
  const router = useRouter();

  return (
    <div className="flex-grow min-w-sm w-1/4 bg-[#FEBA17] rounded-2xl overflow-hidden group cursor-pointer border-dashed border-1"
    onClick={() => router.push(`/blog/${slug}`)}>

      <div className="relative h-[300px] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#FEBA17] mix-blend-multiply opacity-80 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
      </div>
      <div className="px-4 py-8">
        <div className="flex items-center justify-between">
        <button className="rounded-full bg-background text-foreground text-xs px-3 py-1 mb-2">{category}</button>
        <IconArrowUpRight />
        </div>
        <h2 className="text-3xl font-della text-foreground mt-1">{title}</h2>
        <p className="text-base text-foreground font-open mt-3">{subtitle}</p>
      </div>
    </div>
  );
}
