import React, { useEffect } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const CounsellingReappearance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-white text-gray-800">
      <Helmet>
        <title></title>
        <meta name="description" content="" />
        <link rel="canonical" href="" />
      </Helmet>
      <section
        style={{
          backgroundImage: `url('https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/Counselling-For-Reappearancebanner.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-6 sm:p-8 h-[400px] sm:h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Counselling (For Reappearance)
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation Academy /
              </Link>{" "}
              Counselling (For Reappearance)
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
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/1.jpg"
            alt="Aviation Counselling"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h1 className=" text-primary text-3xl font-bold my-2 font-heading ">
              Counselling (For Reappearance)
            </h1>
            <p className="text-lg mb-4 leading-relaxed pt-8">
              Counselling is very important for the aspirant pilots so that it
              provides them with directions by taking care of every concern that
              comes while building a career in aviation. And so, from stress
              management techniques to setting achievable goals, here we talk
              about some of the invaluable support resources available out
              there, which, when put into practice, can allow students and
              professionals to develop personally and professionally and
              continue to be resilient during their aviation training &
              afterwards for better mental well-being in a high-pressure
              environment
            </p>
          </div>
        </div>
      </section>

      {/* Introducing Our Expert Aviation Counselling Team:
       */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-Secondary">
              Introducing Our Expert Aviation Counselling Team:
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Our expert staff of aviation professionals combines experience
              from several airlines, as well as professionals who have worked
              with the Ministry of Civil Aviation (DGCA) and the Directorate
              General of Civil Aviation (DGCA). We know that sometimes success
              in aviation is not an instant light bulb and can be few and far
              between.
            </p>
            <br />
            <p className="text-lg leading-relaxed">
              This is why we focus on providing the best solutions to the failed
              candidates for both pilots and cabin crew who need to reappear in
              exams & interviews. Whether you are looking to break into the
              aviation industry with no experience or seeking a career
              transition, our team of seasoned experts provides tailored advice,
              constructive feedback, and key insights to help you navigate
              through hurdles, sharpen skills, and reach your heights in
              aviation. We know that giving exams and interviews again can be a
              bit daunting, so with our professional assistance, you will go
              through any potential hump to reach the sky in your aviation
              journey.
            </p>
          </div>
          <img
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/2.jpg"
            alt="Expert Counselling Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Our Counselling?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/3.jpg"
              alt="Expert Guidance"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Expert Guidance
            </h3>
            <p className="text-gray-600 text-sm">
              The vast majority of our team members are seasoned professionals
              with years of experience in the aviation recruitment and selection
              process. They add relevance and value to every counseling session
              to ensure every candidate is receiving the best possible advice.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/4.jpg"
              alt="Tailored Solutions"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Tailored Solutions
            </h3>
            <p className="text-gray-600 text-sm">
              We are well aware that candidates are not all the same. This is
              why we customize counseling and technical analysis services for
              candidates, so they receive tailored coaching to suit their needs
              and maximize development and support.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/5.jpg"
              alt="Cutting-Edge Technology"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Cutting-Edge Technology
            </h3>
            <p className="text-gray-600 text-sm">
              Utilizing the best technology and data analysis, our team delivers
              unmatched technical analysis and identifies any weaknesses and
              opportunities for improvement, as well as evidence-based
              suggestions to help improve performance.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/counsling/6.jpg"
              alt="Proven Success"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2 text-Secondary">
              Proven Success
            </h3>
            <p className="text-gray-600 text-sm">
              Our success speaks for itself in the variety of positions our
              candidates have secured through leading airlines globally. Our
              unwavering success is attributed to our focus on process and
              people in recruitment and the strength of our team!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-primary to-blue-900 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Reclaim Your Aviation Dream?
        </h2>
        <p className="max-w-2xl mx-auto mb-6">
          Let our expert team guide you back to the skies with confidence and
          skill.
        </p>
        <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          <Link to="/contact-us"> Book Your Counselling Session</Link>
        </button>
      </section>
    </div>
  );
};

export default CounsellingReappearance;
