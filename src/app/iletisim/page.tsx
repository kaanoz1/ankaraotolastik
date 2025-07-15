"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="w-full px-6 py-16 bg-white text-center" id="contact">
      {/* Animated Section Header */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-4xl font-bold text-gray-800 mb-12"
      >
        İletişim
      </motion.h2>

      {/* Contact Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
        {/* Email */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/contact-email.jpg')" }} // <- replace with actual image path
          >
            <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 bg-red-600 p-3 rounded-xl shadow-lg">
              <Mail className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="pt-12 pb-6 px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              E Posta Adresimiz
            </h3>
            <p className="text-sm text-blue-600">ornekemail123@gmail.com</p>
          </div>
        </div>

        {/* Phone */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/contact-phone.jpg')" }} // <- replace with actual image path
          >
            <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 bg-red-600 p-3 rounded-xl shadow-lg">
              <Phone className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="pt-12 pb-6 px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Telefon Numaralarımız
            </h3>
            <p className="text-sm text-gray-800">
              0539 590 99 34 - Abdurrahman Usta
            </p>
            <p className="text-sm text-gray-800">0501 052 98 19 - Orhan Usta</p>
          </div>
        </div>

        {/* Address */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div
            className="h-48 bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/contact-address.jpg')" }} // <- replace with actual image path
          >
            <div className="absolute bottom-[-24px] left-1/2 -translate-x-1/2 bg-red-600 p-3 rounded-xl shadow-lg">
              <MapPin className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="pt-12 pb-6 px-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Adresimiz
            </h3>
            <p className="text-sm text-gray-800">
              Örnek email
              <br />
              Örnek email
            </p>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <div className="w-full">
        <iframe
          title="google-maps"
          src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d96210.7424360594!2d28.86645666044923!3d41.09989791763953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d40.9925727!2d28.9275681!4m3!3m2!1d41.1018383!2d28.8839661!5e0!3m2!1sen!2str!4v1752498645078!5m2!1sen!2str"
          loading="lazy"
          className="w-full h-[400px] md:h-[500px] rounded-xl shadow-md"
        ></iframe>
      </div>
    </section>
  );
}
