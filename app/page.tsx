import Image from "next/image";
import Header from "@/components/header"
import LandView from "@/components/land-view"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <div className="w-full h-[1000px] mt-16 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 pt-2 sm:pt-3 md:pt-4 lg:pt-6 xl:pt-8 ">
        <LandView />
      </div>
      <Footer />
    </div>
  );
} 
