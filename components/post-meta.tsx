'use client';

import {
  IconBrandLinkedin,
  IconBrandX,
  IconCopy,
  IconHeart,
  IconMessageCircle,
} from '@tabler/icons-react';
import { useState } from 'react';

const randomDates = [
  'Apr 13, 2025',
  'Mar 28, 2025',
  'Feb 10, 2025',
  'Jan 15, 2025',
  'Dec 5, 2024',
  'Nov 21, 2024',
  'Oct 7, 2024',
];

function getRandomDate() {
  return randomDates[Math.floor(Math.random() * randomDates.length)];
}


export default function PostMeta({ date }: { date: string }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const randomDate = getRandomDate();

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  const handleCommentClick = () => {
    const commentsEl = document.getElementById('comments');
    if (commentsEl) {
      commentsEl.scrollIntoView({ behavior: 'smooth' });
      document.dispatchEvent(new CustomEvent('focusCommentInput'));
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground mb-6 gap-4 border-y border-dashed py-4">
      {/* Left: Date */}
      <span className="text-foreground font-medium font-open">
        {randomDate}
      </span>


      {/* Right: Share + Like + Comment */}
      <div className="flex items-center gap-4">
        {/* Share */}
        <div className="flex items-center gap-2 border-r-1 border-dashed pr-4">
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Open X"
            className="cursor-pointer"
          >
            <IconBrandX size={20} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Open LinkedIn"
            className="cursor-pointer"
          >
            <IconBrandLinkedin size={20} />
          </a>
          <button onClick={handleCopyLink} title="Copy link" className="cursor-pointer">
            <IconCopy size={20} />
          </button>
          {copied && <span className="text-xs ml-1 text-green-600">Copied!</span>}
        </div>

        {/* Like */}
        <button
          onClick={() => setLiked(!liked)}
          className={`transition-colors ${liked ? 'text-red-500' : 'text-foreground'} cursor-pointer`}
          title="Like this post"
        >
          <IconHeart size={20} />
        </button>

        {/* Comments */}
        <button
          onClick={handleCommentClick}
          className="text-foreground cursor-pointer"
          title="Jump to comments"
        >
          <IconMessageCircle size={20} />
        </button>
      </div>
    </div>
  );
}
