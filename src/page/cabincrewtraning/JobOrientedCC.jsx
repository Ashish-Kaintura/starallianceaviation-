import React from "react";
import { Link } from "react-router-dom";

const JobOrientedCC = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/Job-Oriented-CC-Training.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white flex items-center justify-center h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 w-[1300px] px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-down">
            Job Oriented CC Training
          </h1>
          <h2 className="text-sm text-gray-200">
            <Link to="/" className="hover:underline text-blue-300">
              Star Alliance Aviation
            </Link>{" "}
            Job Oriented CC Training
          </h2>
          <Link
            to="/contact"
            className="inline-block mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-gray-100 transition"
          >
          Make an Appointment
          </Link>
        </div>
      </section>

      {/* Intro Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://starallianceaviation.com/wp-content/uploads/2024/03/Job-Oriented.jpg"
            alt="Cabin Crew Training"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-primary text-3xl font-bold mb-4 font-heading">
              Star Alliance Aviation Academy
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Star Alliance Aviation Academy is a renowned institution focused
              on providing exceptional training for individuals aspiring to join
              the esteemed ranks of cabin crew professionals. Our academy stands
              apart in the aviation education landscape due to our unwavering
              dedication to excellence, industry relevance, and personalized
              student support.
            </p>
            <p className="text-lg leading-relaxed">
              We blend theoretical learning with practical simulations and
              hands-on experiences to ensure graduates are ready for the
              challenges of real-world aviation operations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Approach</h2>
            <p className="text-lg leading-relaxed mb-4">
              At Star Alliance Aviation Academy, we understand the dynamic and
              demanding nature of the aviation industry. Therefore, our training
              programs are meticulously crafted to equip students with the
              skills, knowledge, and confidence required to excel in their
              careers.
            </p>
            <p className="text-lg leading-relaxed">
              From emergency procedures to customer service techniques, we
              provide immersive simulations and practical exercises that
              replicate real-life scenarios.
            </p>
          </div>
          <img
            src="https://starallianceaviation.com/wp-content/uploads/2024/03/Job-Oriented2.jpg"
            alt="Our Approach"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Star Alliance?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Expert-Faculty.jpg"
              alt="Expert Faculty"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Expert Faculty</h3>
            <p className="text-gray-600 text-sm">
              Learn from seasoned aviation professionals with real-world
              experience.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Industry-Relevant.jpg"
              alt="Industry Relevant Curriculum"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">
              Industry-Relevant Curriculum
            </h3>
            <p className="text-gray-600 text-sm">
              Continuously updated to meet the latest airline requirements.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Hands-on-Training-Feature.jpg"
              alt="Hands-On Training"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Hands-On Training</h3>
            <p className="text-gray-600 text-sm">
              Practice real-life scenarios in a controlled environment.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Job-Placement.jpg"
              alt="Job Placement Assistance"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">
              Job Placement Assistance
            </h3>
            <p className="text-gray-600 text-sm">
              Dedicated career services to help you launch your aviation career.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Take Off Your Career?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Join Star Alliance Aviation Academy’s Job Oriented CC Training and
          begin your journey to becoming a world-class cabin crew professional.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default JobOrientedCC;
