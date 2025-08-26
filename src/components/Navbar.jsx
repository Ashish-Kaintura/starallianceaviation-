import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaBars,
  FaYoutube,
} from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdowns = {
    pilot: [
      { name: "CPL Ground Classes", path: "/cpl-ground-classes" },
      { name: "ATPL Ground Classes", path: "/atpl-ground-classes" },
      { name: "ATPL Oral Viva", path: "/atpl-oral-viva" },
      {
        name: "RTR (Radio Telephone Restricted)",
        path: "/rtr-radio-telephony-restricted",
      },
      { name: "Cadet Pilot Program", path: "/cadet-pilot-program" },
      {
        name: "Airlines Preparation Course",
        path: "/airlines-preparation-course",
      },
      { name: "FLC & Recency Flying", path: "/flc-recency-flying" },
      { name: "TR Including Endorsement", path: "/tr-including-endorsement" },
      { name: "Class-1,2 Medical", path: "/class-12-medical" },
    ],
    cabin: [
      { name: "Job Oriented CC Training", path: "/job-oriented-cc-training" },
    ],
    services: [
      { name: "NSOP Management", path: "/nsop-management" },
      { name: "DGCA/MOCA Liaison", path: "/dgca-moca-liaison" },
      { name: "eGCA Account Management", path: "egca-account-management" },
      { name: "JOB Placement Assistance", path: "/job-placement-assistance" },
      { name: "Legal Assistance/Guidance", path: "/legal-assistance-guidance" },
      { name: "Strategic Counselling", path: "/strategic-counselling" },
      {
        name: "Counselling (For Reappearance)",
        path: "/counselling-for-reappearance",
      },
    ],
  };

  const renderDropdown = (key) => (
    <div className="absolute top-full left-0 bg-white rounded shadow-md py-2 w-64 z-50">
      {dropdowns[key].map((item) => (
        <NavLink key={item.name} to={item.path}>
          <div className="px-4 py-2 hover:bg-indigo-100 text-sm text-gray-700 transition">
            {item.name}
          </div>
        </NavLink>
      ))}
    </div>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full font-sans">
      {/* Top Bar */}
      {!scrolling && (
        <div className="text-white text-sm w-full md:flex hidden justify-center py-2 bg-white/20">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6 flex-wrap gap-2">
            <span>Book Online • You can request appointment 24 hours</span>
            <div className="flex items-center gap-4">
              <span>Phone: +92 89595558</span>
              <div className="flex gap-3 text-white text-base">
                <Link
                  to="https://www.facebook.com/starallianceaviationacademy/"
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
                  to="https://www.linkedin.com/company/starallianceaviationacademy/"
                  className="w-8 h-8 bg-blue-700 rounded-full flex items-center p-0 justify-center"
                >
                  <FaLinkedinIn />
                </Link>
                <Link
                  to="https://www.instagram.com/starallianceaviation/?hl=en"
                  className="w-8 h-8 bg-pink-700 rounded-full flex items-center p-0 justify-center"
                >
                  <FaInstagram />
                </Link>
                <Link
                  to="https://in.pinterest.com/starallianceaviationacademy/"
                  className="w-8 h-8 bg-red-700 rounded-full flex items-center p-0 justify-center"
                >
                  <FaPinterestP />
                </Link>
                <Link
                  to="https://www.youtube.com/@starallianceaviationacademy"
                  className="w-8 h-8 bg-red-700 rounded-full flex items-center p-0 justify-center"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex ${
          scrolling ? "w-full" : "w-[1180px]"
        } rounded-lg justify-center bg-gradient-to-r from-primary via-[#013066]   to-[#00163d]  text-white shadow transition-all duration-300 uppercase`}
      >
        <nav className="flex items-center justify-between w-full max-w-[1320px] px-4 py-2 relative">
          <Link to="/">
            <img
              loading="lazy"
              src="https://i.postimg.cc/L4ytzH5N/white-logo.png"
              alt="Star Alliance Aviation Academy"
              className="h-[4rem]"
            />
          </Link>
          <ul className="flex gap-6 text-sm font-medium relative">
            <NavLink to="/about-us">
              <li className="hover:text-Secondary">About Us</li>
            </NavLink>

            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("pilot")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/pilot-training">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
                  {" "}
                  Pilot Training <ChevronDown size={16} />
                </div>{" "}
              </NavLink>
              {activeDropdown === "pilot" && renderDropdown("pilot")}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("cabin")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/cabin-crew-training">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
                  Cabin Crew Training <ChevronDown size={16} />
                </div>
              </NavLink>
              {activeDropdown === "cabin" && renderDropdown("cabin")}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink to="/services-expertise">
                <div className="flex items-center gap-1 cursor-pointer hover:text-Secondary">
                  Services & Expertise <ChevronDown size={16} />
                </div>
              </NavLink>
              {activeDropdown === "services" && renderDropdown("services")}
            </li>

            <NavLink to="/blog">
              <li className="hover:text-Secondary">Blog</li>
            </NavLink>
          </ul>
          <button className="bg-Secondary text-white hover:text-white text-sm uppercase font-semibold px-4 py-2 rounded hover:bg-Lightcolor transition">
            <Link to="/contact-us"> Contact Us </Link>
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full md:hidden bg-primary text-white  shadow px-4 py-2">
        {/* Logo & Menu Button */}
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <img
              loading="lazy"
              src="https://i.postimg.cc/hvBpty6H/white-logo.png"
              // src="https://i.postimg.cc/qq7R0CjT/PNG-1.png"

              alt="Star Alliance Aviation Academy"
              className="h-14"
            />
          </NavLink>
          <FaBars
            size={26}
            className="cursor-pointer text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>

        {/* Menu Items */}
        {menuOpen && (
          <div className="mt-4 animate-slideDown ">
            <ul className="flex flex-col gap-3 text-base font-medium">
              {/* About */}
              <NavLink to="/">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  Home
                </li>
              </NavLink>
              {/* About */}
              <NavLink to="/about-us">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  About Us
                </li>
              </NavLink>

              {/* Pilot Training */}
              <li>
                <button className="flex w-full justify-between items-center px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  <NavLink to="/pilot-training">
                    <span>Pilot Training</span>{" "}
                  </NavLink>
                  {openDropdown === "pilot" ? (
                    <FaChevronUp
                      onClick={() => toggleDropdown("pilot")}
                      size={14}
                    />
                  ) : (
                    <FaChevronDown
                      onClick={() => toggleDropdown("pilot")}
                      size={14}
                    />
                  )}
                </button>
                {openDropdown === "pilot" && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-indigo-200 pl-3">
                    {dropdowns.pilot.map((item) => (
                      <NavLink key={item.name} to={item.path}>
                        <li className="px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-700">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>

              {/* Cabin Crew */}
              <li>
                <button className="flex w-full justify-between items-center px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  <NavLink to="/cabin-crew-training">
                    {" "}
                    <span>Cabin Crew Training</span>{" "}
                  </NavLink>
                  {openDropdown === "cabin" ? (
                    <FaChevronUp
                      onClick={() => toggleDropdown("cabin")}
                      size={14}
                    />
                  ) : (
                    <FaChevronDown
                      onClick={() => toggleDropdown("cabin")}
                      size={14}
                    />
                  )}
                </button>
                {openDropdown === "cabin" && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-indigo-200 pl-3">
                    {dropdowns.cabin.map((item) => (
                      <NavLink key={item.name} to={item.path}>
                        <li className="px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-700">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>

              {/* Services */}
              <li>
                <button className="flex w-full justify-between items-center px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  <NavLink to="/services-expertise">
                    {" "}
                    <span>Services & Expertise</span>{" "}
                  </NavLink>
                  {openDropdown === "services" ? (
                    <FaChevronUp
                      onClick={() => toggleDropdown("services")}
                      size={14}
                    />
                  ) : (
                    <FaChevronDown
                      onClick={() => toggleDropdown("services")}
                      size={14}
                    />
                  )}
                </button>
                {openDropdown === "services" && (
                  <ul className="ml-4 mt-2 space-y-2 border-l-2 border-indigo-200 pl-3">
                    {dropdowns.services.map((item) => (
                      <NavLink key={item.name} to={item.path}>
                        <li className="px-2 py-1 rounded hover:bg-indigo-50 hover:text-indigo-700">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                )}
              </li>

              {/* Contact */}
              <NavLink to="/contact-us">
                <li className="px-3 py-2 rounded hover:bg-gray-100 hover:text-primary">
                  Contact Us
                </li>
              </NavLink>
            </ul>

            {/* CTA Button */}
            <button className="mt-6 w-full bg-white text-primary font-semibold px-4 py-3 rounded-lg shadow hover:bg-gray-200 transition">
              Make Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
