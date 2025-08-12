import React from "react";
import { Link } from "react-router-dom"; // or 'next/link' if you're using Next.js
import Video1 from "../video/Airplan.mp4";
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

const PilotTraining = () => {
  return (
    <>
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/Pilot-training.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[550px] relative "
      >
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 w-[1300px] mt-8">
          <div className=" text-white p-5 max-w-lg ">
            <h1 className="text-4xl font-bold leading-tight font-heading">
              Pilot Training
            </h1>
            <h2 className="mt-1  text-white text-sm font-heading">
              <Link to="/"> Alliance Aviation /</Link> Pilot Training
            </h2>
          </div>
          {/* <img src="" alt="Cabin Crew" className="w-full max-w-md mt-8 lg:mt-0" /> */}
        </div>
      </section>
      <div className="relative w-full h-full overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={Video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 px-4 py-24 md:px-12 text-white">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Pilot Training
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto">
              We are committed to being a good corporate citizen and making a
              positive impact on the communities in which we operate.
            </p>

            {/* Cards */}
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
              {trainingPrograms.map((program, idx) => (
                <Link
                  key={idx}
                  to={`/training/${program.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-xl hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={program.image}
                    alt={program.name}
                    className="w-full h-64 object-fill  bg-center opacity-90 group-hover:opacity-100 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex flex-col justify-end">
                    <h3 className="text-xl font-semibold text-white">
                      {program.name}
                    </h3>
                    <span className="text-sm mt-2 text-blue-400 underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PilotTraining;
