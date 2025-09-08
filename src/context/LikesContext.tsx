"use client";
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface LikesContextType {
  likes: any[];
  liked: boolean;
  setLiked: (b: boolean) => void;
  getLikes: () => Promise<void>;
}

const LikesContext = createContext<LikesContextType | null>(null);

export function useLikesContext() {
  const ctx = useContext(LikesContext);
  if (!ctx) throw new Error("useLikesContext must be used within LikesProvider");
  return ctx;
}

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<any[]>([]);
  const [liked, setLiked] = useState(false);

  async function getLikes() {
    try {
      const res = await fetch("/api/likes");
      const data = await res.json();
      setLikes(data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getLikes();
    setLiked(localStorage.getItem("resume-liked") === 'true');
  }, []);

  return (
    <LikesContext.Provider value={{ likes, liked, setLiked, getLikes }}>
      {children}
    </LikesContext.Provider>
  );
}