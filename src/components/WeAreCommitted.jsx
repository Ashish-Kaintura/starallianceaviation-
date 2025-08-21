import React from "react";
import {
  FaBalanceScale,
  FaHandsHelping,
  FaLeaf,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import Video1 from "../video/Airplan.mp4";
const values = [
  {
    icon: <FaShieldAlt className="text-3xl text-white" />,
    title: "Honesty",
    description:
      "We are honest and transparent in all of our business dealings and communications.",
  },
  {
    icon: <FaBalanceScale className="text-3xl text-white" />,
    title: "Fairness",
    description:
      " We treat all stakeholders fairly and with respect, and we strive to create a culture of inclusivity and respect for diversity.",
  },
  {
    icon: <FaHandsHelping className="text-3xl text-white" />,
    title: "Responsibility",
    description:
      "We take responsibility for our actions and are accountable for the impact of our decisions",
  },
  {
    icon: <FaLeaf className="text-3xl text-white" />,
    title: "Sustainability",
    description:
      "We are committed to good stewardship of our natural environment and to acting in a way that is sustainable over the long term.",
  },
  {
    icon: <FaUsers className="text-3xl text-white" />,
    title: "Community",
    description:
      "We aim to positively impact the communities in which we operate through good corporate citizenship.",
  },
  {
    icon: <FaShieldAlt className="text-3xl text-white" />,
    title: "Company Ethics",
    description:
      "Company Ethics At Star Alliance Aviation Academy, we believe that ethical business practices are the foundation of our success. ",
  },
];

const WeAreCommitted = () => {
  return (
    <section className="relative w-full h-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={Video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0e1e36]/50 z-10"></div>

      {/* Content */}
      <div className="relative z-20 px-4 md:px-10 py-20">
        <div className="max-w-6xl mx-auto text-white">
          {/* Header */}
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
              We Are Committed To
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto font-medium">
              Empowering people and planet through values that shape our
              mission.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {values.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md text-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-Secondary p-4 rounded-full shadow-md">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-center text-gray-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Footer Note */}
          <div className="mt-16 max-w-3xl mx-auto text-center text-gray-200 text-lg font-medium">
            These values are essential to building trust and maintaining strong
            relationships. We uphold these principles and expect our partners
            and customers to do the same.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAreCommitted;
