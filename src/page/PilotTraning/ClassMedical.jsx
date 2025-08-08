import React from "react";
import { Link } from "react-router-dom";

export default function ClassMedical() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/Medical-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative h-[550px] flex items-center justify-start"
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/20 backdrop-brightness-75" />

        {/* Text Content */}
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading animate-fade-in-down">
              FLC & Recency Flying
            </h1>
            <h2 className="mt-2 text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation
              </Link>{" "}
              FLC & Recency Flying
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 bg-white text-[#2c3756] font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="flex justify-center px-4 py-16 border-b-2 bg-white">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full gap-12 items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-[#2c3756] font-heading mb-6">
              Why Choose Our Class-1,2 Medical Program?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Star Alliance Aviation Academy</strong>, we are
              dedicated to providing unparalleled training solutions tailored to
              meet the unique needs of pilots worldwide. Our academy offers
              comprehensive programs designed to ensure pilots maintain
              proficiency and confidence in the cockpit.
              <br /> <br />
              We take pride in our strategic partnerships with renowned Indian
              flying schools. Through these collaborations, we provide valuable
              practical experience and global exposure to empower students to
              become skilled and proficient aviators.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/class.jpg"
              alt="Medical Exam"
              className="rounded-xl w-[90%] max-w-md object-cover shadow-xl rounded-tr-[100px] rounded-bl-[100px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
