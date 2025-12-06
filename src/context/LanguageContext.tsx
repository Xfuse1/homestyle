"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { messages, SupportedLang } from "@/lib/translations";

type LanguageContextValue = {
  lang: SupportedLang;
  setLang: (lang: SupportedLang) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<SupportedLang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem("lang") as SupportedLang | null;
    if (stored === "en" || stored === "ar") {
      setLangState(stored);
    }
  }, []);

  const setLang = (newLang: SupportedLang) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("lang", newLang);
      document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLang;
    }
  };

  const t = (key: string) => {
    const msg = messages[key];
    if (!msg) return key;
    return msg[lang] ?? msg.en;
  };
  
  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);


  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
