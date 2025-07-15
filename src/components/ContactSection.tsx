"use client";

import { PhoneCall, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    type: "Telefon",
    value: "0539 590 99 34 - Abdurrahman Usta",
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    href: "tel:05395909934",
    bg: "bg-red-600",
  },
  {
    type: "Telefon",
    value: "0501 052 98 19 - Orhan Usta",
    icon: <PhoneCall className="w-6 h-6 text-white" />,
    href: "tel:05010529819",
    bg: "bg-red-600",
  },
  {
    type: "WhatsApp",
    value: "0539 590 99 34 - Abdurrahman Usta",
    icon: <FaWhatsapp className="w-6 h-6 text-white" />,
    href: "https://wa.me/905395909934",
    bg: "bg-green-600",
  },
  {
    type: "WhatsApp",
    value: "0501 052 98 19 - Orhan Usta",
    icon: <FaWhatsapp className="w-6 h-6 text-white" />,
    href: "https://wa.me/905010529819",
    bg: "bg-green-600",
  },
  {
    type: "Konum",
    value: "Konumumuz",
    icon: <MapPin className="w-6 h-6 text-white" />,
    href: "https://maps.google.com?q=Ankara+Oto+Lastik",
    bg: "bg-blue-600",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="w-full bg-gray-100 py-10 px-4">
      <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-6">
        {contacts.map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.3 }}
            className="flex items-center gap-3 px-5 py-3 border rounded-lg shadow-md transition-transform hover:scale-105 bg-white"
          >
            <div className={`p-2 rounded-full ${item.bg} animate-pulse`}>
              {item.icon}
            </div>
            <span className="text-lg font-semibold text-gray-800">
              {item.value}
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
