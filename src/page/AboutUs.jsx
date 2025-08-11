import React from "react";
import WhoWeAre from "../components/WhoWeAre";
import { Link } from "react-router-dom";
import WeAreCommitted from "../components/WeAreCommitted";

export default function AboutUs() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/About-Us.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative "
      >
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative z-10 w-[1300px] mt-8">
          <div className=" text-white p-5 max-w-lg ">
            <h1 className="text-4xl font-bold leading-tight font-heading">
              About US
            </h1>
            <h2 className="mt-1  text-white text-sm font-heading">
              <Link to="/">Star Alliance Aviation /</Link> About Us
            </h2>
          </div>
          {/* <img  loading="lazy" src="" alt="Cabin Crew" className="w-full max-w-md mt-8 lg:mt-0" /> */}
        </div>
      </section>
      <WhoWeAre />
      <WeAreCommitted/>
    </div>
  );
}
