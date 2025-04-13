'use client';

import { IconBrandLinkedin, IconBrandX, IconCopy, IconHeart, IconMessageCircle } from '@tabler/icons-react';
import { useState } from 'react';

export default function PostMeta({ date }: { date: string }) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div className="flex flex-wrap items-center justify-between text-sm text-muted-foreground mb-6 gap-4 border-y py-4">
      {/* Left: Date */}
      <span className="text-foreground font-medium">{new Date(date).toLocaleDateString()}</span>

      {/* Right: Share + Like + Comment */}
      <div className="flex items-center gap-4">
        {/* Share */}
        <div className="flex items-center gap-2">
          <a href={`https://x.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" title="Share on X">
            <IconBrandX size={20} />
          </a>
          <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noopener noreferrer" title="Share on LinkedIn">
            <IconBrandLinkedin size={20} />
          </a>
          <button onClick={handleCopyLink} title="Copy link">
            <IconCopy size={20} />
          </button>
          {copied && <span className="text-xs ml-1 text-green-600">Copied!</span>}
        </div>

        {/* Like */}
        <button onClick={() => setLiked(!liked)} className={`transition-colors ${liked ? 'text-red-500' : 'text-foreground'}`} title="Like this post">
          <IconHeart size={20} />
        </button>

        {/* Comments */}
        <button className="text-foreground" title="View comments (coming soon)">
          <IconMessageCircle size={20} />
        </button>
      </div>
    </div>
  );
}
