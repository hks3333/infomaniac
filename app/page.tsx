"use client"

import Header from "@/components/header"
import LandView from "@/components/land-view"
import Footer from "@/components/footer"
import Cards from "@/components/cards"
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();

  return (
    <div>
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
            image="/img1.jpg"
            slug="my-experiences-travelling-to-spain"
            content="Spain was an absolute feast for the eyes. From the stunning cathedrals in Barcelona to the vibrant streets in Seville, the architecture left me in awe. Walking through the narrow alleyways of historic cities, you could feel the history in the walls, and every corner revealed a new view that seemed straight out of a postcard. There was something magical about how the city felt alive with culture, colors, and sounds. I want to share the moments that really left an impression on me, from the breathtaking Sagrada Familia to the unforgettable tapas we shared in Madrid."
          />

        </div>
        <Cards
          title="Thinking About the Future"
          category="Science"
          subtitle="Lately, I’ve been wondering what the world might look like in the years to come. From technology to climate, everything is changing—sometimes faster than we expect."
          image="/img2.png"
          slug="thinking-about-the-future"
          content="The world feels like it's moving faster than ever. Between all the tech innovations, climate concerns, and shifting ways we work and connect, it's hard not to wonder where we’re headed. I find myself daydreaming about what the next few decades might bring—both the exciting breakthroughs and the challenges. Will we figure out sustainable living in time? Will AI reshape how we think and create?

One thing that really gets me thinking is how interconnected everything is. A breakthrough in one area, like energy storage, can change how we approach transportation, housing, and even food. But it’s not all rosy. Sometimes the news feels overwhelming, and it’s easy to spiral into worry. Still, I try to stay curious. I believe that small changes in our daily lives, multiplied across millions, can steer us in the right direction. This post isn’t about predictions, just reflections. It’s my way of sorting through all the curiosity and caution I’ve been feeling lately."
        />

        <Cards
          title="Books I’ve Been Reading Lately"
          category="Books"
          subtitle="A mix of fiction and non-fiction that’s been keeping me company. Sharing a few thoughts on what I enjoyed, what surprised me, and what’s next on my list."
          image="/img3.png"
          slug="books-ive-been-reading"
          content="Lately, I’ve been trying to make more time for reading again. It’s a habit that always grounds me. I picked up a couple of novels that pulled me in instantly—beautiful writing, characters that felt real, and stories that lingered. On the non-fiction side, I’ve been diving into topics like psychology and design. I love how reading expands my perspective without me even realizing it.

Here are a few books I’ve recently read:
- 'The Midnight Library' by Matt Haig – A heartwarming and bittersweet story about second chances and the choices we live with.
- 'Atomic Habits' by James Clear – So many lightbulb moments in this one. Simple ideas, but incredibly practical.
- 'Sapiens' by Yuval Noah Harari – This one took a while to get through, but it really made me rethink what it means to be human.
- 'The Book Thief' by Markus Zusak – Emotional and lyrical, it stayed with me long after I finished.
- 'Show Your Work!' by Austin Kleon – A short read, but it gave me a fresh take on creativity and sharing.

Sharing a few of my recent reads here, but mostly just grateful to be back in the rhythm of books. Next on my list: 'Klara and the Sun' by Kazuo Ishiguro and maybe a re-read of something comforting, like 'Pride and Prejudice.'"
        />

        <Cards
          title="Wandering Through the Streets of Lisbon"
          category="Travel"
          subtitle="Got lost more than once, but honestly, that’s when the best stuff happened. Lisbon has its own quiet rhythm."
          image="/img4.jpg"
          slug="wandering-through-lisbon"
          content="Lisbon was everything I hoped for—bright tiles, steep streets, and little cafés that felt like time capsules. I didn’t plan too much, which turned out to be the best decision. Some of my favorite moments were unplanned: catching a view from a hidden alley, listening to street musicians, or finding an old bookstore tucked behind a tram stop.

There’s a calm magic to the city that really stuck with me. I loved watching the yellow trams rattle by while sipping coffee, or wandering into tiny shops selling hand-painted ceramics. The food was also unforgettable—fresh seafood, warm pastries, and a glass of vinho verde in the sun. I spent a full afternoon just people-watching from a plaza bench. It reminded me how important it is to slow down. I’d go back in a heartbeat."
        />

        <Cards
          title="Why I Still Love Paper Books"
          category="Books"
          subtitle="There’s just something about flipping real pages. Here’s why I keep going back to physical books despite the screens."
          image="/img5.jpg"
          slug="paper-books-love"
          content="E-books are convenient, I won’t deny it. But there’s something about holding a real book, turning the pages, feeling the weight of the story. I love the way a book smells, the texture of different papers, even the little bookmarks I end up collecting.

Reading on paper feels more intentional, more immersive. I find it easier to focus and less tempted to jump between tabs or notifications. Plus, my shelves have become like a visual diary—each spine brings back memories of when and where I read it. Sure, digital libraries are great for travel, but nothing beats the feeling of curling up with a good paperback on a rainy day."
        />

        <Cards
          title="Late-Night Thoughts on AI"
          category="Technology"
          subtitle="I’ve been reading and thinking a lot about where AI is headed—and how it might shape our everyday lives."
          image="/img6.jpg"
          slug="late-night-thoughts-ai"
          content="AI is no longer a far-off idea—it’s here, and it’s evolving fast. Sometimes I’m amazed by the tools we already have, like how smart recommendations have gotten or how AI can generate art. Other times, it makes me pause. What does it mean for jobs? Creativity? Privacy?

Lately, I’ve been experimenting with some AI tools myself—some are surprisingly helpful, others feel a bit eerie. The tech is impressive, but I think we need thoughtful conversations about where the lines should be. What kind of world do we want to build with it? I don’t have all the answers, but I think asking questions is where it starts. I just wanted to put some of my thoughts out there—maybe you’re wondering the same things."
        />

        <Cards
          title="A Quiet Day at the Science Museum"
          category="Science"
          subtitle="Spent a peaceful afternoon getting curious again. Sometimes I forget how much I love learning random things."
          image="/img7.jpg"
          slug="quiet-day-science-museum"
          content="I visited a local science museum on a whim and ended up spending hours there. There’s something really calming about walking through exhibits, pressing buttons, reading facts, and watching little kids get excited about planets and dinosaurs.

I especially loved the space section—gazing at models of satellites and learning about upcoming missions to Mars. It reminded me of how much I used to love space as a kid. I even sat through a planetarium show, just because. It’s funny how we lose that sense of wonder as adults. That day reminded me that learning doesn’t have to be structured or serious—it can be fun and spontaneous. I left feeling lighter, a little more curious, and really glad I went."
        />

        <Cards
          title="Books That Made Me Think"
          category="Books"
          subtitle="Not just good reads—these ones really made me pause, reflect, and see things differently."
          image="/img8.jpg"
          slug="books-that-made-me-think"
          content="Some books entertain, others inform—and then there are those that really shift something in you. I’ve read a few lately that made me question my assumptions or see a topic in a totally new way.

For example, 'Educated' by Tara Westover completely changed how I see formal education and self-growth. 'The Road' by Cormac McCarthy left me haunted in the best way. And 'The Power of Now' helped me slow down and live more intentionally. These books don’t always leave you feeling good, but they stay with you. That’s what I love. I think I’m craving more of that—stories and ideas that leave a mark."
        />

        <Cards
          title="A Weekend in the Mountains"
          category="Travel"
          subtitle="No signal, no rush—just fresh air and long hikes. I didn’t realize how much I needed that reset."
          image="/img9.jpg"
          slug="weekend-in-the-mountains"
          content="I went off the grid for a couple of days—literally. No phone signal, no deadlines, just me and the mountains. It was quiet, peaceful, and exactly what I didn’t know I needed. I hiked, journaled, and made coffee over a campfire.

One night, I just lay under the stars, wrapped in a blanket, listening to the wind. I haven’t felt that kind of stillness in a long time. Being out in nature helped me clear my head, reflect on a few things, and reconnect with myself. I think I’ll be making this a more regular thing."
        />

        <Cards
          title="Tech That’s Actually Helped Me"
          category="Technology"
          subtitle="Not all gadgets are distractions. Here are a few that have genuinely made my days smoother."
          image="/img10.jpg"
          slug="tech-that-helped-me"
          content="There’s a lot of noise when it comes to new tech, but every now and then I come across something that just clicks into my life. A note-taking app that actually keeps me organized, a meditation app I’ve stuck with, or even noise-canceling headphones that help me focus.

I’ve also been loving my Kindle for nighttime reading, and a smartwatch that gently reminds me to move or breathe when I’ve been too still. These little tools have added real value to my day-to-day. It’s not about having the latest thing, but finding tech that supports how I live. "
        />


      </div>
      <Footer />
    </div>
  );
} 
