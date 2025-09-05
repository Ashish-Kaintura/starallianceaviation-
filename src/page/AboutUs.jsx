import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import { Link } from "react-router-dom";
import WeAreCommitted from "../components/WeAreCommitted";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function AboutUs() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/About/About%20us%20banners.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px] "
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 w-[1150px] mt-8">
          <div className="sm:visible invisible text-white p-5 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading animate-fade-in-down">
              AboutUs
            </h1>
            <h2 className=" mt-2 text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              AboutUs
            </h2>
            <Link
              to="/make-appointment"
              className="inline-block mt-6 px-6 py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>
      <WhoWeAre />
      <WeAreCommitted />
    </>
  );
}
