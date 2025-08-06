import React from "react";
import { Link } from "react-router-dom";
export default function ATPLGroundClasses() {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/ATPL-Ground-Classes.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[550px] relative"
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

      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10 items-center">
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Atpl-2.png"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2">
              ATPL Ground Classes
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Our exceptional team of instructors, renowned for their
              unparalleled expertise and excellence in providing Airline
              Transport Pilot License (ATPL) ground classes.
              <br />
              <br />
              At the heart of our institute lies a commitment to delivering the
              highest standard of aviation education, and our team of ATPL
              instructors epitomizes this dedication. With a wealth of
              experience and a deep understanding of the complexities of ATPL
              training, they possess the unique ability to impart knowledge with
              clarity, precision, and passion. Choosing the right training
              provider for your ATPL ground classes is crucial, and with our
              team of exceptional instructors, you can be confident that you are
              receiving the best possible education.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            ATPL Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "General Navigation",
                desc: "Is a cornerstone of Airline Transport Pilot License (ATPL) training, encompassing the fundamental principles and techniques used to navigate aircraft safely and efficiently across the skies. From traditional methods such as pilotage and dead reckoning to modern navigation systems like GPS and inertial navigation, ATPL students delve into a comprehensive study of navigation theory, procedures, and equipment.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/General-Navigation.jpg",
              },
              {
                title: "Meteorology",
                desc: "Mastering meteorology is essential for aspiring pilots pursuing their Airline Transport Pilot License (ATPL). Our concise and comprehensive meteorology course provides the vital knowledge and skills needed to navigate the skies safely and confidently. Join us as we demystify weather phenomena and equip you with the tools to make informed decisions in the cockpit. Elevate your ATPL training with our expert-led meteorology course.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/meteorology-1.jpg",
              },
              {
                title: "Radio Navigation",
                desc: "Is a fundamental component of Airline Transport Pilot License (ATPL) training, essential for modern aviation operations. It encompasses a range of techniques and systems that enable pilots to navigate accurately and safely, even in adverse weather conditions or over vast distances. From the venerable VOR (VHF Omnidirectional Range) to the advanced GPS (Global Positioning System), radio navigation technologies provide pilots with precise positional information and guidance cues to navigate through the skies with confidence.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Radio-Navigation.jpg",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-primary rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  loading="lazy"
                  src={item.img}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
