
"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import en from "@/src/locales/en.json";
import ua from "@/src/locales/ua.json";
import pl from "@/src/locales/pl.json";

type Lang = "en" | "pl" | "ua";
const translations: Record<Lang, typeof en> = { en, ua, pl };

interface LangContextProps {
  lang: Lang;
  changeLang: (lng: Lang) => void;
  text:  typeof en;
  languages: Lang[];
}

const LangContext = createContext<LangContextProps | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang 'Myr-dev'") as Lang | null;
    if (saved) setLang(saved);
  }, []);

  const changeLang = (lng: Lang) => {
    setLang(lng);
    localStorage.setItem("lang 'Myr-dev'", lng);
  };
  const value = {
    lang,
    changeLang,
    text: translations[lang],
    languages: Object.keys(translations) as Lang[]
  };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;

}

export function useLang() {
  const context = useContext(LangContext);
  if (!context) throw new Error("useLang must be used within LangProvider");
  return context;
}


