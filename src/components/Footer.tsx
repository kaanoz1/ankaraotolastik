import { Mail, Phone, MapPin, Wrench, Building2, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white px-6 pt-12 pb-6 flex flex-col items-center">
      {/* Top: Link Sections */}
      <div className="w-full max-w-7xl flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-10 flex-wrap">
          {/* Column 1: Hizmetlerimiz with Icon */}
          <div className="flex flex-col gap-2 min-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              <Wrench className="text-orange-500 w-5 h-5" />
              <h4 className="text-lg font-semibold">Hizmetlerimiz</h4>
            </div>
            {[
              "Ankara Lastik Yol Yardımı",
              "Ankara Oto Lastik",
              "Ankara Yol Yardım",
              "Ankara Periyodik Bakım",
              "Ankara Oto Kurtarma",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm hover:text-orange-500 transition"
              >
                <span className="text-orange-400">➜</span> {item}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 min-w-[200px]">
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="text-orange-500 w-5 h-5" />
              <h4 className="text-lg font-semibold">Kurumsal</h4>
            </div>
            {["Anasayfa", "Hakkımızda", "Hizmetlerimiz", "İletişim"].map(
              (item, idx) => (
                <a
                  key={idx}
                  href={getUrl(item)}
                  className="flex items-center gap-2 text-sm hover:text-orange-500 transition"
                >
                  <span className="text-orange-400">➜</span> {item}
                </a>
              )
            )}
          </div>

          <div className="flex flex-col gap-2 min-w-[220px]">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="text-orange-500 w-5 h-5" />
              <h4 className="text-lg font-semibold">Hizmet Bölgelerimiz</h4>
            </div>
            {[
              "Niğde Otoban Yol Yardım",
              "Ankara Otoban Yol Yardım",
              "Ankara Çevreyolu Yol Yardım",
              "Kızılcahamam Yol Yardım",
              "Saray Yol Yardım",
              "Yenikent Yol Yardım",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-sm hover:text-orange-500 transition"
              >
                <span className="text-orange-400">➜</span> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Orange Divider in the Middle */}
      <div className="w-full max-w-7xl my-10">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
      </div>

      {/* Bottom: Contact Info (responsive + links) */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-left bg-[#111] px-4 py-6 rounded-xl border-t-2 border-orange-500 flex-wrap">
        {/* Email */}
        <a
          href="mailto:ankaraotoyolyardim06@gmail.com"
          className="flex items-center gap-4 min-w-[250px] hover:opacity-80 transition"
        >
          <div className="p-2 border-2 border-dashed border-white rounded-full">
            <Mail className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-orange-500 font-semibold text-sm">
              E POSTA
            </span>
            <span className="text-white font-medium text-sm">
              ornekemail123@gmail.com
            </span>
          </div>
        </a>

        {/* Phone 1 */}
        <a
          href="tel:05395909934"
          className="flex items-center gap-4 min-w-[200px] hover:opacity-80 transition"
        >
          <div className="p-2 border-2 border-dashed border-white rounded-full">
            <Phone className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-orange-500 font-semibold text-sm">
              BİZİ ARAYIN
            </span>
            <span className="text-white font-medium text-sm">
              0539 590 99 34 - Abdurrahman Usta
            </span>
          </div>
        </a>

        {/* Phone 2 */}
        <a
          href="tel:05010529819"
          className="flex items-center gap-4 min-w-[200px] hover:opacity-80 transition"
        >
          <div className="p-2 border-2 border-dashed border-white rounded-full">
            <Phone className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-orange-500 font-semibold text-sm">
              BİZİ ARAYIN
            </span>
            <span className="text-white font-medium text-sm">
              0501 052 98 19 - Orhan Usta
            </span>
          </div>
        </a>

        {/* Address */}
        <a
          href="https://maps.google.com?q=Fevzi+Çakmak+mahallesi,+Cumhuriyet+bulvarı+No:12+Sincan+Ankara"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 min-w-[280px] hover:opacity-80 transition"
        >
          <div className="p-2 border-2 border-dashed border-white rounded-full">
            <MapPin className="text-white w-5 h-5" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-orange-500 font-semibold text-sm">
              ADRESİMİZ
            </span>
            <span className="text-white font-medium text-sm">
              Örnek Adress
              <br />
              Örnek Adress
            </span>
          </div>
        </a>
      </div>
    </footer>
  );
}

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
