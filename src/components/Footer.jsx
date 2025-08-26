import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
  FaPinterestP,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster } from "react-hot-toast";
import { toast } from "react-hot-toast";
const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kmzk5e6", // Replace with your EmailJS service ID
        "template_rqr2zfd", // Replace with your EmailJS template ID
        form.current,
        "UvBtke7LSWuoHG9LL" // Replace with your EmailJS public key
      )
      .then(
        () => {
          // alert("✅ ");
          toast.success("Subscribed successfully!");
          form.current.reset();
        },
        (error) => {
          toast.error("❌ Error:", error);
          // console.error("❌ Error:", error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <footer className="bg-primary text-white font-lato">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img
            loading="lazy"
            src="https://i.postimg.cc/L4ytzH5N/white-logo.png"
            alt="Logo"
            className="h-24 mb-4"
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
              <NavLink to="/" className="hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className="hover:text-white">
                About US
              </NavLink>
            </li>
            <li>
              <NavLink to="/services-expertise" className="hover:text-white">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="hover:text-white">
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="hover:text-white">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink to="/terms-and-condition" className="hover:text-white">
                Terms And Conditions
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Training Programs */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Training</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <NavLink to="/pilot-training" className="hover:text-white">
                Pilot Training
              </NavLink>
            </li>
            <li>
              <NavLink to="/cabin-crew-training" className="hover:text-white">
                Cabin Crew Training
              </NavLink>
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
                E-551, 2nd, 3rd, and 4th Floor, Ramphal Chowk, Dwarka Sector –
                7, Manyavar Showroom Building New Delhi-110075
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-400" />
              <NavLink to="tel:+911234567890" className="hover:text-white">
                092895 95558
              </NavLink>
              <NavLink to="tel:+9101145517009" className="hover:text-white">
                011-45517009
              </NavLink>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <NavLink
                to="mailto:info@starallianceaviation.com"
                className="hover:text-white"
              >
                info@starallianceaviation.com
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Newsletter + Social */}
      <div className="px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Newsletter */}
          <div className="w-full md:w-2/3">
            <h5 className="text-lg font-medium mb-2">
              Subscribe to our Newsletter
            </h5>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col sm:flex-row items-center gap-3"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Enter your email"
                required
                className="w-full sm:w-auto px-4 py-2 rounded-md text-gray-800"
              />
              <button
                type="submit"
                className="bg-Secondary hover:bg-Lightcolor text-white px-5 py-2 rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 text-xl">
            <Link
              to="https://www.facebook.com/starallianceaviation/"
              className="w-8 h-8 bg-blue-600 rounded-full flex items-center p-0 justify-center"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://x.com/staralliance_in"
              className="w-8 h-8 bg-blue-400 rounded-full flex items-center p-0 justify-center"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://www.linkedin.com/company/starallianceaviation/"
              className="w-8 h-8 bg-blue-700 rounded-full flex items-center p-0 justify-center"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to="https://www.instagram.com/starallianceaviation/"
              className="w-8 h-8 bg-pink-700 rounded-full flex items-center p-0 justify-center"
            >
              <FaInstagram />
            </Link>
            <Link
              to="https://in.pinterest.com/starallianceaviation/"
              className="w-8 h-8 bg-red-700 rounded-full flex items-center p-0 justify-center"
            >
              <FaPinterestP />
            </Link>
            <Link
              to="https://www.youtube.com/@StarAllianceAviation"
              className="w-8 h-8 bg-red-700 rounded-full flex items-center p-0 justify-center"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-primary py-4  bg-white">
        © {new Date().getFullYear()} Star Alliance Aviation Academy. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
