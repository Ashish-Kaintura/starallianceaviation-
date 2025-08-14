import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import { Link } from "react-router-dom";
import WeAreCommitted from "../components/WeAreCommitted";

export default function AboutUs() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(https://i.postimg.cc/y6gx2XrQ/About-us-banners-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative "
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading animate-fade-in-down">
              AboutUs
            </h1>
            <h2 className="mt-2 text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation
              </Link>{" "}
              AboutUs
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
      <WhoWeAre />
      <WeAreCommitted />
    </div>
  );
}
