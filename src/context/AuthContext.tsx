'use client'
import { createContext, useContext, useState, ReactNode, useEffect, use } from "react";
import { User, onIdTokenChanged, signOut } from 'firebase/auth'
import { auth } from "@lib/firebaseClient";
interface AuthContextType {
    user: User | null;
    token: string | null;
    loading: boolean;
    logout: () => Promise<void>;
    setUser: (user: User | null) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);
export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onIdTokenChanged(auth, async (firebaseUser) => {
            if (firebaseUser) {
                const newToken = await firebaseUser.getIdToken();
                setUser(firebaseUser);
                setToken(newToken);
                console.log('firebaseUser', firebaseUser);

            } else {
                setUser(null);
                setToken(null);
                console.log('no firebaseUser', firebaseUser);

            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
    const logout = async () => {
        await signOut(auth);
        setUser(null);
        setToken(null);
    };

    return <AuthContext.Provider value={{ user, setUser, token, loading, logout }}>
        {children}
    </AuthContext.Provider>
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
}

