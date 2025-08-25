// src/components/HeroSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectCreative,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-creative";

const slides = [
  {
    id: 1,
    image: "https://i.postimg.cc/43D5sCxg/Website-Home-Page-Banner-1.jpg",
  },
  {
    id: 2,
    image: "https://i.postimg.cc/Y2L1t24L/Website-Home-Page-Banner-2.jpg",
  },
  {
    id: 3,
    image: "https://i.postimg.cc/0yHnXKgr/Website-Home-Page-Banner-3.jpg",
  },
];

export default function HeroSlider() {
  return (
    <div className="w-full h-[100vh] relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectCreative]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -200],
            rotate: [0, 0, -15],
          },
          next: {
            shadow: true,
            translate: ["100%", 0, 0],
          },
        }}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        speed={1000} // smooth transition
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-center bg-cover"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
