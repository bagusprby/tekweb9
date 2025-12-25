import { posts } from "../../../data/posts";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function BlogDetail({ params: { slug } }) {
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-sm text-gray-600 mb-6">
        {post.author} •{" "}
        {new Date(post.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>

      <div className="prose lg:prose-xl">
        {post.content.split("\n\n").map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <Link href="/blog" className="text-blue-600 mt-6 inline-block">
        ← Kembali ke Daftar
      </Link>
    </article>
  );
}
