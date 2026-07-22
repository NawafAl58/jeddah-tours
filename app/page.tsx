'use client';

import React, { useState } from 'react';

export default function Home() {
  // باقي الكود...
export default function Home() {
  const [selectedPackage, setSelectedPackage] = useState('أبحر البحرية');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');

  // بيانات البكجات لتعديلها بسهولة
  const packages = [
    {
      id: 'abhur',
      title: 'رحلة أبحر البحرية والغوص',
      price: 450,
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
      description: 'جولة قارب في أبحر + تجربة سنايكلينج مع مدرب معتمد + وجبة سناك ومشروبات على البحر.',
      features: ['قارب خاص / مشترك', 'معدات غوص كاملة', 'مرشد بحري', 'تصوير تحت الماء']
    },
    {
      id: 'balad',
      title: 'سحر جدة التاريخية (البلد)',
      price: 250,
      image: 'https://images.unsplash.com/photo-1578895210405-907db48a7812?q=80&w=800',
      description: 'جولة شعبية في حارة البلد التراثية + زيارة البيوت التاريخية + تجربة الأكلات الجداوية الأصيلة.',
      features: ['مرشد سياحي مرخص', 'دخول المتاحف الخاصة', 'وجبة شعبية جداوية', 'ضيافة قهوة عربية']
    }
  ];

  // حساب التكلفة الإجمالية
  const currentPkg = packages.find(p => p.title === selectedPackage) || packages[0];
  const totalPrice = currentPkg.price * guests;

  // رقم الواتساب الخاص بكم (استبدل الرقم برقمكم الرسمي مع رمز الدولة 966)
  const whatsappNumber = '966500000000';

  const handleBooking = (e) => {
    e.preventDefault();
    const message = `مرحباً، أود حجز رحلة معكم:%0A- *البكج:* ${selectedPackage}%0A- *عدد الأشخاص:* ${guests}%0A- *التاريخ:* ${date}%0A- *الإجمالي:* ${totalPrice} ريال%0Aيرجى تأكيد الحجز وتزويدي بالتفاصيل.`;
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-black text-blue-600 tracking-wide">
            جولة جدة <span className="text-amber-500">.Tours</span>
          </div>
          <a 
            href="#booking" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition duration-300 text-sm shadow-md"
          >
            احجز الآن
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="bg-blue-500/30 text-blue-200 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
            اكتشف العروس معنا 🌊
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            عِش أفضل التجارب السياحية في جدة
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
            باقات سياحية متكاملة ومصممة خصيصاً لتمنحك رحلة بحرية وثقافية لا تُنسى بأفضل الأسعار.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">الباقات المتاحة</h2>
          <p className="text-slate-500 mt-2">اختر البكج المناسب لرحلتك القادمة</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 flex flex-col justify-between hover:shadow-xl transition">
              <div>
                <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{pkg.title}</h3>
                    <span className="text-blue-600 font-extrabold text-lg bg-blue-50 px-3 py-1 rounded-lg">
                      {pkg.price} ريال <span className="text-xs font-normal text-slate-500">/للشخص</span>
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{pkg.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-slate-500 flex items-center gap-2">
                        <span className="text-green-500 font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#booking"
                  onClick={() => setSelectedPackage(pkg.title)}
                  className="block text-center bg-slate-900 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition duration-300"
                >
                  اختيار هذا البكج
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="bg-slate-100 py-16 px-4">
        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-8 border border-slate-200">
          <h2 className="text-2xl font-bold text-center mb-2">تأكيد حجز الرحلة</h2>
          <p className="text-center text-slate-500 text-sm mb-6">اختر تفاصيل حجزك وسيتم توجيهك للواتساب لإتمام التأكيد فوراً</p>

          <form onSubmit={handleBooking} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">البكج المختار</label>
              <select 
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
              >
                {packages.map(p => (
                  <option key={p.id} value={p.title}>{p.title} ({p.price} ريال/شخص)</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">عدد الأشخاص</label>
                <input 
                  type="number" 
                  min="1" 
                  max="20"
                  value={guests} 
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">تاريخ الرحلة</label>
                <input 
                  type="date" 
                  value={date} 
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
                  required 
                />
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl flex justify-between items-center my-4 border border-blue-100">
              <span className="font-semibold text-slate-700">المبلغ الإجمالي المتوقع:</span>
              <span className="text-2xl font-black text-blue-600">{totalPrice} ريال</span>
            </div>

            <button 
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 text-lg"
            >
              💬 احجز الآن عبر الواتساب
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800">
        <p>© {new Date().getFullYear()} جولة جدة. جميع الحقوق محفوظة.</p>
      </footer>

    </div>
  );
}
