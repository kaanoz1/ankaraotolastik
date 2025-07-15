"use client";

import { motion } from "framer-motion";
import { Card, Flex, Heading, Inset } from "@radix-ui/themes";
import Image from "next/image";

import Main4 from "@/assets/images/main-4.jpg";
import Main3 from "@/assets/images/main-3.jpg";
import Main5 from "@/assets/images/main-5.jpg";
import Main6 from "@/assets/images/main-6.jpg";
import Main7 from "@/assets/images/main-7.jpg";
import Main8 from "@/assets/images/main-8.jpg";

const hizmetler = [
  { title: "Ankara Oto Lastik", image: Main7 },
  { title: "Ankara Lastik Değişimi", image: Main8 },
  { title: "Ankara Lastik Hava Basma", image: Main3 },
  { title: "Ankara Lastik Onarımı", image: Main4 },
  { title: "Ankara Jant Düzeltme", image: Main5 },
  { title: "Ankara Lastik Tekerlik Balansı", image: Main6 },
];

export default function HizmetlerimizSection() {
  return (
    <section className="w-full text-center" id="hizmetlerimiz">
      {/* Hizmetlerimiz Section */}
      <div className="bg-orange-50 px-6 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-orange-700 mb-16"
        >
          Hizmetlerimiz
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {hizmetler.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="transform transition-transform duration-300 hover:scale-[1.03]"
            >
              <Card
                variant="classic"
                size="2"
                style={{
                  overflow: "hidden",
                  padding: 0,
                  borderRadius: "1rem",
                  border: "1px solid #f97316", // orange-500 border
                  backgroundColor: "#fff",
                }}
              >
                <Inset side="top" clip="border-box">
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="object-cover w-full h-[200px]"
                  />
                </Inset>

                <Flex direction="column" gap="3" p="4">
                  <Heading
                    size="3"
                    as="h3"
                    className="text-center text-orange-700 font-semibold tracking-tight"
                  >
                    {item.title}
                  </Heading>
                </Flex>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Neden Bizi Seçmelisiniz Section */}
      <div className="w-full bg-gradient-to-b from-red-100 to-white px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-red-700 mb-10"
        >
          Neden Bizi Seçmelisiniz?
        </motion.h2>

        <div className="max-w-5xl mx-auto text-left space-y-6 text-gray-800 text-[15px] leading-relaxed">
          {[
            {
              title: "7/24 Hizmet",
              content:
                "Oto çekici hizmetimizle, her zaman yanınızdayız. Yolda kalmanıza neden olan herhangi bir durum olsun, her saatte ve günde yardımınıza geliriz.",
            },
            {
              title: "Mobil Hizmet",
              content:
                "Oto çekici için servise gitmenize gerek yok. Mobil ekiplerimiz, aracınıza geldiğimiz her noktada hızlıca yardım eder ve taşıma işlemini yapar.",
            },
            {
              title: "Profesyonel Ekip",
              content:
                "Ankara Oto Çekici olarak, uzman ekibimiz ile aracınızı güvenli bir şekilde taşıyoruz. Her türlü arızayı hızlıca çözerek, sorunsuz bir taşıma işlemi sağlıyoruz.",
            },
            {
              title: "Hızlı Müdahale",
              content:
                "Aracınız yolda kaldığında, hızla olay yerine ulaşır ve taşıma işlemini gerçekleştirebiliriz.",
            },
            {
              title: "Uygun Fiyatlar",
              content:
                "Kaliteli hizmeti, uygun fiyatlarla sunarak, bütçenizi de düşünüyoruz.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border-l-4 border-blue-500 pl-4"
            >
              <strong className="text-blue-700">{item.title}:</strong>{" "}
              <span>{item.content}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
