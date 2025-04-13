"use client"
import { useRouter } from 'next/navigation';

import Image from "next/image"
import { IconArrowUpRight } from '@tabler/icons-react';
export default function LandView() {
    const router = useRouter();

    return (
        <div className="w-full h-full flex flex-wrap">
            <div className="rounded-4xl relative w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] min-w-[400px] group overflow-hidden cursor-pointer border-dashed border-1"
            onClick={() => router.push(`/blog/my-experiences-travelling-to-spain`)}>
                <Image src="/img1.jpg" alt="Land View" fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 66vw" priority />

                {/* Overlay with fade-out on hover */}
                <div className="absolute inset-0 bg-[#FEBA17] mix-blend-multiply opacity-80 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none" />

                {/* Text content */}
                <div className="absolute bottom-0 right-0 p-6 w-1/2 rounded-tl-4xl text-foreground bg-[#FEBA17]">
                    <div className="flex items-center justify-between">
                        <button className="rounded-full bg-background text-foreground text-xs px-3 py-1 mb-3">Travel</button>
                        <IconArrowUpRight />
                    </div>                    
                    <h2 className="text-2xl sm:text-4xl font-della">My experiences travelling to Spain</h2>
                    <br />
                    <p className="text-sm sm:text-base font-open">From grand cathedrals to colorful streets, Spain’s architecture completely captivated me.
                        In this post, I’m sharing the highlights that stood out the most during my trip.</p>
                </div>
            </div>

            <div className="min-w-[300px] h-1/4 bg-blue-500"></div>
        </div>
    )
}
