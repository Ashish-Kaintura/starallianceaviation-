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
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">
            ATPL Details
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "General Navigation",
                desc: "As one of the critical parts of flight training associated with the Airline Transport Pilot License (ATPL), navigation is the basic knowledge and ability to operate and fly an aircraft from A to B safely and efficiently in the air. Navigation includes traditional methods of pilotage and dead reckoning before you get into the modern world of navigation systems, including GPS and inertial navigation. So the ATPL students will study these basic navigation principles, processes, and equipment thoroughly.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/General-Navigation.jpg",
              },
              {
                title: "Meteorology",
                desc: "Learning meteorology is a very important part of airline pilots earning their Airline Transport Pilot License (ATPL). Our short but rich meteorology course will give you the necessary tools and understanding to fly with the knowledge and skills to feel safe and confident in the skies. Let us help you understand weather phenomena and teach you how to make decisions and execute appropriate courses of action. Start improving your ATPL theoretical knowledge with us and explore the fascinating world of meteorology.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/meteorology-1.jpg",
              },
              {
                title: "Radio Navigation",
                desc: "One of the key training elements in Airline Transport Pilot License (ATPL) training and similarly with many other modern aviation operations. It contains a range of techniques and systems that allow pilots to navigate both safely and accurately, whether in difficult weather conditions or flying from one airport to another over a long distance. Pilots can navigate using traditional VOR (VHF Omnidirectional Range) or advanced GPS (Global Positioning System), using radio navigation technology to navigate precisely and with positional information and location or directional cues.",
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
