"use client";

import { FC, Fragment, useState } from "react";
import Link from "next/link";
import { Dialog, Transition, TransitionChild } from "@headlessui/react";
import { Menu, PhoneCall } from "lucide-react";
import Image from "next/image";
import logo from "@/assets/images/logo.jpg";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-orange-100 via-white to-cyan-100 shadow-md">
      <nav
        className="h-[80px] container mx-auto max-w-screen-xl px-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="Ankara Oto Lastik Logo"
            width={80}
            height={80}
            className="rounded-full"
          />
          <span className="text-gray-800 text-2xl font-bold">
            Ankara Oto Lastik
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-gray-700 font-semibold text-xl">
          {["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "İletişim"].map(
            (label, i) => (
              <Link
                key={i}
                href={getUrl(label)}
                className="hover:text-orange-500 transition-colors duration-200"
              >
                {label}
              </Link>
            )
          )}

          <div className="flex items-center gap-2 pl-4 border-l border-gray-300 text-red-600 animate-pulse">
            <a
              href="tel:+905395909934"
              className="flex items-center gap-2 pl-4 border-l border-gray-300 text-red-600 hover:text-orange-500 transition-colors duration-200"
            >
              <PhoneCall className="w-6 h-6 animate-wiggle" />
              <span className="font-bold">539 590 99 34</span>
            </a>
          </div>
        </div>

        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(true)}
          aria-label="Mobil Menü Aç"
        >
          <Menu size={32} />
        </button>
      </nav>

      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className="relative z-50 md:hidden"
        >
          {/* Overlay */}
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="ease-in duration-300"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <div className="fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white shadow-lg p-6 transform transition-transform duration-300 ease-in-out">
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 text-right w-full mb-6 text-lg"
              >
                Kapat ✕
              </button>
              <nav className="flex flex-col gap-6 text-gray-800 font-semibold text-xl">
                {["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "İletişim"].map(
                  (label, i) => (
                    <Link
                      key={i}
                      href={getUrl(label)}
                      className="hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  )
                )}

                <div className="flex items-center gap-2 pl-4 border-l border-gray-300 text-red-600 animate-pulse">
                  <a
                    href="tel:054648643415"
                    className="flex items-center gap-2 pl-4 border-l border-gray-300 text-red-600 hover:text-orange-500 transition-colors duration-200"
                  >
                    <PhoneCall className="w-6 h-6 animate-wiggle" />
                    <span className="font-bold">539 590 99 34</span>
                  </a>
                </div>
              </nav>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </header>
  );
};

export default Navbar;

const getUrl = (path: string) => {
  switch (path) {
    case "Anasayfa":
      return "/";
    case "Hizmetlerimiz":
      return "hizmetlerimiz";
    case "İletişim":
      return "iletisim";
    case "Hakkımızda":
      return "hakkimizda";
    default:
      return "subemiz";
  }
};
