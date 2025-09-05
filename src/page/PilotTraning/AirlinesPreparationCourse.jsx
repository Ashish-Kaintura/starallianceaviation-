import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaTools,
  FaLaptopCode,
  FaBuilding,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const steps = [
  "Written Test / Online Assessment",
  "Psychometric / Compass Test",
  "Group Discussion (GD) /Personal Interview",
  "Simulator Check / Skill Test",
];

const reasons = [
  {
    img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/AirlinePrep/2.jpg",
    title: "World-Class Instructors",
    description:
      "Our instructors come from commercial airlines, military aviation, and regulatory bodies, delivering expert mentorship.",
  },
  {
    img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/AirlinePrep/3.jpg",
    title: "Interactive Learning Experience",
    description:
      "We go beyond books by incorporating case studies, real-world scenarios, and engaging classroom discussions.",
  },
  {
    img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/AirlinePrep/4.jpg",
    title: "Comprehensive Curriculum",
    description:
      "Covering everything from flight theory to CRM and emergency procedures, our curriculum is all-encompassing.",
  },
  {
    img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/AirlinePrep/5.jpg",
    title: "Tailored Training Solutions",
    description:
      "We customize training based on airline requirements to meet diverse operational goals.",
  },
  {
    img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/AirlinePrep/6.jpg",
    title: "State-of-the-Art Facilities",
    description:
      "Our advanced simulators and multimedia classrooms foster immersive and high-tech training.",
  },
];

const AirlinesPreparation = () => {
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
      <section
        style={{
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/AirlinePrep/1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Airlines Preparation Course
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Airlines Preparation Course
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
      <section className="bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center font-heading">
            Airlines Preparation Course: Kickstart Your Career in Aviation with
            Expert Training
          </h1>

          <p className=" mb-10 text-center max-w-6xl mx-auto leading-relaxed font-sans">
            Star Alliance Aviation Academy 's focus is on full airline pilot
            training, ultimately resulting in people having successful careers
            in aviation. As a top aviation academy, we are proud to offer the
            best quality pilot preparation programs developed by veteran pilots
            and instructors who are passionate about aviation. We have a
            rational team of experts in the aviation industry with real-world
            experience in many areas of aviation. From commercial pilot license
            to type rating training to flight training, we create the skills and
            discipline and confidence needed to have a successful career in
            aviation; therefore, no matter your level of pilot training, the
            students will receive practical hands-on experiential learning! Come
            and join us, and begin your journey toward an exciting and rewarding
            career in aviation and take the first step!
          </p>

          <div className="bg-Secondary p-6 md:p-10 rounded-xl shadow-lg text-primary">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-heading">
              The interview and selection process involves:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-primary">
              {steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-16 mb-8 text-center">
            Why Choose Star Alliance Aviation Academy
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div>
                  <img src={reason.img} alt={reason.title} />
                </div>
                {/* <div className="mb-4">{reason.icon}</div> */}
                <h3 className="text-xl font-semibold mb-2 mt-2 text-Secondary">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AirlinesPreparation;
