import React, { useEffect, useState } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa6";
import { Plus, X } from "lucide-react"; // toggle icons
import { Link } from "react-router-dom";

const SocialMedia = () => {
  const [open, setOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolling = window.scrollY > 90;
      const isBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      setScrolling(isScrolling);

      if (isBottom) {
        setOpen(false); // Close when reach bottom
      }
    };

    window.addEventListener("scroll", handleScroll);

    // close menu initially
    setOpen(false);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="fixed z-40 bottom-28 left-4">
      <div className="relative flex flex-col items-center space-y-2">
        {/* Toggle Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-4 rounded-full bg-gradient-to-r from-primary to-blue-500 text-Lightcolor shadow-lg hover:scale-110 transition transform"
        >
          {open ? <X size={24} /> : <Plus size={24} />}
        </button>

        {/* Social Icons (show/hide with animation) */}
        <div
          className={`flex flex-col items-center transition-all duration-500   rounded-full bg-primary  ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10 pointer-events-none"
          }`}
        >
          <button className="action" type="button">
            <Facebook className="action-icon" />
            <Link to="https://www.facebook.com/starallianceaviation/">
              {" "}
              <span className="action-content" data-content="Facebook" />
            </Link>
          </button>
          <button className="action" type="button">
            <Instagram className="action-icon" />
            <Link to="https://www.instagram.com/starallianceaviation/">
              {" "}
              <span className="action-content" data-content="Instagram" />
            </Link>
          </button>
          <button className="action" type="button">
            <Twitter className="action-icon" />
            <Link to="https://x.com/staralliance_in">
              {" "}
              <span className="action-content" data-content="X" />
            </Link>
          </button>
          <button className="action" type="button">
            <TiSocialLinkedin className="action-icon" />
            <Link to="https://www.linkedin.com/company/starallianceaviation/">
              {" "}
              <span className="action-content" data-content="LinkedIn" />
            </Link>
          </button>
          <button className="action" type="button">
            <FaPinterestP className="action-icon" />
            <Link to="https://in.pinterest.com/starallianceaviation/">
              {" "}
              <span className="action-content" data-content="Pinterest" />
            </Link>
          </button>
          <button className="action" type="button">
            <Youtube className="action-icon" />
            <Link to="https://www.youtube.com/@StarAllianceAviation">
              {" "}
              <span className="action-content" data-content="YouTube" />
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
