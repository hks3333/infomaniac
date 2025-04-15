'use client';

import Link from 'next/link';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

export default function Footer() {
  return (
    <footer className="bg-[#74512D] border-x border-t border-dashed border-white mt-12 rounded-t-4xl">
      <div className="container mx-auto px-4 py-10 text-center flex flex-col gap-6 items-center justify-center">
        {/* Inspirational Quote */}
        <blockquote className="text-xl font-della text-background max-w-2xl">
          “Curiosity is the spark behind every great idea. Never stop exploring.”
        </blockquote>

        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 font-open text-sm text-background justify-center">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/categories" className="hover:underline">Categories</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/subscribe" className="hover:underline">Subscribe</Link>
        </div>

        {/* Socials */}
        <div className="flex gap-6 justify-center text-background text-base items-center">
          <a
            href="https://github.com/hks3333"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            <IconBrandGithub size={18} />
            GitHub
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            <IconBrandX size={18} />
            X
          </a>
          <a
            href="https://linkedin.com/in/harikris177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center gap-1"
          >
            <IconBrandLinkedin size={18} />
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-background font-open mt-4">
          © {new Date().getFullYear()} Harikrishnan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
