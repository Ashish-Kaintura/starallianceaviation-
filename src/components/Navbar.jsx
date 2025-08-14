import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaBars,
  FaYoutube,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

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
      {
        name: "Counselling (For Reappearance)",
        path: "/counselling-for-reappearance",
      },
      { name: "Job Oriented CC Training", path: "/job-oriented-cc-training" },
    ],
    services: [
      { name: "NSOP Management", path: "/nsop-management" },
      { name: "DGCA/MOCA Liaison", path: "/dgca-moca-liaison" },
      { name: "eGCA Account Management", path: "/egca-account-managemen" },
      { name: "JOB Placement Assistance", path: "/job-placement-assistance" },
      { name: "Legal Assistance/Guidance", path: "/legal-assistance-guidance" },
      { name: "Strategic Counselling", path: "/strategic-counsellingt" },
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
        <div className="text-white text-sm w-full sm:flex hidden justify-center py-2 bg-white/20">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6 flex-wrap gap-2">
            <span>Book Online • You can request appointment 24 hours</span>
            <div className="flex items-center gap-4">
              <span>Phone: +92 89595558</span>
              <div className="flex gap-3 text-white text-base">
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
                  to=" https://www.youtube.com/@StarAllianceAviation"
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
          scrolling ? "w-full" : "w-[1300px]"
        } rounded-lg justify-center bg-gradient-to-r from-primary via-[#013066]   to-[#00163d]  text-white shadow transition-all duration-300 uppercase`}
      >
        <nav className="flex items-center justify-between w-full max-w-[1320px] px-4 py-2 relative">
          <Link to="/">
            <img
              loading="lazy"
              src="https://i.postimg.cc/hvBpty6H/white-logo.png"
              alt="Star Alliance Aviation"
              className="h-[5rem]"
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
          <button className="bg-white text-primary text-sm uppercase font-semibold px-4 py-2 rounded hover:bg-indigo-800 transition">
            Contact Us
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="w-full md:hidden bg-white shadow  px-4 py-2">
        <div className="flex items-center justify-between">
          <img
            loading="lazy"
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
            <ul className="flex flex-col gap-3 text-sm font-medium">
              <NavLink to="/about-us">
                <li>About Us</li>
              </NavLink>

              {/* Pilot Dropdown */}
              <li>
                <details className="group">
                  <summary className="flex justify-between cursor-pointer">
                    Pilot Training
                  </summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    {dropdowns.pilot.map((item) => (
                      <NavLink key={item.name} to={item.path}>
                        <li className="hover:text-Secondaryindigo-600">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Cabin Crew Dropdown */}
              <li>
                <details className="group">
                  <summary className="flex justify-between cursor-pointer">
                    Cabin Crew Training
                  </summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    {dropdowns.cabin.map((item) => (
                      <NavLink key={item.name} to={item.path}>
                        <li className="hover:text-Secondaryindigo-600">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </details>
              </li>

              {/* Services Dropdown */}
              <li>
                <details className="group">
                  <summary className="flex justify-between cursor-pointer">
                    Services & Expertise
                  </summary>
                  <ul className="pl-4 mt-2 space-y-1">
                    {dropdowns.services.map((item) => (
                      <NavLink key={item.name} to={item.path}>
                        <li className="hover:text-Secondaryindigo-600">
                          {item.name}
                        </li>
                      </NavLink>
                    ))}
                  </ul>
                </details>
              </li>

              <NavLink to="/contact">
                <li>Contact Us</li>
              </NavLink>
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
