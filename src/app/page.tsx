"use client";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [likes, setLikes] = useState<any>(null);

  useEffect(() => {
    fetch("/api/likes")
      .then(res => {
        console.log("🚀 ~ HomePage ~ res:", res)
        // setLikes(res.likes)
      })
     
  }, []);

  async function addLike() {
    const res = await fetch("/api/likes", { method: "POST" });
    const data = await res.json();
    setLikes(JSON.stringify(data));
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Моє резюме</h1>
      <p className="mt-4">❤️ {likes ?? "…"}</p>
      <button
        onClick={addLike}
        className="mt-2 px-4 py-2 bg-pink-500 text-white rounded-lg"
      >
        Лайк
      </button>
    </div>
  );
}