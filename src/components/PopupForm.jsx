import React, { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { X } from "lucide-react";
import emailjs from "@emailjs/browser";

const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Auto open after 3s
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "YOUR_SERVICE_ID", // Replace with EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with EmailJS template ID
        formData,
        "YOUR_PUBLIC_KEY" // Replace with EmailJS public key
      )
      .then(
        () => {
          toast.success("Thank you! We’ll contact you shortly.", {
            duration: 3000,
            position: "top-right",
          });
          setShow(false);
          setFormData({ name: "", email: "", phone: "" }); // Reset form
        },
        (error) => {
          console.error(error.text);
          toast.error("Failed to send. Please try again later.");
        }
      );
  };

  return (
    <div>
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-50">
          <div
            className="bg-white rounded-2xl shadow-2xl w-96 p-6 relative animate-fadeIn border-t-8 border-Secondary bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://i.postimg.cc/Zn1dZVQg/Pop-up-background.jpg')",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-primary hover:text-primary transition bg-Secondary rounded-full p-1"
            >
              <X size={22} />
            </button>

            {/* Header */}
            <h2 className="text-2xl font-bold text-primary mb-2 text-center">
              Book Your Slot
            </h2>
            <p className="text-gray-500 text-sm mb-6 text-center">
              Enter your details and our team will assist you shortly.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-S econdary"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-S econdary"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-xl p-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-S econdary"
                required
              />

              {/* Buttons */}
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-primary text-white font-semibold shadow hover:bg-yellow-500 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Toast */}
      <Toaster />
    </div>
  );
};

export default PopupForm;
