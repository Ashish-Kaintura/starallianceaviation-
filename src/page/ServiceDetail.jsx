import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/services.json";

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === `/${slug}`);

  if (!service) {
    return (
      <div className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
        <p className="mb-6">The service you are looking for does not exist.</p>
        <Link to="/services" className="text-blue-500 underline">
          Back to Services
        </Link>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[600px] relative"
      >
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="relative z-10 w-[1300px] mt-8">
          <div className="text-white p-5 max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-heading animate-fade-in-down">
              {service.name}
            </h1>
            <h2 className="mt-2 text-sm text-white font-heading">
              <Link to="/" className="hover:underline text-blue-300">
                Star Alliance Aviation
              </Link>{" "}
              {service.name}
            </h2>
            <Link
              to="/contact"
              className="inline-block mt-6 px-6 py-3 bg-white text-primary font-heading font-semibold rounded-full shadow hover:bg-gray-100 transition"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-14 bg-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-4xl font-bold text-primary font-heading mb-5">
              {service.content.title}
            </h2>
            <p className="text-gray-700 font-sans text-base md:text-lg leading-relaxed">
              {service.content.intro}
            </p>{" "}
            <br />
            <h2 className="text-xl md:text-4xl font-bold text-primary font-heading mb-5">
              {service.content.heading1}
            </h2>
            <p className="text-gray-700 font-sans text-base md:text-lg leading-relaxed">
              {service.content.pera}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                loading="lazy"
                src={service.image}
                alt={service.name}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-14 bg-gray-50 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                loading="lazy"
                src={service.image}
                alt={service.name}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-3xl font-bold text-primary font-heading mb-4">
              What We Offer
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans text-base md:text-lg">
              {service.content.section?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 bg-white px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-3xl font-bold text-primary font-heading mb-4">
              Why Choose Us
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 font-sans text-base md:text-lg">
              {service.content.section1?.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img
                loading="lazy"
                src={service.image}
                alt={service.name}
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center px-4 py-16 border-b-2 bg-white">
        <div className="flex flex-col-reverse lg:flex-row max-w-7xl w-full gap-12 items-center">
          <div className="list-disc pl-5 text-gray-700 font-sans max-w-1/2">
            <h3 className="text-2xl font-bold mt-8 py-4">
              {service.content.title3}
            </h3>
            <p>{service.content.pera1}</p>
          </div>

          <div className="w-full lg:w-3/3 flex justify-center">
            <img
              loading="lazy"
              src={service.image}
              alt="Medical Exam"
              className="rounded-xl w-[90%] max-w-md object-cover shadow-xl rounded-tr-[100px] rounded-bl-[100px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="mt-10">
          <Link
            to="/services"
            className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceDetail;
