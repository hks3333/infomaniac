"use client"

import Header from "@/components/header"
import LandView from "@/components/land-view"
import Footer from "@/components/footer"
import Cards from "@/components/cards"
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  return (
    <>
    <div className="px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
      <Header />
      <div className="w-full h-fit mt-16 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 ">
        <div className="hidden md:block">
        <LandView />
        </div>
      </div>


      {/* Cards */}
      <div className="flex flex-wrap gap-6 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8">
        <div className="flex md:hidden">
          <Cards
            title="My Experiences Travelling to Spain"
            category="Travel"
            subtitle="From grand cathedrals to colorful streets, Spain’s architecture completely captivated me. In this post, I’m sharing the highlights that stood out the most during my trip."
            image="/img16.jpg"
            slug="my-experiences-travelling-to-spain"
          />

        </div>
        <Cards
          title="Thinking About the Future"
          category="Science"
          subtitle="Lately, I’ve been wondering what the world might look like in the years to come. From technology to climate, everything is changing—sometimes faster than we expect."
          image="/img15.jpg"
          slug="thinking-about-the-future"
        />

        <Cards
          title="Books I’ve Been Reading Lately"
          category="Books"
          subtitle="A mix of fiction and non-fiction that’s been keeping me company. Sharing a few thoughts on what I enjoyed, what surprised me, and what’s next on my list."
          image="/img17.jpg"
          slug="books-ive-been-reading"
        />

        <Cards
          title="Wandering Through the Streets of Lisbon"
          category="Travel"
          subtitle="Got lost more than once, but honestly, that’s when the best stuff happened. Lisbon has its own quiet rhythm."
          image="/img12.jpg"
          slug="wandering-through-lisbon"
        />

        <Cards
          title="Why I Still Love Paper Books"
          category="Books"
          subtitle="There’s just something about flipping real pages. Here’s why I keep going back to physical books despite the screens."
          image="/img18.jpg"
          slug="paper-books-love"
        />

        <Cards
          title="Late-Night Thoughts on AI"
          category="Technology"
          subtitle="I’ve been reading and thinking a lot about where AI is headed—and how it might shape our everyday lives."
          image="/img13.jpg"
          slug="late-night-thoughts-ai"
        />

        <Cards
          title="A Quiet Day at the Science Museum"
          category="Science"
          subtitle="Spent a peaceful afternoon getting curious again. Sometimes I forget how much I love learning random things."
          image="/img14.jpg"
          slug="quiet-day-science-museum"
        />

        <Cards
          title="Books That Made Me Think"
          category="Books"
          subtitle="Not just good reads—these ones really made me pause, reflect, and see things differently."
          image="/img17.jpg"
          slug="books-that-made-me-think"
        />

        <Cards
          title="A Weekend in the Mountains"
          category="Travel"
          subtitle="No signal, no rush—just fresh air and long hikes. I didn’t realize how much I needed that reset."
          image="/img9.jpg"
          slug="weekend-in-the-mountains"
        />

        <Cards
          title="Tech That’s Actually Helped Me"
          category="Technology"
          subtitle="Not all gadgets are distractions. Here are a few that have genuinely made my days smoother."
          image="/img11.jpg"
          slug="tech-that-helped-me"
        />


      </div>      
    </div>
    <Footer />
    </>
  );
} 
