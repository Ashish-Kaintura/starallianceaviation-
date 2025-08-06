import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white font-lato">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img  loading="lazy"
            src="https://i.postimg.cc/hvBpty6H/white-logo.png"
            alt="Logo"
            className="h-28 mb-4"
          />
          <p className="text-sm text-gray-300">
            Star Alliance Aviation Academy is committed to shaping the next
            generation of aviation professionals with passion, integrity, and
            excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="/about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="/programs" className="hover:text-white">
                Our Programs
              </a>
            </li>
            <li>
              <a href="/admissions" className="hover:text-white">
                Admissions
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Training Programs */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Training</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <a href="/programs/cpl" className="hover:text-white">
                Commercial Pilot License (CPL)
              </a>
            </li>
            <li>
              <a href="/programs/atpl" className="hover:text-white">
                ATPL Ground Classes
              </a>
            </li>
            <li>
              <a href="/programs/type-rating" className="hover:text-white">
                Type Rating
              </a>
            </li>
            <li>
              <a href="/programs/foundation" className="hover:text-white">
                Foundation Courses
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="text-sm text-gray-300 space-y-3">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt size={55} className="mt-1 text-red-400" />
              <span>
                Our Address Star Alliance Aviation Pvt Ltd E-551, 2nd, 3rd, and
                4th Floors, Manyavar Showroom Building, Ramphal Chowk, Dwarka
                Sector – 7, New Delhi-110075
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <a href="tel:+911234567890" className="hover:text-white">
                +91 12345 67890
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <a
                href="mailto:info@starallianceaviation.com"
                className="hover:text-white"
              >
                info@starallianceaviation.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter + Social */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Newsletter */}
          <div className="w-full md:w-2/3">
            <h5 className="text-lg font-medium mb-2">
              Subscribe to our Newsletter
            </h5>
            <form className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800"
              />
              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-primary py-4  bg-white">
        © {new Date().getFullYear()} Star Alliance Aviation. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
