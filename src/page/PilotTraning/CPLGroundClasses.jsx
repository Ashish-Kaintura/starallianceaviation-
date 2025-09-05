import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function CPLGroundClasses() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL-Commercial-Pilot-Licensebanner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              CPL Ground Classes
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              CPL Ground Classes
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

      {/* About CPL Section */}
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL%201.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2 font-heading">
              CPL (Commercial Pilot License)—DGCA Guidelines & Process
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              The Commercial Pilot License (CPL), issued by the Directorate
              General of Civil Aviation (DGCA), is an invaluable credential that
              signifies a professional pathway in aviation. The path to
              obtaining your CPL requires substantial flight training as well as
              substantial theoretical training during the CPL ground classes.
              <br />
              <br />
              The CPL ground classes are valuable and essential because they
              provide the candidates with the knowledge needed to perform well
              on Engel's DGCA examinations on air regulations, meteorology,
              navigation, and more. Star Alliance Aviation Academy provides
              student-oriented CPL ground classes with experienced instructors,
              and the goal is to give students a solid foundation on aviation
              theory, improve confidence, and pass the examinations
              successfully.
            </p>
          </div>
        </div>
      </section>

      {/* DGCA Exam Details */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-Secondary mb-12">
            DGCA Exam Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Air Navigation",
                desc: "Air Navigation This exam evaluates a candidate’s understanding of navigation principles, route planning, and air traffic management.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL2.jpg",
              },
              {
                title: "Meteorology",
                desc: "Aspiring pilots must demonstrate knowledge of meteorological concepts, weather patterns, and the impact of weather on flight operations.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL%203.jpg",
              },
              {
                title: "Air Regulation",
                desc: "This examination assesses candidates’ familiarity with aviation regulations, air law, and compliance with safety protocols.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL%204.jpg",
              },
              {
                title: "Technical General",
                desc: "Pilots are tested on their understanding of aircraft systems, engines, and general technical aspects related to aviation.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL%205.jpg",
              },
              {
                title: "Radio Telephony",
                desc: "This exam focuses on effective communication skills using radiotelephony, a crucial aspect of air traffic control and pilot coordination.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL6.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-Secondary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 ">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-12">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Our esteemed group of aviation experts, whose combined knowledge
              and experience are unmatched in the industry. With a team of
              seasoned instructors, including a retired director from the
              Directorate General of Civil Aviation (DGCA), we have a proven
              track record of providing thorough and efficient ground classes
              for the Commercial Pilot License (CPL) that are specifically
              designed to prepare students for DGCA exams.
              <br />
              <br />
              Across all of our classroom deliveries, our instructors have a
              wealth of knowledge and experience to share with every aspiring
              pilot, as many of them have spent decades in the aviation world.
              Our instructors know every nuance of DGCA rules, practices, and
              standards, which benefits our students with the best training to
              prepare them for the challenges they will encounter during their
              aviation careers.
              <br />
              <br />
              Our approach to training shows our dedication to quality, as we
              provide our students with not only the theory but also the reality
              and application of being a professional commercial pilot. We not
              only help students successfully pass their exams, but we also use
              interactive learning and practical exercises to assure that they
              are successful in their futures as professional pilots.
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/cpl/CPL%207.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
        </div>
      </section>
      <div className="max-w-6xl mx-auto py-12 font-sans text-gray-700 sm:px-0 px-4">
        <p>
          Whether you are embarking on your journey towards a CPL or seeking to
          enhance your aviation knowledge and skills, our team is dedicated to
          providing you with the guidance and support you need to succeed. We
          invite you to join us and experience the difference that our
          professional and experienced team can make in your aviation education.
        </p>
      </div>
    </div>
  );
}
