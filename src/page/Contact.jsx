import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-6 md:px-16 lg:px-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Contact Star Alliance Aviation Academy
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
          We’re here to answer your questions and guide you towards your dream
          of becoming a pilot.
        </p>
      </div>

      {/* Contact Info & Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 md:px-16 lg:px-24 py-16">
        {/* Contact Information */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-blue-800">Get in Touch</h2>
          <p className="text-gray-700 leading-relaxed">
            Whether you have inquiries about our pilot training programs,
            admissions, or facilities, our team is ready to assist you. Reach
            out through phone, email, or visit us at our campus.
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-700 w-6 h-6" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-700 w-6 h-6" />
              <p className="text-gray-700">info@starallianceaviation.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-700 w-6 h-6" />
              <p className="text-gray-700">
                Star Alliance Aviation Academy, New Delhi, India
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center space-x-2 transition"
            >
              <Send className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Google Map Embed */}
      <div className="w-full h-[400px]">
        <iframe
          title="Star Alliance Aviation Academy Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.50706418344!2d77.0688984!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2b3f40e6e7b%3A0x74c0a7c9e7d5c8f7!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1691320928930!5m2!1sen!2sin"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="rounded-none md:rounded-xl border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;
