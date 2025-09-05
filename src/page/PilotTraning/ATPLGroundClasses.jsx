import React from "react";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
export default function ATPLGroundClasses() {
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
          backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL-Ground-Classesbanner.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              ATPL Ground Classes
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              ATPL Ground Classes
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
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%201.jpg"
              alt="Pilot"
              className="rounded-xl w-[70%] object-cover shadow-lg rounded-tr-[100px] rounded-bl-[100px]"
            />
          </div>
          <div className="flex flex-col justify-start w-full lg:w-1/2">
            <h2 className="text-primary text-3xl font-bold mt-2">
              ATPL Ground Training Classes
            </h2>
            <p className="text-gray-700 font-sans mt-6 leading-relaxed text-justify">
              Our outstanding team of instructors is distinguished for their
              unparalleled experience and outstanding standard of deliverance of
              Airline Transport Pilot License (ATPL) ground classes. At our
              institute, our aim is to provide the highest level of aviation
              education, and our team of ATPL instructors illustrate this
              willingness and capability
              <br />
              <br />
              Each instructor has considerable experience and understands the
              complex process of ATPL training, and they are able to pass on
              their knowledge succinctly, accurately, and with enthusiasm. It is
              paramount that you choose rightly in selecting a training provider
              for your ATPL ground classes. With our extraordinary teachers, you
              can be assured that you are signing on for the best.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-Secondary mb-12">
            ATPL Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "General Navigation",
                desc: "As one of the critical parts of flight training associated with the Airline Transport Pilot License (ATPL), navigation is the basic knowledge and ability to operate and fly an aircraft from A to B safely and efficiently in the air. Navigation includes traditional methods of pilotage and dead reckoning before you get into the modern world of navigation systems, including GPS and inertial navigation. So the ATPL students will study these basic navigation principles, processes, and equipment thoroughly.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%202.jpg",
              },
              {
                title: "Meteorology",
                desc: "Learning meteorology is a very important part of airline pilots earning their Airline Transport Pilot License (ATPL). Our short but rich meteorology course will give you the necessary tools and understanding to fly with the knowledge and skills to feel safe and confident in the skies. Let us help you understand weather phenomena and teach you how to make decisions and execute appropriate courses of action. Start improving your ATPL theoretical knowledge with us and explore the fascinating world of meteorology.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%203.jpg",
              },
              {
                title: "Radio Navigation",
                desc: "One of the key training elements in Airline Transport Pilot License (ATPL) training and similarly with many other modern aviation operations. It contains a range of techniques and systems that allow pilots to navigate both safely and accurately, whether in difficult weather conditions or flying from one airport to another over a long distance. Pilots can navigate using traditional VOR (VHF Omnidirectional Range) or advanced GPS (Global Positioning System), using radio navigation technology to navigate precisely and with positional information and location or directional cues.",
                img: "https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/pilot%20traning/Atl/ATPL%204.jpg",
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
                  <h3 className="text-xl font-semibold text-Secondary mb-2">
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
