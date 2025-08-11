import React from "react";
import { Link } from "react-router-dom";

const trainingPrograms = [
  {
    name: "CPL Ground Classes",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/cpl.jpg",
    slug: "cpl-ground-classes",
  },
  {
    name: "ATPL Ground Classes",
    image:
      "http://starallianceaviation.com/wp-content/uploads/2024/03/Atpl.jpg",
    slug: "atpl-ground-classes",
  },
  {
    name: "ATPL Oral/Viva",
    image:
      "http://starallianceaviation.com/wp-content/uploads/2024/03/atpl2.jpg",
    slug: "atpl-oral-viva",
  },
  {
    name: "RTR (Radio Telephony Restricted)",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/Rtr.jpg",
    slug: "rtr-radio-telephony",
  },
  {
    name: "Cadet Pilot Program",
    image:
      "http://starallianceaviation.com/wp-content/uploads/2024/03/Cadet-Pilot.jpg",
    slug: "cadet-pilot-program",
  },
  {
    name: "Airlines Preparation Course",
    image:
      "http://starallianceaviation.com/wp-content/uploads/2024/03/Airlines2.jpg",
    slug: "airlines-preparation",
  },
  {
    name: "FLC & Recency Flying",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/flc.jpg",
    slug: "flc-recency-flying",
  },
  {
    name: "TR Including Endorsement",
    image:
      "http://starallianceaviation.com/wp-content/uploads/2024/03/services04.jpg",
    slug: "tr-including-endorsement",
  },
  {
    name: "Class-1,2 Medical",
    image:
      "http://starallianceaviation.com/wp-content/uploads/2024/03/class.jpg",
    slug: "class-1-2-medical",
  },
];
import Img1 from "../img/coolbackgrounds-particles-stellar.png";
const PilotTraining = () => {
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

        <div className="relative z-10 w-full max-w-5xl mx-auto text-left">
          <div className="text-white px-5">
            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-3">
              Pilot Training
            </h1>
            <h2 className="text-sm font-heading text-gray-300">
              <Link to="/" className="hover:underline text-white">
                Alliance Aviation
              </Link>{" "}
              / Pilot Training
            </h2>
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
            {trainingPrograms.map((program, idx) => (
              <Link
                key={idx}
                to={`/${program.slug}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 bg-white"
              >
                <div className="w-full h-56 overflow-hidden">
                  <img  loading="lazy"
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

export default PilotTraining;
