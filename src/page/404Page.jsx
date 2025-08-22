import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white via-blue-100 to-pink-100 px-6">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-blue-600 drop-shadow-md">
          404
        </h1>
        <h2 className="text-3xl font-bold mt-4 text-gray-800">
          Page Not Found
        </h2>
        <p className="text-gray-500 mt-2 text-lg">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-6 inline-block bg-gradient-to-r from-Lightcolor to-Secondary text-white px-6 py-3 rounded-xl text-sm font-semibold shadow hover:opacity-90 transition"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
