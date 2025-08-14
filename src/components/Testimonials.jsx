import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Captain Maanya",
    position: "Happy Student",
    image: "https://starallianceaviation.com/wp-content/uploads/2019/06/Manaya.jpg",
    quote:
      "Star Alliance Aviation has been instrumental in shaping my career. The instructors are top-notch, and the environment is so supportive.",
  },
  {
    name: "Captain Karan Nayak",
    position: "Happy Student",
    image: "https://starallianceaviation.com/wp-content/uploads/2020/08/KaranNayak.jpg",
    quote:
      "I loved the detailed training modules and the personal attention I received during my CPL training.",
  },
  {
    name: "Harshita",
    position: "Cabin Crew in Air India",
    image: "https://starallianceaviation.com/wp-content/uploads/2019/06/Harshita.jpg",
    quote:
      "Their RTR preparation is unmatched. I cleared my exam in the first attempt. Highly recommended!",
  },
  {
    name: "Captain Vishal Jakhar",
    position: "Happy Student",
    image: "https://starallianceaviation.com/wp-content/uploads/2020/08/Karan-Nayak.jpg",
    quote:
      "The cabin crew training was exceptional—practical, relevant, and engaging.",
  },
];

const Testimonials = () => {
  return (
    <section
      className="relative py-24 px-4 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 overflow-hidden"
      id="testimonials"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571019613578-2b5de7c0fe49?auto=format&fit=crop&w=1470&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className=" text-red-400 mb-12 max-w-2xl mx-auto">
          _ Student Testimonials _
        </h2>
        <p className=" text-4xl md:text-5xl font-extrabold text-indigo-900 mb-8">
          What Our Students Say about us
        </p>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={40}
          loop
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true, el: ".custom-pagination" }}
          navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="backdrop-blur-lg bg-white/80 rounded-2xl p-8 shadow-xl h-full flex flex-col justify-between hover:shadow-2xl transition duration-300">
                <div className="text-left">
                  <FaQuoteLeft className="text-indigo-400 text-3xl mb-4 animate-pulse" />
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {t.quote}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-4">
                  <img  loading="lazy"
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-indigo-200"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-bold text-indigo-800">
                      {t.name}
                    </h4>
                    <p className="text-sm text-gray-500">{t.position}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation */}
        <div className="relative z-10 flex justify-center mt-8">
          <button className="custom-prev absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 bg-white p-3 shadow rounded-full hover:bg-indigo-100">
            <svg
              className="w-5 h-5 text-indigo-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="custom-pagination flex gap-2 absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2"></div>

          <button className="custom-next absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 bg-white p-3 shadow rounded-full hover:bg-indigo-100">
            <svg
              className="w-5 h-5 text-indigo-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
