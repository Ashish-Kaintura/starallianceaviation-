import React from "react";
import { Link } from "react-router-dom";

export default function CPLGroundClasses() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/CPL-Commercial-Pilot-License.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl font-bold leading-tight font-heading">
              CPL Ground Classes
            </h1>
            <h2 className="mt-1 text-white text-sm font-heading">
              <Link to="/">Star Alliance Aviation /</Link> CPL Ground Classes
            </h2>
          </div>
        </div>
      </section>

      {/* About CPL Section */}
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10 items-center">
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img  loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/05/cpl.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2 font-heading">
              Introduction to CPL (Commercial Pilot License) by DGCA:
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              The Commercial Pilot License (CPL) issued by the Directorate
              General of Civil Aviation (DGCA) is a prestigious and
              comprehensive certification that marks a significant milestone in
              the aviation industry. Aspiring pilots undergo a rigorous training
              and examination process to obtain this license, ensuring they meet
              the highest standards of competency and safety.
              <br />
              <br />
              The DGCA, as the regulatory body overseeing civil aviation in
              India, administers a series of examinations that aspiring
              commercial pilots must successfully navigate. These examinations
              are designed to assess a candidate’s theoretical knowledge,
              practical skills, and understanding of aviation regulations.
            </p>
          </div>
        </div>
      </section>

      {/* DGCA Exam Details */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            DGCA Exam Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Air Navigation",
                desc: "This exam evaluates a candidate’s understanding of navigation principles, route planning, and air traffic management.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Air-Navigation.jpg",
              },
              {
                title: "Meteorology",
                desc: "Aspiring pilots must demonstrate knowledge of meteorological concepts, weather patterns, and the impact of weather on flight operations.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/meteorology.jpg",
              },
              {
                title: "Air Regulation",
                desc: "This examination assesses candidates’ familiarity with aviation regulations, air law, and compliance with safety protocols.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Air-Regulation.jpg",
              },
              {
                title: "Technical General",
                desc: "Pilots are tested on their understanding of aircraft systems, engines, and general technical aspects related to aviation.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Air-Navigation.jpg",
              },
              {
                title: "Radio Telephony",
                desc: "This exam focuses on effective communication skills using radio telephony, a crucial aspect of air traffic control and pilot coordination.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Radio-Telephony.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-12">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10 items-center">
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Our distinguished team of aviation professionals, whose collective
              expertise and experience are unparalleled in the field. Comprised
              of seasoned instructors, including a retired Director from the
              Directorate General of Civil Aviation (DGCA), our team boasts an
              impressive track record of delivering comprehensive and effective
              Commercial Pilot License (CPL) ground classes tailored
              specifically for DGCA examinations.
              <br />
              <br />
              With decades of combined experience in the aviation industry, our
              instructors bring a wealth of knowledge and practical insights to
              every classroom session. Their deep understanding of DGCA
              regulations, procedures, and standards ensures that aspiring
              pilots receive the highest quality instruction, preparing them
              thoroughly for the challenges they will encounter in their
              aviation careers.
              <br />
              <br />
              Our commitment to excellence is evident in our approach to
              training, which emphasizes not only theoretical knowledge but also
              practical application and real-world scenarios. Through
              interactive teaching methods and hands-on exercises, we empower
              our students to not only pass their examinations with confidence
              but also to excel in their future roles as professional aviators.
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img  loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/pilot01.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
        </div>
      </section>
      <div className="max-w-7xl mx-auto py-12 font-sans text-gray-700 sm:px-0 px-4">
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
