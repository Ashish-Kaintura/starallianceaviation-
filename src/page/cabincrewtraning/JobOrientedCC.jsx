import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const JobOrientedCC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-white text-gray-800 ">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url('https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/Job-Oriented-CC-Training.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="text-white flex items-center justify-center sm:h-[600px] mt-[72px] sm:mt-0  relative"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Job Oriented CC Training
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Job Oriented CC Training
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

      {/* Intro Section */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/Job-Oriented%20Cabin%20Crew%20Training%20for%20Airline.jpg"
            alt="Cabin Crew Training"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h2 className="text-primary text-3xl font-bold mb-4 font-heading">
              Job-Oriented Cabin Crew Training for Airline
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Star Alliance Aviation Academy is one of the most distinguished
              institutes offering advanced training programs for those
              interested in becoming airline cabin crew. The path of our academy
              is distinctive in the field of aviation education because we are
              committed to excellence, industry relevance, and individual
              student support.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-Secondary">
              Our Approach
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We at Star Alliance Aviation Academy realize the dynamic and
              demanding nature of the aviation industry. Consequently, we
              formulate our training programs so that students develop the
              skills, knowledge, and confidence to succeed in their respective
              professions. We integrate theory studies with simulations and
              practical exercises to make our graduates equipped to work in
              everyday aviation practice.
            </p>
          </div>
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/1.jpg"
            alt="Our Approach"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Star Alliance?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/2.jpg"
              alt="Expert Faculty"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Expert Faculty
            </h3>
            <p className="text-gray-600 text-sm">
              Expert Faculty: We hire professional pilots that have been in the
              industry for a long time. They bring unique perspectives and
              hands-on experience to the classroom, which adds a new layer of
              dimension to our student learning
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/3.jpg"
              alt="Industry Relevant Curriculum"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Industry-Relevant Curriculum
            </h3>
            <p className="text-gray-600 text-sm">
              Industry-Relevant Curriculum: Our curriculum is also updated with
              the recent technologies and compliance standards. We put the
              specific needs of our students first, making sure that we prepare
              them to be best trained for when they join airlines across the
              globe.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/4.jpg"
              alt="Hands-On Training"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Hands-On Training
            </h3>
            <p className="text-gray-600 text-sm">
              Hands-On Training: Training from procedure to customer service is
              focused on interactive simulations and practical exercises where
              we recreate real situations so that students can be better
              prepared in their training plans.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/job/5.jpg"
              alt="Job Placement Assistance"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Job Placement Assistance
            </h3>
            <p className="text-gray-600 text-sm">
              Job Placement Assistance: Here at Star Alliance, we are dedicated
              to our students long after they graduate. Through our expert
              career services team, we offer job support and matchmaking, as
              well as advising to help students secure their first job in the
              aviation sector.
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
          Join Star Alliance Aviation Academy ’s Job Oriented CC Training and
          begin your journey to becoming a world-class cabin crew professional.
        </p>
        <button className="bg-Secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-Lightcolor transition">
          <Link to="/contact-us">Apply Now</Link>
        </button>
      </section>
    </div>
  );
};

export default JobOrientedCC;
