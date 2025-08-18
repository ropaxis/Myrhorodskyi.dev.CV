import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/firebaseServer";

export async function GET() {
  try {
    const snapshot = await db.collection("likes").get();
    const likes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return new Response(JSON.stringify(likes), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}