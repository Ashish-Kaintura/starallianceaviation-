import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
export default function MakeAppointment() {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_gf71s76",
        "template_lu8oytv",
        e.target,
        "QDc0P3ycKPetLpC3W"
      )
      .then(() => {
        setStatus("✅ Message sent successfully!");
        setLoading(false);
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("❌ Failed to send. Please try again.");
        setLoading(false);
      });
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/CPL-Commercial-Pilot-License.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl font-bold leading-tight font-heading">
              Make Apppointment
            </h1>
            <h2 className="mt-1 text-white text-sm font-heading">
              <Link to="/">Star Alliance Aviation /</Link>Make Apppointment
            </h2>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center min-h-screen  px-4 py-12">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-lg border border-gray-200 ">
          <h2 className="text-3xl font-heading text-center text-gray-900 mb-2 tracking-tight">
            Book Your Appointment
          </h2>
          <p className="text-sans text-center text-gray-500 mb-6">
            Fill in your details and we’ll get in touch soon.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                className="block text-sans text-gray-700 mb-1"
                htmlFor="name"
              >
                Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50 text-gray-900 text-sans outline-none transition"
              />
            </div>
            <div>
              <label
                className="block text-sans text-gray-700 mb-1"
                htmlFor="email"
              >
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50 text-gray-900 text-sans outline-none transition"
              />
            </div>
            <div>
              <label
                className="block text-sans text-gray-700 mb-1"
                htmlFor="phone"
              >
                Mobile Number<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                required
                placeholder="Your Mobile Number"
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50 text-gray-900 text-sans outline-none transition"
              />
            </div>
            <div>
              <label
                className="block text-sans text-gray-700 mb-1"
                htmlFor="comment"
              >
                Comment
              </label>
              <textarea
                name="comment"
                id="comment"
                rows="3"
                placeholder="Type your message..."
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-gray-50 text-gray-900 text-sans outline-none transition"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-primary rounded-md text-white font-heading text-lg tracking-wide hover:bg-blue-700 transition-all disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit"}
            </button>
            {status && (
              <p
                className={`text-center text-sans text-sm mt-2 ${
                  status.startsWith("✅") ? "text-green-600" : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
