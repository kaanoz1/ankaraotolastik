"use client";

import CountUp from "react-countup";

const stats = [
  { title: "Lastik Değişimi", value: 900 },
  { title: "Araç Kurtarma", value: 350 },
  { title: "Yıllık Tecrübe", value: 20 },
];

export default function StatsCounter() {
  return (
    <section className="bg-teal-800 py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row justify-around items-center gap-8">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-teal-700 px-10 py-6 rounded-lg text-center shadow-md w-64"
          >
            <h3 className="text-4xl font-bold mb-2">
              <CountUp
                start={0}
                end={item.value}
                duration={4 - index * 0.3}
                delay={0.5}
              />
              +
            </h3>
            <p className="text-lg font-medium">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
