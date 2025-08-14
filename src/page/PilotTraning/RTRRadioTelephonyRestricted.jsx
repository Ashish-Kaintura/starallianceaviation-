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
              Our exceptional team of instructors who are widely regarded as the
              foremost experts in providing Radio Telephony Restricted (RTR)
              classes. With a proven track record of excellence and a deep
              commitment to advancing aviation education, our team sets the
              standard for RTR instruction.
              <br />
              <br />
              In the world of aviation, effective communication is paramount to
              ensuring safety and efficiency in flight operations. This is where
              RTR training plays a critical role. RTR training equips pilots
              with the necessary skills and knowledge to communicate effectively
              with air traffic control (ATC) and other aircraft while adhering
              to established protocols and procedures.
              <br /> <br />
              At our institute, we recognize the pivotal role that RTR training
              plays in the journey towards obtaining a Commercial Pilot License
              (CPL) and beyond. Here are some key reasons why RTR training is of
              utmost importance in CPL education:
            </p>
          </div>
        </div>
      </section>

      {/* DGCA Exam Details */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
           RTR (Radio Telephony
              Restricted)
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[
              {
                title: "Compliance",
                desc: "Regulations mandate that pilots operating in controlled airspace must hold a valid RTR license. By undergoing comprehensive RTR training, CPL students fulfill this requirement and demonstrate their commitment to regulatory compliance and adherence to aviation standards.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/Compliance01.jpg",
              },
              {
                title: "Efficiency",
                desc: "Efficient communication facilitates smooth and seamless air traffic management, minimizing delays and enhancing overall operational efficiency. Pilots equipped with strong RTR skills can navigate complex airspace with confidence, contributing to the smooth flow of air traffic.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/05/Efficiency02.jpg",
              },
              {
                title: "Safety",
                desc: "Clear and concise communication between pilots and ATC is essential for safe flight operations, especially in busy airspace or adverse weather conditions. RTR training ensures that pilots can effectively convey and receive vital information to and from ATC, reducing the risk of miscommunication and potential hazards.",
                img: "https://starallianceaviation.com/wp-content/uploads/2024/03/safety.jpg",
              },
              {
                title: "Professionalism",
                desc: "Mastery of RTR procedures reflects a pilot’s professionalism and competency in the cockpit. Employers value candidates who possess strong communication skills, making RTR training an essential component of a pilot’s professional development and career advancement.",
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
