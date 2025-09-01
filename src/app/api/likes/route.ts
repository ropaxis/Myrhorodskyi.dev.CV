import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"
import { db } from "@/lib/firebaseServer";

export async function GET() {
  try {
    const snapshot = await db.collection("likes").get();
    const likes = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return NextResponse.json(likes);
  } catch (err: any) {
    console.error(err);
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}

export async function POST (request: Request) {
   try {
    const { name } = await request.json();
    const userName = name || 'anonymous';

    const docRef = await db.collection("likes").add({
      timestamp: new Date(),
      name: userName
    });
    const doc = await docRef.get();
    const like = { id: doc.id, name: userName, ...doc.data() };
    return NextResponse.json(like);
  } catch (err: any) {
    return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
  }
}