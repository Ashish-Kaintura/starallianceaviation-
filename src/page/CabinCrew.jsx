import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
const CabinCrew = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      {/* Hero Section */}
      <div
        className=" bg-cover bg-center text-white flex items-center justify-center p-8 md:h-[600px] h-[190px] relative md:mt-0 mt-[72px]"
        style={{
          backgroundImage:
            "url('https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/Cabin-crew-training-banner.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Cabin Crew Training
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Cabin Crew Training
            </h2>
            <Link
              to="/make-appointment"
              className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Section: Program Overview */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/1.jpg"
            alt="Cabin Class"
            className="rounded-2xl shadow-2xl border-4 border-blue-100"
          />
          <div>
            <h2 className="text-4xl font-bold mb-5 text-primary font-heading">
              Why Choose Our Cabin Crew Training?
            </h2>
            <p className="mb-6 text-lg font-sans">
              Our team of experts has extensive experience & knowledge in the
              field and is known to be one of India's leading aviation training
              institutes, where you will gain an exceptional and practical
              exposure unlike anything you have ever learned (period).
              World-class training modules designed by industry experts and
              ex-aviation professionals from leading airlines are accepted
              across the globe. Our program focuses on:
            </p>
            <ul className="list-disc ml-6 space-y-3 text-gray-700 text-base font-sans">
              <li>In-flight Safety Procedures</li>
              <li>Grooming and Personality Development</li>
              <li>Customer Service Excellence</li>
              <li>Communication & Language Training</li>
              <li>Emergency Situations & First Aid</li>
              {/* <li>Mock Drills and Simulations</li> */}
            </ul>
            <p className="mt-6 font-sans">
              Mode of Recognition: We make sure that our students are job-ready
              and well-prepared in all the dimensions, from an airline interview
              to practical experience in the skies.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Counseling */}
      {/* <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-5 text-primary">
              Counselling for Reappearance
            </h2>
            <p className="text-gray-700 text-lg">
              From managing stress to setting realistic goals, our counselling
              sessions offer vital support for aspiring aviators to enhance
              their mental well-being and performance during training and
              beyond.
            </p>
            <Link
              to="/counselling-for-reappearance"
              className="inline-block mt-6 text-Secondary font-semibold underline hover:text-Lightcolor transition"
            >
              Read More
            </Link>
          </div>
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/2.jpg"
            alt="Counselling"
            className="rounded-2xl shadow-2xl border-4 border-blue-100"
          />
        </div>
      </section> */}

      {/* Section: Job-Oriented Training */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/3.jpg"
            alt="Job Oriented"
            className="rounded-2xl shadow-2xl border-4 border-blue-100"
          />
          <div>
            <h2 className="text-4xl font-bold mb-5 text-Secondary">
              Job-Oriented CC Training
            </h2>
            <p className="text-lg">
              Star Alliance Aviation Academy stands apart for its dedication to
              excellence, industry relevance, and personalized support to help
              you join top airlines as a cabin crew professional.
            </p>
            <Link
              to="/job-oriented-cc-training"
              className="inline-block mt-6 text-Secondary font-semibold underline hover:text-Lightcolor transition"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-800">
            Course Highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-left">
            <ul className="space-y-4 list-disc list-inside text-lg">
              <li>Duration: 6 Months (Flexible Timings Available)</li>
              <li>100% Placement Assistance</li>
              <li>Airport Visits & Industry Exposure</li>
            </ul>
            <ul className="space-y-4 list-disc list-inside text-lg">
              <li>Interactive Practical Training</li>
              <li>Mock Interviews & Grooming Support</li>
              <li>Global Airline Interview Preparation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Who Can Apply */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-5 text-Secondary">
              Who Can Apply?
            </h2>
            <ul className="list-disc ml-6 text-gray-700 space-y-3 text-lg">
              <li>Students who have completed 10+2 or equivalent</li>
              <li>Individuals aged 18 to 27</li>
              <li>Good communication & pleasing personality</li>
              <li>Passionate about working in the airline industry</li>
            </ul>
          </div>
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/4.jpg"
            alt="Apply Cabin Crew"
            className="rounded-2xl shadow-2xl border-4 border-blue-100"
          />
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-8">
            Career Opportunities After Training
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-disc list-inside text-left mx-auto text-lg">
            <li>Flight Attendant / Air Hostess</li>
            <li>Ground Staff Executive</li>
            <li>Passenger Service Agent</li>
            <li>Crew Scheduling Coordinator</li>
          </ul>
        </div>
      </section>

      {/* Why Cabin Crew */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-Secondary">
          Why Cabin Crew Is a Great Career Choice?
        </h2>
        <p className="text-xl text-center max-w-3xl mx-auto text-gray-700 mb-12">
          Being a cabin crew member means more than serving passengers—it’s
          about ensuring safety, creating memorable experiences, and
          representing the airline with professionalism.
        </p>
        <img
          src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/5.jpg"
          alt="Cabin Team"
          className="rounded-2xl shadow-2xl mx-auto border-4 border-blue-100"
        />
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-800 text-white py-20 text-center">
        <h2 className="text-4xl font-extrabold mb-6">
          Join Star Alliance Aviation Academy Today
        </h2>
        <p className="mb-8 max-w-2xl mx-auto text-lg">
          Our mission is to build confident, capable, and charming cabin crew
          professionals who will shine in the aviation industry. Your dream
          career begins here.
        </p>
        <button className="bg-Secondary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-Lightcolor transition text-lg">
          <Link to="/contact-us"> Enroll Now </Link>
        </button>
      </section>
    </div>
  );
};

export default CabinCrew;
