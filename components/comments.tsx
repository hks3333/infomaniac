'use client'

import { useState, useEffect, useRef } from 'react'
import { IconCornerUpLeft } from '@tabler/icons-react'

interface Comment {
  id: number
  author: string
  content: string
  date: string
  replies: Comment[]
}

export default function Comments() {
  // generic data
  const genericComments = [
    'Nice read!',
    'You have great thoughts.',
    'Interesting perspective.',
    'Loved this post!',
    'Thought-provoking!',
    'This really made me think.',
    'I can see this from a whole new angle now.',
    'Your insights are truly inspiring.',
    'I hadn’t considered that before.',
    'This post has given me a lot to ponder.',
    'Your passion for the subject really shines through.',
    'I appreciate the depth of your analysis.',
    'This has sparked some interesting ideas.',
    'Your writing has a way of making complex topics accessible.',
    'I’m definitely going to explore this topic further.',
    'Your experiences resonate deeply.',
    'This post is a breath of fresh air.',
    'I feel more informed after reading this.',
    'Your storytelling is captivating.',
    'This post has left a lasting impression on me.'
  ];
  
  const authors = ['Venu', 'Bobby', 'Marly', 'Dona Joseph', 'Adrian', 'Rohan Varma', 'Jadhav']

  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [replyTo, setReplyTo] = useState<number | null>(null)
  const [replyText, setReplyText] = useState('')

  const commentInputRef = useRef<HTMLTextAreaElement>(null)

  // pick 1–3 random on mount
  useEffect(() => {
    const shuffled = [...genericComments].sort(() => Math.random() - 0.5)
    const count = Math.floor(Math.random() * 3) + 1
    const picked = shuffled.slice(0, count).map((text, i) => ({
      id: Date.now() + i,
      author: authors[Math.floor(Math.random() * authors.length)],
      content: text,
      date: new Date(
        Date.now() - Math.floor(Math.random() * 7 * 24 * 60 * 60 * 1000)
      ).toLocaleDateString(),
      replies: [] as Comment[],
    }))
    setComments(picked)
  }, [])

  // listen for focus event
  useEffect(() => {
    const handler = () => {
      commentInputRef.current?.focus()
    }
    document.addEventListener('focusCommentInput', handler)
    return () => document.removeEventListener('focusCommentInput', handler)
  }, [])

  // post new top‑level comment
  const postComment = () => {
    if (!newComment.trim()) return
    setComments(prev => [
      ...prev,
      {
        id: Date.now(),
        author: 'You',
        content: newComment.trim(),
        date: new Date().toLocaleDateString(),
        replies: [],
      },
    ])
    setNewComment('')
  }

  // post a reply
  const postReply = (parentId: number) => {
    if (!replyText.trim()) return
    setComments(prev =>
      prev.map(c =>
        c.id === parentId
          ? {
              ...c,
              replies: [
                ...c.replies,
                {
                  id: Date.now(),
                  author: 'You',
                  content: replyText.trim(),
                  date: new Date().toLocaleDateString(),
                  replies: [],
                },
              ],
            }
          : c
      )
    )
    setReplyTo(null)
    setReplyText('')
  }

  return (
    <div id="comments" className="w-full max-w-[700px] mx-auto space-y-8 py-12">
      <h3 className="text-3xl font-della font-bold text-[#74512D]">Comments</h3>

      {/* New comment form */}
      <div className="py-4 mb-12">
        <h4 className="font-medium font-open mb-2">Add a comment</h4>
        <textarea
          ref={commentInputRef}
          value={newComment}
          onChange={e => setNewComment(e.target.value)}
          className="w-full border border-dashed rounded p-2 mb-2"
          rows={3}
          placeholder="Write your comment..."
        />
        <button
          onClick={postComment}
          className="px-4 py-2 bg-[#74512D] text-white rounded-full"
        >
          Post Comment
        </button>
      </div>



      {comments.map(comment => (
        <div key={comment.id} className="border-dashed border-t pt-2">
          <p className="font-medium font-open">
            {comment.author}{' '}
            <span className="text-sm text-gray-500">({comment.date})</span>
          </p>
          <p className="mt-2 font-open">{comment.content}</p>

          <button
            onClick={() => setReplyTo(comment.id)}
            className="mt-2 text-sm flex items-center text-[#74512D] hover:underline cursor-pointer"
          >
            <IconCornerUpLeft size={16} className="mr-1" />
            Reply
          </button>

          {/* Reply form */}
          {replyTo === comment.id && (
            <div className="mt-2 ml-6 space-y-2">
              <textarea
                value={replyText}
                onChange={e => setReplyText(e.target.value)}
                className="w-full border rounded p-2"
                rows={2}
                placeholder="Your reply..."
              />
              <button
                onClick={() => postReply(comment.id)}
                className="px-4 py-1 bg-[#74512D] text-white rounded"
              >
                Post Reply
              </button>
            </div>
          )}

          {/* Render replies */}
          {comment.replies.map(reply => (
            <div key={reply.id} className="mt-4 ml-6 border-l pl-4">
              <p className="font-medium">
                {reply.author}{' '}
                <span className="text-sm text-gray-500">({reply.date})</span>
              </p>
              <p className="mt-1">{reply.content}</p>
            </div>
          ))}
        </div>
      ))}

      
    </div>
  )
}
