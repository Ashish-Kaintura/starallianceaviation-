import React from "react";
import {
  FaChalkboardTeacher,
  FaGraduationCap,
  FaTools,
  FaLaptopCode,
  FaBuilding,
} from "react-icons/fa";
 import { Link } from "react-router-dom";
const steps = [
  "Technical Written Exam",
  "Technical Oral Interview",
  "HR Oral Interview",
  "Psychometric Test",
  "Simulator Test",
  "Colour Test",
];

const reasons = [
  {
    img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Airlines-Preparation-Course.jpg",
    title: "World-Class Instructors",
    description:
      "Our instructors come from commercial airlines, military aviation, and regulatory bodies, delivering expert mentorship.",
  },
  {
    img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Airlines-Preparation.jpg",
    title: "Interactive Learning Experience",
    description:
      "We go beyond books by incorporating case studies, real-world scenarios, and engaging classroom discussions.",
  },
  {
    img: "https://starallianceaviation.com/wp-content/uploads/2024/03/AirlinesPreparation02.jpg",
    title: "Comprehensive Curriculum",
    description:
      "Covering everything from flight theory to CRM and emergency procedures, our curriculum is all-encompassing.",
  },
  {
    img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Airlines-Preparation.jpg",
    title: "Tailored Training Solutions",
    description:
      "We customize training based on airline requirements to meet diverse operational goals.",
  },
  {
    img: "https://starallianceaviation.com/wp-content/uploads/2024/03/AirlinesPreparation02.jpg",
    title: "State-of-the-Art Facilities",
    description:
      "Our advanced simulators and multimedia classrooms foster immersive and high-tech training.",
  },
];

const AirlinesPreparation = () => {
  return (
    <>
      {" "}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/eGCA-Account-Management.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl font-bold leading-tight font-heading">
             eGCA Account Management
            </h1>
            <h2 className="mt-1 text-white text-sm font-heading">
              <Link to="/">Star Alliance Aviation /</Link>eGCA Account Management
            </h2>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 text-gray-800 px-6 py-12 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-center font-heading">
            Airlines Preparation Course
          </h1>

          <p className=" mb-10 text-center max-w-7xl mx-auto leading-relaxed font-sans">
            At Star Alliance Aviation Academy, we pride ourselves on being the
            premier destination for airlines seeking top-tier preparation
            training for their pilots. With a team comprised of the industry’s
            best instructors—each a seasoned veteran with years of experience in
            various sectors of aviation—we provide unparalleled expertise and
            guidance to ensure the success of every pilot we train.
          </p>

          <div className="bg-primary p-6 md:p-10 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 font-heading">
              The interview and selection process involves:
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-200">
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
                  <img  src={reason.img} alt={reason.title} />
                </div>
                {/* <div className="mb-4">{reason.icon}</div> */}
                <h3 className="text-xl font-semibold mb-2 mt-2 text-primary">{reason.title}</h3>
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
