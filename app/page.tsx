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

  const whatsappNumber = '966580083838'; // ضع رقم الواتساب الرسمي هنا

  const t = {
    ar: {
      brandName: "روّق",
      brandSub: "تجارب جدة السياحية",
      heroBadge: "وجهتك الأولى لتجارب البحر والتراث والأنشطة 🌊",
      heroTitle: "روّق واكتشف جدة بشغف جديد",
      heroDesc: "نضمن لك أفضل لحظات عروس البحر الأحمر في 10 باقات حصرية صُممت خصيصاً لتصنع لك ذكريات استثنائية.",
      bookBtn: "استكشف الباقات",
      packagesTitle: "الباقات والتجارب المتاحة (10 باقات)",
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
      galleryTitle: "📸 لقطات حية من تجارب عملائنا السابقة",
      gallerySub: "صور واقعية تم التقاطها خلال جولاتنا البحرية والتراثية في جدة",
      trustStats: [
        { num: "+1,200", label: "سائح ومغامر سعيد" },
        { num: "4.9/5", label: "تقييم العملاء" },
        { num: "100%", label: "مرشدون محليون معتمدون" }
      ],
      reviewsTitle: "آراء وانطباعات الزوار (تجارب حقيقية)",
      reviewsSub: "استمع لما يقوله عملاؤنا عن تفاصيل رحلاتهم واستجمامهم معنا",
      reviews: [
        { name: "عبدالله الجعيد", role: "زائر من الرياض", comment: "خذينا باقة الـ 3 أيام الفل كامل، الصراحة خرافية! من أمتع الأيام اللي قضيناها بجدة. التنظيم دقيق جداً والسواق والمرشد خلوقين وسريعين بالتعامل.", rating: "5/5" },
        { name: "سارة وخالد Al-Kuwait", role: "رحلة عرسان (الكويت)", comment: "رحلة اليخت والغروب كانت خيالية، العشاء البحري طازج ولذيذ والخدمة VIP فعلاً. أنصح أي أحد يزور جدة يتواصل مع روّق بدون تردد.", rating: "5/5" },
        { name: "Sarah & Mark Jenkins", role: "Tourists from UK", comment: "The Al-Balad historic tour was the absolute highlight of our trip to Saudi Arabia. Our guide knew every hidden coffee spot and historic story. Extremely safe and smooth!", rating: "5/5" },
        { name: "م. فيصل الغامدي", role: "رحلة عائلية (6 أفراد)", comment: "أخذنا تجربة الكاياك والغوص في أبحر، العيال انسطحوا بالمرة! المرشدين البحرية متمرسين والسترات ومعدات الأمان ممتازة جداً.", rating: "5/5" },
        { name: "نورة القحطاني", role: "زائرة من دبي", comment: "خدمة التوصيل الفاخرة والضيافة الجداوية بالقهوة والحلى التراثي ضافت لمسة ذوق للرحلة. اهتمام رهيب بالتفاصيل الصغار.", rating: "5/5" },
        { name: "سعود الدوسري", role: "مغامر مستقل", comment: "جربت رحلة السفاري والتطعيس بالصحراء، العشاء المشوي حول شبة النار تحت النجوم كان ختام يوم بطل. يعطيكم العافية يا أبطال روّق.", rating: "5/5" }
      ]
    },
    en: {
      brandName: "Rawaq",
      brandSub: "Jeddah Tourism Experiences",
      heroBadge: "Your Top Choice for Sea & Heritage Adventures 🌊",
      heroTitle: "Rawaq – Discover Jeddah with Passion",
      heroDesc: "Curated Red Sea marine tours and authentic cultural journeys across 10 exclusive packages.",
      bookBtn: "Explore Packages",
      packagesTitle: "Available Experiences & Packages (10 Packages)",
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
      galleryTitle: "📸 Live Shots from Previous Trips",
      gallerySub: "Real moments captured during our coastal & heritage tours in Jeddah",
      trustStats: [
        { num: "+1,200", label: "Happy Adventurers" },
        { num: "4.9/5", label: "Customer Rating" },
        { num: "100%", label: "Certified Local Guides" }
      ],
      reviewsTitle: "Visitor Testimonials & Real Stories",
      reviewsSub: "Hear what our guests say about their memorable experiences with us",
      reviews: [
        { name: "Abdullah Al-Juaid", role: "Visitor from Riyadh", comment: "We took the 3-day VIP full package, absolutely phenomenal! Super organized and smooth service.", rating: "5/5" },
        { name: "Sarah & Khaled", role: "Honeymooners (Kuwait)", comment: "The yacht sunset cruise was magical! Fresh seafood buffet and top VIP service.", rating: "5/5" },
        { name: "Sarah & Mark Jenkins", role: "Tourists from UK", comment: "The Al-Balad historic tour was the absolute highlight of our trip to Saudi Arabia. Extremely safe and smooth!", rating: "5/5" },
        { name: "Eng. Faisal Al-Ghamdi", role: "Family Trip (6 Persons)", comment: "Great kayaking and diving in Obhur. Safe equipment and awesome instructors!", rating: "5/5" },
        { name: "Noura Al-Qahtani", role: "Visitor from Dubai", comment: "Luxury transport and Hijazi coffee hospitality added a touch of elegance. Loved the details!", rating: "5/5" },
        { name: "Saud Al-Dossary", role: "Solo Explorer", comment: "The desert safari and stargazing campfire BBQ was the best ending to my trip. Thanks Rawaq!", rating: "5/5" }
      ]
    }
  }[lang];

  // ألبوم صور الرحلات الواقعية
  const tripGallery = [
    {
      title: lang === 'ar' ? 'غوص وأعماق أبحر' : 'Obhur Scuba Diving',
      location: lang === 'ar' ? 'البحر الأحمر - أبحر' : 'Red Sea - Obhur',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: lang === 'ar' ? 'أزقة وروشان البلد التاريخية' : 'Al-Balad Heritage Walk',
      location: lang === 'ar' ? 'جدة التاريخية' : 'Historic Jeddah',
      image: 'https://scth.scene7.com/is/image/scth/albalad-jeddah:crop-760x570?defaultImage=albalad-jeddah'
    },
    {
      title: lang === 'ar' ? 'غروب الشمس واستجمام الكاياك' : 'Sunset Kayaking Session',
      location: lang === 'ar' ? 'شاطئ أبحر' : 'Obhur Coast',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop'
    },
    {
      title: lang === 'ar' ? 'سهرة ومخيم صحراء جدة' : 'Desert Stargazing Camp',
      location: lang === 'ar' ? 'وادي قديح' : 'Qadid Valley',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=800&auto=format&fit=crop'
    }
  ];

  // الباقة الرئيسية الشاملة الـ 3 أيام (Featured Banner Package)
  const featured3DayPackage = {
    id: 'full_package_3days',
    title: lang === 'ar' ? 'باقة جدة الشاملة (3 أيام - فل كامل VIP)' : 'Full Jeddah 3-Day VIP Grand Package',
    price: 799,
    category: lang === 'ar' ? '⭐ الباقة الشاملة الأكثر طلباً' : '⭐ Most Popular Grand VIP',
    image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1200&auto=format&fit=crop',
    description: lang === 'ar' ? 'تجربة أسطورية متكاملة لمشاهدة جميع معالم جدة في 3 أيام متتالية: رحلة بحرية وغوص بأبحر + جولة تسوق ومطاعم عالمية + استكشاف أسرار أزقة البلد التاريخية.' : 'Full 3-day legendary journey covering all Jeddah highlights: Red Sea Marine & Diving + Luxury Shopping & Dining + Historic Al-Balad UNESCO Tour.',
    features: lang === 'ar' ? ['شامل برنامج 3 أيام كاملة', 'أقل عدد للحجز شخصين (2)', 'بحر + تسوق + تراث + مرشد خاص', 'خصومات مميزة على الإقامة والمواصلات'] : ['Full 3-Day Consecutive Journey', 'Min 2 Persons Required', 'Marine + Shopping + Heritage + Private Guide', 'Special Upgrades Available'],
    locationName: lang === 'ar' ? 'جدة - نقاط تجمع متعددة ومريحة' : 'Jeddah - Multiple Convenient Locations',
    mapUrl: 'https://maps.google.com/?q=Jeddah+Saudi+Arabia',
    minGuestsRequired: 2,
    itinerary: lang === 'ar' ? [
      'اليوم الأول (المغامرة البحرية): 14:00 الانطلاق من مرسى أبحر، أنشطة السباحة والسنوركلينج والغوص مع كابتن ومرشد متخصص وسناك عالبحر.',
      'اليوم الثاني (التسوق والبوليفارد): 16:00 جولة VIP في أشهر مجمعات ومارينا جدة مع مساعدة تسوق وحجوزات مطاعم عالمية.',
      'اليوم الثالث (سحر التراث): 17:00 جولة حصرية في أزقة البلد التراثية، زيارة بيت نصيف والمتاحف، وتذوق المأكولات الشعبية والقهوة.'
    ] : [
      'Day 1 (Red Sea Expedition): 14:00 Departure from Obhur marina, snorkeling, diving & sunset relaxation on boat.',
      'Day 2 (Shopping & Lifestyle): 16:00 Guided VIP shopping tour at Red Sea Mall & Boulevard with fine dining reservations.',
      'Day 3 (Historic Heritage): 17:00 Deep walk in Al-Balad UNESCO alleys, house museums & local Hijazi food tasting.'
    ]
  };

  // قائمة الـ 9 باقات المتبقية لتكتمل 10 باقات
  const otherPackages = [
    {
      id: 'abhur',
      title: lang === 'ar' ? 'مغامرة أبحر والغوص بالبحر الأحمر' : 'Abhur Marine & Red Sea Diving',
      price: 450,
      category: lang === 'ar' ? 'أنشطة بحرية' : 'Marine Activity',
      image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جولة قارب ممتعة في شواطئ أبحر، تجربة السنوركلينج والغوص مع مدربين معتمدين وتأمل الشعاب المرجانية.' : 'Boat tour in Abhur, snorkeling and diving with certified instructors exploring coral reefs.',
      features: lang === 'ar' ? ['قارب حديث ومجهز', 'معدات غوص وسنوركلينج', 'كابتن ومرشد بحري'] : ['Modern Boat', 'Diving & Snorkeling Gear', 'Licensed Captain'],
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
      features: lang === 'ar' ? ['مرشد سياحي مرخص', 'تذاكر المتاحف والبيوت', 'تذوق المأكولات الشعبية'] : ['Licensed Tour Guide', 'Museum Tickets', 'Street Food Tasting'],
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
      features: lang === 'ar' ? ['جولة بسيارة حديثة', 'زيارة نادي اليخوت', 'مرشد سياحي محلي'] : ['Modern Car Tour', 'Yacht Club Access', 'Local Guide'],
      locationName: lang === 'ar' ? 'الكورنيش الشمالي - نادي اليخوت' : 'North Corniche - Jeddah Yacht Club',
      mapUrl: 'https://maps.google.com/?q=Jeddah+Yacht+Club',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['16:30 - جولة الكورنيش بالسيارة', '17:15 - زيارة نادي اليخوت والمارينا', '18:30 - ممشى حلبة الفورمولا 1'] : ['16:30 - Corniche drive', '17:15 - Yacht Club walk', '18:30 - F1 Track walkway']
    },
    {
      id: 'sunset',
      title: lang === 'ar' ? 'استجمام غروب الشمس والكاياك' : 'Sunset Beach & Kayak Experience',
      price: 350,
      category: lang === 'ar' ? 'استرخاء ومغامرة' : 'Relaxation & Adventure',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جلسة خاصة ومجهزة على الشاطئ لحظة الغروب، أنشطة التجديف البحري (Kayak)، ومشروبات منعشة.' : 'Private beach seating at sunset, kayaking activities, and refreshing drinks.',
      features: lang === 'ar' ? ['جلسة شاطئية VIP', 'قوارب الكاياك وتجديف', 'سترات نجاة ومدرب'] : ['VIP Beach Lounge', 'Kayaking & Gear', 'Safety Life Vests'],
      locationName: lang === 'ar' ? 'شاطئ شارات أورينت - أبحر' : 'Sharat Orient Beach - Obhur',
      mapUrl: 'https://maps.google.com/?q=Obhur+Beach+Jeddah',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['16:00 - تجهيز الجلسة الشاطئية', '16:30 - التجديف بالكاياك', '17:45 - تأمل لحظة الغروب'] : ['16:00 - Beach lounge setup', '16:30 - Kayaking', '17:45 - Sunset view']
    },
    {
      id: 'yacht',
      title: lang === 'ar' ? 'جولة اليخت الفاخر والجزر النائية' : 'Luxury Yacht & Offshore Islands',
      price: 750,
      category: lang === 'ar' ? 'VIP وفخامة' : 'VIP & Luxury',
      image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'رحلة بحرية فاخرة على متن يخت حديث إلى شِعاب وجزر البحر الأحمر المفتوحة مع بوفيه مأكولات بحرية.' : 'Luxury yacht cruise to open Red Sea coral islands with open seafood buffet.',
      features: lang === 'ar' ? ['يخت VIP مجهز بالكامل', 'وجبة بوفيه بحري طازج', 'أنشطة سباحة وجت سكي'] : ['Fully Equipped Yacht', 'Fresh Seafood Buffet', 'Jet Ski & Swimming'],
      locationName: lang === 'ar' ? 'مرسى الأحلام - جدة' : 'Al-Ahlam Marina, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Al+Ahlam+Marina+Jeddah',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['10:00 - الإنطلاق باليخت', '13:30 - بوفيه المأكولات البحرية', '15:00 - الألعاب المائية'] : ['10:00 - Yacht Departure', '13:30 - Seafood Buffet', '15:00 - Water sports']
    },
    {
      id: 'safari',
      title: lang === 'ar' ? 'سفاري وتخييم صحراء جدة' : 'Jeddah Desert Safari & Camping',
      price: 290,
      category: lang === 'ar' ? 'صحراء ومغامرة' : 'Desert & Safari',
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'تجربة قيادة سيارات الدفع الرباعي على الكثبان الرملية، التخييم الشعبي، ومراقبة النجوم مع العشاء.' : '4x4 dune bashing adventure, traditional desert camp setup, stargazing and BBQ dinner.',
      features: lang === 'ar' ? ['سيارات 4x4 مع سائقين', 'تطعيس على الرمال', 'عشاء مشويات طازج'] : ['4x4 Dune Bashing', 'Desert Camp Setup', 'BBQ Dinner'],
      locationName: lang === 'ar' ? 'صحراء جدة - وادي قديح' : 'Jeddah Desert - Qadid Valley',
      mapUrl: 'https://maps.google.com/?q=Jeddah+Desert+Safari',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['15:30 - الانطلاق بدفع رباعي', '16:30 - مغامرة التطعيس', '19:30 - العشاء حول النار'] : ['15:30 - 4x4 Departure', '16:30 - Dune Bashing', '19:30 - Campfire BBQ']
    },
    {
      id: 'shopping',
      title: lang === 'ar' ? 'جولة التسوق الفاخر والمطاعم العالمية' : 'Luxury Shopping & Fine Dining Tour',
      price: 260,
      category: lang === 'ar' ? 'تسوق وأسلوب حياة' : 'Shopping & Lifestyle',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جولة في أشهر مجمعات جدة الفاخرة (Red Sea Mall & Boulevard)، حجز مطاعم عالمية ومساعد تسوق شخصي.' : 'Guided VIP tour in Jeddah’s premier shopping malls & boulevards with fine dining reservations.',
      features: lang === 'ar' ? ['سيارة خاصة وتوصيل', 'مساعد تسوق محلي', 'حجوزات مطاعم معتمدة'] : ['Private Transport', 'Personal Shopping Guide', 'VIP Dining Booking'],
      locationName: lang === 'ar' ? 'مول رد سي - جدة' : 'Red Sea Mall, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Red+Sea+Mall+Jeddah',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['16:00 - جولة المجمعات الفاخرة', '18:30 - استراحة القهوة والبوليفارد', '20:00 - عشاء فاخر'] : ['16:00 - Mall & Luxury Tour', '18:30 - Boulevard Coffee', '20:00 - Fine Dining']
    },
    {
      id: 'coral_island',
      title: lang === 'ar' ? 'رحلة جزر المرجان والأنشطة المائية' : 'Coral Reef Island & Water Activities',
      price: 490,
      category: lang === 'ar' ? 'أنشطة بحرية' : 'Marine Activity',
      image: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'انطلاق إلى أبعد نقطة مرجانية في جدة، ركوب البانانا بوت، السنوركلينج واستكشاف الأحياء البحرية.' : 'Expedition to deep reef islands, banana boat rides, snorkeling and underwater life exploration.',
      features: lang === 'ar' ? ['قارب سريع سريع', 'أنشطة بانانا ودونات', 'وجبة غداء خفيفة'] : ['Speed Boat Expedition', 'Banana Boat & Towables', 'Light Lunch'],
      locationName: lang === 'ar' ? 'مرسى مارينا أبحر - جدة' : 'Obhur Marina Hub, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Obhur+Marina+Jeddah',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['09:00 - الانطلاق للجزر النائية', '11:00 - الألعاب المائية والبانانا', '13:00 - الغداء على الشاطئ'] : ['09:00 - Departure to Reef Island', '11:00 - Banana boat activities', '13:00 - Island Lunch']
    },
    {
      id: 'coffee_culture',
      title: lang === 'ar' ? 'جولة المقاهي المختصة والفن الثقافي' : 'Specialty Coffee & Art Culture Tour',
      price: 180,
      category: lang === 'ar' ? 'ثقافة وأسلوب حياة' : 'Culture & Coffee',
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1000&auto=format&fit=crop',
      description: lang === 'ar' ? 'جولة في أشهر معارض جدة الفنية والمقاهي المختصة العصرية واستكشاف التحف والمعارض المحلية.' : 'A refined tour exploring Jeddah’s top art galleries, artisan specialty cafes, and local cultural spots.',
      features: lang === 'ar' ? ['تذوق قهوة مختصة', 'دخول المعارض الفنية', 'مرشد ثقافي محلي'] : ['Specialty Coffee Tasting', 'Art Gallery Access', 'Local Cultural Guide'],
      locationName: lang === 'ar' ? 'حي الروضة والمحمل - جدة' : 'Al-Rawdah Art District, Jeddah',
      mapUrl: 'https://maps.google.com/?q=Jeddah+Art+Galleries',
      minGuestsRequired: 1,
      itinerary: lang === 'ar' ? ['17:00 - زيارة مركز حائل الفني', '18:30 - جلسة تذوق بمقهى مختص', '20:00 - جولة معارض معاصرة'] : ['17:00 - Art center visit', '18:30 - Specialty coffee session', '20:00 - Gallery walk']
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

        {/* 🌟 1. البنَر المميز العريض للباقة الشاملة الـ 3 أيام (FEATURED BANNER) */}
        <div className="mb-12 bg-gradient-to-r from-slate-900 via-slate-900/90 to-amber-950/40 rounded-3xl border-2 border-amber-500/50 overflow-hidden shadow-2xl shadow-amber-500/10 grid lg:grid-cols-12 gap-0 group">
          <div className="lg:col-span-7 p-6 md:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="inline-block bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/40">
                {featured3DayPackage.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-black text-white group-hover:text-amber-400 transition">
                {featured3DayPackage.title}
              </h3>
              <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-light">
                {featured3DayPackage.description}
              </p>
            </div>

            {/* Timeline preview */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800/80 space-y-2">
              <span className="text-xs font-bold text-amber-400 block mb-1">🗓️ خريطة الـ 3 أيام باختصار:</span>
              {featured3DayPackage.itinerary.map((step, i) => (
                <p key={i} className="text-[11px] text-slate-300 flex items-center gap-2">
                  <span className="text-amber-500">✦</span> {step}
                </p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800/80 pt-4">
              <div>
                <span className="text-3xl font-black text-amber-400">{featured3DayPackage.price}</span>
                <span className="text-xs text-slate-400 mx-1">{t.perPerson}</span>
                <span className="text-[10px] text-amber-300/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 block mt-1">
                  * {t.minGuests}
                </span>
              </div>
              <button
                onClick={() => handleOpenPackageModal(featured3DayPackage)}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-3.5 rounded-xl text-xs transition shadow-xl shadow-amber-500/20"
              >
                {t.detailsBtn}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-full overflow-hidden">
            <img 
              src={featured3DayPackage.image} 
              alt={featured3DayPackage.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent"></div>
          </div>
        </div>

        {/* 2. شبكة الـ 9 باقات المتبقية */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherPackages.map((pkg) => (
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
                <button onClick={() => handleOpenPackageModal(pkg)} className="w-full bg-slate-800/80 hover:bg-slate-800 text-slate-300 text-[11px] font-medium py-2 rounded-xl transition border border-slate-700/60">
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

      {/* Real Trips Gallery Section */}
      <section className="bg-slate-950 border-t border-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">{t.galleryTitle}</h2>
            <p className="text-slate-400 text-xs">{t.gallerySub}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tripGallery.map((item, idx) => (
              <div key={idx} className="relative rounded-2xl overflow-hidden border border-slate-800 group hover:border-amber-500/50 transition duration-500">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[10px] text-amber-400 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/30 w-fit mb-1">{item.location}</span>
                  <h4 className="text-sm font-bold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Reviews Section */}
      <section className="bg-slate-900/40 border-t border-b border-slate-800/50 py-20 px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">{t.reviewsTitle}</h2>
            <p className="text-slate-400 text-xs">{t.reviewsSub}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.reviews.map((rev, idx) => (
              <div key={idx} className="bg-slate-900 p-6 rounded-2xl border border-slate-800/80 space-y-4 hover:border-slate-700 transition">
                <div className="flex justify-between items-center">
                  <span className="text-amber-400 text-xs font-bold">⭐⭐⭐⭐⭐ {rev.rating}</span>
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-2.5 py-1 rounded-full">{rev.role}</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-light">"{rev.comment}"</p>
                <div className="border-t border-slate-800/60 pt-3">
                  <span className="block text-xs font-bold text-white">{rev.name}</span>
                </div>
              </div>
            ))}
          </div>
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

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-600 py-10 text-center text-xs border-t border-slate-900">
        <p>© {new Date().getFullYear()} {t.brandName} - {t.brandSub}. All rights reserved.</p>
      </footer>

    </div>
  );
}
