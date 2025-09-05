import React from "react";
import { Link } from "react-router-dom";

import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function ClassMedical() {
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
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/classmedical/Medical-1banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Class-1,2 Medical
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>
              Class-1,2 Medical
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
      {/* Content Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-12 items-center">
          {/* Left: Text */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2c3756] font-heading mb-6">
              Why Choose Our Class-1 & Class-2 Medical Program?
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              At <strong>Star Alliance Aviation Academy </strong>, we guide
              aspiring and professional pilots through the crucial DGCA medical
              sanctioning process. From
              <span className="font-semibold">Class 2 Medical</span> (your first
              step into aviation) to
              <span className="font-semibold">Class 1 Medical</span>
              (mandatory for CPL and airline careers), we ensure a smooth,
              supportive, and professional experience.
            </p>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              loading="lazy"
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/classmedical/Medical%20Program.jpg"
              alt="Medical Exam"
              className="rounded-xl w-[90%] max-w-md object-cover shadow-xl rounded-tr-[80px] rounded-bl-[80px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Ensure Fitness Section */}
      <section className="px-6 py-16 bg-white border-t">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-Secondary font-heading">
            Ensure Your Fitness to Fly with Every Airlines.
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We walk you step-by-step through DGCA’s medical requirements—helping
            you save time, minimize hassle, and stay focused on your flight
            training journey.
          </p>
        </div>

        {/* Class-2 Medical Section */}
        <section className="sm:px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto bg-primary p-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h3 className="text-3xl font-semibold text-white mb-6">
              Class 2 Medical — Your First Step Toward the Cockpit
            </h3>
            <div className="space-y-4 text-gray-100 leading-relaxed">
              <p>
                <strong> In India, DGCA Class 2 </strong> Medical is required
                for anyone who wishes to start their journey as a pilot.
                Specifically, it is needed by:
              </p>

              {/* <p>
                <strong>What’s Included?</strong>
              </p> */}
              <ul className="grid md:grid-cols-2 gap-3 list-disc list-inside">
                <li>Aspiring Student Pilots</li>
                <li> Candidates joining Flying Schools</li>
                <li>Private Pilot Licence (PPL) Applicants. </li>
                <li> Commercial Pilot Licence (CPL) Trainees (initially)</li>
                <li>
                  Flight Radio Telephony Operator’s Licence (RT) applicants
                </li>
              </ul>

              {/* <p>
                <strong>Validity & Cost:</strong> 2 years if under 40; 1 year if
                40+. Cost: ₹2,000–4,000 depending on examiner & tests.
              </p> */}
              {/* <p>
                <strong>Where?</strong> DGCA-approved medical examiners in your
                city.
              </p> */}
            </div>
          </div>
        </section>

        {/* 2 */}
        <section className="px-6 py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto bg-Secondary py-10 rounded-2xl shadow-lg hover:shadow-xl transition">
            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-primary text-center">
              <h3 className="text-2xl sm:text-4xl font-bold mb-6">
                Class 1 Medical — Gateway to a Professional Aviation Career
              </h3>
              <p className="max-w-3xl mx-auto text-lg mb-8">
                ( ensure your fitness to fly with airlines ) Class 2 medical -
                your first step towards the cockpit In India, DGCA Class 2
                Medical is required for anyone who wishes to start their journey
                as a pilot. Specifically, it is needed by:
              </p>

              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="list-disc list-inside space-y-2 marker:text-primary">
                  <li>Aspiring Student Pilots</li>
                  <li>Candidates joining Flying Schools </li>
                  <li>Private Pilot Licence (PPL) Applicants </li>
                </ul>
                <ul className="list-disc list-inside space-y-2 marker:text-primary">
                  <li>Commercial Pilot Licence (CPL) Trainees (initially) </li>
                  <li>
                    FlightRadio Telephony Operator’s Licence (RT) applicants
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Class-1 Medical Section with Video */}
        {/* <section className="relative py-20">
        
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/video/Airplan.mp4"
              type="video/mp4"
            />
          </video>

        
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>

       
          <div className="relative z-10 max-w-5xl mx-auto px-6 text-white text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Class 1 Medical — Gateway to a Professional Aviation Career
            </h3>
            <p className="max-w-3xl mx-auto text-lg mb-8">
              Required for anyone pursuing CPL training, airline cadet programs,
              or commercial pilot roles. This advanced medical ensures pilots
              meet the highest standards of fitness and safety.
            </p>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <ul className="list-disc list-inside space-y-2 marker:text-blue-300">
                <li>All Class 2 medical tests</li>
                <li>Depth vision & detailed eye exams</li>
                <li>Pure-tone audiometry</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 marker:text-blue-300">
                <li>
                  Lung (spirometry) & cardiovascular (ECG, TMT) evaluations
                </li>
                <li>Neurological, ENT, psychological & organ function tests</li>
                <li>Chest X-ray, blood & urine analysis</li>
              </ul>
            </div>
          </div>
        </section> */}
      </section>

      {/* Why Choose Us */}
      {/* <section className="px-6 py-16 bg-gray-100 border-t">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2c3756] font-heading mb-6">
            Why Star Alliance Aviation Academy is Your Best Choice
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-10">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-Secondary mb-2">
                Expert Guidance
              </h4>
              <p className="text-gray-600">
                Led by ex-DGCA directors, CFOIs, and airline CEOs with decades
                of industry expertise.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-Secondary mb-2">
                End-to-End Support
              </h4>
              <p className="text-gray-600">
                From finding examiners to application assistance, follow-ups,
                and renewal guidance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h4 className="text-lg font-semibold text-Secondary mb-2">
                Hassle-Free Experience
              </h4>
              <p className="text-gray-600">
                Save time and minimize stress while focusing on what matters
                most: your pilot training.
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
