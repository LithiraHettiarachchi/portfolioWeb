"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Post } from "./posts";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.45 } },
};

export default function BlogListClient({ posts }: { posts: Post[] }) {
  return (
    <motion.main className="container mx-auto px-4 py-12" initial="hidden" animate="show" variants={container}>
      <motion.h1 className="text-3xl font-bold mb-6" variants={item}>
        Blog
      </motion.h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <motion.article key={post.slug} className="prose dark:prose-invert" variants={item}>
            <h2 className="text-2xl">
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-sm text-blue-600 hover:underline">
              Read more →
            </Link>
          </motion.article>
        ))}
      </div>
    </motion.main>
  );
}
