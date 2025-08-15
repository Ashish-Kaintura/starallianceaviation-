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
          backgroundImage: `url(https://i.postimg.cc/NMHxkR4P/Pilot-Training-Banner-1.jpg)`,
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
        <section className="max-w-7xl mx-auto mb-16 bg-white/90 rounded-3xl shadow-lg p-8 md:p-14 relative z-10 ">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Pilot Training
              </h2>
              <h3 className="text-xl font-semibold text-blue-700 mb-3">
                Become a Skilled Pilot with Star Alliance Aviation Academy
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                At Star Alliance Aviation Academy, we offer professional and
                comprehensive pilot training programs that adhere to
                international standards. Whether you are a first-time student
                looking to get your first license or a qualified pilot looking
                to progress your skill level, we have highly qualified
                instructors, advanced simulators, and a modern training fleet,
                all designed to make your training the best it could possibly
                be.
              </p>
              <ul className="list-disc pl-5 text-gray-700 mb-4 space-y-1">
                <li>Safety, confidence, and readiness for the real world</li>
                <li>Warm and welcoming environment</li>
                <li>Modern fleet & advanced simulators</li>
                <li>Expert instructors</li>
              </ul>
              <div className="mt-6">
                <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
                  To the skies!
                </span>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://i.postimg.cc/8zQw8kFz/pilot-training-process.png"
                alt="Pilot Training Process"
                className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

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

export default PilotTraining;
