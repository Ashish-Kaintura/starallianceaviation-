import { useParams } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function PostDetail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const { slug } = useParams();
  const post = blogPosts.find((s) => s.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-20 text-gray-600 dark:text-gray-300">
        <h2 className="text-2xl font-semibold">🚫 Post Not Found</h2>
        <p className="mt-2">
          The blog post you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 sm:pt-48">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      {/* Post Image */}
      <div className="relative mb-8">
        <span className="absolute bottom-4 left-4 bg-indigo-600 text-white text-sm px-3 py-1 rounded-full shadow">
          {post.category}
        </span>
      </div>

      {/* Title & Meta */}
      <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-black">
        {post.title}
      </h1>
      <div className="mt-3 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
        <span>✍ {post.author}</span>
        <span>•</span>
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>

      {/* Content */}
      <article
        className="mt-8 prose prose-lg dark:prose-invert max-w-none leading-relaxed"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Divider */}
      <hr className="my-10 border-gray-300 dark:border-gray-700" />

      {/* Share Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h3 className="text-lg font-semibold dark:text-white">
          📢 Share this article
        </h3>
        <div className="flex gap-3">
          <FacebookShareButton url={window.location.href}>
            <div className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white transition">
              <FaFacebook size={20} />
            </div>
          </FacebookShareButton>
          <TwitterShareButton url={window.location.href}>
            <div className="p-3 bg-sky-500 hover:bg-sky-600 rounded-full text-white transition">
              <FaTwitter size={20} />
            </div>
          </TwitterShareButton>
          <LinkedinShareButton url={window.location.href}>
            <div className="p-3 bg-blue-800 hover:bg-blue-900 rounded-full text-white transition">
              <FaLinkedin size={20} />
            </div>
          </LinkedinShareButton>
        </div>
      </div>
    </div>
  );
}
