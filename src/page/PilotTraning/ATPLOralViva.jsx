import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function ATPLOralViva() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL-Oral-Viva-banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              ATPL Oral/Viva
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              ATPL Oral/Viva
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
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%20Oral%20%2C%20Viva.jpg"
              alt="Pilot"
              className="w-[70%] object-cover shadow-lg rounded-full"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2">
              Introducing Our Elite Team for ATPL Viva/Oral Training
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Embark on a journey to excellence with our distinguished team of
              aviation professionals, renowned for their unparalleled expertise
              in providing superlative Airline Transport Pilot License (ATPL)
              viva/oral training. Led by a retired Director from the Directorate
              General of Civil Aviation (DGCA), our team brings decades of
              collective experience and a deep understanding of the intricacies
              of aviation regulations and procedures.
              <br />
              <br />
              In the rigorous pursuit of ATPL certification, viva/oral
              examinations serve as a crucial milestone, assessing not only
              theoretical knowledge but also practical application and
              decision-making skills. Our team of seasoned instructors
              understands the significance of this phase in a pilot’s journey
              and is committed to preparing candidates to excel with confidence.
            </p>
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-12 font-sans text-gray-700 sm:px-0 px-4">
        <p>
          With personalized coaching, comprehensive mock interviews, and
          invaluable insights gleaned from years of industry experience, our
          team ensures that every candidate is thoroughly equipped to navigate
          the challenges of the viva/oral examination with poise and
          proficiency. Whether you are a seasoned aviator seeking to advance
          your career or a determined aspirant embarking on your aviation
          journey, trust our team to elevate your ATPL viva/oral training
          experience to unprecedented heights.
        </p>
      </div>
    </div>
  );
}
