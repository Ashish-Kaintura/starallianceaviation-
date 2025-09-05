import React, { useState, useEffect } from "react";
import { blogPosts } from "../data/blogData";
import BlogCard from "../components/BlogCard";
import { Helmet } from "react-helmet";

export default function Blogs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest"); // default newest

  // Filter
  let filteredPosts = blogPosts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort
  filteredPosts = filteredPosts.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
  });

  const categories = ["All", ...new Set(blogPosts.map((p) => p.category))];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 pt-48">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <h1 className="text-3xl font-bold mb-6 text-gar-700">Latest Articles</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          className="px-4 py-2 border rounded-lg w-full sm:w-64 bg-white border-gray-700 text-gray-700"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          className="px-4 py-2 border rounded-lg bg-white border-gray-700 text-gray-700"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        {/* Sort Dropdown */}
        <select
          className="px-4 py-2 border rounded-lg bg-white border-gray-700 text-gray-700"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Blog Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
        ) : (
          <p className="text-gray-500 ">No articles found.</p>
        )}
      </div>
    </div>
  );
}
