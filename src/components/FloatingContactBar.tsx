"use client";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-0 shadow-lg rounded-full overflow-hidden">
      <a
        href="tel:05395909934"
        className="bg-red-700 text-white flex items-center gap-2 px-5 py-2 rounded-l-full hover:bg-red-800 transition-all"
      >
        <FaPhoneAlt className="text-white" />
        <span className="font-bold">Şimdi Ara</span>
      </a>

      <div className="bg-white text-black font-bold px-3 py-1 border-2 border-gray-300 rounded-full text-sm -mx-2 z-10">
        7/24
      </div>

      <a
        href="https://wa.me/905395909934"
        target="_blank"
        className="bg-black text-white flex items-center gap-2 px-5 py-2 rounded-r-full hover:bg-gray-900 transition-all"
      >
        <span className="font-bold">WhatsApp</span>
        <FaWhatsapp className="text-white" />
      </a>
    </div>
  );
}
