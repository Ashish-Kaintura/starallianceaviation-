import React, { useState } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { useEffect } from "react";
export default function Blogs() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");

  const filteredPosts = blogPosts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-48">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Latest Articles
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          className="px-4 py-2 border rounded-lg w-full sm:w-64 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogCard key={post.id} post={post} />)
        ) : (
          <p className="text-gray-500 dark:text-gray-400">No articles found.</p>
        )}
      </div>
    </div>
  );
}
