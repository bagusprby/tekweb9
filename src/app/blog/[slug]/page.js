import { posts } from "../../../data/posts";
import Link from "next/link";

export default async function BlogDetail({ params, searchParams }) {
  const { slug } = await params; // params may be a Promise in app-router
  const search = searchParams ? await searchParams : {};
  // helper to normalize slugs/titles for robust matching
  const normalize = (s = "") =>
    String(s)
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const slugStr = Array.isArray(slug) ? slug[0] : slug;
  const decodedSlug = decodeURIComponent(slugStr || "");
  const target = normalize(decodedSlug || slugStr || "");

  // debug info (visible when ?debug=1)
  const debugOn = search && search.debug === "1";

  // try exact match on slug first
  let post = posts.find((p) => p.slug === decodedSlug);

  // fallback: direct slug, case-insensitive slug, normalized slug, or numeric id
  if (!post) {
    post =
      posts.find((p) => p.slug === slugStr) ||
      posts.find((p) => p.slug.toLowerCase() === (slugStr || "").toLowerCase()) ||
      posts.find((p) => normalize(p.slug) === target) ||
      (Number.isFinite(Number(slugStr)) && posts.find((p) => p.id === Number(slugStr)));
  }

  // as a final fallback, try matching by normalized title or containing words
  if (!post) {
    post = posts.find((p) => normalize(p.title) === target) || posts.find((p) => normalize(p.title).includes(target));
  }

  // If still not found, show helpful list instead of 404
  if (!post) {
    return (
      <div className="max-w-2xl mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Artikel tidak ditemukan</h1>
        <p className="mb-4">Kami tidak dapat menemukan artikel dengan slug <strong>{slugStr}</strong>. Berikut daftar artikel yang tersedia:</p>

        {debugOn && (
          <pre className="bg-gray-100 dark:bg-gray-800 p-3 rounded mb-4 text-sm">{JSON.stringify({ slugStr, decodedSlug, target, available: posts.map(p => p.slug) }, null, 2)}</pre>
        )}

        <ul className="list-disc ml-6">
          {posts.map((p) => (
            <li key={p.id} className="mb-2">
              <Link href={`/blog/${encodeURIComponent(p.slug)}`} className="text-blue-600 hover:underline">
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/blog" className="inline-block mt-6 text-blue-600 hover:underline">← Kembali ke Daftar</Link>
      </div>
    );
  }

  return (
    <article className="max-w-2xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      <div className="text-sm text-gray-600 mb-6">
        {post.author} • {new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
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
