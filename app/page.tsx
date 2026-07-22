'use client';

import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [activeModalPackage, setActiveModalPackage] = useState<any>(null);
  
  // حالات الحجز داخل النافذة
  const [guests, setGuests] = useState(2);
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('مشتركة');
  const [includeHotel, setIncludeHotel] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeMeal, setIncludeMeal] = useState(false);
  const [includeCoffee, setIncludeCoffee] = useState(false);

  // نموذج الجولة الخاصة
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [customHours, setCustomHours] = useState('4');
  const [customPlaces, setCustomPlaces] = useState('');
  const [customGuests, setCustomGuests] = useState(2);

  const whatsappNumber = '966500000000'; // ضع رقم الواتساب الرسمي هنا

  const t = {
    ar: {
      brandName: "روّق",
      brandSub: "تجارب جدة السياحية",
      heroBadge: "وجهتك الأولى لتجارب البحر والتراث والأنشطة 🌊",
      heroTitle: "روّق واكتشف جدة بشغف جديد",
      heroDesc: "نضمن لك أفضل لحظات عروس البحر الأحمر في باقات وسياحة تجريبية حصرية صُممت خصيصاً لتصنع لك ذكريات استثنائية.",
      bookBtn: "استكشف الباقات",
      packagesTitle: "الباقات والتجارب المتاحة",
      packagesSub: "اضغط على أي باقة للاطلاع على الجدول الزمني وتفاصيل الحجز المباشر",
      detailsBtn: "🔍 التفاصيل والجدول الزمني وحجز الرحلة",
      perPerson: "ريال / للشخص",
      minGuests: "أقل عدد للحجز: شخصين",
      location: "الموقع ونقطة التجمع:",
      mapLink: "🗺️ فتح الموقع على خرائط جوجل",
      itineraryTitle: "🗓️ الجدول الزمني للرحلة (Timeline):",
      tripTypeLabel: "نوع الرحلة",
      shared: "مشتركة",
      private: "خاصة (VIP)",
      guestsLabel: "عدد الأشخاص",
      dateLabel: "تاريخ الرحلة",
      extrasLabel: "إضافات اختيارية:",
      hotelOpt: "إضافة إقامة وفندق 4-5 نجوم (+350 ريال/شخص)",
      transportOpt: "مواصلات خاصة (+80 ريال/شخص)",
      mealOpt: "وجبة فاخرة (+120 ريال/شخص)",
      coffeeOpt: "ضيافة قهوة وحلى (+45 ريال/شخص)",
      totalEstimated: "المبلغ الإجمالي المتوقع:",
      whatsappBtn: "💬 تأكيد الحجز المباشر عبر الواتساب",
      customTourBtn: "🎨 صمم جولتك الخاصة بنفسك",
      customTourTitle: "تصميم جولة خاصة مخصصة 🛠️",
      customTourSub: "حدد تفاصيل جولتك وسنقوم بتنسيقها لك فوراً عبر الواتساب",
      floatingWhatsapp: "استفسار سريع",
      trustStats: [
        { num: "+1,200", label: "سائح ومغامر سعيد" },
        { num: "4.9/5", label: "تقييم العملاء" },
        { num: "100%", label: "مرشدون محليون معتمدون" }
      ],
      reviewsTitle: "آراء وانطباعات الزوار",
      reviewsSub: "ماذا يقول عملاؤنا عن تجاربهم معنا في جدة",
      reviews: [
        { name: "عبدالله الجعيد", role: "زائر من الرياض", comment: "باقة الـ 3 أيام كانت شاملة لكل شيء، تنظيم احترافي وتوفير عالي للوقت والجهد!", rating: "5/5" },
        { name: "Sarah Jenkins", role: "Tourist from UK", comment: "The Al-Balad tour & Obhur boat experience were pure magic. Highly recommended!", rating: "5/5" },
        { name: "فهد الشهري", role: "رحلة عائلية", comment: "الباقات متنوعة والأسعار ممتازة والتفاعل سريع جداً عبر الواتساب.", rating: "5/5" }
      ]
    },
    en: {
      brandName: "Rawaq",
      brandSub: "Jeddah Tourism Experiences",
      heroBadge: "Your Top Choice for Sea & Heritage Adventures 🌊",
      heroTitle: "Rawaq – Discover Jeddah with Passion",
      heroDesc: "Curated Red Sea marine tours and authentic cultural journeys designed to give you unforgettable memories.",
      bookBtn: "Explore Packages",
      packagesTitle: "Available Experiences & Packages",
      packagesSub: "Click on any package to view timeline and book directly",
      detailsBtn: "🔍 Details, Timeline & Direct Booking",
      perPerson: "SAR / Person",
      minGuests: "Minimum booking: 2 persons",
      location: "Meeting Point Location:",
      mapLink: "🗺️ Open Location on Google Maps",
      itineraryTitle: "🗓️ Trip Timeline & Schedule:",
      tripTypeLabel: "Trip Type",
      shared: "Shared Tour",
      private: "Private (VIP)",
      guestsLabel: "Number of Guests",
      dateLabel: "Tour Date",
      extrasLabel: "Optional Extras:",
      hotelOpt: "Add 4-5 Star Hotel Stay (+350 SAR/person)",
      transportOpt: "Private transport (+80 SAR/person)",
      mealOpt: "Luxury meal (+120 SAR/person)",
      coffeeOpt: "Coffee & Desserts (+45 SAR/person)",
      totalEstimated: "Estimated Total Price:",
      whatsappBtn: "💬 Confirm Booking via WhatsApp",
      customTourBtn: "🎨 Create Your Custom Tour",
      customTourTitle: "Build Custom Tour 🛠️",
      customTourSub: "Set your preferences and we will organize it directly via WhatsApp",
      floatingWhatsapp: "Quick Inquiry",
      trustStats: [
        { num: "+1,200", label: "Happy Adventurers" },
        { num: "4.9/5", label: "Customer Rating" },
        { num: "100%", label: "Certified Local Guides" }
      ],
      reviewsTitle: "Visitor Testimonials",
      reviewsSub: "What our guests say about their experiences with us in Jeddah",
      reviews: [
        { name: "Abdullah Al-Juaid", role: "Visitor from Riyadh", comment: "The 3-day VIP package covered everything perfectly. Highly organized!", rating: "5/5" },
        { name: "Sarah Jenkins", role: "Tourist from UK", comment: "The Al-Balad tour & Obhur boat experience were pure magic. Highly recommended!", rating: "5/5" },
        { name: "Fahad Al-Shehri", role: "Family Trip", comment: "Great package diversity and very fast communication via WhatsApp.", rating: "5/5" }
      ]
    }
  }[lang];

  // قائمة الباقات الشاملة مع باقة 3 أيام فل كامل الجديدة
  const packages = [
    {
      id: 'full_package_3days',
      title: lang === 'ar' ? 'باقة جدة الشاملة (3 أيام - فل كامل)' : 'Full Jeddah 3-Day VIP Package',
      price: 799,
      category: lang === 'ar' ? 'باقة شاملة VIP' : 'Full VIP Package',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'تجربة متكاملة لمدة 3 أيام: اليوم الأول جولة بحرية وغوص بأبحر، اليوم الثاني تسوق ومطاعم فاخرة، اليوم الثالث استكشاف أسرار البلد التاريخية.' : 'Comprehensive 3-day experience: Day 1 Marine & Diving in Obhur, Day 2 Shopping & Dining, Day 3 Historic Al-Balad Tour.',
      features: lang === 'ar' ? ['شامل 3 أيام متتالية', 'أقل عدد شخصين (2)', 'أنشطة بحرية + تسوق + تراث', 'مرشد ومرافق خاص'] : ['3 Consecutive Days', 'Min 2 Persons Required', 'Marine + Shopping + Heritage', 'Private Local Guide'],
      locationName: lang === 'ar' ? 'جدة - نقاط تجمع متعددة' : 'Jeddah - Multiple Meeting Points',
      mapUrl: 'https://maps.google.com/?q=Jeddah+Saudi+Arabia',
      minGuestsRequired: 2,
      itinerary: lang === 'ar' ? [
        'اليوم الأول (البحري): 14:00 التجمع بمرسى أبحر، أنشطة السباحة والسنوركلينج والغوص وتأمل الغروب.',
        'اليوم الثاني (التسوق والترفيه): 16:00 جولة في رد سي مول والبوليفارد، خيارات مطاعم فاخرة ومساعد تسوق.',
        'اليوم الثالث (التراث): 17:00 جولة أزقة البلد، بيت نصيف، تذوق المأكولات الشعبية والقهوة التراثية.'
      ] : [
        'Day 1 (Marine): 14:00 Obhur Marina departure, diving, snorkeling & sunset relaxation.',
        'Day 2 (Shopping): 16:00 Luxury mall & boulevard tour with fine dining reservations.',
        'Day 3 (Heritage): 17:00 Al-Balad UNESCO tour, museum visits & local food tasting.'
      ]
    },
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
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['14:00 - التجمع بمرسى أبحر والانطلاق بالقارب', '15:15 - السباحة، السنوركلينج، وتجربة الغوص', '17:30 - الاسترخاء ومشاهدة الغروب مع الضيافة'] : ['14:00 - Meeting & Boarding', '15:15 - Swimming & Diving', '17:30 - Sunset view']
    },
    {
      id: 'balad',
      title: lang === 'ar' ? 'أسرار جدة التاريخية (البلد)' : 'Historic Jeddah Secrets (Al-Balad)',
      price: 220,
      category: lang === 'ar' ? 'تراث وثقافة' : 'Heritage & Culture',
      image: 'https://scth.scene7.com/is/image/scth/albalad-jeddah:crop-760x570?defaultImage=albalad-jeddah',
      description: lang === 'ar' ? 'رحلة استكشافية بين أزقة البلد التراثية، زيارة البيوت والمتاحف التاريخية، وتذوق المأكولات الشعبية.' : 'Guided walking tour through historic UNESCO heritage alleys, old houses, museums and local street food.',
      features: lang === 'ar' ? ['مرشد سياحي مرخص', 'تذاكر المتاحف والبيوت', 'تذوق المأكولات الشعبية', 'ضيافة القهوة العربية'] : ['Licensed Tour Guide', 'Museum Tickets', 'Street Food Tasting', 'Arabic Coffee'],
      locationName: lang === 'ar' ? 'جدة التاريخية - بوابة باب جديد' : 'Historic Jeddah - Bab Jadeed Gate',
      mapUrl: 'https://maps.google.com/?q=Bab+Jadeed+Historic+Jeddah',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['17:00 - التجمع في باب جديد وبداية الجولة', '17:30 - زيارة بيت نصيف ومتحف المطبك', '19:30 - تجربة المأكولات الشعبية والقهوة'] : ['17:00 - Gathering at Gate', '17:30 - Museums tour', '19:30 - Local food tasting']
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
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['16:30 - جولة الكورنيش بالسيارة', '17:15 - زيارة نادي اليخوت والمارينا', '18:30 - ممشى حلبة الفورمولا 1'] : ['16:30 - Corniche drive', '17:15 - Yacht Club walk', '18:30 - F1 Track walkway']
    }
  ];

  const handleOpenPackageModal = (pkg: any) => {
    setActiveModalPackage(pkg);
    setGuests(pkg.minGuestsRequired || 1);
  };

  const handleModalBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeModalPackage) return;

    let basePrice = activeModalPackage.price;
    if (tripType === 'خاصة (VIP)' || tripType === 'Private (VIP)') basePrice += 150;

    const hotelCost = includeHotel ? 350 : 0;
    const transportCost = includeTransport ? 80 : 0;
    const mealCost = includeMeal ? 120 : 0;
    const coffeeCost = includeCoffee ? 45 : 0;

    const pricePerPerson = basePrice + hotelCost + transportCost + mealCost + coffeeCost;
    const totalPrice = pricePerPerson * guests;

    let extrasList: string[] = [];
    if (includeHotel) extrasList.push(lang === 'ar' ? 'سكن وفندق (+350 ريال)' : 'Hotel Stay (+350 SAR)');
    if (includeTransport) extrasList.push(lang === 'ar' ? 'مواصلات خاصة (+80 ريال)' : 'Private Transport (+80 SAR)');
    if (includeMeal) extrasList.push(lang === 'ar' ? 'وجبة فاخرة (+120 ريال)' : 'Luxury Meal (+120 SAR)');
    if (includeCoffee) extrasList.push(lang === 'ar' ? 'ضيافة قهوة وحلى (+45 ريال)' : 'Coffee & Dessert (+45 SAR)');
    
    const extrasText = extrasList.length > 0 ? extrasList.join(', ') : (lang === 'ar' ? 'بدون إضافات' : 'None');

    const message = lang === 'ar' 
      ? `مرحباً فريق روّق 🌊، أود حجز التجربة التالية:%0A- *الباقة:* ${activeModalPackage.title}%0A- *نوع الرحلة:* ${tripType}%0A- *عدد الأشخاص:* ${guests}%0A- *التاريخ:* ${date}%0A- *الإضافات:* ${extrasText}%0A- *المبلغ الإجمالي المتوقع:* ${totalPrice} ريال%0Aيرجى تأكيد الحجز.`
      : `Hello Rawaq Team 🌊, I want to book this tour:%0A- *Package:* ${activeModalPackage.title}%0A- *Trip Type:* ${tripType}%0A- *Guests:* ${guests}%0A- *Date:* ${date}%0A- *Extras:* ${extrasText}%0A- *Total Price:* ${totalPrice} SAR%0APlease confirm booking.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  const handleCustomTourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = lang === 'ar'
      ? `مرحباً فريق روّق 🌊، أود تصميم جولة خاصة بمتطلباتي:%0A- *عدد الساعات:* ${customHours} ساعات%0A- *عدد الأشخاص:* ${customGuests}%0A- *المعالم المطلوبة:* ${customPlaces || 'حسب توصيتكم'}%0Aيرجى تزويدي بالبرنامج والتكلفة.`
      : `Hello Rawaq Team 🌊, I want to create a custom tour:%0A- *Hours:* ${customHours}%0A- *Guests:* ${customGuests}%0A- *Places:* ${customPlaces || 'Your recommendation'}%0APlease send options.`;
    
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  return (
    <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 relative">
      
      {/* Sticky Floating WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lang === 'ar' ? 'مرحباً، أود الاستفسار عن الجولات السياحية والتجارب المتاحة في جدة.' : 'Hello, I would like to inquire about available tours in Jeddah.')}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-3 px-4 rounded-full shadow-2xl flex items-center gap-2 border border-emerald-300 transition duration-300 hover:scale-105"
      >
        <span className="text-xl">💬</span>
        <span className="text-xs font-black">{t.floatingWhatsapp}</span>
      </a>

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" fill="#020617" stroke="#F59E0B" strokeWidth="2" />
              <circle cx="50" cy="38" r="14" fill="#F59E0B" />
              <path d="M20 62C30 54 40 54 50 62C60 70 70 70 80 62" stroke="#10B981" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <div className="flex flex-col">
              <span className="text-2xl font-black bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent leading-none">
                {t.brandName}
              </span>
              <span className="text-[10px] text-slate-400 tracking-wider mt-1">{t.brandSub}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/30 text-xs px-3 py-2 rounded-full transition font-semibold"
            >
              🌐 {lang === 'ar' ? 'English' : 'عربي'}
            </button>
            <a href="#packages" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 px-5 rounded-full text-xs shadow-lg shadow-amber-500/10">
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
      <section id="packages" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.packagesTitle}</h2>
          <p className="text-slate-400 text-sm">{t.packagesSub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-slate-900/60 rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-2xl transition duration-500 group">
              <div>
                <div className="relative overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-56 object-cover group-hover:scale-105 transition duration-700" />
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20 text-xs px-3 py-1 rounded-full font-medium">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">{pkg.title}</h3>
                  <div className="mb-3 flex items-center justify-between">
                    <div>
                      <span className="text-amber-400 font-black text-2xl">{pkg.price}</span>
                      <span className="text-xs font-normal text-slate-500 mx-1">{t.perPerson}</span>
                    </div>
                    {pkg.minGuestsRequired > 1 && (
                      <span className="text-[11px] text-amber-300/80 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                        {t.minGuests}
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">{pkg.description}</p>
                  
                  <div className="space-y-1.5 border-t border-slate-800/80 pt-3">
                    {pkg.features.map((feat, idx) => (
                      <div key={idx} className="text-xs text-slate-300 flex items-center gap-2">
                        <span className="text-amber-400">✦</span> {feat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => handleOpenPackageModal(pkg)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-3.5 rounded-xl transition shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
                >
                  {t.detailsBtn}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner */}
        <div className="bg-gradient-to-r from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-500/30 rounded-3xl p-8 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="text-2xl font-bold text-white">{t.customTourTitle}</h3>
          <p className="text-slate-300 text-xs max-w-xl mx-auto">{t.customTourSub}</p>
          <button
            onClick={() => setCustomModalOpen(true)}
            className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-8 rounded-full text-xs shadow-lg transition"
          >
            {t.customTourBtn}
          </button>
        </div>
      </section>

      {/* Package Detail & Direct Booking Modal */}
      {activeModalPackage && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 relative shadow-2xl">
            
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

            {/* Timeline Section */}
            <div className="space-y-3 border-t border-b border-slate-800/80 py-4">
              <h4 className="text-sm font-bold text-amber-400">{t.itineraryTitle}</h4>
              <div className="space-y-3 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                {activeModalPackage.itinerary.map((step: string, i: number) => (
                  <div key={i} className="text-xs text-slate-300 flex items-start gap-3">
                    <span className="text-amber-500 font-bold text-base">•</span>
                    <span className="leading-relaxed">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrated Direct Booking Form */}
            <form onSubmit={handleModalBooking} className="space-y-5 bg-slate-950 p-6 rounded-2xl border border-slate-800">
              <h4 className="text-base font-bold text-white border-b border-slate-800 pb-2">تفاصيل الحجز المباشر لهذه الباقة:</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">{t.tripTypeLabel}</label>
                  <select value={tripType} onChange={(e) => setTripType(e.target.value)} className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-xs">
                    <option value={t.shared}>{t.shared}</option>
                    <option value={t.private}>{t.private} (+150 SAR)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">{t.guestsLabel}</label>
                  <input 
                    type="number" 
                    min={activeModalPackage.minGuestsRequired || 1} 
                    max="30" 
                    value={guests} 
                    onChange={(e) => setGuests(parseInt(e.target.value) || (activeModalPackage.minGuestsRequired || 1))} 
                    className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-xs" 
                    required 
                  />
                  {activeModalPackage.minGuestsRequired > 1 && (
                    <span className="text-[10px] text-amber-400 block mt-1">* {t.minGuests}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2">{t.dateLabel}</label>
                  <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 text-xs" required />
                </div>
              </div>

              <div className="space-y-2 border-t border-slate-800 pt-3">
                <span className="block text-xs font-medium text-slate-400">{t.extrasLabel}</span>
                <label className="flex items-center gap-3 cursor-pointer text-xs text-amber-400 font-semibold">
                  <input type="checkbox" checked={includeHotel} onChange={(e) => setIncludeHotel(e.target.checked)} className="w-4 h-4 accent-amber-500 rounded" />
                  🏨 {t.hotelOpt}
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300">
                  <input type="checkbox" checked={includeTransport} onChange={(e) => setIncludeTransport(e.target.checked)} className="w-4 h-4 accent-amber-500 rounded" />
                  {t.transportOpt}
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300">
                  <input type="checkbox" checked={includeMeal} onChange={(e) => setIncludeMeal(e.target.checked)} className="w-4 h-4 accent-amber-500 rounded" />
                  {t.mealOpt}
                </label>
              </div>

              <div className="pt-2 flex justify-between items-center border-t border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 block">{t.totalEstimated}</span>
                  <span className="text-2xl font-black text-amber-400">
                    {((activeModalPackage.price + (tripType.includes('VIP') ? 150 : 0) + (includeHotel ? 350 : 0) + (includeTransport ? 80 : 0) + (includeMeal ? 120 : 0)) * guests)} SAR
                  </span>
                </div>
                <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-6 py-3.5 rounded-xl text-xs transition shadow-lg">
                  {t.whatsappBtn}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* Custom Tour Modal */}
      {customModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 space-y-5 relative">
            <button onClick={() => setCustomModalOpen(false)} className="absolute top-4 left-4 text-slate-400 hover:text-white">✕</button>
            <h3 className="text-xl font-bold text-white">{t.customTourTitle}</h3>
            <form onSubmit={handleCustomTourSubmit} className="space-y-4">
              <div>
                <label className="block text-xs text-slate-300 mb-1">عدد الساعات المتوقعة:</label>
                <input type="number" value={customHours} onChange={(e) => setCustomHours(e.target.value)} className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" min="2" max="24" required />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">عدد الأشخاص:</label>
                <input type="number" value={customGuests} onChange={(e) => setCustomGuests(parseInt(e.target.value) || 1)} className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white" min="1" required />
              </div>
              <div>
                <label className="block text-xs text-slate-300 mb-1">المعالم أو الأنشطة المطلوبة (اختياري):</label>
                <textarea value={customPlaces} onChange={(e) => setCustomPlaces(e.target.value)} placeholder="مثلاً: جولة بحرية + زيارة البلد وتناول عشاء شعبية" className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white h-24" />
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-slate-950 font-bold py-3.5 rounded-xl text-xs">
                💬 إرسال الطلب عبر الواتساب
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Reviews Section */}
      <section className="bg-slate-900/30 border-t border-b border-slate-800/50 py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t.reviewsTitle}</h2>
            <p className="text-slate-400 text-xs">{t.reviewsSub}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {t.reviews.map((rev, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800 space-y-3">
                <span className="text-amber-400 text-xs font-bold">⭐⭐⭐⭐⭐ {rev.rating}</span>
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-10 text-center text-xs border-t border-slate-900">
        <p>© {new Date().getFullYear()} {t.brandName} - {t.brandSub}. All rights reserved.</p>
      </footer>

    </div>
  );
}
