'use client';

import React, { useState } from 'react';

export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('رحلة أبحر البحرية والغوص');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('مشتركة');
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includePhotos, setIncludePhotos] = useState(false);

  const packages = [
    {
      id: 'abhur',
      title: 'رحلة أبحر البحرية والغوص',
      price: 450,
      category: 'مغامرة وبحر',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
      description: 'جولة قارب في شواطئ أبحر + تجربة سنوركلينج وغوص مع مدرب معتمد + ضيافة كاملة ومشروبات.',
      features: ['قارب حديث ومجهز', 'معدات غوص كاملة', 'مرشد بحري معتمد', 'وجبات خفيفة ومشروبات']
    },
    {
      id: 'balad',
      title: 'سحر جدة التاريخية (البلد)',
      price: 250,
      category: 'ثقافة وتراث',
      image: 'https://images.unsplash.com/photo-1578895210405-907db48a7812?q=80&w=1000&auto=format&fit=crop',
      description: 'جولة مشي بين أزقة البلد التراثية، زيارة بيت نصيف والمتاحف المغلقة، وتذوق الأكلات الشعبية.',
      features: ['مرشد سياحي مرخص', 'دخول المتاحف والبيوت', 'وجبة عشاء شعبية جداوية', 'قهوة عربية وحلى']
    },
    {
      id: 'corniche',
      title: 'جولة الكورنيش وحلبة الفورمولا 1',
      price: 320,
      category: 'ترفيه وحديث',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop',
      description: 'استكشف واجهة جدة البحرية، نادي اليخوت، معالم حلبة الشارع الأسرع عالمياً، والنافورة.',
      features: ['جولة بسيارة حديثة', 'زيارة نادي اليخوت', 'تذاكر المعالم الفاخرة', 'مرشد سياحي local']
    },
    {
      id: 'sunset',
      title: 'رحلة استجمام وغروب الشمس',
      price: 380,
      category: 'استرخاء',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      description: 'جلسة شاطئية خاصة عند غروب الشمس، أنشطة رياضية خفيفة، وجبة مشويات طازجة على البحر.',
      features: ['جلسة شاطئية مجهزة', 'وجبة عشاء مشويات', 'أنشطة التجديف (Kayak)', 'مشروبات باردة ودافئة']
    }
  ];

  // حساب التكلفة
  const currentPkg = packages.find(p => p.title === selectedPackage) || packages[0];
  let basePrice = currentPkg.price;
  
  // زيادة التكلفة إذا كانت الرحلة خاصة
  if (tripType === 'خاصة (V.I.P)') {
    basePrice += 150;
  }

  // التكاليف الإضافية
  const transportCost = includeTransport ? 75 : 0;
  const photosCost = includePhotos ? 100 : 0;

  const pricePerPerson = basePrice + transportCost + photosCost;
  const totalPrice = pricePerPerson * guests;

  const whatsappNumber = '966500000000'; // ضع رقم الواتساب الخاص بكم هنا

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    let extrasText = '';
    if (includeTransport) extrasText += '%0A- مواصلات من وإلى الفندق';
    if (includePhotos) extrasText += '%0A- جلسة تصوير احترافية';
    if (!includeTransport && !includePhotos) extrasText = ' بدون إضافات';

    const message = `مرحباً، أود حجز رحلة معكم:%0A- *البكج:* ${selectedPackage}%0A- *نوع الرحلة:* ${tripType}%0A- *عدد الأشخاص:* ${guests}%0A- *التاريخ:* ${date}%0A- *الخدمات الإضافية:* ${extrasText}%0A- *الإجمالي:* ${totalPrice} ريال%0Aيرجى تأكيد الحجز وتزويدي بالتفاصيل.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 tracking-wide">
            جولة جدة <span className="text-amber-500">.Tours</span>
          </div>
          <a 
            href="#booking" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-6 rounded-full transition duration-300 text-sm shadow-md hover:shadow-lg"
          >
            احجز رحلتك الآن
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900 text-white py-24 px-4 text-center overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-4 py-1.5 rounded-full border border-blue-400/30 tracking-wider">
            اكتشف العروس معنا 🌊
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            استكشف أفضل التجارب السياحية في جدة
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light">
            باقات سياحية وبحرية مُصممة بعناية لتمنحك ولعائلتك أوقاتاً لا تُنسى بأعلى جودة وأفضل سعر.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">باقاتنا السياحية</h2>
          <p className="text-slate-500 mt-2">اختر التجربة التي تناسب اهتمامك</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-3xl shadow-sm border border-slate-200/80 overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition duration-300">
              <div>
                <div className="relative">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-64 object-cover" />
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-slate-800">{pkg.title}</h3>
                    <div className="text-left">
                      <span className="text-blue-600 font-black text-2xl">{pkg.price}</span>
                      <span className="text-xs font-medium text-slate-400 block">ريال / للشخص</span>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{pkg.description}</p>
                  
                  <div className="space-y-2 border-t border-slate-100 pt-4">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">تتضمن الرحلة:</span>
                    <div className="grid grid-cols-2 gap-2">
                      {pkg.features.map((feat, idx) => (
                        <div key={idx} className="text-xs text-slate-600 flex items-center gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span> {feat}
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
                  className="block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-xl transition duration-300"
                >
                  اختيار هذه الباقة
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="bg-slate-100 py-20 px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10 border border-slate-200">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">تخصيص وتأكيد الحجز</h2>
            <p className="text-slate-500 text-sm mt-1">حدد تفاصيل رحلتك وسيتم تحويلك فوراً للواتساب للتأكيد</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            
            {/* اختيار البكج */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">اختر الباقة</label>
              <select 
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition"
              >
                {packages.map(p => (
                  <option key={p.id} value={p.title}>{p.title} ({p.price} ريال/شخص)</option>
                ))}
              </select>
            </div>

            {/* نوع الرحلة وعدد الأشخاص والتاريخ */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">نوع الرحلة</label>
                <select 
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition text-sm"
                >
                  <option value="مشتركة">مشتركة (عادية)</option>
                  <option value="خاصة (V.I.P)">خاصة (+150 ريال)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">عدد الأشخاص</label>
                <input 
                  type="number" 
                  min="1" 
                  max="30"
                  value={guests} 
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">تاريخ الرحلة</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3.5 bg-slate-50 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white outline-none transition text-sm"
                  required 
                />
              </div>
            </div>

            {/* خيارات وإضافات اختيارية */}
            <div className="border-t border-b border-slate-100 py-4 space-y-3">
              <span className="block text-sm font-semibold text-slate-700">ترقيات إضافية (اختياري):</span>
              
              <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-600 hover:text-slate-900">
                <input 
                  type="checkbox" 
                  checked={includeTransport} 
                  onChange={(e) => setIncludeTransport(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                />
                إضافة مواصلات خاصة من وإلى الفندق (+75 ريال/شخص)
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-sm text-slate-600 hover:text-slate-900">
                <input 
                  type="checkbox" 
                  checked={includePhotos} 
                  onChange={(e) => setIncludePhotos(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" 
                />
                جلسة تصوير احترافية (GoPro / Camera) (+100 ريال/شخص)
              </label>
            </div>

            {/* الإجمالي التفاعلي */}
            <div className="bg-blue-50/70 p-5 rounded-2xl flex justify-between items-center border border-blue-100">
              <div>
                <span className="block font-bold text-slate-800">المبلغ الإجمالي:</span>
                <span className="text-xs text-slate-500">شامل كافة الخيارات لـ ({guests}) شخص</span>
              </div>
              <span className="text-3xl font-black text-blue-600">{totalPrice} <span className="text-sm font-normal">ريال</span></span>
            </div>

            {/* زر الحجز */}
            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center gap-2 text-lg"
            >
              💬 احجز الآن عبر الواتساب
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} جولة جدة السياحية. جميع الحقوق محفوظة.</p>
      </footer>

    </div>
  );
}
