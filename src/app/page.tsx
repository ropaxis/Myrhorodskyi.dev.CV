"use client";
import Like from '@/src/app/like';
import en from "@/src/locales/en.json";
import pl from "@/src/locales/pl.json";
import ua from "@/src/locales/ua.json";
import LanguageSwitcher from './LanguageSwitcher';
import { useState, useEffect } from 'react'

const language = { en, pl, ua };

export default function HomePage() {
  const [lang, setLang] = useState<"en" | "pl" | "ua">("en");
  const text = language[lang];

  const changeLang = (lng: "en" | "pl" | "ua") => {
    setLang(lng);
    localStorage.setItem("lang", lng);
  };

  return (
    <div className=" container">
      <div>
        <h1 className="">{text.name}</h1>
        <h2 className="">{text.title}</h2>
      </div>
      <div className='avatar__container'>
        <img src="/images/Myrhorodskyi.jpg" alt="Roman Myrhorodskyi photo" className='avatar__image'></img>
      </div>
      <Like text={text.like} />
      <LanguageSwitcher lang={lang} onChange={changeLang} />
    </div>
  );
}