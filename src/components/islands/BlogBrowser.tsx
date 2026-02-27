import { useState } from 'react'
import type { BlogPost } from '../../data/blog'

interface Props {
  posts: BlogPost[]
  categories: string[]
}

export default function BlogBrowser({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [visibleCount, setVisibleCount] = useState(6)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  const filteredPosts =
    activeCategory === 'All'
      ? posts
      : posts.filter((p) => p.category.title === activeCategory)

  const visiblePosts = filteredPosts.slice(0, visibleCount)

  const searchResults =
    searchQuery === ''
      ? []
      : posts.filter(
          (post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase()),
        )

  return (
    <>
      {/* Search button */}
      <button
        type="button"
        onClick={() => setSearchOpen(true)}
        className="mt-6 inline-flex items-center gap-x-2 rounded-md bg-white/5 px-4 py-2.5 text-sm text-gray-300 outline-1 -outline-offset-1 outline-white/10 hover:bg-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>
        Search articles...
      </button>

      {/* Category filters */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => {
              setActiveCategory(cat)
              setVisibleCount(6)
            }}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
              activeCategory === cat
                ? 'bg-indigo-500 text-white'
                : 'bg-white/5 text-gray-300 outline-1 -outline-offset-1 outline-white/10 hover:bg-white/10'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Dialog */}
      {searchOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-gray-900/50"
            onClick={() => { setSearchOpen(false); setSearchQuery('') }}
          />
          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <div className="mx-auto max-w-xl rounded-xl bg-gray-900 p-2 shadow-2xl outline-1 -outline-offset-1 outline-white/10">
              <input
                autoFocus
                className="w-full rounded-md bg-white/5 px-4 py-2.5 text-white outline-hidden placeholder:text-gray-400 sm:text-sm"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchResults.length > 0 && (
                <ul className="-mb-2 max-h-72 overflow-y-auto py-2 text-sm text-gray-200">
                  {searchResults.map((post) => (
                    <li key={post.id}>
                      <a
                        href={post.href}
                        className="block cursor-pointer rounded-md px-4 py-2 hover:bg-indigo-500 hover:text-white"
                      >
                        {post.title}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {searchQuery !== '' && searchResults.length === 0 && (
                <div className="px-4 py-14 text-center">
                  <p className="text-sm text-gray-400">No articles found matching that search.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <article key={post.id} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                alt=""
                src={post.imageUrl}
                className="aspect-video w-full rounded-2xl bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </div>
            <div className="flex max-w-xl grow flex-col justify-between">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-400">
                  {post.date}
                </time>
                <span className="rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300">
                  {post.category.title}
                </span>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-400">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                <img alt="" src={post.author.imageUrl} className="size-10 rounded-full bg-gray-800" />
                <div className="text-sm/6">
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Load More */}
      {visibleCount < filteredPosts.length && (
        <div className="mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((c) => c + 6)}
            className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          >
            Load more articles
          </button>
        </div>
      )}
    </>
  )
}
