import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="bg-white  rounded-xl overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
          {post.category}
        </span>
        <h2 className="text-lg font-bold mt-2 text-gray-800 font-heading line-clamp-2">
          {post.title}
        </h2>
        <p className="text-sm text-gray-500  font-sans">
          {post.readTime} • {post.date}
        </p>
        <p className="text-gray-700  mt-2 line-clamp-5">{post.excerpt}</p>
        <Link
          to={`/blog/${post.slug}`}
          className="text-Secondary mt-3 inline-block"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
