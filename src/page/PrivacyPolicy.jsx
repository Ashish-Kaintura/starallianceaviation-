import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="mx-auto px-4 py-10 text-gray-800">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 pt-32">
        <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-10 relative overflow-hidden">
          {/* Background accent */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

          {/* Title */}
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-center text-Secondary mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Privacy Policy – Star Alliance Aviation Academy
          </motion.h1>

          {/* Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed relative z-10">
            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Introduction
              </h2>
              <p className="font-sans">
                Welcome to Star Alliance Aviation Academy ("we," "us," "our").
                Your privacy and trust are important to us. This Privacy Policy
                explains how we collect, use, disclose, and protect information
                when you interact with our website, programs, and services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Data We Collect
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Personal Information:</strong> Name, email, phone
                  number, address, educational details, and other registration
                  data voluntarily provided.
                </li>
                <li>
                  <strong>Usage Data:</strong> Automatically collected details
                  like IP address, browser type, device, pages visited,
                  timestamps, and activity metrics via cookies and similar
                  technologies.
                </li>
                <li>
                  <strong>Third-Party Data:</strong> Information from partners
                  or analytics providers (e.g., Google Analytics).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Use of Data
              </h2>
              <p className="font-sans">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Provide training and related services</li>
                <li>Manage and improve our offerings</li>
                <li>Communicate important updates, schedules, and resources</li>
                <li>Understand user behavior (analytics)</li>
                <li>Send promotional content only with your consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Cookies & Tracking Technologies
              </h2>
              <p className="font-sans">
                We employ cookies (session and persistent) plus similar tools
                to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Authenticate and maintain sessions</li>
                <li>Record your preferences</li>
                <li>Analyze website usage for enhancement purposes</li>
              </ul>
              <p className="mt-2">
                You can disable cookies in your browser—though this may limit
                site functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Data Sharing & Disclosure
              </h2>
              <p className="font-sans">We may share your data with:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Trusted affiliates and service providers supporting our
                  operations
                </li>
                <li>Law enforcement or regulators when required by law</li>
                <li>
                  Successors in case of merger, sale, or business restructuring
                </li>
              </ul>
              <p className="mt-2">We never sell your personal data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Data Security
              </h2>
              <p className="font-sans">
                We implement encryption, secure servers, and confidential access
                policies to safeguard your information. However, no method is
                entirely fail-proof online.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Data Retention
              </h2>
              <p className="font-sans">
                We retain your information as long as needed to fulfill purposes
                laid out in this policy or as required by law. Usage data may be
                retained longer for security or analysis purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Your Rights & Choices
              </h2>
              <p className="font-sans">You may:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access, update, or correct your information</li>
                <li>Request data deletion or restrict processing</li>
                <li>
                  Withdraw consent for communications or promotional materials
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Third-Party Links
              </h2>
              <p className="font-sans">
                Our site may link to external websites whose privacy practices
                we do not control. Please review their policies separately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Changes to This Policy
              </h2>
              <p className="font-sans">
                We may update this policy periodically. Changes will be posted
                with a revised "Effective Date." Continued use of our services
                implies acceptance of those changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-primary mb-2 font-heading ">
                Contact Us
              </h2>
              <p className="font-sans">
                For any privacy-related inquiries, you can reach us at <br />
                <strong>Email:</strong> info@starallianceaviation.com <br />
                <strong>Address:</strong> E-551, 2nd, 3rd & 4th Floors, Manyavar
                Showroom Building, Ramphal Chowk, Dwarka Sector-7, New Delhi –
                110075 <br />
                starallianceaviation.com
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
