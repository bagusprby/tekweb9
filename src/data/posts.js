export const posts = [
  {
    id: 1,
    slug: "belajar-nextjs",
    title: "Belajar Next.js Dasar",
    author: "Bedul",
    date: "2024-06-15",
    content: `Next.js adalah framework berbasis React yang dikembangkan oleh Vercel. Framework ini banyak digunakan untuk membangun aplikasi web modern karena menyediakan berbagai fitur penting secara bawaan, seperti routing, server-side rendering, dan optimasi performa.

Bagi pemula, Next.js sangat cocok karena struktur proyeknya sederhana dan mudah dipahami. Developer cukup membuat folder dan file di dalam direktori "app" atau "pages", maka rute halaman akan otomatis terbentuk tanpa konfigurasi tambahan.

Selain itu, Next.js mendukung pengembangan aplikasi yang cepat dan scalable. Dengan mempelajari Next.js dasar, pengembang dapat membangun website yang SEO-friendly, cepat diakses, dan siap digunakan untuk kebutuhan produksi.`,
  },
  {
    id: 2,
    slug: "routing-mudah",
    title: "Routing Sangat Mudah",
    author: "Haidar",
    date: "2024-06-16",
    content: `Salah satu keunggulan utama Next.js adalah sistem routing yang sangat mudah digunakan. Developer tidak perlu lagi menggunakan library tambahan seperti React Router untuk mengatur navigasi halaman.

Pada Next.js, routing dibuat berdasarkan struktur folder. Sebagai contoh, jika kita membuat folder "blog" dan file "page.jsx" di dalamnya, maka halaman tersebut dapat diakses melalui URL "/blog". Konsep ini membuat proses pengembangan menjadi lebih cepat dan terorganisir.

Dengan sistem routing berbasis file ini, pengembang dapat fokus pada pembuatan konten dan logika aplikasi tanpa harus pusing dengan konfigurasi rute yang rumit.`,
  },
  {
    id: 3,
    slug: "server-components",
    title: "Apa itu Server Components?",
    author: "Rafi",
    date: "2024-06-17",
    content: `Server Components adalah fitur modern di React dan Next.js yang memungkinkan komponen dirender langsung di server. Dengan pendekatan ini, ukuran JavaScript yang dikirim ke browser menjadi lebih kecil sehingga performa aplikasi meningkat.

Server Components sangat berguna untuk mengambil data langsung dari database atau API tanpa harus mengirim logika tersebut ke sisi klien. Hal ini juga meningkatkan keamanan karena kode sensitif tidak terekspos ke browser.

Next.js memanfaatkan Server Components untuk menciptakan pengalaman pengguna yang lebih cepat dan efisien. Fitur ini menjadi salah satu alasan mengapa Next.js semakin populer dalam pengembangan web modern.`,
  },
  {
    id: 4,
    slug: "optimisasi-kinerja",
    title: "Optimisasi Kinerja Aplikasi",
    author: "Nina",
    date: "2025-12-01",
    content: `Beberapa teknik sederhana untuk meningkatkan performa aplikasi meliputi optimasi gambar, pemanfaatan cache, dan pengurangan ukuran bundle. Memantau metrik seperti TTFB dan Largest Contentful Paint membantu menemukan bagian yang perlu diperbaiki.

Dengan menerapkan praktik terbaik ini, aplikasi terasa lebih cepat dan pengguna mendapatkan pengalaman yang lebih baik.`,
  },
  {
    id: 5,
    slug: "menggunakan-tailwind",
    title: "Menggunakan Tailwind Secara Efektif",
    author: "Budi",
    date: "2025-12-05",
    content: `Tailwind CSS memungkinkan developer membangun UI lebih cepat dengan utility-first classes. Memanfaatkan komponen yang dapat dipakai ulang dan konfigurasi tema membantu menjaga konsistensi desain.

Pelajari plugin resmi dan teknik purging untuk menjaga ukuran CSS tetap kecil di production.`,
  },
  {
    id: 6,
    slug: "tips-deploy",
    title: "Tips Deploy ke Production",
    author: "Lina",
    date: "2025-12-15",
    content: `Sebelum deploy, pastikan semua test lulus, variabel lingkungan disiapkan, dan konfigurasi build sudah optimal. Otomatisasi dengan CI/CD membantu mengurangi kesalahan manual dan mempercepat proses release.

Jangan lupa untuk memantau aplikasi setelah deploy untuk mendeteksi masalah produksi lebih cepat.`,
  },
];
