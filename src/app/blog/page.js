import Link from "next/link";
import { posts } from "../../data/posts"; // Import data
export default function BlogList() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">Daftar Artikel</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">{post.title}</h2>
            <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
              {post.author} • {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <p
              className="text-gray-700 dark:text-gray-300 truncate mt-3"
            >
              {post.content}
            </p>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:text-blue-700 dark:text-blue-400 mt-2 inline-block hover:underline"
            >
              Baca Selengkapnya &rarr;
            </Link>
          </div>
        ))} 
      </div>
    </div>
  );
}
