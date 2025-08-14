import React from "react";
import { Link } from "react-router-dom";
export default function FLCRecencyFlying() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/FLC.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading animate-fade-in-down">
              FLC & Recency Flying
            </h1>
            <h2 className="mt-2 text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation
              </Link>{" "}
              FLC & Recency Flying
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 bg-white text-[#2c3756] font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10 items-center">
          <div className="flex flex-col items-center w-[70%] lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/flc2.jpg"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2 font-heading">
              Flc & Recency Flying
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              At Star Alliance Aviation Academy, we are dedicated to providing
              unparalleled training solutions tailored to meet the unique needs
              of pilots worldwide. With a focus on foreign license conversion
              and recency flying, our academy offers comprehensive programs
              designed to ensure that pilots maintain proficiency and confidence
              in the cockpit. Our experienced instructors, state-of-the-art
              facilities, and flexible training solutions make Star Alliance
              Aviation Academy the preferred choice for pilots seeking to
              advance their careers and achieve excellence in aviation. <br />{" "}
              <br /> we take pride in our strategic partnerships with renowned
              Indian flying schools. Through these collaborations, we offer
              unparalleled opportunities for recency flying and foreign license
              conversion, allowing our students to gain valuable practical
              experience and expand their horizons in the global aviation
              industry. At Star Alliance, we are committed to providing
              comprehensive training programs that empower our students to
              achieve their dreams of becoming skilled and proficient aviators.
              Join us and let us help you soar to new heights of success in the
              skies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
