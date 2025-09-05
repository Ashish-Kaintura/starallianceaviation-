import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
export default function RTRRadioTelephonyRestricted() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/RTR/RTRBanner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              RTR (Radio Telephony Restricted)
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              RTR (Radio Telephony Restricted)
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
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/RTR/RTR%20(Radio%20Telephony%20Restricted).jpg"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg "
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Our amazing team of instructors are considered some of the best
              Indian instructors providing Radio Telephony Restricted (RTR)
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-Secondary mb-12">
            RTR (Radio Telephony Restricted)
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Compliance",
                desc: "Compliance The regulations state that pilots require an RTR license even if they are flying in controlled airspace. By completing their RTR training, CPL students complete the requirement and display their commitment to complying with aviation regulations and standards.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/RTR/RTR%20(Radio%20Telephony%20Restricted)%202.jpg",
              },
              {
                title: "Efficiency",
                desc: "Efficiency Effective communication supports smooth and efficient air traffic management operations that reduce delays and improve operational efficiency; pilots with strong RTR skills can confidently work in complex airspace to help promote the smooth flow of air traffic.  ",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/RTR/RTR%20(Radio%20Telephony%20Restricted)%203.jpg",
              },
              {
                title: "Safety",
                desc: "Good communication between pilots and ATC is essential for safe aircraft operation, especially when flying in busy airspace or in poor weather. RTR training enables pilots to communicate and receive critical information and instruction to/from ATC and reduces the chance of miscommunication and risk.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/RTR/RTR%20(Radio%20Telephony%20Restricted)%204.jpg",
              },
              {
                title: "Professionalism",
                desc: "Many pilots consider mastering RTR procedures to be a reflection of their professionalism and competence as a pilot in a cockpit. Employers appreciate candidates with great communication skills, so pursuing RTR training can be an important part of a pilot’s professional development and advancement.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/RTR/RTR%20(Radio%20Telephony%20Restricted)%205.jpg",
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

      <div className="max-w-6xl mx-auto py-12  text-gray-700 sm:px-0 px-4 font-sans">
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
