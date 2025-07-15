"use client";

import { cn } from "@/libs/cn";
import * as Accordion from "@radix-ui/react-accordion";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import faq from "@/assets/images/faq.jpg";
const faqs = [
  {
    question: "Hangi Hizmetleri Sunuyorsunuz?",
    answer: (
      <ul className="space-y-2">
        {[
          "Lastik değişimi",
          "Lastik bakımı",
          "Tekerlek balans ayarı",
          "Bilgisayarlı arıza tespiti",
          "Araba kurtarma ve taşıma",
          "Periyodik bakım",
        ].map((service, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check className="w-4 h-4 mt-1 text-green-600 shrink-0" />
            <span>{service}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    question: "Ne Zaman Yardım Alabilirim?",
    answer: "Hizmetlerimiz 7 gün 24 saat boyunca aktiftir.",
  },
  {
    question: "Yardım Almak İçin Neler Yapmalıyım?",
    answer:
      "Bizi telefonla arayabilir veya WhatsApp’tan konum paylaşabilirsiniz.",
  },
  {
    question: "Ankara'nın Hangi Bölgelerine Hizmet Veriyorsunuz?",
    answer: "Ankara'nın tüm ilçelerine ve bazı çevre illere hizmet veriyoruz.",
  },
  {
    question: "Ödemeyi Nasıl Yapabilirim?",
    answer: "Nakit, kredi kartı veya havale yoluyla ödeme yapabilirsiniz.",
  },
];

export default function FAQSection() {
  return (
    <section className="w-full bg-sky-50 py-16 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-start gap-10">
        {/* Left side image & text */}
        <div className="md:w-1/2 space-y-6">
          <div className="bg-red-600 text-white px-4 py-1 inline-block text-sm font-medium rounded-full">
            SIKÇA SORULAN SORULAR
          </div>
          <p className="text-gray-800 text-lg font-semibold leading-relaxed">
            Ankara Oto Yol Yardım olarak, yolda kaldığınızda, lastik
            patladığında, arızalandığınızda veya başka bir yol yardımı
            ihtiyacınız olduğunda, hızlı ve güvenli hizmet sunuyoruz. Aşağıda
            sıkça sorulan soruları bulabilir, hizmetlerimiz hakkında daha fazla
            bilgi alabilirsiniz.
          </p>
          <Image
            src={faq}
            alt="Sıkça Sorulan Sorular"
            width={500}
            height={300}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Right side accordion */}
        <div className="md:w-1/2 w-full">
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="overflow-hidden border border-gray-300 rounded-xl"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger
                    className={cn(
                      "flex justify-between items-center w-full px-6 py-4 font-semibold text-left text-base md:text-lg transition-all",
                      "bg-white hover:bg-gray-50",
                      "data-[state=open]:bg-teal-600 data-[state=open]:text-white"
                    )}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className="transition-transform duration-300 ease-in-out data-[state=open]:rotate-180"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content
                  className={cn(
                    "px-6 pb-4 text-sm md:text-base bg-white text-gray-700",
                    "data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown"
                  )}
                >
                  {faq.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
