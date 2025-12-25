import Link from "next/link";
import { posts } from "../data/posts";

export default function Home() {
  // Show latest posts first
  const latest = [...posts].reverse().slice(0, 3);

  return (
    <div className="min-h-screen font-sans">
      <main className="max-w-4xl mx-auto py-16 px-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">News</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Latest updates and articles</p>
        </header>

        <section className="grid gap-6">
          {latest.map((post) => (
            <article key={post.id} className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">{post.title}</h2>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                {post.author} • {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                {post.content.length > 150 ? `${post.content.slice(0, 150)}...` : post.content}
              </p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 mt-3 inline-block">
                Read more &rarr;
              </Link>
            </article>
          ))} 
        </section>

        <div className="mt-8">
          <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-300 hover:underline">
            See all articles &rarr;
          </Link>
        </div>
      </main>
    </div>
  );
}
