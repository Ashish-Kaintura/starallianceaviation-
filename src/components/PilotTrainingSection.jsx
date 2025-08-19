import React from "react";
import { Link } from "react-router-dom";

const trainingData = [
  {
    title: "CPL Ground Classes",
    image:
      "https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/img/Homeimg/CPL%20CLASSES%20IMAGE.jpg",
    desc: "Comprehensive Commercial Pilot License (CPL) training with expert faculty and updated curriculum.",
    link: "/courses/cpl-ground-class",
  },
  {
    title: "ATPL Ground Classes",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/Homeimg/ATPL%20CLASSES.jpg",
    desc: "Prepare for the Airline Transport Pilot License with advanced theory sessions and mock exams.",
    link: "/courses/atpl-ground-class",
  },
  {
    title: "ATPL Oral Viva",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%20Oral%20%2C%20Viva.jpg",
    desc: "Master the final stage of your pilot exam journey with one-on-one oral viva prep.",
    link: "/courses/atpl-oral-viva",
  },
  {
    title: "RTR (Radio Telephone Restricted)",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/Homeimg/RTR%20(Radio%20Telephone%20Restricted).jpg",
    desc: "Get RTR certified for aviation communication with detailed lessons and mock interviews.",
    link: "/courses/rtr-radio-telephone",
  },
];

const PilotTrainingSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24 px-4"
      style={{
        backgroundImage:
          "url('https://www.aerotime.aero/images/Biman-Bangladesh-Airlines-Boeing-787-landing-at-London-Heathrow-Airport-LHR-800x500.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center text-white">
        {/* <h4 className="uppercase text-sm tracking-wider text-white mb-2">
          _We are committed to_
        </h4> */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
          Pilot Training
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-200 mb-12 font-sans">
          We will always try to be the best corporate citizen we can be and to
          be a positive force in the communities in which we operate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-blue-900 mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{item.desc}</p>
                <Link
                  to={item.link}
                  className="text-indigo-700 font-medium hover:underline font-sans"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link
            to="/contact-us"
            className="inline-block bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded-full text-lg transition"
          >
            Contact Training Advisor
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PilotTrainingSection;
