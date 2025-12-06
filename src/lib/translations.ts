export type SupportedLang = "en" | "ar";

type Messages = Record<string, { en: string; ar: string }>;

export const messages: Messages = {
  // Header
  nav_home: { en: "Home", ar: "الرئيسية" },
  nav_about: { en: "About", ar: "من نحن" },
  nav_services: { en: "Services", ar: "خدماتنا" },
  nav_projects: { en: "Projects", ar: "مشاريعنا" },
  nav_contact: { en: "Contact", ar: "تواصل معنا" },
  book_consultation: { en: "Book Consultation", ar: "احجز استشارة" },

  // Hero
  hero_title: {
    en: "Designing spaces that reflect you.",
    ar: "نصمّم مساحات تعكس شخصيتك.",
  },
  hero_subtitle: {
    en: "Complete interior design and full finishing services in Sohag — design, execution, furnishing, and turnkey delivery.",
    ar: "خدمات تصميم داخلي وتشطيبات كاملة في سوهاج — تصميم، تنفيذ، تأثيث، وتسليم على المفتاح.",
  },
  explore_work: { en: "Explore Our Work", ar: "استكشف أعمالنا" },

  // About
  about_title: {
    en: "A Trustworthy Partner for Your Dream Space",
    ar: "شريك موثوق لمساحتك الحلم",
  },
  about_subtitle: {
    en: "Home Stylist is a premier interior design and full finishing studio based in Sohag. We specialize in transforming spaces from concept to reality, handling every detail with precision and care.",
    ar: "هوم ستايلست هو استوديو رائد للتصميم الداخلي والتشطيبات المتكاملة في سوهاج. نحن متخصصون في تحويل المساحات من مجرد فكرة إلى حقيقة، مع الاهتمام بأدق التفاصيل بحرفية وعناية.",
  },
  
  // Process Steps
  step_consultation_title: { en: "Consultation", ar: "الاستشارة" },
  step_consultation_desc: {
    en: "We start with a free consultation to understand your needs and vision.",
    ar: "نبدأ باستشارة مجانية لفهم احتياجاتك ورؤيتك بشكل كامل.",
  },
  step_design_title: { en: "Design", ar: "التصميم" },
  step_design_desc: {
    en: "Our team creates detailed 2D/3D designs for your approval.",
    ar: "يقوم فريقنا بإنشاء تصميمات تفصيلية ثنائية وثلاثية الأبعاد لمراجعتك والموافقة عليها.",
  },
  step_execution_title: { en: "Execution", ar: "التنفيذ" },
  step_execution_desc: {
    en: "We manage all finishing work with precision and high-quality materials.",
    ar: "ندير جميع أعمال التشطيبات بدقة عالية وباستخدام أجود الخامات.",
  },
  step_handover_title: { en: "Handover", ar: "التسليم" },
  step_handover_desc: {
    en: "We deliver your dream space, ready for you to enjoy.",
    ar: "نسلّمك مساحة أحلامك جاهزة للاستمتاع بها.",
  },
  
  // Services
  services_title: { en: "Our Services", ar: "خدماتنا" },
  services_subtitle: {
    en: "We offer a complete suite of services to manage your project from start to finish.",
    ar: "نقدم مجموعة متكاملة من الخدمات لإدارة مشروعك من البداية إلى النهاية.",
  },
  service_design_title: { en: "Interior Design", ar: "تصميم داخلي" },
  service_design_desc: {
    en: "2D & 3D visualization to bring your vision to life before execution.",
    ar: "تصور ثنائي وثلاثي الأبعاد لتجسيد رؤيتك قبل بدء التنفيذ.",
  },
  service_finishing_title: { en: "Full Finishing & Contracting", ar: "تشطيبات ومقاولات متكاملة" },
  service_finishing_desc: {
    en: "Complete execution from plumbing and electrical to painting and flooring.",
    ar: "تنفيذ كامل لأعمال السباكة والكهرباء والدهانات والأرضيات.",
  },
  service_supervision_title: { en: "Engineering Supervision", ar: "إشراف هندسي" },
  service_supervision_desc: {
    en: "Dedicated project management to ensure quality and timely delivery.",
    ar: "إدارة متخصصة للمشروع لضمان الجودة والتسليم في الوقت المحدد.",
  },
  service_furniture_title: { en: "Furniture & Decor Styling", ar: "تأثيث وتنسيق الديكور" },
  service_furniture_desc: {
    en: "Sourcing and styling furniture, lighting, and decor to complete your space.",
    ar: "اختيار وتنسيق الأثاث والإضاءة والديكورات لإكمال مساحتك.",
  },

  // Projects
  projects_title: { en: "Selected Interiors & Finishing Projects", ar: "مشاريع مختارة في التصميم والتشطيبات" },
  projects_subtitle: {
    en: "Explore some of our transformations and see the quality we deliver.",
    ar: "استكشف بعض تحولاتنا وشاهد الجودة التي نقدمها.",
  },
  project_1_title: { en: "Marble Spa Bathroom", ar: "حمام رخامي فاخر" },
  project_1_desc: { en: "A serene grey-marble bathroom with a floating vanity, walk-in shower, and spa-inspired lighting for everyday relaxation.", ar: "حمام هادئ من الرخام الرمادي مع حوض عائم، دش واسع، وإضاءة مستوحاة من المنتجعات الصحية للاسترخاء اليومي." },
  project_2_title: { en: "Cozy Modern Bedroom", ar: "غرفة نوم عصرية دافئة" },
  project_2_desc: { en: "A warm, contemporary bedroom that layers soft textiles, a patterned rug, and ambient lighting to create a calm, restful retreat.", ar: "غرفة نوم معاصرة ودافئة تجمع بين المنسوجات الناعمة، سجادة منقوشة، وإضاءة محيطة لخلق ملاذ هادئ ومريح." },
  project_3_title: { en: "Elegant Social Lounge", ar: "صالة جلوس أنيقة" },
  project_3_desc: { en: "A bright, open living space with clean lines, comfortable seating, and refined finishes designed for relaxed gatherings.", ar: "مساحة معيشة مشرقة ومفتوحة تتميز بخطوط نظيفة، مقاعد مريحة، وتشطيبات راقية مصممة للتجمعات المريحة." },
  project_4_title: { en: "Soft Blush Kids’ Dream Rooms", ar: "غرف أطفال حالمة بألوان وردية" },
  project_4_desc: { en: "A playful kids' room in soft blush tones with joyful textures and cozy corners, designed for safety and organization.", ar: "غرفة أطفال مبهجة بدرجات اللون الوردي الناعم مع خامات مرحة وأركان دافئة، مصممة للأمان والتنظيم." },
  project_5_title: { en: "Modern Dining & Lounge Experience", ar: "تجربة طعام وجلوس عصرية" },
  project_5_desc: { en: "An airy, modern dining space combining clean lines and warm materials for everyday meals and special gatherings.", ar: "مساحة طعام عصرية وجيدة التهوية تجمع بين الخطوط النظيفة والمواد الدافئة للوجبات اليومية والمناسبات الخاصة." },
  project_6_title: { en: "Signature Contemporary Kitchens", ar: "مطابخ عصرية مميزة" },
  project_6_desc: { en: "Two contrasting kitchens—one cool grey, one mint green—balancing sleek style, smart storage, and natural light.", ar: "مطبخان متباينان - أحدهما رمادي هادئ والآخر أخضر نعناعي - يوازنان بين الأناقة العصرية، التخزين الذكي، والإضاءة الطبيعية." },

  // Contact
  contact_title: { en: "Book Your Free Consultation", ar: "احجز استشارتك المجانية" },
  contact_subtitle: {
    en: "Tell us a bit about your project and we’ll get back to you to schedule a free consultation and site visit.",
    ar: "أخبرنا قليلاً عن مشروعك وسنعاود الاتصال بك لتحديد موعد استشارة مجانية وزيارة للموقع.",
  },
  working_hours: { en: "Working Hours: Sat - Thu, 9am - 6pm", ar: "مواعيد العمل: السبت - الخميس، 9ص - 6م" },
  location: { en: "Location: Sohag, Egypt", ar: "الموقع: سوهاج، مصر" },
  chat_whatsapp: { en: "Chat on WhatsApp", ar: "تحدث عبر واتساب" },

  // Contact Form
  form_full_name: { en: "Full Name", ar: "الاسم الكامل" },
  form_full_name_placeholder: { en: "Your full name", ar: "اسمك الكامل" },
  form_phone: { en: "Phone Number", ar: "رقم الهاتف" },
  form_phone_placeholder: { en: "Your phone number", ar: "رقم هاتفك" },
  form_location: { en: "Location (City / Area)", ar: "الموقع (المدينة / المنطقة)" },
  form_location_placeholder: { en: "e.g. Sohag, Akhmim", ar: "مثال: سوهاج، أخميم" },
  form_message: { en: "Message (Optional)", ar: "الرسالة (اختياري)" },
  form_message_placeholder: { en: "Tell us about your project...", ar: "أخبرنا عن مشروعك..." },
  form_submit_button: { en: "Submit Request via WhatsApp", ar: "أرسل الطلب عبر واتساب" },

  // Footer
  footer_copyright: { en: "Home Stylist. All Rights Reserved.", ar: "هوم ستايلست. جميع الحقوق محفوظة." },
};
