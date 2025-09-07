"use client";
import Header from '@/app/Header'
import HtmlLangUpdater from '@/app/HtmlLangUpdater'
import { useLang } from "@/context/LangContext";

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