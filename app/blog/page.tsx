import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <section className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-bold mb-6">Blog</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-12">
          This page is under construction. Check back soon for articles, tutorials, and updates.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-primary text-black font-semibold transition hover:bg-primary/90"
          >
            Back to Home
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
