import React from "react";
import HeroSection from "../components/HeroSection";
import { FaPlane } from "react-icons/fa";
import img1 from "../img/students.png";
import CommitmentSection from "../components/CommitmentSection";
import PilotTrainingSection from "../components/PilotTrainingSection";
import Testimonials from "../components/Testimonials";
import AppointmentForm from "../components/AppointmentForm";
import FAQSection from "../components/FAQSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-start px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <span className="text-red-600 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Who We Are
            </span>
            <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-snug">
              Star Alliance Aviation Private Limited
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify text-sm sm:text-base">
              Star Alliance Aviation Academy is a team of passionate and
              dedicated professionals who are committed to providing the highest
              quality products and services to our customers.
              <br />
              <br />
              Our Company was founded in 2022 with the global goal of filling a
              need in the market for high-quality, innovative products. Since
              then, we have grown significantly, but our commitment to
              excellence has never wavered.
              <br />
              <br />
              With our team boasting some of the finest instructors in the
              aviation industry, we offer instruction provided by a
              distinguished team of renowned experts with a collective
              experience of 25 years in the aviation industry. This team
              comprises former Directors of the Directorate General of Civil
              Aviation (DGCA), former Deputy Chief Flight Operations Inspectors
              (CFOIs) of the DGCA, and the former CEO of a renowned Indian
              airline. With three decades of unparalleled expertise, they excel
              in providing superlative advisory and consultancy services,
              ensuring the best preparation for the new generation of aviators.
            </p>
            <div className="mt-6 sm:mt-8">
              <div className="bg-primary w-56 sm:w-72 rounded-lg overflow-hidden shadow-md">
                <img
                  loading="lazy"
                  src={img1}
                  alt="Training"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Images + Badge */}
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <div className="w-full flex flex-col sm:flex-row lg:flex-row gap-4 items-center justify-center">
              <img
                loading="lazy"
                src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/img/Homeimg/H1.jpg"
                alt="Pilot"
                className="rounded-xl w-full sm:w-2/3 lg:w-[70%] object-cover shadow-lg"
              />
              <img
                loading="lazy"
                src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/img/Homeimg/H2.jpg"
                alt="Air Hostess"
                className="rounded-xl w-full sm:w-1/3 lg:w-[30%] object-cover shadow-lg mt-4 sm:mt-0"
              />
            </div>

            {/* Badge */}
            <div className="absolute -bottom-6 sm:-bottom-8 lg:bottom-10 lg:right-10 bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg flex items-center gap-3">
              <FaPlane className="text-xl sm:text-2xl" />
              <div>
                <p className="text-lg sm:text-xl font-bold">50+</p>
                <p className="text-xs sm:text-sm">Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommitmentSection />
      <PilotTrainingSection />
      <Testimonials />
      <AppointmentForm />
      {/* <FAQSection/> */}
      <section className="p-4 "></section>
    </>
  );
}
