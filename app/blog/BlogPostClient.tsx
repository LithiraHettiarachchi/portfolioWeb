"use client";

import { motion } from "framer-motion";
import type { Post } from "./posts";

const entry = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function BlogPostClient({ post }: { post: Post }) {
  return (
    <motion.main className="container mx-auto px-4 py-12" initial="hidden" animate="show">
      <motion.article className="prose dark:prose-invert" variants={entry} initial="hidden" animate="show">
        <h1>{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </motion.article>
    </motion.main>
  );
}
