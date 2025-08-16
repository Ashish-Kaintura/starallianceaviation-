import React from "react";

const WhoWeAre = () => {
  return (
    <section className="bg-gradient-to-br from-[#e9efff] to-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left: Text Content */}
        <div className="bg-[#103057] text-white p-8 md:p-10 rounded-3xl shadow-lg">
          <p className="text-Secondary tracking-wider uppercase text-sm font-medium mb-2">
            Who we are
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Star Alliance Aviation <br /> Private Limited
          </h2>
          <p className="font-semibold mb-4">
            Star Alliance Aviation Academy is a premier aviation training
            institute driven by a team of passionate and experienced
            professionals dedicated to delivering top-tier training, products,
            and services. We started the academy in 2022 in response to the need
            for high-quality, innovative solutions and services to support the
            industry's needs. We have continuously raised the bar in terms of
            aviation solutions and services since then.
          </p>
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-100">
            <p>
              Although we have grown significantly over the years, our
              commitment to delivering excellence in solutions and services has
              remained the same. We have built strong client and partner
              relationships based on confidence and trust. Our industry
              partners, clients, and students will always receive the highest
              quality service and delivery through our relationships. All of
              these qualities bring value to our clients by helping them achieve
              their respective goals.
            </p>
            <p>
              Our management team is made up of qualified professionals across
              various disciplines, including engineering, regulatory and quality
              assurance, design, and customer service. The management team
              leaders have a distribution across the aviation industry but all
              share a common vision to lead and innovate in the aviation space.
              Change is a constant in our business practices, meaning we
              continuously learn, identify weaknesses and improvement
              opportunities, and even expand our service options, and most
              importantly, keep delivery at the forefront of our capabilities.
              We strive to be more than just purveyors of aviation training and
              development.
            </p>
          </div>
        </div>

        {/* Right: Grid Images */}
        <div className="grid grid-cols-2 gap-4">
          <img
            loading="lazy"
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/About/A1.jpg"
            alt="crew"
            className="rounded-xl h-44 w-full object-contain shadow-md"
          />
          <img
            loading="lazy"
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/About/A2.jpg"
            alt="plane"
            className="rounded-xl h-44 w-full object-contain shadow-md"
          />
          <img
            loading="lazy"
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/About/A3.jpg"
            alt="attendant"
            className="rounded-xl h-44 w-full object-contain shadow-md"
          />
          <img
            loading="lazy"
            src="https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/About/A4.jpg"
            alt="pilot"
            className="rounded-xl h-44 w-full object-contain shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
