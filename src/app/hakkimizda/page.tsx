"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CountUp from "react-countup";
import Main3 from "@/assets/images/main-3.jpg";
import Main5 from "@/assets/images/main-5.jpg";
import Main6 from "@/assets/images/main-6.jpg";
import Main7 from "@/assets/images/main-7.jpg";
import Main8 from "@/assets/images/main-8.jpg";
import Main1 from "@/assets/images/main-1.jpg";

export default function AboutPage() {
  return (
    <section className="w-full px-6 py-16 bg-white text-center space-y-16">
      {/* 1. Section Header */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800"
      >
        Hakkımızda
      </motion.h2>

      {/* 2. Image + Explanation Block */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full h-full rounded-xl overflow-hidden"
        >
          <Image
            src={Main3}
            alt="Ankara Oto Yol Yardım"
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-red-700 text-white rounded-xl p-8 text-left space-y-4"
        >
          <span className="bg-white text-red-700 font-semibold px-3 py-1 rounded-full text-sm inline-block">
            Hakkımızda
          </span>
          <h3 className="text-3xl font-bold">Ankara Oto Lastik</h3>
          <p className="text-sm leading-relaxed">
            <strong>Ankara Oto Lastik</strong>, araç sahiplerine{" "}
            <strong>güvenli, hızlı ve profesyonel yol yardım hizmetleri</strong>{" "}
            sunan, sektörün lider firmalarından biridir. Lastik tamiri, lastik
            değişimi, lastik patlaması, arıza, kaza veya benzeri acil durumlarla
            karşılaştığınızda, <strong>Ankara Oto Lastik</strong> ekibi olarak{" "}
            <strong>7/24 yanınızdayız</strong>.{" "}
            <strong>Ankara’nın her bölgesine</strong> hızla ulaşabilen mobil
            ekiplerimiz ile, aracınızın güvenli bir şekilde yola devam etmesini
            sağlıyoruz.
            <br />
            <br />i Adresimiz:
          </p>
        </motion.div>
      </div>

      <div className="w-full bg-gray-100 py-16 flex flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-6xl font-bold text-teal-800 flex items-center gap-2"
        >
          <CountUp start={0} end={20} duration={3} delay={0.5} />+
        </motion.div>
        <p className="text-lg text-gray-600 mt-2">
          Yıllık Tecrübemizle Hizmetinizdeyiz
        </p>
      </div>

      {/* 4. Four-Image Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {[Main1, Main5, Main6, Main7, Main8].map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden shadow-md"
          >
            <Image
              src={img} // ← replace with your real images
              alt={`Hizmet ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
