
import { auth } from '@lib/firebaseClient'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";

export async function login(email: string, password: string): Promise<User | null> {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("🚀 ~ login ~ res:", res)
    return res.user;
  } catch (error: any) {
    console.error("Login failed:", error.message);
    return null; 
  }
}

export async function register(email: string, password: string): Promise<User | null> {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log("🚀 ~ register ~ res:", res)
    return res.user;
  } catch (error: any) {
    console.error("Registration failed:", error.message);
    return null;
  }
}

export async function logout(): Promise<boolean> {
  try {
    await signOut(auth);
    return true;
  } catch (error: any) {
    console.error("Logout failed:", error.message);
    return false;
  }
}