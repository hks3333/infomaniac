'use client'

import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col pt-22">
      <Header />
      <div className="flex flex-col md:flex-row flex-1">
        {/* Left: Image Section */}
        <div className="w-full md:w-1/2 h-64 md:h-auto">
          <div className="relative w-full h-full bg-[#f0e9e0] flex items-center justify-center border border-dashed border-[#74512D] rounded-4xl overflow-hidden">
                <Image
                src="/img1.jpg"
                alt="me"
                fill
                className="object-fill"
                priority
                />
                <div className="absolute inset-0 bg-[#FEBA17] mix-blend-multiply opacity-70 pointer-events-none" />
          </div>
        </div>

        {/* Right: Text Section */}
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-della text-[#74512D] mb-6">The Story of an Infomaniac</h1>
          <p className="text-lg font-open text-foreground mb-4 leading-relaxed">
            Born in the vibrant streets of India, I was the kind of kid who asked *too many* questions. Not to annoy — but because I couldn't stop wondering how the world works.
          </p>
          <p className="text-lg font-open text-foreground mb-4 leading-relaxed">
            Whether it was tech, culture, science, or space — I was obsessed. That obsession grew from bedtime encyclopedias to midnight blog scrolls. I didn’t just read; I *consumed*.
          </p>
          <p className="text-lg font-open text-foreground mb-4 leading-relaxed">
            This blog is for the curious. For thinkers and infomaniacs like me — the ones who find comfort in learning and excitement in sharing.
          </p>
          <p className="text-lg font-open text-foreground mb-8 leading-relaxed">
            When I’m not writing, you’ll find me deep in code, sketching wild ideas, or rewatching Interstellar for the 15th time (no regrets).
          </p>
          <div className="text-sm text-muted-foreground font-open">
            Let’s get lost in thought. Welcome to my brain.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
