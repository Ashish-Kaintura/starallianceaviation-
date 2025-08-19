import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/services.json";
import Img1 from "../img/coolbackgrounds-particles-stellar.png";

const ServicesAndExpertise = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(data); // data is already an array
  }, []);
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/Pilot-training.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Services & Expertise
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation /
              </Link>{" "}
              Services & Expertise
            </h2>
            <Link
              to="/make-appointment"
              className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-[#2c3756] font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <div
        className="bg-black py-20 px-6 md:px-12"
        style={{
          backgroundImage: `url(${Img1})`,
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Explore Our Training Programs
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            From beginners to advanced, our comprehensive pilot training courses
            prepare you for excellence in aviation.
          </p>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {services.map((program, idx) => (
              <Link
                key={idx}
                to={program.slug}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 bg-white"
              >
                <div className="w-full h-56 overflow-hidden">
                  <img
                    loading="lazy"
                    src={program.image}
                    alt={program.name}
                    className="w-full h-full  group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {program.name}
                  </h3>
                  <span className="text-sm mt-2 text-blue-500 underline inline-block">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesAndExpertise;
