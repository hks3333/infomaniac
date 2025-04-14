'use client';

import { useState } from 'react';

export default function Subscription() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate submission (for demo purposes)
    setTimeout(() => {
      setSubmitted(true);
      setEmail('');
    }, 500);
  };

  return (
    <div className="w-full bg-[#74512D] border border-dashed border-[#ffffff] rounded-xl p-6 mt-10 text-center font-open">
      <h2 className="text-2xl md:text-4xl font-della font-bold text-background mb-4">
        ✨ Thoughts worth reading
      </h2>
      <p className="text-md md:text-lg text-muted-foreground mb-4 text-background font-open">
        Join 10,000+ readers who get fresh perspectives delivered to their inbox.
      </p>

      {submitted ? (
        <p className="text-background font-semibold mt-4">Thanks for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="w-full bg-background sm:w-72 px-4 py-2 border border-foreground border-dashed rounded-full outline-none focus:ring-2 focus:ring-[#74512D] transition-all"
          />
          <button
            type="submit"
            className="bg-[#FEBA17] text-foreground px-6 py-2 rounded-full cursor-pointer font-open"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
