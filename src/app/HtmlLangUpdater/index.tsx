"use client";
import { use, useEffect } from "react";
import { useLang } from "@/src/context/LangContext";

export default function HtmlLangUpdater() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang; 
  }, [lang]);

  return null; 
}