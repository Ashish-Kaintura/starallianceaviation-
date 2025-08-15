import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from "lucide-react";
import { TiSocialLinkedin } from "react-icons/ti";
import { FaPinterestP } from "react-icons/fa6";
const SocialMedia = () => {
  return (
    <section className="fixed z-50 bottom-52 md:bottom-54 md:left-4">
      <div className="action-wrap">
        <button className="action" type="button">
          <Facebook className="action-icon" />
          <span className="action-content" data-content="Facebook" />
        </button>
        <button className="action" type="button">
          <Instagram className="action-icon" />
          <span className="action-content" data-content="Instagram" />
        </button>
        <button className="action" type="button">
          <Twitter className="action-icon" />
          <span className="action-content" data-content="X" />
        </button>
        <button className="action" type="button">
          <TiSocialLinkedin className="action-icon" />
          <span className="action-content" data-content="LinkedIn" />
        </button>
        <button className="action" type="button">
          <FaPinterestP className="action-icon" />
          <span className="action-content" data-content="YouTube" />
        </button>
        <button className="action" type="button">
          <Youtube className="action-icon" />
          <span className="action-content" data-content="YouTube" />
        </button>
        <div className="backdrop" />
      </div>
    </section>
  );
};

export default SocialMedia;
