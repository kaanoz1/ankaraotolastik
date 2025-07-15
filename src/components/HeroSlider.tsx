"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Slider1 from "@/assets/images/main-1.jpg";
import Slider2 from "@/assets/images/main-2.jpg";
import Slider3 from "@/assets/images/main-3.jpg";
import Slider4 from "@/assets/images/main-5.jpg";

const slides = [
  {
    image: Slider1,
    title: "Lastik Tamiri",
    desc: "Ankara’da lastik arızalarında hızlı müdahale.",
  },
  {
    image: Slider2,
    title: "Yol Yardım",
    desc: "7/24 çekici ve yol yardım hizmeti.",
  },
  {
    image: Slider3,
    title: "Araç Kurtarma",
    desc: "Güvenli ve hızlı araç taşıma hizmeti.",
  },
  {
    image: Slider4,
    title: "7/24 Hizmetinizdeyiz",
    desc: "Profesyonel ekibimiz ile size hızlı bir hizmet sunuyoruz.",
  },
];

export default function HeroSlider() {
  return (
    <section className="w-full h-[500px] relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[500px]">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-start p-10 text-white space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl max-w-lg">{slide.desc}</p>
                <a
                  href="#contact"
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded text-lg font-semibold transition"
                >
                  İletişim
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
