import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const values = [
  {
    title: "Honesty",
    desc: "We are honest and forthright in all of our business dealings and communications. ",
  },
  {
    title: "Fairness",
    desc: "We treat all stakeholders fairly and respectfully, and we attempt to engender a culture of inclusivity and diversity. ",
  },
  {
    title: "Responsibility",
    desc: "We are accountable for our actions, and we accept the consequences of our decisions. ",
  },
  {
    title: "Sustainability",
    desc: "We are committed to being good stewards of the landscape and to operating in a sustainable manner in the long term.",
  },
];

const CommitmentSection = () => {
  return (
    <section className="bg-white py-16 px-4 font-lato">
      <div className="text-center mb-12">
        <h4 className="text-lg font-semibold text-red-500 tracking-wider uppercase font-heading">
          _We are committed to_
        </h4>
        {/* <h2 className="text-4xl font-bold text-blue-900 font-heading">Pilot training</h2> */}
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center max-w-6xl w-full">
          {/* Left values */}
          <div className="space-y-10">
            {values.slice(0, 2).map((val, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle
                  size={50}
                  className="text-blue-800 text-xl mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 font-heading">
                    {val.title}
                  </h3>
                  <p className="text-gray-700 font-sans ">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Center image */}
          <div className="flex justify-center">
            <img
              loading="lazy"
              src="https://raw.githubusercontent.com/Ashish-Kaintura/starallianceaviation-/main/src/img/Homeimg/H3.jpg"
              alt="Pilot Training"
              className="w-full max-w-3xl md:max-w-3xl rounded-lg"
            />
          </div>

          {/* Right values */}
          <div className="space-y-10">
            {values.slice(2).map((val, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle
                  size={50}
                  className="text-blue-800 text-xl mt-1"
                />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 font-heading">
                    {val.title}
                  </h3>
                  <p className="text-gray-700 font-sans ">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommitmentSection;
