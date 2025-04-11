"use client"

import { useState } from "react"
import { HiMenu, HiX } from "react-icons/hi"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="h-16 bg-background w-full flex justify-between items-center px-4 md:px-8 border-b border-dashed border-[#27548A] fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="text-3xl font-semibold font-della text-[#27548A]">
        Infomaniac
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-6">
        <button className="text-sm font-open font-semibold text-[#27548A]">Categories</button>
        <button className="text-sm font-open font-semibold text-[#27548A]">Donate</button>
        <button className="text-sm font-open font-semibold text-[#27548A]">About us</button>
        <button className="text-sm font-open font-semibold text-[#27548A]">Log in</button>
        <button className="text-sm font-open font-semibold bg-[#27548A] text-white px-4 py-2">Subscribe</button>
      </div>

      {/* Mobile Nav Button */}
      <div className="md:hidden flex items-center">
        <button className="text-sm font-open font-semibold bg-[#27548A] text-white px-3 py-2 mr-2">
          Subscribe
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#27548A] text-2xl"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu (Always in DOM for smooth transition) */}
      <div
        className={`absolute top-16 left-0 w-full bg-background shadow-md border-t border-[#27548A] flex flex-col items-end px-4 py-4 space-y-4 md:hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'opacity-100 translate-y-0 max-h-96' : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
        }`}
      >
        <button className="text-md font-open font-semibold text-[#27548A]">Categories</button>
        <button className="text-md font-open font-semibold text-[#27548A]">Donate</button>
        <button className="text-md font-open font-semibold text-[#27548A]">About us</button>
        <button className="text-md font-open font-semibold text-[#27548A]">Log in</button>
      </div>
    </header>
  )
}
