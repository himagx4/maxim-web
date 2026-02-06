import React, { useState } from "react";
import {
  ShieldCheck,
  Truck,
  Box,
  Globe,
  Headset,
  Zap,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronRight,
  HardHat,
  Users,
} from "lucide-react";

export default function ZERLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState("tr"); // "tr" veya "en"

  // Dil içerikleri
  const content = {
    tr: {
      nav: {
        home: "Anasayfa",
        whyUs: "Neden Biz?",
        contact: "İletişime Geç",
      },
      hero: {
        vision: "ZER VİZYONU",
        title1: "İnşaat, Tekstil, Plastik",
        title2: "Çözüm Ortağınız.",
        desc1: "ZER olarak, geleneksel toptancılığın ötesine geçiyoruz.",
        desc2: "Endüstriyel alanların hijyen ve atık yönetimi ihtiyaçlarını, en dayanıklı ekipmanlarla karşılıyoruz.",
        industrial: "Endüstriyel Güç",
        industrialDesc: "Ağır hizmet tipi ekipmanlar.",
        team: "Uzman Ekip",
        teamDesc: "Profesyonel operasyon yönetimi.",
        trust: "20+ / 20+ YILLIK GÜVEN",
      },
      features: {
        title: "NEDEN ZER?",
        heading: "Bizi Sektörde Öncü Yapan Farklılıklarımız",
        items: [
          {
            title: "İnşaat Kalitesi",
            description: "Tedarik ettiğimiz her ürün titiz bir kalite kontrol sürecinden geçer. Sadece en iyiyi sunuyoruz.",
            icon: ShieldCheck,
          },
          {
            title: "Tekstil Lojistiği",
            description: "Geniş araç filomuz ve optimize edilmiş rotalarımızla ürünlerinizi zamanında ulaştırıyoruz.",
            icon: Truck,
          },
          {
            title: "Plastik Stok Gücü",
            description: "Büyük ölçekli depolama alanlarımız sayesinde taleplerinizi bekletmeden, anında karşılıyoruz.",
            icon: Box,
          },
          {
            title: "Geniş Dağıtım Ağı",
            description: "Ulusal ve uluslararası operasyon yeteneğimizle her türlü ihtiyaca cevap veriyoruz.",
            icon: Globe,
          },
          {
            title: "7/24 Destek",
            description: "Kurumsal çözüm merkezimiz her türlü sorunuza en kısa sürede yanıt vermektedir.",
            icon: Headset,
          },
          {
            title: "Hızlı Teslimat",
            description: "İş süreçlerinizi aksatmayacak şekilde en hızlı şekilde teslimat sağlıyoruz.",
            icon: Zap,
          },
        ],
      },
      contact: {
        title: "İLETİŞİM",
        heading1: "İş Ortağınız Olmaya",
        heading2: "Hazırız.",
        description: "Projeleriniz, talepleriniz veya iş ortaklığı teklifleriniz için bizimle iletişime geçebilirsiniz. Uzman ekibimiz en kısa sürede dönüş sağlayacaktır.",
        phone: "Telefon",
        email: "E-posta",
        address: "Adres",
        form: {
          name: "Ad Soyad",
          company: "Firma Adı",
          email: "E-posta",
          phone: "Telefon",
          message: "Mesajınız",
          submit: "Gönder",
          phonePlaceholder: "+90 (5__) ___ __ __",
          phoneHint: "Sadece rakam giriniz (örn: 5425560622)",
        },
      },
      footer: {
        description: "Endüstriyel endüstriyel ekipmanlar ve malzemeleri alanında öncü çözümler sunan çözüm ortağınız.",
        links: "BAĞLANTILAR",
        contactInfo: "TELEFON & ADRES",
        copyright: "© 2026 ZER. Tüm hakları saklıdır.",
      },
    },
    en: {
      nav: {
        home: "Home",
        whyUs: "Why Us?",
        contact: "Contact Us",
      },
      hero: {
        vision: "CORPORATE VISION",
        title1: "We Are The Strongest",
        title2: "Link in the Industry.",
        desc1: "As ZER, we go beyond traditional wholesale.",
        desc2: "We meet the hygiene and waste management needs of industrial areas with the most durable equipment.",
        industrial: "Industrial Power",
        industrialDesc: "Heavy-duty equipment.",
        team: "Expert Team",
        teamDesc: "Professional operations management.",
        trust: "20+ / 20+ YEARS OF TRUST",
      },
      features: {
        title: "WHY ZER?",
        heading: "Our Differences That Make Us Industry Leaders",
        items: [
          {
            title: "Superior Quality",
            description: "Every product we supply goes through a rigorous quality control process. We only offer the best.",
            icon: ShieldCheck,
          },
          {
            title: "Strong Logistics",
            description: "We deliver your products on time with our wide vehicle fleet and optimized routes.",
            icon: Truck,
          },
          {
            title: "High Stock Capacity",
            description: "Thanks to our large-scale storage areas, we meet your demands instantly without delay.",
            icon: Box,
          },
          {
            title: "Wide Distribution Network",
            description: "We respond to all kinds of needs with our national and international operational capability.",
            icon: Globe,
          },
          {
            title: "24/7 Support",
            description: "Our corporate solution center responds to all your questions in the shortest time.",
            icon: Headset,
          },
          {
            title: "Fast Delivery",
            description: "We provide delivery as quickly as possible without disrupting your business processes.",
            icon: Zap,
          },
        ],
      },
      contact: {
        title: "CONTACT",
        heading1: "Ready to Become",
        heading2: "Your Business Partner.",
        description: "You can contact us for your projects, requests or business partnership offers. Our expert team will respond as soon as possible.",
        phone: "Phone",
        email: "E-mail",
        address: "Address",
        form: {
          name: "Full Name",
          company: "Company Name",
          email: "E-mail",
          phone: "Phone",
          message: "Your Message",
          submit: "Send",
          phonePlaceholder: "+90 (5__) ___ __ __",
          phoneHint: "Enter only numbers (e.g., 05322600622)",
        },
      },
      footer: {
        description: "Your solution partner offering pioneering solutions in the field of industrial cleaning equipment and materials.",
        links: "LINKS",
        contactInfo: "PHONE & ADDRESS",
        copyright: "© 2026 ZER. All rights reserved.",
      },
    },
  };

  const currentContent = content[language as keyof typeof content];

  const address =
    "Çavuşoğlu Mahallesi Ticarethane Sokak no: 14 Yesilyurt/ Malatya";
  const phoneNumber = "+90 (532) 260 06 22";
  const email = "zergrup@zergrup.tr";
  const googleMapsLink = "https://maps.app.goo.gl/kDTzAJNcNUUG5i738";

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === "tr" ? "en" : "tr");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation - DEĞİŞİKLİK 1: "Z" ikonu kaldırıldı, sadece "ZER" yazısı */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-lg border-b border-gray-700 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            {/* Logo - "Z" ikonu kaldırıldı, sadece yazı */}
            <div className="flex items-center">
              <span className="text-5xl font-black text-white tracking-tighter">ZER</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-10 text-lg font-medium">
              <button
                onClick={handleHomeClick}
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
              >
                {currentContent.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("neden-biz")}
                className="text-gray-300 hover:text-white transition-colors px-4 py-2"
              >
                {currentContent.nav.whyUs}
              </button>
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-4 py-2"
              >
                <Globe size={18} />
                <span className="font-semibold">{language === "tr" ? "EN" : "TR"}</span>
              </button>
              <button
                onClick={() => scrollToSection("iletisim")}
                className="bg-white text-gray-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 border border-gray-200"
              >
                {currentContent.nav.contact}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {isMenuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-gray-800 rounded-xl mt-4 p-6 space-y-4 border border-gray-700">
              <button
                onClick={handleHomeClick}
                className="block w-full text-left text-lg text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {currentContent.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("neden-biz")}
                className="block w-full text-left text-lg text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                {currentContent.nav.whyUs}
              </button>
              <button
                onClick={toggleLanguage}
                className="block w-full text-left text-lg text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Globe size={20} />
                  <span>{language === "tr" ? "English (EN)" : "Türkçe (TR)"}</span>
                </div>
              </button>
              <div className="pt-4 border-t border-gray-700">
                <button
                  onClick={() => scrollToSection("iletisim")}
                  className="w-full bg-white text-gray-900 hover:bg-gray-100 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  {currentContent.nav.contact}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section - DEĞİŞİKLİK 2: Başlık boyutu küçültüldü, DEĞİŞİKLİK 3: 20+ blok taşındı */}
      <section
        id="kurumsal"
        className="relative pt-40 pb-28 md:pt-56 md:pb-40 overflow-hidden bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side: Content */}
            <div className="space-y-10">
              <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/30">
                {currentContent.hero.vision}
              </div>
              
              {/* DEĞİŞİKLİK 2: Başlık boyutu küçültüldü */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                {currentContent.hero.title1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  {currentContent.hero.title2}
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed">
                  {currentContent.hero.desc1}
                </p>
                <p className="text-xl sm:text-2xl text-gray-300 leading-relaxed max-w-3xl">
                  {currentContent.hero.desc2}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300">
                  <HardHat className="text-cyan-400 mb-5" size={40} />
                  <h3 className="text-2xl font-bold text-white mb-2">{currentContent.hero.industrial}</h3>
                  <p className="text-gray-400 text-lg">{currentContent.hero.industrialDesc}</p>
                </div>
                
                {/* DEĞİŞİKLİK 3: 20+ blok Uzman Ekip kartının üstüne taşındı */}
                <div className="space-y-6">
                  {/* 20+ Yıllık Güven bloğu */}
                  <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-6 shadow-2xl">
                    <div className="text-4xl font-black text-white mb-1">20+</div>
                    <div className="text-white/90 font-bold text-sm tracking-widest">
                      {currentContent.hero.trust}
                    </div>
                  </div>
                  
                  {/* Uzman Ekip kartı */}
                  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/70 transition-all duration-300">
                    <Users className="text-cyan-400 mb-5" size={40} />
                    <h3 className="text-2xl font-bold text-white mb-2">{currentContent.hero.team}</h3>
                    <p className="text-gray-400 text-lg">{currentContent.hero.teamDesc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Logo Area */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] w-full h-[500px] flex items-center justify-center relative shadow-2xl overflow-hidden border border-gray-700">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 opacity-50" />
                <div className="relative z-10 w-full h-full flex items-center justify-center p-0">
                  <div className="w-full h-full bg-black rounded-3xl flex items-center justify-center p-10">
                    <div className="text-center flex flex-col items-center justify-center">
                      <img
                        src="/favicon.png"
                        alt="ZER Logo"
                        className="max-w-[380px] w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differences Section */}
      <section id="neden-biz" className="py-28 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2.5 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/30 mb-6">
              {currentContent.features.title}
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6">
              {currentContent.features.heading}
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentContent.features.items.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-10 text-white border border-gray-700 hover:border-cyan-500/30 hover:bg-gray-800/70 hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center mb-8 border border-gray-700">
                    <IconComponent className="text-cyan-400" size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section - DEĞİŞİKLİK 4: Form sağa doğru genişletildi */}
      <section id="iletisim" className="py-28 relative overflow-hidden bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left side: Info */}
            <div className="space-y-12">
              <div className="space-y-8">
                <div className="inline-block px-5 py-2.5 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 backdrop-blur-sm rounded-full text-sm font-bold tracking-widest text-cyan-300 uppercase border border-cyan-500/30">
                  {currentContent.contact.title}
                </div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-white">
                  {currentContent.contact.heading1} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    {currentContent.contact.heading2}
                  </span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  {currentContent.contact.description}
                </p>
              </div>

              <div className="space-y-8">
                <a
                  href="tel:+905322600622"
                  className="flex items-start space-x-6 group cursor-pointer p-6 bg-gray-800/50 rounded-3xl hover:bg-gray-800/70 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/30 transition-colors">
                    <Phone className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {currentContent.contact.phone}
                    </p>
                    <p className="text-2xl font-bold text-white">{phoneNumber}</p>
                  </div>
                </a>

                <a
                  href="mailto:zergrup@zergrup.tr"
                  className="flex items-start space-x-6 group cursor-pointer p-6 bg-gray-800/50 rounded-3xl hover:bg-gray-800/70 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/30 transition-colors">
                    <Mail className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {currentContent.contact.email}
                    </p>
                    <p className="text-2xl font-bold text-white">{email}</p>
                  </div>
                </a>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-2 group cursor-pointer p-6 bg-gray-800/50 rounded-3xl hover:bg-gray-800/70 border border-gray-700 hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center border border-gray-700 group-hover:border-cyan-500/30 transition-colors">
                    <MapPin className="text-cyan-400" size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-1">
                      {currentContent.contact.address}
                    </p>
                    <p className="text-xl font-bold text-white leading-snug max-w-sm">
                      {address}
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right side: Form - DEĞİŞİKLİK 4: Form sağa doğru genişletildi */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-[3rem] p-8 md:p-12 border border-gray-700 shadow-2xl lg:w-full lg:max-w-none">
              <form
                action="https://formspree.io/f/xzdvqdng"
                method="POST"
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-300">
                      {currentContent.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-6 py-4 bg-gray-900 text-gray-100 placeholder:text-gray-500 rounded-2xl border border-gray-700 focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-300">
                      {currentContent.contact.form.company}
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Şirket A.Ş."
                      className="w-full px-6 py-4 bg-gray-900 text-gray-100 placeholder:text-gray-500 rounded-2xl border border-gray-700 focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-300">
                      {currentContent.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="zergrup@zergrup.tr"
                      required
                      className="w-full px-6 py-4 bg-gray-900 text-gray-100 placeholder:text-gray-500 rounded-2xl border border-gray-700 focus:border-cyan-500 focus:outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold uppercase tracking-widest text-gray-300">
                      {currentContent.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={currentContent.contact.form.phonePlaceholder}
                      required
                      pattern="[0-9]{10,15}"
                      maxLength="15"
                      title={language === "tr" ? "Lütfen geçerli bir telefon numarası giriniz (sadece rakam)" : "Please enter a valid phone number (numbers only)"}
                      onInput={(e) => {
                        e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '');
                      }}
                      className="w-full px-6 py-4 bg-gray-900 text-gray-100 placeholder:text-gray-500 rounded-2xl border border-gray-700 focus:border-cyan-500 focus:outline-none transition-all"
                    />
                    <p className="text-sm text-gray-500 mt-2">{currentContent.contact.form.phoneHint}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-300">
                    {currentContent.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder={language === "tr" ? "Talebinizi buraya yazın..." : "Write your request here..."}
                    required
                    className="w-full px-6 py-4 bg-gray-900 text-gray-100 placeholder:text-gray-500 rounded-2xl border border-gray-700 focus:border-cyan-500 focus:outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-6 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98]"
                >
                  {currentContent.contact.form.submit}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - DEĞİŞİKLİK 5, 6, 7 */}
      <footer className="bg-gray-900 py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Brand - DEĞİŞİKLİK 5: "Z" ikonu kaldırıldı */}
            <div className="space-y-8">
              <div className="flex items-center">
                <span className="text-6xl font-black text-white tracking-tighter">ZER</span>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                {currentContent.footer.description}
              </p>
            </div>

            {/* Links - DEĞİŞİKLİK 6: Orta kolon tam ortalandı */}
            <div className="flex flex-col items-center justify-center text-center">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
                {currentContent.footer.links}
              </h4>
              <ul className="space-y-6">
                <li>
                  <button
                    onClick={handleHomeClick}
                    className="text-gray-300 hover:text-white text-lg font-medium transition-colors"
                  >
                    {currentContent.nav.home}
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection("neden-biz")}
                    className="text-gray-300 hover:text-white text-lg font-medium transition-colors"
                  >
                    {currentContent.nav.whyUs}
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact - DEĞİŞİKLİK 7: Adres ikon-yazı boşluğu azaltıldı */}
            <div className="md:text-right">
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-10">
                {currentContent.footer.contactInfo}
              </h4>
              <div className="space-y-6">
                <a
                  href="tel:+905322600622"
                  className="flex items-center md:justify-end space-x-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <Phone size={20} className="text-cyan-400" />
                  <span className="text-lg font-bold">{phoneNumber}</span>
                </a>
                <a
                  href="mailto:zergrup@zergrup.tr"
                  className="flex items-center md:justify-end space-x-4 text-gray-300 hover:text-white transition-colors group"
                >
                  <Mail size={20} className="text-cyan-400" />
                  <span className="text-lg">{email}</span>
                </a>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start md:justify-end space-x-2 text-gray-300 hover:text-white transition-colors group"
                >
                  <MapPin size={20} className="text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-lg leading-snug text-right">{address}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-20 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-500 font-medium">
              {currentContent.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}