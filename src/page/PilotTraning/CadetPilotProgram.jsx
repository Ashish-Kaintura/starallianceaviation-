import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function CadetPilotProgram() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/CadetPilot/Cadet-Pilot-Program-banner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-[44px] font-bold text-white font-heading animate-fade-in-down">
              Cadet Pilot Program
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Cadet Pilot Program
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
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/CadetPilot/c1.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2">
              Cadet Pilot Program Institute
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Meet our team of respected educators, known for providing the best
              flight training in Delhi , india for cadet pilot programs. Our
              instructors are highly experienced and passionate about training
              the next generation of aviators, and they ensure their students
              develop into sharp-minded, safe pilots. Backed by years of
              experience with our diverse civil aviation background, the Intl
              Tech Academy team provides the cadet pilot with first-class
              training that prepares them with the knowledge and confidence
              required for a successful career in aviation. Our instructors
              provide the best training to our cadet pilots by personalized
              guidance and tough training methodologies, preparing them with
              precision to handle all the challenges that come across in
              modernized aviation. Have confidence in our highly qualified
              training staff to bring your cadet pilot program experience to
              even higher levels of success.
            </p>
          </div>
        </div>
      </section>

      {/* DGCA Exam Details */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-Secondary mb-12">
            Cadet Pilot Program Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Unrivaled Expertise",
                desc: "We have a department that has the most depth of knowledge on our team. Every instructor has a unique aviation background, and with that comes thousands of hours of flight experience, exceptionally strong instructional skills, and knowledge fresh from years of working in the industry.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/CadetPilot/c2.jpg",
              },
              {
                title: "Tailored Training Approach",
                desc: "Valuing each student's learning curve, our team uses a personalized methodology to form students into comprehensive aviators. View More",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/CadetPilot/c3.jpg",
              },
              {
                title: "Commitment to Excellence",
                desc: "To us, perfection is not just a benchmark: it's the north star of our entire operation. Our instructors take on this commitment hundreds of times over their careers, ensuring that they live and breathe leveling up every aspect of Cadet Pilot Program training.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/CadetPilot/c4.jpg",
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
                  <p className="text-gray-600 text-justify">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-12">
        <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h1 className="text-primary text-3xl font-bold mt-2">
              Innovation and Adaptability
            </h1>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              The industry is changing so quickly that innovating and being
              flexible has never been as important. Our instructors remain
              leaders in aviation education, continually revising and updating
              our training curriculum to keep pace with new technologies,
              regulations, and industry-leading innovations. Embrace innovation
              and create a culture of continuous improvement to ensure cadets
              are trained for a future in aviation that we shape together, not
              the one defined by the industry.
            </p>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/2 relative">
            <img
              loading="lazy"
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/CadetPilot/c5.jpg"
              alt="Pilot"
              className="rounded-xl w-full object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
