import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
const CounsellingReappearance = () => {
  return (
    <div className="bg-white text-gray-800">
      <section
        style={{
          backgroundImage: `url(https://starallianceaviation.com/wp-content/uploads/2025/07/Counselling-For-Reappearance.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-6 sm:p-8 h-[400px] sm:h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
          <div className="text-white p-4 sm:p-5 max-w-lg">
            <h1 className="text-3xl sm:text-5xl font-bold text-white font-heading animate-fade-in-down">
              Counselling (For Reappearance)
            </h1>
            <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation
              </Link>{" "}
              Counselling (For Reappearance)
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-[#2c3756] font-semibold rounded-full shadow hover:bg-gray-100 transition"
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
            src="https://starallianceaviation.com/wp-content/uploads/2024/03/Counselling-3.jpg"
            alt="Aviation Counselling"
            className="rounded-xl shadow-lg"
          />
          <div>
            <h1 className=" text-primary text-3xl font-bold my-2 font-heading ">
              Counselling (For Reappearance)
            </h1>
            <p className="text-lg mb-4 leading-relaxed pt-8">
              Counselling is vital for aspiring aviators, offering guidance and
              support through the unique challenges of pursuing a career in
              aviation. From managing stress to setting realistic goals,
              counselling provides invaluable tools for personal and
              professional development, fostering resilience and enhancing
              mental well-being in the high-pressure environment of aviation
              training and beyond.
            </p>
            <p className="text-lg leading-relaxed">
              Our elite team of aviation experts, comprised of seasoned
              professionals from various airlines and regulatory bodies such as
              the Ministry of Civil Aviation (MOCA) and the Directorate General
              of Civil Aviation (DGCA), is here to guide you every step of the
              way.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Aviation Counselling */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Expert Aviation Counselling
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              We specialize in counselling services for unsuccessful candidates
              who need to reappear in exams and interviews—catering to both
              pilots and cabin crew. Our experienced mentors offer personalized
              guidance, comprehensive feedback, and invaluable insights to help
              candidates overcome obstacles, refine their skills, and achieve
              success.
            </p>
            <p className="text-lg leading-relaxed">
              With our dedicated support, you can confidently navigate the
              challenges of reappearing in exams and interviews, empowering you
              to soar to new heights in your aviation career.
            </p>
          </div>
          <img
            src="https://starallianceaviation.com/wp-content/uploads/2024/03/Proven-Success.jpg"
            alt="Expert Counselling Team"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Key Features */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Why Choose Our Counselling?
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Expert-Guidance.jpg"
              alt="Expert Guidance"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Expert Guidance</h3>
            <p className="text-gray-600 text-sm">
              Industry veterans bring invaluable insights to every counselling
              session.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/TailoredSolutions.jpg"
              alt="Tailored Solutions"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Tailored Solutions</h3>
            <p className="text-gray-600 text-sm">
              Customized plans and technical analysis to match individual needs.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Cutting-Edge.jpg"
              alt="Cutting-Edge Technology"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">
              Cutting-Edge Technology
            </h3>
            <p className="text-gray-600 text-sm">
              Advanced tools to identify improvement areas and boost
              performance.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-xl hover:shadow-xl transition">
            <img
              src="https://starallianceaviation.com/wp-content/uploads/2024/03/Counselling-2.jpg"
              alt="Proven Success"
              className="rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">Proven Success</h3>
            <p className="text-gray-600 text-sm">
              Candidates successfully placed in top airlines worldwide.
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
          Book Your Counselling Session
        </button>
      </section>
    </div>
  );
};

export default CounsellingReappearance;
