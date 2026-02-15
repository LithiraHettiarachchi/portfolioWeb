export type Post = {
  slug: string;
  title: string;
  date: string; // YYYY-MM-DD
  excerpt: string;
  content: string; // HTML string for simplicity
};

export const posts: Post[] = [
  {
    slug: "my-first-post",
    title: "My First Blog Post",
    date: "2026-02-13",
    excerpt: "An introduction to my thoughts on AI, engineering, and building things.",
    content: `<p>Welcome to my blog! This is the first post where I share thoughts on AI, machine learning, and software engineering. I'll use this space to document projects, tutorials, and lessons learned.</p>
<p>Stay tuned for more deep dives and practical guides.</p>`,
  },
  {
    slug: "building-with-nextjs",
    title: "Building with Next.js: Tips & Tricks",
    date: "2026-01-20",
    excerpt: "Practical tips I learned while building performant sites with Next.js.",
    content: `<p>Next.js provides a great developer experience and performance out of the box. In this post I cover useful patterns for the App Router, static generation, and incremental adoption.</p>`,
  },
];

export function getAllPosts() {
  // return a copy sorted by date (newest first)
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}
