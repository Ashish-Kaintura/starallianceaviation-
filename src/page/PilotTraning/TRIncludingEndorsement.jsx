import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function TRIncludingEndorsement() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/tr/TR-INCLUDING-endorsementbanner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              TR Including Endorsement
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              TR Including Endorsement
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
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/tr/Type%20Rating.jpg"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2 font-heading">
              Empower Your Pilot Career with Expert Type Rating Training
            </h2>
            <p className="text-gray-700 font-sans m2-6 leading-relaxed text-justify mt-4">
              At Star Alliance Aviation Academy, we specialize in providing
              comprehensive Type Rating (TR) programs coupled with official
              endorsement on your Commercial Pilot License (CPL). Partnering
              with top-tier Indian and international aviation institutions, we
              deliver training that's recognized, rigorous, and
              career-transformative.
            </p>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary font-heading">
              What Is a Type Rating (TR)?
            </h2>
            <p className="mt-4 text-gray-700 text2lg leading-relaxed max-w-3xl mx-auto">
              A Type Rating (TR) is an essential certification that qualifies
              you to fly advanced, multi-crew aircraft—such as the Airbus A320,
              Boeing 737, or ATR series—under global aviation regulations like
              DGCA, FAA, or EASA. It’s a crucial step beyond your CPL, granting
              access to complex commercial operations.
            </p>
          </div>

          {/* Why TR Matters */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            <div className="bg-primary shadow-md rounded-xl p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-Secondary font-heading mb-4">
                Mandatory for Commercial Operations
              </h3>
              <p className="text-gray-200 leading-relaxed">
                A valid TR endorsement isn’t optional—it’s a regulatory must for
                airline line training and employment in India and across the
                globe.
              </p>
            </div>
            <div className="bg-primary shadow-md rounded-xl p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-Secondary font-heading mb-4">
                Enhances Your Professional Marketability
              </h3>
              <p className="text-gray-200 leading-relaxed">
                TR-certified pilots are highly sought after by airlines; having
                the endorsement directly on your CPL gives you an edge in
                recruitment processes worldwide.
              </p>
            </div>
          </div>

          {/* Program Includes */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-heading">
              What Our Program Includes
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            <div className="bg-primary p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg text-Secondary font-heading mb-2">
                Ground School Training
              </h4>
              <p className="text-gray-200 leading-relaxed">
                Deep dive into aircraft systems, performance metrics,
                operational procedures, and emergency handling techniques.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg text-Secondary font-heading mb-2">
                Simulator-Based Training
              </h4>
              <p className="text-gray-200 leading-relaxed">
                Realistic, hands-on practice in Level D full-flight simulators
                covering operations, abnormal, and emergency scenarios.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg text-Secondary font-heading mb-2">
                Skill Test & Certification
              </h4>
              <p className="text-gray-200 leading-relaxed">
                Final assessment conducted by a DGCA-approved examiner.
                Successful completion earns your CPL endorsement.
              </p>
            </div>
            <div className="bg-primary p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="font-semibold text-lg text-Secondary font-heading mb-2">
                Partnered Excellence
              </h4>
              <p className="text-gray-200 leading-relaxed">
                We leverage our partnerships with premier training centers to
                provide world-class infrastructure and global-standard
                instruction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
