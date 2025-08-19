import React from "react";
import HeroSection from "../components/HeroSection";
import { FaPlane } from "react-icons/fa";
import img1 from "../img/students.png";
import CommitmentSection from "../components/CommitmentSection";
import PilotTrainingSection from "../components/PilotTrainingSection";
import Testimonials from "../components/Testimonials";
import AppointmentForm from "../components/AppointmentForm";
import FAQSection from "../components/FAQSection";
import PopupForm from "../components/PopupForm";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <HeroSection />
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-start px-4 sm:px-6 lg:px-8">
          {/* Left Content */}
          <div
            className="flex flex-col justify-start w-full lg:w-1/2"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <span className="text-red-600 text-xs sm:text-sm uppercase tracking-wider font-semibold">
              Who We Are
            </span>
            <h2 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 leading-snug">
              Star Alliance Aviation Private Limited
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify text-sm sm:text-base">
              Star Alliance Aviation Academy is a passionate team of people,
              dedicated to delivering
              <br />
              <br />
              TOP service & products in the aviation industry. Our academy was
              established in 2022 to meet the market demand for safe, reliable,
              and innovative aviation training solutions. While we have been
              expanding quite quickly, our commitment to quality and customer
              experience has always come first.
              <br />
              <br />
              We offer dedicated aviation management courses created and taught
              by some of the most experienced experts in the field. Our
              instructors include former Directors of the Directorate General of
              Civil Aviation (DGCA) and previous Deputy Chief Flight Operations
              Inspectors (CFOIs) of the DGCA, as well as a former CEO of a major
              airline in India. Collectively they bring more than 30 years of
              experience and will provide the very best advisory and consultancy
              services to ensure the future leaders of aviation are ready!
            </p>
            <div
              className="mt-6 sm:mt-8"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
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
          <div
            className="flex flex-col items-center w-full lg:w-1/2 relative"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="w-full flex flex-col sm:flex-row lg:flex-row gap-4 items-center justify-center">
              <img
                loading="lazy"
                src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/img/Homeimg/H1.jpg"
                alt="Pilot"
                className="rounded-xl w-full sm:w-2/3 lg:w-[70%] object-cover shadow-lg"
                data-aos="fade-up"
                data-aos-delay="400"
              />
              <img
                loading="lazy"
                src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/img/Homeimg/H2.jpg"
                alt="Air Hostess"
                className="rounded-xl w-full sm:w-1/3 lg:w-[30%] object-cover shadow-lg mt-4 sm:mt-0"
                data-aos="fade-up"
                data-aos-delay="600"
              />
            </div>

            {/* Badge */}
            <div
              className="absolute -bottom-6 sm:-bottom-8 lg:bottom-10 lg:right-10 bg-primary text-white px-4 py-3 sm:px-6 sm:py-4 rounded-xl shadow-lg flex items-center gap-3"
              data-aos="zoom-in-up"
              data-aos-delay="700"
            >
              <FaPlane className="text-xl sm:text-2xl" />
              <div>
                <p className="text-lg sm:text-xl font-bold">50+</p>
                <p className="text-xs sm:text-sm">Professionals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="md:flex hidden w-full relative">
        {/* Background video */}
        <video
          className="w-full h-96 object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/video/Home%20Page%202nd%20Video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex md:hidden w-full relative">
        {/* Background video */}
        <div className="flex sm:hidden">
          <video
            className="pt-20 w-full object-contain"
            autoPlay
            loop
            muted
            playsInline
            src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/video/Home%20Page%20Mobile%202nd%20Video.mp4"
          />
        </div>
      </div>
      <PopupForm />
      <CommitmentSection />

      <PilotTrainingSection />
      <Testimonials />
      <AppointmentForm />
      {/* <FAQSection/> */}
    </>
  );
}
