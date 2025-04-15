"use client"

import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"
import { useRouter } from 'next/navigation';
import SubscribeModal from "./subscribe-modal"
import DonateModal from '@/components/donate-modal';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showSubscribe, setShowSubscribe] = useState(false)
  const router = useRouter();
  const [showDonate, setShowDonate] = useState(false)


  return (
    <>
    <header className="h-16 bg-background w-full flex justify-between items-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 border-b border-dashed border-[#74512D] fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-semibold font-della text-[#74512D] cursor-pointer select-none" onClick={() => router.push('/')}>
        Infomaniac
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6">
        <button onClick={() => router.push('/categories')} className="text-sm font-open font-semibold cursor-pointer text-[#74512D] hover:text-black transition-colors duration-300">
          Categories
        </button>
        <button onClick={() => setShowDonate(true)} className="text-sm font-open font-semibold cursor-pointer text-[#74512D] hover:text-black transition-colors duration-200">Donate</button>
        <button onClick={() => router.push('/about')} className="text-sm font-open font-semibold cursor-pointer text-[#74512D] hover:text-black transition-colors duration-200">About me</button>
        <button onClick={() => setShowSubscribe(true)}
        className="text-sm font-open font-semibold cursor-pointer bg-[#74512D] text-background px-4 py-2 rounded-full shadow-none hover:shadow-[0_0_32px_#FEBA17] transition-shadow duration-300">
          Subscribe
        </button>
      </div>
    
      {/* Mobile Nav Button */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setShowSubscribe(true)} 
        className="text-sm font-open font-semibold bg-[#74512D] text-white px-3 py-2 mr-2 rounded-full">
          Subscribe
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#74512D] text-2xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Always in DOM for smooth transition) */}
      <div
        className={`absolute top-16 left-0 w-full bg-background shadow-md border-b border-dashed border-[#74512D] flex flex-col items-end px-5 py-4 space-y-4 md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
        }`}
      >
        <button onClick={() => router.push('/categories')} className="text-md font-open font-semibold text-[#74512D]">Categories</button>
        <button onClick={() => setShowDonate(true)} className="text-md font-open font-semibold text-[#74512D]">Donate</button>
        <button onClick={() => router.push('/about')} className="text-md font-open font-semibold text-[#74512D]">About me</button>
      </div>
    </header>
    <SubscribeModal show={showSubscribe} onClose={() => setShowSubscribe(false)} />
    <DonateModal show={showDonate} onClose={() => setShowDonate(false)} />
    </>
  )
}
