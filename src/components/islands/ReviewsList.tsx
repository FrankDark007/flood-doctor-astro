import { useState } from 'react'
import { reviews, totalReviews } from '../../data/reviews'

type SortMode = 'relevant' | 'newest' | 'highest'
const PAGE_SIZE = 3

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={`size-4 shrink-0 ${filled ? 'text-yellow-400' : 'text-gray-600'}`}>
      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
    </svg>
  )
}

export default function ReviewsList() {
  const [sortMode, setSortMode] = useState<SortMode>('relevant')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const sortedReviews = [...reviews].sort((a, b) => {
    if (sortMode === 'newest') return a.id < b.id ? 1 : -1
    if (sortMode === 'highest') return b.rating - a.rating
    return 0
  })

  const visibleReviews = sortedReviews.slice(0, visibleCount)
  const hasMore = visibleCount < sortedReviews.length

  return (
    <div>
      {/* Sort filters */}
      <div className="mb-6 flex flex-wrap gap-2">
        {(['relevant', 'newest', 'highest'] as SortMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => {
              setSortMode(mode)
              setVisibleCount(PAGE_SIZE)
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              sortMode === mode
                ? 'bg-indigo-500 text-white'
                : 'bg-white/5 text-gray-300 dark:text-gray-300 outline-1 -outline-offset-1 outline-white/10 hover:bg-white/10'
            }`}
          >
            {mode === 'relevant' ? 'Most Relevant' : mode === 'newest' ? 'Newest' : 'Highest Rating'}
          </button>
        ))}
      </div>

      {/* Reviews list */}
      <div className="space-y-6">
        {visibleReviews.map((review) => (
          <article
            key={review.id}
            className="rounded-2xl bg-white/5 p-6 outline-1 -outline-offset-1 outline-white/10"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/10 text-lg font-semibold text-indigo-400">
                {review.author.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-white dark:text-white">{review.author}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
                <div className="mt-1 flex items-center">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} filled={review.rating > i} />
                  ))}
                </div>
              </div>
            </div>
            <p className="mt-4 whitespace-pre-line text-sm/6 text-gray-300">{review.text}</p>
          </article>
        ))}
      </div>

      {/* Load More */}
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="rounded-md bg-white/5 px-6 py-2.5 text-sm font-semibold text-gray-300 outline-1 -outline-offset-1 outline-white/10 hover:bg-white/10 transition"
          >
            Load more reviews
          </button>
        </div>
      )}

      <p className="mt-6 text-center text-sm text-gray-500">
        Showing {visibleReviews.length} of {totalReviews} reviews
      </p>
    </div>
  )
}
