import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaBars,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full font-sans">
      {/* Top Bar - hide on scroll */}
      {!scrolling && (
        <div className="text-white text-sm w-full flex justify-center py-2 ">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6 flex-wrap gap-2">
            <span>Book Online • You can request appointment 24 hours</span>
            <div className="flex items-center gap-4">
              <span>Phone: +92 89595558</span>
              <div className="flex gap-3 text-white text-base">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaPinterestP /></a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navigation - width change on scroll */}
      <div
        className={`hidden md:flex ${
          scrolling ? "w-full" : "w-[1300px]"
        } rounded-lg justify-center bg-white shadow  transition-all duration-300`}
      >
        <nav className="flex items-center justify-between w-full max-w-[1320px] p-4">
          <img
            src="http://starallianceaviation.com/wp-content/uploads/2025/07/PNG-1-e1751434504963.png"
            alt="Star Alliance Aviation"
            className="h-16"
          />
          <ul className="flex gap-6 text-sm font-medium">
            <li>About Us</li>
            <li>Pilot Training</li>
            <li>Cabin Crew Training</li>
            <li>Services & Expertise</li>
            <li>Contact Us</li>
          </ul>
          <button className="bg-indigo-900 text-white px-4 py-2 rounded">
            Make Appointment
          </button>
        </nav>
      </div>

      {/* Mobile Navigation (unchanged) */}
      <div className="w-full md:hidden bg-white shadow mt-2 px-4 py-2">
        <div className="flex items-center justify-between">
          <img
            src="http://starallianceaviation.com/wp-content/uploads/2025/07/PNG-1-e1751434504963.png"
            alt="Star Alliance Aviation"
            className="h-14"
          />
          <FaBars
            size={24}
            className="cursor-pointer text-indigo-900"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {menuOpen && (
          <div className="mt-4">
            <ul className="flex flex-col gap-4 text-sm font-medium">
              <li>About Us</li>
              <li>Pilot Training</li>
              <li>Cabin Crew Training</li>
              <li>Services & Expertise</li>
              <li>Contact Us</li>
            </ul>
            <button className="mt-4 w-full bg-indigo-900 text-white px-4 py-2 rounded">
              Make Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
