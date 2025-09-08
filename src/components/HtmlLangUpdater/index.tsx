"use client";
import { useEffect } from "react";
import { useLang } from "@/context/LangContext";

export default function HtmlLangUpdater() {
  const { lang } = useLang();

  useEffect(() => {
    document.documentElement.lang = lang; 
  }, [lang]);

  return null; 
}