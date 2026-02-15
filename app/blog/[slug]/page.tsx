import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../posts";
import BlogPostClient from "../BlogPostClient";
import { findBlogBySlug, getAuthors, getAllBlogs } from "../../../lib/dashify";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  try {
    // @ts-ignore-next-line allow-async
    const blogs = await getAllBlogs(200);
    return blogs.map((b: any) => ({ slug: b.slug }));
  } catch (err) {
    return getAllPosts().map((p) => ({ slug: p.slug }));
  }
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (post) return { title: post.title, description: post.excerpt };
  try {
    const blog = await findBlogBySlug(slug);
    if (blog) return { title: blog.title, description: (blog.content || "").slice(0, 160) };
  } catch (err) {
    // ignore
  }
  return { title: "Blog Post", description: "Blog post" };
}

const entry = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  // Try server-side fetch from Dashify, fallback to local posts
  try {
    const blog = await findBlogBySlug(slug);
    if (blog) {
      // optional: fetch authors to attach author details
      const authors = await getAuthors();
      const author = authors.find((a: any) => a.name === blog.author) ?? null;
      const post = {
        slug: blog.slug,
        title: blog.title,
        date: blog.createdAt ? blog.createdAt.slice(0, 10) : "",
        excerpt: (blog.content || "").replace(/<[^>]+>/g, "").slice(0, 160),
        content: blog.content || "",
        author,
      } as any;
      return <BlogPostClient post={post} />;
    }
  } catch (err) {
    // ignore and fallback
  }

  const post = getPostBySlug(slug);
  if (!post) return notFound();
  return <BlogPostClient post={post} />;
}
