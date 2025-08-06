import React from "react";
import { Link } from "react-router-dom";

export default function CadetPilotProgram() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/Cadet-Pilot-Program-panner.final_.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[550px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl font-bold leading-tight font-heading">
              Cadet Pilot Program
            </h1>
            <h2 className="mt-1 text-white text-sm font-heading">
              <Link to="/">Star Alliance Aviation /</Link> Cadet Pilot Program
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
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Cadet-Pilot-1.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2">
              Cadet Pilot Program
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Cadet Pilot Program Introducing our esteemed team of instructors,
              distinguished for their excellence in delivering unparalleled
              training for cadet pilot programs. With a collective wealth of
              experience and a commitment to nurturing aviation talent, our
              instructors are renowned for their comprehensive approach and
              dedication to excellence. Drawing upon a diverse range of
              backgrounds in civil aviation our team offers cadet pilots the
              highest standard of instruction, equipping them with the
              knowledge, skills, and confidence needed to embark on successful
              aviation careers. Through personalized guidance and rigorous
              training methodologies, our instructors ensure that cadet pilots
              receive the finest preparation, empowering them to navigate the
              complexities of modern aviation with precision and proficiency.
              Trust in our esteemed team to elevate your cadet pilot program
              experience to new heights of success.
            </p>
          </div>
        </div>
      </section>

      {/* DGCA Exam Details */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Cadet Pilot Program Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Unrivaled Expertise",
                desc: "At the heart of our team lies an unparalleled depth of expertise. Each instructor brings a rich tapestry of aviation backgrounds, boasting extensive flight experience, instructional acumen, and regulatory insights garnered from years of service in the industry.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Unrivaled.jpg",
              },
              {
                title: "Tailored Training Approach",
                desc: "Recognizing the unique journey of every aspiring pilot, our team adopts a tailored training approach designed to nurture individual strengths, address weaknesses, and cultivate well-rounded aviation professionals.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Tailored.jpg",
              },
              {
                title: "Commitment to Excellence",
                desc: "Excellence is not just a standard; it’s our guiding principle. Our instructors exemplify unwavering dedication to fostering excellence in every facet of Cadet Pilot Program training.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Commitment.jpg",
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

      <section className="flex justify-center px-4 py-12">
        <div className="flex flex-col lg:flex-row max-w-7xl w-full gap-10 items-center">
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h1 className="text-primary text-3xl font-bold mt-2">
              Innovation and Adaptability
            </h1>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Innovation and Adaptability In an ever-evolving industry,
              innovation and adaptability are paramount. Our instructors remain
              at the forefront of aviation education, constantly refining and
              enhancing our training curriculum to align with emerging
              technologies, regulatory developments, and industry best
              practices. By embracing innovation and fostering a culture of
              continuous improvement, our team ensures that cadets receive the
              most relevant, up-to-date training that equips them for success in
              the dynamic aviation landscape of tomorrow
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Innovation.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
