import Image from "next/image";
import Header from "@/components/header"
import LandView from "@/components/land-view"
import Footer from "@/components/footer"
import Cards from "@/components/cards"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-fit mt-16 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 ">
        <LandView />
      </div>


      {/* Cards */}
      <div className="flex flex-wrap gap-6 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8">
        <Cards
          title="Thinking About the Future"
          category="Science"
          subtitle="Lately, I’ve been wondering what the world might look like in the years to come.
  From technology to climate, everything is changing—sometimes faster than we expect."
          image="/img2.png"
        />

        <Cards
          title="Books I’ve Been Reading Lately"
          category="Books"
          subtitle="A mix of fiction and non-fiction that’s been keeping me company.
  Sharing a few thoughts on what I enjoyed, what surprised me, and what’s next on my list."
          image="/img3.png"
        />

        <Cards
          title="Wandering Through the Streets of Lisbon"
          category="Travel"
          subtitle="Got lost more than once, but honestly, that’s when the best stuff happened. Lisbon has its own quiet rhythm."
          image="/img4.jpg"
        />

        <Cards
          title="Why I Still Love Paper Books"
          category="Books"
          subtitle="There’s just something about flipping real pages. Here’s why I keep going back to physical books despite the screens."
          image="/img5.jpg"
        />

        <Cards
          title="Late-Night Thoughts on AI"
          category="Technology"
          subtitle="I’ve been reading and thinking a lot about where AI is headed—and how it might shape our everyday lives."
          image="/img6.jpg"
        />

        <Cards
          title="A Quiet Day at the Science Museum"
          category="Science"
          subtitle="Spent a peaceful afternoon getting curious again. Sometimes I forget how much I love learning random things."
          image="/img7.jpg"
        />

        <Cards
          title="Books That Made Me Think"
          category="Books"
          subtitle="Not just good reads—these ones really made me pause, reflect, and see things differently."
          image="/img8.jpg"
        />

        <Cards
          title="A Weekend in the Mountains"
          category="Travel"
          subtitle="No signal, no rush—just fresh air and long hikes. I didn’t realize how much I needed that reset."
          image="/img9.jpg"
        />

        <Cards
          title="Tech That’s Actually Helped Me"
          category="Technology"
          subtitle="Not all gadgets are distractions. Here are a few that have genuinely made my days smoother."
          image="/img10.jpg"
        />
      </div>
      <Footer />
    </div>
  );
} 
