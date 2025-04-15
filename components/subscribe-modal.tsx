'use client'

import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { IconX } from '@tabler/icons-react'

export default function SubscribeModal({ show, onClose }: { show: boolean, onClose: () => void }) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [onClose])

  if (!show) return null

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-background max-w-[500px] w-full mx-4 p-6 rounded-xl relative shadow-xl border border-[#74512D]"
        onClick={(e) => e.stopPropagation()} // prevents close on inner click
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-[#74512D] cursor-pointer"
          aria-label="Close"
        >
          <IconX />
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-della font-semibold text-[#74512D] mb-4">Thoughts, delivered to your inbox</h2>
        <p className="text-sm mb-8 font-open text-foreground">Join 10,000+ readers and get our latest posts and updates.</p>
        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-dashed border-[#74512D] rounded-lg px-4 py-2 font-open text-sm focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#74512D] text-white rounded-full px-4 py-2 text-sm font-semibold hover:bg-[#5c3e1f] cursor-pointer"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
