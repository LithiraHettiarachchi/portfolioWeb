const BASE_URL = "https://www.api.dashify.aurbyn.com/api/v1";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function apiFetch(path: string, params?: Record<string, any>) {
  const url = new URL(BASE_URL + path);
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }

  const apiKey = process.env.DASHIFY_API_KEY || process.env.NEXT_PUBLIC_DASHIFY_API_KEY;
  if (!apiKey) throw new Error("DASHIFY_API_KEY environment variable is not set.");

  const res = await fetch(url.toString(), {
    headers: { "x-api-key": apiKey },
    // keep server-side caching short by default; pages can override
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Dashify API error ${res.status}: ${text}`);
  }

  const payload = await res.json();
  return payload.data;
}

type DashifyBlog = {
  _id: string;
  title: string;
  author: string; // author name
  content: string; // HTML
  image?: string;
  tags?: string[];
  createdAt?: string;
};

export async function getBlogs(params?: { tags?: string; page?: number; limit?: number }) {
  return (await apiFetch("/blogs", params)) as DashifyBlog[];
}

export async function getAllBlogs(limit = 100) {
  // fetch a reasonably large page of blogs and return them
  const data = (await apiFetch("/blogs", { page: 1, limit })) as DashifyBlog[];
  return data.map((b) => ({
    ...b,
    slug: slugify(b.title),
  }));
}

export async function getBlogById(id: string) {
  return (await apiFetch(`/blogs/${id}`)) as DashifyBlog | null;
}

export async function getAuthors() {
  return (await apiFetch("/authors")) as Array<{ name: string; email?: string; photoURL?: string; bio?: string }>;
}

export async function findBlogBySlug(slug: string) {
  // fetch blogs (limited) and find the one matching slugified title
  const blogs = await getAllBlogs(200);
  return blogs.find((b) => b.slug === slug) ?? null;
}
