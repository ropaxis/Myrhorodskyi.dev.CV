import * as admin from "firebase-admin";

if (!admin.apps.length) {
  try {
    const serviceAccountString = process.env.FIREBASE_SERVICE_ACCOUNT;
    if (!serviceAccountString) {
      throw new Error("FIREBASE_SERVICE_ACCOUNT environment variable not set.");
    }

    const serviceAccount = JSON.parse(serviceAccountString);

    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    console.log("Firebase initialized successfully from service account JSON.");

  } catch (error: any) {
    console.error("Firebase initialization failed:", error);
  }
}

export const db = admin.firestore();
