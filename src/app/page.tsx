"use client";
import Header from '@/components/Header'
import HtmlLangUpdater from '@/components/HtmlLangUpdater'
import Main from '@/components/Main'
import {useEffect} from 'react'
import { onAuthStateChanged, User } from "firebase/auth";
import { auth } from "@lib/firebaseClient";
export default function HomePage() {
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <HtmlLangUpdater />
      <Header />
      <Main />
    </>
  );
}