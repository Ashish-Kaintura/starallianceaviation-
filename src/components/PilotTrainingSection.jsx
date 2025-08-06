import React from "react";
import { Link } from "react-router-dom";

const trainingData = [
  {
    title: "CPL Ground Classes",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/cpl.jpg",
    desc: "Comprehensive Commercial Pilot License (CPL) training with expert faculty and updated curriculum.",
    link: "/courses/cpl-ground-class",
  },
  {
    title: "ATPL Ground Classes",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/Atpl.jpg",
    desc: "Prepare for the Airline Transport Pilot License with advanced theory sessions and mock exams.",
    link: "/courses/atpl-ground-class",
  },
  {
    title: "ATPL Oral Viva",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/atpl2.jpg",
    desc: "Master the final stage of your pilot exam journey with one-on-one oral viva prep.",
    link: "/courses/atpl-oral-viva",
  },
  {
    title: "RTR (Radio Telephone Restricted)",
    image: "http://starallianceaviation.com/wp-content/uploads/2024/03/Rtr.jpg",
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
          We are committed to being a good corporate citizen and to making a positive impact on the communities in which we operate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainingData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <img  loading="lazy"
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
          <a
            href="/contact"
            className="inline-block bg-indigo-800 hover:bg-indigo-900 text-white px-6 py-3 rounded-full text-lg transition"
          >
            Contact Training Advisor
          </a>
        </div>
      </div>
    </section>
  );
};

export default PilotTrainingSection;
