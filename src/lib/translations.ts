export type SupportedLang = "en" | "ar";

type Messages = Record<string, { en: string; ar: string }>;

export const messages: Messages = {
  hero_title: {
    en: "Designing spaces that reflect you.",
    ar: "نصمّم مساحات تعكس شخصيتك.",
  },
  hero_subtitle: {
    en: "Complete interior design and full finishing services in Sohag — design, execution, furnishing, and turnkey delivery.",
    ar: "خدمات تصميم داخلي وتشطيبات كاملة في سوهاج — تصميم، تنفيذ، تأثيث، وتسليم على المفتاح.",
  },
  about_title: {
    en: "A Trustworthy Partner for Your Dream Space",
    ar: "شريك موثوق لمساحتك الحلم",
  },
  explore_work: {
    en: "Explore Our Work",
    ar: "استكشف أعمالنا",
  },
  book_consultation: {
    en: "Book Consultation",
    ar: "احجز استشارة",
  },
};
