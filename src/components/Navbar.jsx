import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaPinterestP,
  FaBars,
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
      { name: "CPL Ground Classes", path: "/pilot/cpl-ground" },
      { name: "ATPL Ground Classes", path: "/pilot/atpl-ground" },
      { name: "ATPL Oral Viva", path: "/pilot/atpl-oral" },
      { name: "RTR (Radio Telephone Restricted)", path: "/pilot/rtr" },
    ],
    cabin: [
      { name: "Cabin Crew Course", path: "/cabin/crew-course" },
      { name: "Grooming & Interview", path: "/cabin/grooming" },
    ],
    services: [
      { name: "DGCA Documentation", path: "/services/dgca" },
      { name: "Simulator Training", path: "/services/simulator" },
      { name: "Placement Assistance", path: "/services/placement" },
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
        <div className="text-white text-sm w-full flex justify-center py-2 bg-white/10">
          <div className="w-full max-w-[1320px] flex justify-between items-center px-6 flex-wrap gap-2">
            <span>Book Online • You can request appointment 24 hours</span>
            <div className="flex items-center gap-4">
              <span>Phone: +92 89595558</span>
              <div className="flex gap-3 text-white text-base">
                <a href="#">
                  <FaFacebookF />
                </a>
                <a href="#">
                  <FaTwitter />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="#">
                  <FaInstagram />
                </a>
                <a href="#">
                  <FaPinterestP />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Navbar */}
      <div
        className={`hidden md:flex ${
          scrolling ? "w-full" : "w-[1300px]"
        } rounded-lg justify-center bg-white shadow transition-all duration-300`}
      >
        <nav className="flex items-center justify-between w-full max-w-[1320px] p-4 relative">
          <Link to="/">
            <img
              src="http://starallianceaviation.com/wp-content/uploads/2025/07/PNG-1-e1751434504963.png"
              alt="Star Alliance Aviation"
              className="h-16"
            />
          </Link>
          <ul className="flex gap-6 text-sm font-medium relative">
            <NavLink to="/about-us">
              <li className="hover:text-indigo-700">About Us</li>
            </NavLink>

            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("pilot")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-700">
                Pilot Training <ChevronDown size={16} />
              </div>
              {activeDropdown === "pilot" && renderDropdown("pilot")}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("cabin")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-700">
                Cabin Crew Training <ChevronDown size={16} />
              </div>
              {activeDropdown === "cabin" && renderDropdown("cabin")}
            </li>

            <li
              className="relative group"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="flex items-center gap-1 cursor-pointer hover:text-indigo-700">
                Services & Expertise <ChevronDown size={16} />
              </div>
              {activeDropdown === "services" && renderDropdown("services")}
            </li>

            <NavLink to="/contact">
              <li className="hover:text-indigo-700">Contact Us</li>
            </NavLink>
          </ul>
          <button className="bg-indigo-900 text-white px-4 py-2 rounded hover:bg-indigo-800 transition">
            Make Appointment
          </button>
        </nav>
      </div>

      {/* Mobile Navbar */}
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
                        <li className="hover:text-indigo-600">{item.name}</li>
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
                        <li className="hover:text-indigo-600">{item.name}</li>
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
                        <li className="hover:text-indigo-600">{item.name}</li>
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
