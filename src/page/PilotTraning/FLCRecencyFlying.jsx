import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function FLCRecencyFlying() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <section
        style={{
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/flc/FLCbanner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              FLC & Recency Flying
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              FLC & Recency Flying
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
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
          <div className="flex flex-col items-center w-[70%] lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/flc/1.jpg"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2 font-heading">
              Flight License Currency (FLC) & Recency Flying Programs
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Star Alliance Aviation Academy is determined to offer world-class
              training solutions that are customized to the requirements of
              pilots around the globe. Our seasoned professionals, teacher
              training methodology, and internationally trained pilots help us
              stay at the top of foreign license conversion and recency flying
              with programs that may include primary training followed by
              refresher courses to ensure high levels of proficiency paired with
              peace of mind when you take to the skies again. With experienced
              instructors, a strong squadron of aircraft and simulator
              infrastructure, and training programs that are convenient and easy
              to follow, the initiative Star Alliance Aviation Academy is the
              choice for pilots looking to take their career to greater heights
              with excellence in aviation.
              <br /> <br /> We boast of our strategic tie-ups with some of the
              best flying schools in India. These affiliations have come with
              some of the best recent flying and foreign license conversion
              opportunities for our students, where they get to experience
              industry-specific exposure and enhance their prospects in the
              global aviation sector. Star Alliance delivers full training and
              support to our students, and we all receive the necessary
              knowledge that aviators require to fulfill their dreams. Come fly
              with us and allow us to take you to magnitudes of success in the
              clear blue sky.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-4 px-4 max-w-6xl mx-auto ">
        <div className="">
          <h2 className="text-primary sm:text-6xl text-3xl font-bold mt-2 py-7 font-heading">
            Flight License Currency (FLC) & Recency Flying Programs
          </h2>
          <ul className=" font-sans text-gray-700 text-justify">
            <li className="mb-2 ">
              1. Star Alliance Aviation Academy executes recency flying programs
              approved by DGCA to keep pilots current and compliant.{" "}
              <li className="mt-2">
                {" "}
                2. Our high-time instructors guide you through your personal
                flight training plan using our brand-new fleet of aircraft and
                simulators.
              </li>{" "}
              <li className="mt-2">
                {" "}
                3. Pilots get minimal downtime and the ability to keep an active
                status or return to work.
              </li>{" "}
              <li className="mt-2">
                {" "}
                4. In every session we emphasize safety, accuracy, and
                regulatory readiness.
              </li>{" "}
              <li className="mt-2">
                {" "}
                5. Come and fly with Star Alliance Aviation Academy—where you
                can quickly, easily, and cost-effectively keep your pilot
                license in top condition.
              </li>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
