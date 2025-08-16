import React from "react";
import { Link } from "react-router-dom";

export default function RTRRadioTelephonyRestricted() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/RTR.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl font-bold leading-tight font-heading">
              RTR (Radio Telephony Restricted)
            </h1>
            <h2 className="mt-1 text-white text-sm font-heading">
              <Link to="/">Star Alliance Aviation /</Link>RTR (Radio Telephony
              Restricted)
            </h2>
          </div>
        </div>
      </section>

      {/* About CPL Section */}
      <section className="flex justify-center px-4 py-12 border-b-2">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10 items-center">
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Rtr.png"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg "
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Our amazing team of instructors are considered some of the best
              Australian instructors providing Radio Telephony Restricted (RTR)
              classes. Our team has a history of high standards of delivery and
              an ongoing commitment towards improving aviation training. Our
              team is the best in the RTR delivery space.
              <br />
              <br />
              In aviation, effective communication is essential to ensure safety
              and efficiency while flying. RTR training allows pilots to
              communicate with air traffic control (ATC) and other aircraft
              safely and effectively while following protocols and procedures.
              <br /> <br />
              Our institution believes that RTR training is very important in
              completing a Commercial Pilot License (CPL) and beyond. Here are
              some great examples of why RTR training is important in CPL
              education:
            </p>
          </div>
        </div>
      </section>

      {/* DGCA Exam Details */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            RTR (Radio Telephony Restricted)
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Compliance",
                desc: "Compliance The regulations state that pilots require an RTR license even if they are flying in controlled airspace. By completing their RTR training, CPL students complete the requirement and display their commitment to complying with aviation regulations and standards.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Compliance01.jpg",
              },
              {
                title: "Efficiency",
                desc: "Efficiency Effective communication supports smooth and efficient air traffic management operations that reduce delays and improve operational efficiency; pilots with strong RTR skills can confidently work in complex airspace to help promote the smooth flow of air traffic.  ",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/05/Efficiency02.jpg",
              },
              {
                title: "Safety",
                desc: "Good communication between pilots and ATC is essential for safe aircraft operation, especially when flying in busy airspace or in poor weather. RTR training enables pilots to communicate and receive critical information and instruction to/from ATC and reduces the chance of miscommunication and risk.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/safety.jpg",
              },
              {
                title: "Professionalism",
                desc: "Many pilots consider mastering RTR procedures to be a reflection of their professionalism and competence as a pilot in a cockpit. Employers appreciate candidates with great communication skills, so pursuing RTR training can be an important part of a pilot’s professional development and advancement.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Professionalism.jpg",
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

      <div className="max-w-7xl mx-auto py-12  text-gray-700 sm:px-0 px-4 font-sans">
        <p>
          Our team of professional RTR instructors are passionate about
          delivering a full and engaging aviation training so that students can
          learn the knowledge, skills, and confidence to be successful at RTR
          communications. Our instruction, service, and support include
          interactive classroom training, hands-on practice, and one-on-one
          coaching, tailoring instruction to our students so that we enable them
          to fly safely and efficiently and learn the tools for success in
          aviation.
        </p>
      </div>
    </div>
  );
}
