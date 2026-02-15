import { getAllPosts } from "./posts";
import BlogListClient from "./BlogListClient";
import { getAllBlogs } from "../../lib/dashify";

export const metadata = {
  title: "Blog | Lithira Hettiarachchi",
  description: "Collection of blog posts by Lithira Hettiarachchi",
};

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

export default async function BlogIndex() {
  // Try fetching from Dashify; fall back to local posts
  try {
    // fetch server-side
    const blogs = await getAllBlogs(100);
    const mapped = blogs.map((b: any) => ({
      slug: b.slug,
      title: b.title,
      date: b.createdAt ? b.createdAt.slice(0, 10) : "",
      excerpt: (b.content || "").replace(/<[^>]+>/g, "").slice(0, 160),
      content: b.content || "",
    }));
    return <BlogListClient posts={mapped} />;
  } catch (err) {
    const posts = getAllPosts();
    return <BlogListClient posts={posts} />;
  }
}
