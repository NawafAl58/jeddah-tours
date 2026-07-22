'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('مغامرة أبحر والبحر الأحمر');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('مشتركة');
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includePhotos, setIncludePhotos] = useState(false);

  const packages = [
    {
      id: 'abhur',
      title: 'مغامرة أبحر والبحر الأحمر',
      price: 450,
      category: 'أنشطة بحرية',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
      description: 'جولة قارب ممتعة في شواطئ أبحر، تجربة السنوركلينج والغوص مع مدربين معتمدين وتصوير تحت الماء.',
      features: ['قارب حديث ومجهز', 'معدات غوص كاملة', 'مرشد بحري معتمد', 'مشروبات وضيافة خفيفة']
    },
    {
      id: 'balad',
      title: 'أسرار جدة التاريخية (البلد)',
      price: 250,
      category: 'تراث وثقافة',
      image: 'https://images.unsplash.com/photo-1578895210405-907db48a7812?q=80&w=1000&auto=format&fit=crop',
      description: 'رحلة استكشافية بين أزقة البلد التراثية، زيارة البيوت والمتاحف التاريخية، مع تجربة الأكلات الشعبية.',
      features: ['مرشد سياحي مرخص', 'دخول المتاحف والبيوت', 'وجبة شعبية جداوية', 'قهوة عربية وحلى']
    },
    {
      id: 'corniche',
      title: 'جولة الواجهة البحرية ونادي اليخوت',
      price: 320,
      category: 'ترفيه وعصرنة',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop',
      description: 'استكشف واجهة جدة البحرية الكورنيش، معالم حلبة الفورمولا 1، ونادي اليخوت الفاخر مع نافورة جدة.',
      features: ['جولة بسيارة حديثة', 'زيارة نادي اليخوت', 'تذاكر المعالم الفاخرة', 'مرشد local محلي']
    },
    {
      id: 'sunset',
      title: 'استجمام غروب الشمس على الشاطئ',
      price: 380,
      category: 'استرخاء',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      description: 'جلسة خاصة ومجهزة على الشاطئ لحظة الغروب، أنشطة التجديف البحري (Kayak)، وعشاء مشويات طازج.',
      features: ['جلسة شاطئية VIP', 'عشاء مشويات طازج', 'أنشطة التجديف (Kayak)', 'مشروبات باردة ودافئة']
    }
  ];

  const currentPkg = packages.find(p => p.title === selectedPackage) || packages[0];
  let basePrice = currentPkg.price;
  
  if (tripType === 'خاصة (V.I.P)') {
    basePrice += 150;
  }

  const transportCost = includeTransport ? 75 : 0;
  const photosCost = includePhotos ? 100 : 0;

  const pricePerPerson = basePrice + transportCost + photosCost;
  const totalPrice = pricePerPerson * guests;

  const whatsappNumber = '966500000000'; // ضع رقم الواتساب الرسمي هنا

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    let extrasText = '';
    if (includeTransport) extrasText += '%0A- مواصلات خاصة من وإلى الفندق';
    if (includePhotos) extrasText += '%0A- جلسة تصوير احترافية';
    if (!includeTransport && !includePhotos) extrasText = ' بدون إضافات';

    const message = `مرحباً فريق روّق 🌊، أود حجز تجربة معكم:%0A- *الباقة:* ${selectedPackage}%0A- *نوع الرحلة:* ${tripType}%0A- *عدد الأشخاص:* ${guests}%0A- *التاريخ:* ${date}%0A- *الإضافات:* ${extrasText}%0A- *الإجمالي المتوقع:* ${totalPrice} ريال%0Aيرجى تأكيد الحجز وتزويدي بالتفاصيل.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              روّق
            </span>
            <span className="text-xs text-slate-400 border-r border-slate-800 pr-2 font-light hidden sm:inline">
              تجارب جدة السياحية
            </span>
          </div>
          <a 
            href="#booking" 
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 px-6 rounded-full transition duration-300 text-sm shadow-lg shadow-amber-500/10"
          >
            احجز تجريتك
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-28 px-6 text-center border-b border-slate-800/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-medium px-4 py-1.5 rounded-full border border-amber-500/20">
            وجهتك الأولى لتجارب البحر والتراث 🌅
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white tracking-tight">
            روّق واكتشف <span className="bg-gradient-to-r from-amber-400 to-emerald-400 bg-clip-text text-transparent">جدة</span> بشغف جديد
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            نحزم لك أفضل لحظات البحر الأحمر وتاريخ عروس البحر في باقات حصرية مصممة لتصنع لك ذكريات لا تُنسى.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">الباقات والتجارب</h2>
          <p className="text-slate-400 text-sm">اختر التجربة التي تناسب جوّك اليوم</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-slate-900/60 rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/5 transition duration-500 group">
              <div>
                <div className="relative overflow-hidden">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title} 
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000';
                    }}
                    className="w-full h-64 object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20 text-xs px-3 py-1 rounded-full font-medium">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-amber-400 transition">{pkg.title}</h3>
                    <div className="text-left">
                      <span className="text-amber-400 font-black text-2xl">{pkg.price}</span>
                      <span className="text-xs font-normal text-slate-500 block">ريال / للشخص</span>
                    </div>
                  </div>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed font-light">{pkg.description}</p>
                  
                  <div className="space-y-3 border-t border-slate-800/80 pt-5">
                    <span className="text-xs font-semibold text-slate-400 block">الباقة تشمل:</span>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                          <span className="text-amber-400">✦</span> {feat}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                <a
                  href="#booking"
                  onClick={() => setSelectedPackage(pkg.title)}
                  className="block text-center bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-white font-semibold py-3.5 rounded-xl transition duration-300 border border-slate-700/50 hover:border-amber-500"
                >
                  اختيار هذه التجربة
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-6 bg-slate-900/40 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl">
          <div className="text-center mb-8 space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white">تأكيد حجز الرحلة</h2>
            <p className="text-slate-400 text-sm">حدد خياراتك وسيتم تحويلك مباشرة للواتساب لحجز مقعدك</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">الباقة المختارة</label>
              <select 
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 text-slate-200 outline-none transition text-sm"
              >
                {packages.map(p => (
                  <option key={p.id} value={p.title}>{p.title} ({p.price} ريال/شخص)</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">نوع الرحلة</label>
                <select 
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 text-slate-200 outline-none transition text-sm"
                >
                  <option value="مشتركة">مشتركة</option>
                  <option value="خاصة (V.I.P)">خاصة (+150 ريال)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">عدد الأشخاص</label>
                <input 
                  type="number" 
                  min="1" 
                  max="30"
                  value={guests} 
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 text-slate-200 outline-none transition text-sm"
                  required 
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">تاريخ الرحلة</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 text-slate-200 outline-none transition text-sm"
                  required 
                />
              </div>
            </div>

            <div className="border-t border-b border-slate-800/80 py-4 space-y-3">
              <span className="block text-xs font-medium text-slate-400">إضافات اختيارية:</span>
              
              <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-300 hover:text-white">
                <input 
                  type="checkbox" 
                  checked={includeTransport} 
                  onChange={(e) => setIncludeTransport(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded" 
                />
                مواصلات خاصة من وإلى الفندق (+75 ريال/شخص)
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-300 hover:text-white">
                <input 
                  type="checkbox" 
                  checked={includePhotos} 
                  onChange={(e) => setIncludePhotos(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded" 
                />
                جلسة تصوير احترافية (GoPro / Drone) (+100 ريال/شخص)
              </label>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl flex justify-between items-center border border-slate-800">
              <div>
                <span className="block font-bold text-white text-sm">المبلغ الإجمالي المتوقع:</span>
                <span className="text-xs text-slate-500">لـ ({guests}) شخص</span>
              </div>
              <span className="text-3xl font-black text-amber-400">{totalPrice} <span className="text-xs font-normal text-slate-400">ريال</span></span>
            </div>

            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 text-base"
            >
              💬 تأكيد الحجز المباشر عبر الواتساب
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-10 text-center text-xs border-t border-slate-900">
        <p>© {new Date().getFullYear()} روّق لتجارب جدة السياحية. جميع الحقوق محفوظة.</p>
      </footer>

    </div>
  );
}
