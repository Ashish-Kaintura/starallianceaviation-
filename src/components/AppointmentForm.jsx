import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const AppointmentForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        e.target.reset();
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("❌ Failed to send. Please try again.");
      });
  };

  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24 px-4 flex justify-center"
      style={{
        backgroundImage:
          "url('https://drawdown.org/sites/default/files/solutions/airplanes-web.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className=" relative z-10 w-full max-w-6xl sm:justify-start">
        <div className="w-full max-w-md bg-[#111c44] text-white p-8 rounded-xl border-2shadow-lg mr-8">
          <h2 className="text-center text-xl font-semibold mb-6 text-Secondary">
            Make An Appointment
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              className="w-full p-3 rounded-md text-sm text-gray-900 placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              required
              className="w-full p-3 rounded-md text-sm text-gray-900 placeholder-gray-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Mobile Number *"
              required
              className="w-full p-3 rounded-md text-sm text-gray-900 placeholder-gray-500"
            />
            <textarea
              name="comment"
              rows="4"
              placeholder="Comment"
              className="w-full p-3 rounded-md text-sm text-gray-900 placeholder-gray-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-Secondary hover:bg-Lightcolor text-white font-semibold uppercase text-sm py-3 rounded-md transition"
            >
              Submit Now
            </button>
            {status && (
              <div
                className={`text-center text-sm mt-2 ${
                  status.includes("✅") ? "text-green-400" : "text-red-400"
                }`}
              >
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
