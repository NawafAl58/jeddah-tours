'use client';

import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [selectedPackage, setSelectedPackage] = useState('مغامرة أبحر والغوص بالبحر الأحمر');
  const [activeModalPackage, setActiveModalPackage] = useState<any>(null);
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('مشتركة');
  
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeMeal, setIncludeMeal] = useState(false);
  const [includeCoffee, setIncludeCoffee] = useState(false);

  // النصوص باللغتين
  const t = {
    ar: {
      brandName: "روّق",
      brandSub: "تجارب جدة السياحية",
      heroBadge: "وجهتك الأولى لتجارب البحر والتراث والأنشطة 🌊",
      heroTitle: "روّق واكتشف جدة بشغف جديد",
      heroDesc: "نحزم لك أفضل لحظات عروس البحر الأحمر في باقات وسياحة تجريبية حصرية صُممت خصيصاً لتصنع لك ذكريات استثنائية.",
      bookBtn: "احجز تجربتك",
      packagesTitle: "الباقات والتجارب المتاحة",
      packagesSub: "اضغط على التفاصيل وجدول الرحلة للاطلاع على البرنامج والموقع الخريطة",
      detailsBtn: "🔍 التفاصيل وجدول الرحلة",
      selectPkgBtn: "حجز هذه التجربة",
      perPerson: "ريال / للشخص",
      location: "الموقع ونقطة التجمع:",
      mapLink: "🗺️ فتح الموقع على خرائط جوجل",
      itineraryTitle: "🗓️ جدول وتفاصيل البرنامج:",
      includesTitle: "الباقة تشمل:",
      rulesTitle: "الشروط والتوجيهات:",
      bookingTitle: "تأكيد حجز الرحلة",
      bookingSub: "حدد خياراتك وسيتم تحويلك مباشرة للواتساب لتأكيد الحجز",
      selectPackageLabel: "الباقة المختارة",
      tripTypeLabel: "نوع الرحلة",
      shared: "مشتركة",
      private: "خاصة (VIP)",
      guestsLabel: "عدد الأشخاص",
      dateLabel: "تاريخ الرحلة",
      extrasLabel: "خدمات ترقية إضافية (اختياري):",
      transportOpt: "مواصلات خاصة وسيارة حديثة من وإلى الفندق (+80 ريال/شخص)",
      mealOpt: "وجبة غداء/عشاء فاخرة (مأكولات بحرية أو شعبية) (+120 ريال/شخص)",
      coffeeOpt: "ضيافة القهوة المختصة والحلى الجداوي التراثي (+45 ريال/شخص)",
      totalEstimated: "المبلغ الإجمالي المتوقع:",
      totalSub: "شامل كافة الخيارات المختارة",
      whatsappBtn: "💬 تأكيد الحجز المباشر عبر الواتساب",
      trustStats: [
        { num: "+1,200", label: "سائح ومغامر سعيد" },
        { num: "4.9/5", label: "تقييم العملاء" },
        { num: "100%", label: "مرشدون محليون معتمدون" }
      ],
      reviewsTitle: "آراء وانطباعات الزوار",
      reviewsSub: "ماذا يقول عملاؤنا عن تجاربهم معنا في جدة",
      reviews: [
        { name: "عبدالله الجعيد", role: "زائر من الرياض", comment: "رحلة أبحر كانت فوق الخيال! الكابتن ممتاز والتنظيم احترافي جداً وسريعين بالواتساب.", rating: "5/5" },
        { name: "Sarah Jenkins", role: "Tourist from UK", comment: "The Al-Balad tour was the highlight of my trip to Saudi Arabia. Authentic and very safe!", rating: "5/5" },
        { name: "فهد الشهري", role: "رحلة عائلية", comment: "تجربة غروب الشمس والكاياك روعة ولذيذة الضيافة، يعطيهم العافية فريق روّق.", rating: "5/5" }
      ]
    },
    en: {
      brandName: "Rawaq",
      brandSub: "Jeddah Tourism Experiences",
      heroBadge: "Your Top Choice for Sea & Heritage Adventures 🌊",
      heroTitle: "Rawaq – Discover Jeddah with Passion",
      heroDesc: "Curated Red Sea marine tours and authentic cultural journeys designed to give you unforgettable memories.",
      bookBtn: "Book Now",
      packagesTitle: "Available Experiences & Packages",
      packagesSub: "Click 'Details & Itinerary' to view full program and exact GPS map location",
      detailsBtn: "🔍 Details & Itinerary",
      selectPkgBtn: "Book This Experience",
      perPerson: "SAR / Person",
      location: "Meeting Point Location:",
      mapLink: "🗺️ Open Location on Google Maps",
      itineraryTitle: "🗓️ Program Schedule & Itinerary:",
      includesTitle: "Package Includes:",
      rulesTitle: "Rules & Guidelines:",
      bookingTitle: "Confirm Your Reservation",
      bookingSub: "Select your options and you will be directed to WhatsApp for instant confirmation",
      selectPackageLabel: "Selected Package",
      tripTypeLabel: "Trip Type",
      shared: "Shared Tour",
      private: "Private (VIP)",
      guestsLabel: "Number of Guests",
      dateLabel: "Tour Date",
      extrasLabel: "Optional Upgrades:",
      transportOpt: "Private modern hotel transport (+80 SAR/person)",
      mealOpt: "Luxury lunch/dinner meal (Seafood/Traditional) (+120 SAR/person)",
      coffeeOpt: "Specialty coffee & traditional Hijazi desserts (+45 SAR/person)",
      totalEstimated: "Estimated Total Price:",
      totalSub: "Includes all selected options",
      whatsappBtn: "💬 Confirm Booking via WhatsApp",
      trustStats: [
        { num: "+1,200", label: "Happy Adventurers" },
        { num: "4.9/5", label: "Customer Rating" },
        { num: "100%", label: "Certified Local Guides" }
      ],
      reviewsTitle: "Visitor Testimonials",
      reviewsSub: "What our guests say about their experiences with us in Jeddah",
      reviews: [
        { name: "Abdullah Al-Juaid", role: "Visitor from Riyadh", comment: "The Abhur trip was beyond expectations! The captain was amazing and organization was top notch.", rating: "5/5" },
        { name: "Sarah Jenkins", role: "Tourist from UK", comment: "The Al-Balad tour was the highlight of my trip to Saudi Arabia. Authentic and very safe!", rating: "5/5" },
        { name: "Fahad Al-Shehri", role: "Family Trip", comment: "Sunset and kayaking experience was breathtaking. Thanks Rawaq team!", rating: "5/5" }
      ]
    }
  }[lang];

  const packages = [
    {
      id: 'abhur',
      title: lang === 'ar' ? 'مغامرة أبحر والغوص بالبحر الأحمر' : 'Abhur Marine & Red Sea Diving',
      price: 450,
      category: lang === 'ar' ? 'أنشطة بحرية' : 'Marine Activity',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جولة قارب ممتعة في شواطئ أبحر، تجربة السنوركلينج والغوص مع مدربين معتمدين وتأمل الشعاب المرجانية.' : 'Boat tour in Abhur, snorkeling and diving with certified instructors exploring coral reefs.',
      features: lang === 'ar' ? ['قارب حديث ومجهز', 'معدات غوص وسنوركلينج', 'كابتن ومرشد بحري', 'مشروبات باردة وسناك'] : ['Modern Boat', 'Diving & Snorkeling Gear', 'Licensed Captain', 'Snacks & Drinks'],
      locationName: lang === 'ar' ? 'مرسى أبحر الشمالية، جدة' : 'North Obhur Marina, Jeddah',
      mapUrl: 'https://maps.google.com/?q=North+Obhur+Marina+Jeddah',
      itinerary: lang === 'ar' ? [
        '14:00 - التجمع في مرسى أبحر والانطلاق بالقارب',
        '14:45 - الوصول لموقع الغوص وشرح تعليمات السلامة',
        '15:15 - السباحة، السنوركلينج، وتجربة الغوص مع المدرب',
        '17:30 - الاسترخاء ومشاهدة الغروب من القارب',
        '18:30 - العودة للمرسى'
      ] : [
        '14:00 - Meeting at Marina & Boarding',
        '14:45 - Arrival at diving spot & safety brief',
        '15:15 - Swimming, Snorkeling & Diving',
        '17:30 - Relaxing & Sunset view from boat',
        '18:30 - Return to Marina'
      ],
      rules: lang === 'ar' ? 'يلزم إحضار الهوية الوطنية أو الإقامة/الجواز.' : 'National ID / Passport required.'
    },
    {
      id: 'balad',
      title: lang === 'ar' ? 'أسرار جدة التاريخية (البلد)' : 'Historic Jeddah Secrets (Al-Balad)',
      price: 220,
      category: lang === 'ar' ? 'تراث وثقافة' : 'Heritage & Culture',
      image: 'https://images.unsplash.com/photo-1578895210405-907db48a7812?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'رحلة استكشافية بين أزقة البلد التراثية، زيارة البيوت والمتاحف التاريخية، وتذوق المأكولات الشعبية.' : 'Guided walking tour through historic UNESCO heritage alleys, old houses, museums and local street food.',
      features: lang === 'ar' ? ['مرشد سياحي مرخص', 'تذاكر المتاحف والبيوت', 'تذوق المأكولات الشعبية', 'ضيافة القهوة العربية'] : ['Licensed Tour Guide', 'Museum Tickets', 'Street Food Tasting', 'Arabic Coffee'],
      locationName: lang === 'ar' ? 'جدة التاريخية - بوابة باب جديد' : 'Historic Jeddah - Bab Jadeed Gate',
      mapUrl: 'https://maps.google.com/?q=Bab+Jadeed+Historic+Jeddah',
      itinerary: lang === 'ar' ? [
        '17:00 - التجمع في منطقة باب جديد وبداية الجولة',
        '17:30 - زيارة بيت نصيف ومتحف المطبك',
        '18:45 - جولة في الأسواق الشعبية القديمة',
        '19:30 - توقف لتذوق الكبدة الجداوية والبليلة',
        '20:15 - ختم الرحلة بجلسة مقهى تراثي'
      ] : [
        '17:00 - Gathering at Bab Jadeed Gate',
        '17:30 - Visiting Nassif House & Museums',
        '18:45 - Exploring old traditional souks',
        '19:30 - Traditional street food tasting',
        '20:15 - Traditional cafe session'
      ],
      rules: lang === 'ar' ? 'الجولة تتطلب المشي، يفضل ارتداء أحذية مريحة.' : 'Walking tour, comfortable shoes recommended.'
    },
    {
      id: 'corniche',
      title: lang === 'ar' ? 'جولة الواجهة البحرية ونادي اليخوت' : 'Jeddah Waterfront & Yacht Club Tour',
      price: 300,
      category: lang === 'ar' ? 'ترفيه وعصرنة' : 'Modern & Entertainment',
      image: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'استكشف واجهة جدة البحرية الكورنيش، معالم حلبة الفورمولا 1، ونادي اليخوت الفاخر.' : 'Explore Jeddah New Corniche, F1 Track highlights, Marina promenade, and luxury Yacht Club.',
      features: lang === 'ar' ? ['جولة بسيارة حديثة', 'زيارة نادي اليخوت', 'مرشد سياحي محلي', 'تذاكر المعالم'] : ['Modern Car Tour', 'Yacht Club Access', 'Local Guide', 'Sightseeing Tickets'],
      locationName: lang === 'ar' ? 'الكورنيش الشمالي - نادي اليخوت' : 'North Corniche - Jeddah Yacht Club',
      mapUrl: 'https://maps.google.com/?q=Jeddah+Yacht+Club',
      itinerary: lang === 'ar' ? [
        '16:30 - الجولة بالسيارة الفاخرة على طول الكورنيش',
        '17:15 - زيارة نادي اليخوت وممشى المارينا',
        '18:30 - التوقف عند ممشى حلبة الفورمولا 1',
        '19:30 - الاستمتاع بوجبة خفيفة مطلة على البحر'
      ] : [
        '16:30 - Scenic drive along New Corniche',
        '17:15 - Jeddah Yacht Club & Marina walk',
        '18:30 - F1 Circuit walkway photo stop',
        '19:30 - Sea view dining session'
      ],
      rules: lang === 'ar' ? 'مناسبة للعائلات والأفراد من كافة الأعمار.' : 'Suitable for families and all ages.'
    }
  ];

  const currentPkg = packages.find(p => p.title === selectedPackage) || packages[0];
  let basePrice = currentPkg.price;
  
  if (tripType === 'خاصة (VIP)' || tripType === 'Private (VIP)') {
    basePrice += 150;
  }

  const transportCost = includeTransport ? 80 : 0;
  const mealCost = includeMeal ? 120 : 0;
  const coffeeCost = includeCoffee ? 45 : 0;

  const pricePerPerson = basePrice + transportCost + mealCost + coffeeCost;
  const totalPrice = pricePerPerson * guests;

  const whatsappNumber = '966500000000'; // ضع رقم الواتساب الرسمي هنا

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    let extrasList: string[] = [];
    if (includeTransport) extrasList.push(lang === 'ar' ? 'مواصلات خاصة (+80 ريال)' : 'Private Transport (+80 SAR)');
    if (includeMeal) extrasList.push(lang === 'ar' ? 'وجبة فاخرة (+120 ريال)' : 'Luxury Meal (+120 SAR)');
    if (includeCoffee) extrasList.push(lang === 'ar' ? 'ضيافة قهوة وحلى (+45 ريال)' : 'Coffee & Dessert (+45 SAR)');
    
    const extrasText = extrasList.length > 0 ? extrasList.join(', ') : (lang === 'ar' ? 'بدون إضافات' : 'None');

    const message = lang === 'ar' 
      ? `مرحباً فريق روّق 🌊، أود حجز تجربة معكم:%0A- *الباقة:* ${selectedPackage}%0A- *نوع الرحلة:* ${tripType}%0A- *عدد الأشخاص:* ${guests}%0A- *التاريخ:* ${date}%0A- *الإضافات:* ${extrasText}%0A- *الإجمالي المتوقع:* ${totalPrice} ريال%0Aيرجى تأكيد الحجز وتزويدي بالتفاصيل.`
      : `Hello Rawaq Team 🌊, I would like to book a trip:%0A- *Package:* ${selectedPackage}%0A- *Trip Type:* ${tripType}%0A- *Guests:* ${guests}%0A- *Date:* ${date}%0A- *Extras:* ${extrasText}%0A- *Total:* ${totalPrice} SAR%0APlease confirm booking details.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
              {t.brandName}
            </span>
            <span className="text-xs text-slate-400 border-r border-l border-slate-800 px-2 font-light hidden sm:inline">
              {t.brandSub}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Switcher Button */}
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 text-xs px-3 py-2 rounded-full transition font-semibold"
            >
              🌐 {lang === 'ar' ? 'English' : 'عربي'}
            </button>

            <a 
              href="#booking" 
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 px-5 rounded-full transition duration-300 text-xs shadow-lg shadow-amber-500/10"
            >
              {t.bookBtn}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-6 text-center border-b border-slate-800/50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-medium px-4 py-1.5 rounded-full border border-amber-500/20">
            {t.heroBadge}
          </span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight text-white tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            {t.heroDesc}
          </p>
        </div>
      </section>

      {/* Trust & Stats Section */}
      <section className="border-b border-slate-800/60 bg-slate-900/30 py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-4 text-center">
          {t.trustStats.map((stat, i) => (
            <div key={i} className="space-y-1">
              <span className="block text-2xl md:text-4xl font-black text-amber-400">{stat.num}</span>
              <span className="text-xs text-slate-400 font-light">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.packagesTitle}</h2>
          <p className="text-slate-400 text-sm">{t.packagesSub}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-700 opacity-90 group-hover:opacity-100" 
                  />
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20 text-xs px-3 py-1 rounded-full font-medium">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">{pkg.title}</h3>
                  <div className="mb-3">
                    <span className="text-amber-400 font-black text-2xl">{pkg.price}</span>
                    <span className="text-xs font-normal text-slate-500 mx-1">{t.perPerson}</span>
                  </div>

                  <p className="text-slate-400 text-xs mb-4 leading-relaxed font-light line-clamp-2">{pkg.description}</p>
                  
                  <div className="space-y-2 border-t border-slate-800/80 pt-3">
                    {pkg.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="text-amber-400">✦</span> {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-2">
                <button
                  onClick={() => setActiveModalPackage(pkg)}
                  className="w-full bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-medium py-2.5 rounded-xl transition border border-slate-700/60"
                >
                  {t.detailsBtn}
                </button>
                <a
                  href="#booking"
                  onClick={() => setSelectedPackage(pkg.title)}
                  className="block text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-3 rounded-xl transition duration-300"
                >
                  {t.selectPkgBtn}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Details Modal with Google Map */}
      {activeModalPackage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative shadow-2xl">
            
            <button 
              onClick={() => setActiveModalPackage(null)}
              className="absolute top-5 left-5 bg-slate-800 hover:bg-slate-700 text-slate-300 w-9 h-9 rounded-full flex items-center justify-center transition"
            >
              ✕
            </button>

            <div className="space-y-2">
              <span className="text-xs text-amber-400 font-semibold px-3 py-1 bg-amber-500/10 rounded-full border border-amber-500/20">
                {activeModalPackage.category}
              </span>
              <h3 className="text-2xl font-bold text-white mt-2">{activeModalPackage.title}</h3>
              <p className="text-xs text-slate-300 font-medium">📍 {t.location} {activeModalPackage.locationName}</p>
              
              <a 
                href={activeModalPackage.mapUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-block text-xs text-emerald-400 underline font-semibold mt-1 hover:text-emerald-300"
              >
                {t.mapLink}
              </a>
            </div>

            <img 
              src={activeModalPackage.image} 
              alt={activeModalPackage.title} 
              className="w-full h-52 object-cover rounded-2xl border border-slate-800"
            />

            <div>
              <h4 className="text-sm font-semibold text-amber-400 mb-2">{t.itineraryTitle}</h4>
              <ul className="space-y-2 bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
                {activeModalPackage.itinerary.map((step: string, i: number) => (
                  <li key={i} className="text-xs text-slate-300 flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <div>
                <span className="text-2xl font-black text-amber-400">{activeModalPackage.price} SAR</span>
              </div>
              <a
                href="#booking"
                onClick={() => {
                  setSelectedPackage(activeModalPackage.title);
                  setActiveModalPackage(null);
                }}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition text-xs"
              >
                {t.selectPkgBtn}
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Customer Reviews Section */}
      <section className="bg-slate-900/30 border-t border-b border-slate-800/50 py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t.reviewsTitle}</h2>
            <p className="text-slate-400 text-xs">{t.reviewsSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.map((rev, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 text-xs font-bold">⭐⭐⭐⭐⭐ {rev.rating}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">"{rev.comment}"</p>
                <div className="border-t border-slate-800/60 pt-3">
                  <span className="block text-xs font-bold text-white">{rev.name}</span>
                  <span className="text-[10px] text-slate-500">{rev.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-6">
        <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl">
          <div className="text-center mb-8 space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t.bookingTitle}</h2>
            <p className="text-slate-400 text-xs">{t.bookingSub}</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">{t.selectPackageLabel}</label>
              <select 
                value={selectedPackage}
                onChange={(e) => setSelectedPackage(e.target.value)}
                className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 text-slate-200 outline-none transition text-sm"
              >
                {packages.map(p => (
                  <option key={p.id} value={p.title}>{p.title} ({p.price} SAR)</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">{t.tripTypeLabel}</label>
                <select 
                  value={tripType}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl focus:border-amber-500 text-slate-200 outline-none transition text-sm"
                >
                  <option value={t.shared}>{t.shared}</option>
                  <option value={t.private}>{t.private} (+150 SAR)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">{t.guestsLabel}</label>
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
                <label className="block text-xs font-medium text-slate-300 mb-2">{t.dateLabel}</label>
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
              <span className="block text-xs font-medium text-slate-400">{t.extrasLabel}</span>
              
              <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300 hover:text-white">
                <input 
                  type="checkbox" 
                  checked={includeTransport} 
                  onChange={(e) => setIncludeTransport(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded" 
                />
                {t.transportOpt}
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300 hover:text-white">
                <input 
                  type="checkbox" 
                  checked={includeMeal} 
                  onChange={(e) => setIncludeMeal(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded" 
                />
                {t.mealOpt}
              </label>

              <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300 hover:text-white">
                <input 
                  type="checkbox" 
                  checked={includeCoffee} 
                  onChange={(e) => setIncludeCoffee(e.target.checked)}
                  className="w-4 h-4 accent-amber-500 rounded" 
                />
                {t.coffeeOpt}
              </label>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl flex justify-between items-center border border-slate-800">
              <div>
                <span className="block font-bold text-white text-xs">{t.totalEstimated}</span>
                <span className="text-[10px] text-slate-500">{t.totalSub}</span>
              </div>
              <span className="text-3xl font-black text-amber-400">{totalPrice} <span className="text-xs font-normal text-slate-400">SAR</span></span>
            </div>

            <button 
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl shadow-lg transition duration-300 flex items-center justify-center gap-2 text-sm"
            >
              {t.whatsappBtn}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-10 text-center text-xs border-t border-slate-900">
        <p>© {new Date().getFullYear()} {t.brandName} - {t.brandSub}. All rights reserved.</p>
      </footer>

    </div>
  );
}
