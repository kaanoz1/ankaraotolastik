"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

import Main4 from "@/assets/images/main-4.jpg";
import Main5 from "@/assets/images/main-5.jpg";
import Main6 from "@/assets/images/main-6.jpg";
import Main7 from "@/assets/images/main-7.jpg";
import Main8 from "@/assets/images/main-8.jpg";

const services = [
  {
    title: "Ankara Periyodik Bakım",
    description: "Araçlarınız için düzenli bakım hizmetleri.",
    image: Main4,
    href: Main4,
  },
  {
    title: "Ankara Oto Lastik",
    description: "Her marka araca uygun lastik değişimi.",
    image: Main5,
    href: Main5,
  },
  {
    title: "Ankara Yol Yardım",
    description: "Yolda kaldığınızda anında müdahale.",
    image: Main8,
    href: Main8,
  },
  {
    title: "Ankara Çekici",
    description: "Profesyonel çekici hizmeti 7/24.",
    image: Main7,
    href: Main7,
  },
  {
    title: "Akü Değişimi",
    description: "Yerinde akü kontrolü ve değişimi.",
    image: Main6,
    href: Main6,
  },
];

export default function ServicesSlider() {
  return (
    <section className="w-full bg-sky-50 py-12 px-2">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Ankara Oto Lastik&apos;in Profesyonel Hizmetleri
        </h2>

        <p>
          Aşağıda Ankara Oto Lastik&apos;in hizmetleri aşağıda listelenmiştir.
          Kaydırınız.
        </p>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          breakpoints={{
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 4000 }}
          navigation
          pagination={{ clickable: true }}
        >
          {services.map((service, i) => (
            <SwiperSlide key={i}>
              <div className="relative rounded-lg overflow-hidden shadow-md group h-[300px] md:h-[350px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-between p-6">
                  <div>
                    <h3 className="text-white text-2xl font-semibold mb-1">
                      {service.title}
                    </h3>
                    <p className="text-white text-sm max-w-xs">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href="/hizmetlerimiz"
                    className="text-white font-medium text-sm mt-4 underline hover:text-orange-400 transition"
                  >
                    Detaylı Bilgi →
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
