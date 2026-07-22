'use client';

import React, { useState } from 'react';

export default function Home() {
  const [lang, setLang] = useState<'ar' | 'en'>('ar');
  const [selectedPackage, setSelectedPackage] = useState('مغامرة أبحر والغوص بالبحر الأحمر');
  const [activeModalPackage, setActiveModalPackage] = useState<any>(null);
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [tripType, setTripType] = useState('مشتركة');
  
  // الإضافات الاختيارية
  const [includeHotel, setIncludeHotel] = useState(false);
  const [includeTransport, setIncludeTransport] = useState(false);
  const [includeMeal, setIncludeMeal] = useState(false);
  const [includeCoffee, setIncludeCoffee] = useState(false);

  // حالة نموذج الجولة الخاصة
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
      heroDesc: "نحزم لك أفضل لحظات عروس البحر الأحمر في 8 باقات حصرية صُممت خصيصاً لتصنع لك ذكريات استثنائية.",
      bookBtn: "احجز تجربتك",
      packagesTitle: "الباقات والتجارب المتاحة (8 باقات)",
      packagesSub: "اضغط على التفاصيل وجدول الرحلة للاطلاع على البرنامج والموقع على الخريطة",
      detailsBtn: "🔍 التفاصيل وجدول الرحلة",
      selectPkgBtn: "حجز هذه التجربة",
      perPerson: "ريال / للشخص",
      location: "الموقع ونقطة التجمع:",
      mapLink: "🗺️ فتح الموقع على خرائط جوجل",
      itineraryTitle: "🗓️ جدول وتفاصيل البرنامج:",
      bookingTitle: "تأكيد حجز الرحلة",
      bookingSub: "حدد خياراتك وسيتم تحويلك مباشرة للواتساب لتأكيد الحجز",
      selectPackageLabel: "الباقة المختارة",
      tripTypeLabel: "نوع الرحلة",
      shared: "مشتركة",
      private: "خاصة (VIP)",
      guestsLabel: "عدد الأشخاص",
      dateLabel: "تاريخ الرحلة",
      extrasLabel: "خدمات ترقية وإضافات (اختياري):",
      hotelOpt: "إضافة إقامة وفندق 4-5 نجوم شامل الإفطار (+350 ريال/شخص)",
      transportOpt: "مواصلات خاصة وسيارة حديثة من وإلى الفندق (+80 ريال/شخص)",
      mealOpt: "وجبة غداء/عشاء فاخرة (مأكولات بحرية أو شعبية) (+120 ريال/شخص)",
      coffeeOpt: "ضيافة القهوة المختصة والحلى الجداوي التراثي (+45 ريال/شخص)",
      totalEstimated: "المبلغ الإجمالي المتوقع:",
      totalSub: "شامل كافة الخيارات المحددة",
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
        { name: "عبدالله الجعيد", role: "زائر من الرياض", comment: "تنظيم احترافي جداً، وإضافة خيار السكن والمواصلات ريحتنا من هم التنسيق!", rating: "5/5" },
        { name: "Sarah Jenkins", role: "Tourist from UK", comment: "The Al-Balad tour & Obhur boat experience were pure magic. Highly recommended!", rating: "5/5" },
        { name: "فهد الشهري", role: "رحلة عائلية", comment: "الباقات متنوعة والأسعار ممتازة والتفاعل سريع عبر الواتساب.", rating: "5/5" }
      ]
    },
    en: {
      brandName: "Rawaq",
      brandSub: "Jeddah Tourism Experiences",
      heroBadge: "Your Top Choice for Sea & Heritage Adventures 🌊",
      heroTitle: "Rawaq – Discover Jeddah with Passion",
      heroDesc: "Curated Red Sea marine tours and authentic cultural journeys across 8 exclusive packages.",
      bookBtn: "Book Now",
      packagesTitle: "Available Experiences & Packages (8 Packages)",
      packagesSub: "Click 'Details & Itinerary' to view full program and exact GPS map location",
      detailsBtn: "🔍 Details & Itinerary",
      selectPkgBtn: "Book This Experience",
      perPerson: "SAR / Person",
      location: "Meeting Point Location:",
      mapLink: "🗺️ Open Location on Google Maps",
      itineraryTitle: "🗓️ Program Schedule & Itinerary:",
      bookingTitle: "Confirm Your Reservation",
      bookingSub: "Select your options and you will be directed to WhatsApp for instant confirmation",
      selectPackageLabel: "Selected Package",
      tripTypeLabel: "Trip Type",
      shared: "Shared Tour",
      private: "Private (VIP)",
      guestsLabel: "Number of Guests",
      dateLabel: "Tour Date",
      extrasLabel: "Optional Upgrades & Add-ons:",
      hotelOpt: "Add 4-5 Star Hotel Stay with breakfast (+350 SAR/person)",
      transportOpt: "Private modern hotel transport (+80 SAR/person)",
      mealOpt: "Luxury lunch/dinner meal (Seafood/Traditional) (+120 SAR/person)",
      coffeeOpt: "Specialty coffee & traditional Hijazi desserts (+45 SAR/person)",
      totalEstimated: "Estimated Total Price:",
      totalSub: "Includes all selected options",
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
        { name: "Abdullah Al-Juaid", role: "Visitor from Riyadh", comment: "Great organization, adding hotel and transport saved us so much effort!", rating: "5/5" },
        { name: "Sarah Jenkins", role: "Tourist from UK", comment: "The Al-Balad tour & Obhur boat experience were pure magic. Highly recommended!", rating: "5/5" },
        { name: "Fahad Al-Shehri", role: "Family Trip", comment: "Great package diversity and very fast communication via WhatsApp.", rating: "5/5" }
      ]
    }
  }[lang];

  // قائمة الباقات الـ 8 مع تحديث صورة البلد الرسمية
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
      itinerary: lang === 'ar' ? ['14:00 - التجمع والانطلاق', '15:15 - السباحة والغوص', '17:30 - الاسترخاء ومشاهدة الغروب'] : ['14:00 - Meeting & Boarding', '15:15 - Swimming & Diving', '17:30 - Sunset view']
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
      itinerary: lang === 'ar' ? ['17:00 - التجمع في باب جديد', '17:30 - زيارة البيوت والمتاحف', '19:30 - تجربة المأكولات الشعبية'] : ['17:00 - Gathering at Gate', '17:30 - Museums tour', '19:30 - Local food tasting']
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
      itinerary: lang === 'ar' ? ['16:30 - جولة الكورنيش', '17:15 - نادي اليخوت والمارينا', '18:30 - ممشى الفورمولا 1'] : ['16:30 - Corniche drive', '17:15 - Yacht Club walk', '18:30 - F1 Track walkway']
    },
    {
      id: 'sunset',
      title: lang === 'ar' ? 'استجمام غروب الشمس والكاياك' : 'Sunset Beach & Kayak Experience',
      price: 350,
      category: lang === 'ar' ? 'استرخاء ومغامرة' : 'Relaxation & Adventure',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جلسة خاصة ومجهزة على الشاطئ لحظة الغروب، أنشطة التجديف البحري (Kayak)، ومشروبات منعشة.' : 'Private beach seating at sunset, kayaking activities, and refreshing drinks.',
      features: lang === 'ar' ? ['جلسة شاطئية VIP', 'قوارب الكاياك وتجديف', 'سترات نجاة ومدرب', 'مشروبات باردة ودافئة'] : ['VIP Beach Lounge', 'Kayaking & Gear', 'Safety Life Vests', 'Cold/Hot Drinks'],
      locationName: lang === 'ar' ? 'شاطئ شارات أورينت - أبحر' : 'Sharat Orient Beach - Obhur',
      mapUrl: 'https://maps.google.com/?q=Obhur+Beach+Jeddah',
      itinerary: lang === 'ar' ? ['16:00 - تجهيز الجلسة الشاطئية', '16:30 - التجديف بالكاياك', '17:45 - تأمل لحظة الغروب'] : ['16:00 - Beach lounge setup', '16:30 - Kayaking', '17:45 - Sunset view']
    },
    {
      id: 'yacht',
      title: lang === 'ar' ? 'جولة اليخت الفاخر والجزر النائية' : 'Luxury Yacht & Offshore Islands',
      price: 750,
      category: lang === 'ar' ? 'VIP وفخامة' : 'VIP & Luxury',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'رحلة بحرية فاخرة على متن يخت حديث إلى شِعاب وجزر البحر الأحمر المفتوحة مع بوفيه مأكولات بحرية.' : 'Luxury yacht cruise to open Red Sea coral islands with open seafood buffet.',
      features: lang === 'ar' ? ['يخت VIP مجهز بالكامل', 'وجبة بوفيه بحري طازج', 'أنشطة سباحة وجت سكي', 'طاقم خدمة احترافي'] : ['Fully Equipped Yacht', 'Fresh Seafood Buffet', 'Jet Ski & Swimming', 'Professional Crew'],
      locationName: lang === 'ar' ? 'مرسى الأحلام - جدة' : 'Al-Ahlam Marina, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Al+Ahlam+Marina+Jeddah',
      itinerary: lang === 'ar' ? ['10:00 - الإنطلاق باليخت', '13:30 - بوفيه المأكولات البحرية', '15:00 - الألعاب المائية'] : ['10:00 - Yacht Departure', '13:30 - Seafood Buffet', '15:00 - Water sports']
    },
    {
      id: 'safari',
      title: lang === 'ar' ? 'سفاري وتخييم صحراء جدة' : 'Jeddah Desert Safari & Camping',
      price: 290,
      category: lang === 'ar' ? 'صحراء ومغامرة' : 'Desert & Safari',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'تجربة قيادة سيارات الدفع الرباعي على الكثبان الرملية، التخييم الشعبي، ومراقبة النجوم مع العشاء.' : '4x4 dune bashing adventure, traditional desert camp setup, stargazing and BBQ dinner.',
      features: lang === 'ar' ? ['سيارات 4x4 مع سائقين', 'تطعيس على الرمال', 'مخيم بساط شعبي', 'عشاء مشويات طازج'] : ['4x4 Dune Bashing', 'Desert Camp Setup', 'BBQ Dinner', 'Stargazing'],
      locationName: lang === 'ar' ? 'صحراء جدة - وادي قديح' : 'Jeddah Desert - Qadid Valley',
      mapUrl: 'https://maps.google.com/?q=Jeddah+Desert+Safari',
      itinerary: lang === 'ar' ? ['15:30 - الانطلاق بدفع رباعي', '16:30 - مغامرة التطعيس', '19:30 - العشاء حول النار'] : ['15:30 - 4x4 Departure', '16:30 - Dune Bashing', '19:30 - Campfire BBQ']
    },
    {
      id: 'shopping',
      title: lang === 'ar' ? 'جولة التسوق الفاخر والمطاعم العالمية' : 'Luxury Shopping & Fine Dining Tour',
      price: 260,
      category: lang === 'ar' ? 'تسوق وأسلوب حياة' : 'Shopping & Lifestyle',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جولة في أشهر مجمعات جدة الفاخرة (Red Sea Mall & Boulevard)، حجز مطاعم عالمية ومساعد تسوق شخصي.' : 'Guided VIP tour in Jeddah’s premier shopping malls & boulevards with fine dining reservations.',
      features: lang === 'ar' ? ['سيارة خاصة وتوصيل', 'مساعد تسوق محلي', 'حجوزات مطاعم معتمدة', 'خصومات تجارية'] : ['Private Transport', 'Personal Shopping Guide', 'VIP Dining Booking', 'Shopping Discounts'],
      locationName: lang === 'ar' ? 'مول رد سي - جدة' : 'Red Sea Mall, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Red+Sea+Mall+Jeddah',
      itinerary: lang === 'ar' ? ['16:00 - جولة المجمعات الفاخرة', '18:30 - استراحة القهوة والبوليفارد', '20:00 - عشاء فاخر'] : ['16:00 - Mall & Luxury Tour', '18:30 - Boulevard Coffee', '20:00 - Fine Dining']
    },
    {
      id: 'coral_island',
      title: lang === 'ar' ? 'رحلة جزر المرجان والأنشطة المائية' : 'Coral Reef Island & Water Activities',
      price: 490,
      category: lang === 'ar' ? 'أنشطة بحرية' : 'Marine Activity',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'انطلاق إلى أبعد نقطة مرجانية في جدة، ركوب البانانا بوت، السنوركلينج واستكشاف الأحياء البحرية.' : 'Expedition to deep reef islands, banana boat rides, snorkeling and underwater life exploration.',
      features: lang === 'ar' ? ['قارب سريع سريع', 'أنشطة بانانا ودونات', 'وجبة غداء خفيفة', 'تصوير عالي الدقة'] : ['Speed Boat Expedition', 'Banana Boat & Towables', 'Light Lunch', 'HD Photography'],
      locationName: lang === 'ar' ? 'مرسى مارينا أبحر - جدة' : 'Obhur Marina Hub, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Obhur+Marina+Jeddah',
      itinerary: lang === 'ar' ? ['09:00 - الانطلاق للجزر النائية', '11:00 - الألعاب المائية والبانانا', '13:00 - الغداء على الشاطئ'] : ['09:00 - Departure to Reef Island', '11:00 - Banana boat activities', '13:00 - Island Lunch']
    }
  ];

  const currentPkg = packages.find(p => p.title === selectedPackage) || packages[0];
  let basePrice = currentPkg.price;
  if (tripType === 'خاصة (VIP)' || tripType === 'Private (VIP)') basePrice += 150;

  const hotelCost = includeHotel ? 350 : 0;
  const transportCost = includeTransport ? 80 : 0;
  const mealCost = includeMeal ? 120 : 0;
  const coffeeCost = includeCoffee ? 45 : 0;

  const pricePerPerson = basePrice + hotelCost + transportCost + mealCost + coffeeCost;
  const totalPrice = pricePerPerson * guests;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    let extrasList: string[] = [];
    if (includeHotel) extrasList.push(lang === 'ar' ? 'سكن وفندق (+350 ريال)' : 'Hotel Stay (+350 SAR)');
    if (includeTransport) extrasList.push(lang === 'ar' ? 'مواصلات خاصة (+80 ريال)' : 'Private Transport (+80 SAR)');
    if (includeMeal) extrasList.push(lang === 'ar' ? 'وجبة فاخرة (+120 ريال)' : 'Luxury Meal (+120 SAR)');
    if (includeCoffee) extrasList.push(lang === 'ar' ? 'ضيافة قهوة وحلى (+45 ريال)' : 'Coffee & Dessert (+45 SAR)');
    
    const extrasText = extrasList.length > 0 ? extrasList.join(', ') : (lang === 'ar' ? 'بدون إضافات' : 'None');

    const message = lang === 'ar' 
      ? `مرحباً فريق روّق 🌊، أود حجز تجربة معكم:%0A- *الباقة:* ${selectedPackage}%0A- *نوع الرحلة:* ${tripType}%0A- *عدد الأشخاص:* ${guests}%0A- *التاريخ:* ${date}%0A- *الإضافات:* ${extrasText}%0A- *الإجمالي المتوقع:* ${totalPrice} ريال%0Aيرجى تأكيد الحجز.`
      : `Hello Rawaq Team 🌊, I would like to book a trip:%0A- *Package:* ${selectedPackage}%0A- *Trip Type:* ${tripType}%0A- *Guests:* ${guests}%0A- *Date:* ${date}%0A- *Extras:* ${extrasText}%0A- *Total:* ${totalPrice} SAR%0APlease confirm details.`;
    
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
            <a href="#booking" className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2 px-5 rounded-full text-xs shadow-lg shadow-amber-500/10">
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

      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12 space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.packagesTitle}</h2>
          <p className="text-slate-400 text-sm">{t.packagesSub}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-slate-900/60 rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-amber-500/40 hover:shadow-2xl transition duration-500 group">
              <div>
                <div className="relative overflow-hidden">
                  <img src={pkg.image} alt={pkg.title} className="w-full h-48 object-cover group-hover:scale-105 transition duration-700" />
                  <span className="absolute top-3 right-3 bg-slate-950/80 backdrop-blur-md text-amber-400 border border-amber-500/20 text-[10px] px-2.5 py-1 rounded-full font-medium">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition line-clamp-1">{pkg.title}</h3>
                  <div className="mb-3">
                    <span className="text-amber-400 font-black text-xl">{pkg.price}</span>
                    <span className="text-[10px] font-normal text-slate-500 mx-1">{t.perPerson}</span>
                  </div>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed line-clamp-2">{pkg.description}</p>
                </div>
              </div>

              <div className="p-5 pt-0 space-y-2">
                <button onClick={() => setActiveModalPackage(pkg)} className="w-full bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-[11px] font-medium py-2 rounded-xl transition border border-slate-700/60">
                  {t.detailsBtn}
                </button>
                <a href="#booking" onClick={() => setSelectedPackage(pkg.title)} className="block text-center bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs py-2.5 rounded-xl transition">
                  {t.selectPkgBtn}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Tour Banner (صمم جولتك الخاص بنفسك) */}
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
                <textarea value={customPlaces} onChange={(e) => setCustomPlaces(e.target.value)} placeholder="مثلاً: جولة بحرية + زيارة البلد وتناول عشاء شعبي" className="w-full p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-white h-24" />
              </div>
              <button type="submit" className="w-full bg-emerald-500 text-slate-950 font-bold py-3.5 rounded-xl text-xs">
                💬 إرسال الطلب عبر الواتساب
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-6 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-2xl mx-auto bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-800 shadow-2xl">
          <div className="text-center mb-8 space-y-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t.bookingTitle}</h2>
            <p className="text-slate-400 text-xs">{t.bookingSub}</p>
          </div>

          <form onSubmit={handleBooking} className="space-y-6">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-2">{t.selectPackageLabel}</label>
              <select value={selectedPackage} onChange={(e) => setSelectedPackage(e.target.value)} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none text-sm">
                {packages.map(p => (
                  <option key={p.id} value={p.title}>{p.title} ({p.price} SAR)</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">{t.tripTypeLabel}</label>
                <select value={tripType} onChange={(e) => setTripType(e.target.value)} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 outline-none text-sm">
                  <option value={t.shared}>{t.shared}</option>
                  <option value={t.private}>{t.private} (+150 SAR)</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">{t.guestsLabel}</label>
                <input type="number" min="1" max="30" value={guests} onChange={(e) => setGuests(parseInt(e.target.value) || 1)} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm" required />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-2">{t.dateLabel}</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="w-full p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 text-sm" required />
              </div>
            </div>

            <div className="border-t border-b border-slate-800/80 py-4 space-y-3">
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
              <label className="flex items-center gap-3 cursor-pointer text-xs text-slate-300">
                <input type="checkbox" checked={includeCoffee} onChange={(e) => setIncludeCoffee(e.target.checked)} className="w-4 h-4 accent-amber-500 rounded" />
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

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm">
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
