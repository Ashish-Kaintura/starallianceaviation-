import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const trainingPrograms = [
  {
    name: "CPL Ground Classes",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P1.jpg",
    slug: "cpl-ground-classes",
  },
  {
    name: "ATPL Ground Classes",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P2.jpg",
    slug: "atpl-ground-classes",
  },
  {
    name: "ATPL Oral/Viva",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P3.jpg",
    slug: "atpl-oral-viva",
  },
  {
    name: "RTR (Radio Telephony Restricted)",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P4.jpg",
    slug: "rtr-radio-telephony-restricted",
  },
  {
    name: "Cadet Pilot Program",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P5.jpg",
    slug: "cadet-pilot-program",
  },
  {
    name: "Airlines Preparation Course",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P6.jpg",
    slug: "airlines-preparation-course",
  },
  {
    name: "FLC & Recency Flying",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P7.jpg",
    slug: "flc-recency-flying",
  },
  {
    name: "TR Including Endorsement",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P8.jpg",
    slug: "tr-including-endorsement",
  },
  {
    name: "Class-1,2 Medical",
    image:
      "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/P9.jpg",
    slug: "class-12-medical",
  },
];
import Img1 from "../img/coolbackgrounds-particles-stellar.png";
import { Helmet } from "react-helmet";
const PilotTraining = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://i.postimg.cc/NfY3ZrxP/Pilot-Training-Banner-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent"></div>

        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Pilot Training Program
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Pilot Training Program
            </h2>
            <Link
              to="/make-appointment"
              className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
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
        <section className="max-w-6xl mx-auto mb-16 bg-white/90 rounded-3xl shadow-lg p-8 md:p-14 relative z-10 ">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
                Pilot Training
              </h2>
              <h3 className="text-xl font-semibold text-Secondary mb-3">
                Become a Skilled Pilot with Star Alliance Aviation Academy
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                At Star Alliance Aviation Academy , we offer professional and
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
                {/* <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-blue-700 transition">
                  To the skies!
                </span> */}
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <img
                src="https://www.fstcfto.in/storage/images/FSTC%20FLying%20School%20Complete%20Pilot%20Program%20best%20FTO%20in%20India.png"
                alt="Pilot Training Process"
                className="w-full max-w-xs md:max-w-sm rounded-xl shadow-lg object-cover"
              />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Explore Our Training Programs
          </h2>
          <p className="text-lg text-Secondary mb-12">
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
                  <span className="text-sm mt-2 text-Secondary underline inline-block">
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
