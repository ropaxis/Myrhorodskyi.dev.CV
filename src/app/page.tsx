"use client";
import Header from '@/src/app/Header'
import Like from '@/src/app/Like';
import HtmlLangUpdater from '@/src/app/HtmlLangUpdater'
import { useLang } from "@/src/context/LangContext";

export default function HomePage() {
  const { text } = useLang();

  return (
    <>
      <HtmlLangUpdater />
      <Header />

      <div className=" container">

        <div>
          <h1 className="">{text.name}</h1>
          <h2 className="">{text.title}</h2>
        </div>
        <div className='avatar__container'>
          <img src="/images/Myrhorodskyi.jpg" alt="Roman Myrhorodskyi photo" className='avatar__image'></img>
        </div>
      </div>
    </>
  );
}