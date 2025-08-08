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
            Star Alliance Aviation Academy is a team of passionate and dedicated professionals who are committed to providing the highest quality products and services to our customers.
          </p>
          <div className="space-y-4 text-[15px] leading-relaxed text-gray-100">
            <p>
              Our company was founded in 2022 with the goal of filling a need in the market for high-quality, innovative products. Since then, we have grown significantly, but our commitment to excellence has never wavered.
            </p>
            <p>
              We are proud of the strong relationships we have built with our customers and partners over the years, and we are dedicated to continuing to provide the best possible experience for all of our clients and associates.
            </p>
            <p>
              Our team is made up of experts in a variety of fields, including engineering, quality, design, and customer service. We are constantly striving to improve and stay at the forefront of our industry, and we are always looking for new ways to exceed our customers’ expectations.
            </p>
          </div>
        </div>

        {/* Right: Grid Images */}
        <div className="grid grid-cols-2 gap-4">
          <img  loading="lazy"
            src="https://images.pexels.com/photos/3844917/pexels-photo-3844917.jpeg"
            alt="crew"
            className="rounded-xl h-44 w-full object-cover shadow-md"
          />
          <img  loading="lazy"
            src="https://images.pexels.com/photos/912050/pexels-photo-912050.jpeg"
            alt="plane"
            className="rounded-xl h-44 w-full object-cover shadow-md"
          />
          <img  loading="lazy"
            src="https://images.pexels.com/photos/3274304/pexels-photo-3274304.jpeg"
            alt="attendant"
            className="rounded-xl h-44 w-full object-cover shadow-md"
          />
          <img  loading="lazy"
            src="https://images.pexels.com/photos/3401403/pexels-photo-3401403.jpeg"
            alt="pilot"
            className="rounded-xl h-44 w-full object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
