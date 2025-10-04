"use client";
import { useLang } from "@/context/LangContext";
import { useModal } from "@/context/ModalContext";
import { useState } from "react";
import { login, register } from "@lib/auth";

export default function ModalAuthForm({ state }: { state: string }) {
    const { text } = useLang();
    const { closeModal } = useModal();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (state === "login") {
                await login(email, password);
            } else {
                await register(email, password);
            }
            closeModal();
        } catch (err: any) {
            setError(err.message);
        }
    };

    return (
        <div>
            <div>
                <h2 >
                    {state === "login" ? "Login" : "Register"}
                </h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && <p >{error}</p>}
                    <button type="submit" >
                        {state === "login" ? "Sign in" : "Register"}
                    </button>
                </form>

                <p >
                    {state === "login" ? (
                        <>
                            No account?{" "}
                            <button
                            // onClick={() => setMode("register")}
                            >
                                Register
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{" "}
                            <button

                            >
                                Login
                            </button>
                        </>
                    )}
                </p>

                <button
                    onClick={closeModal}
                >
                    Close
                </button>
            </div>
            {/* <div>{state}</div>
            <button onClick={()=>closeModal()}>
                {text.auth.cancel}
            </button> */}
        </div>
    )
}




// export default function AuthModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
//   const [mode, setMode] = useState<"login" | "register">("login");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   if (!isOpen) return null;

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       if (mode === "login") {
//         await login(email, password);
//       } else {
//         await register(email, password);
//       }
//       onClose();
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
//   <div className="bg-white rounded-2xl shadow-lg w-96 p-6">
//     <h2 className="text-xl font-semibold mb-4">
//       {mode === "login" ? "Login" : "Register"}
//     </h2>
//     <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
//       <input
//         type="email"
//         placeholder="Email"
//         className="border rounded px-3 py-2"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         className="border rounded px-3 py-2"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       {error && <p className="text-red-500 text-sm">{error}</p>}
//       <button type="submit" className="bg-blue-500 text-white rounded py-2">
//         {mode === "login" ? "Sign in" : "Register"}
//       </button>
//     </form>

//     {/* перемикач */}
//     <p className="mt-4 text-sm text-center">
//       {mode === "login" ? (
//         <>
//           No account?{" "}
//           <button
//             className="text-blue-600 underline"
//             onClick={() => setMode("register")}
//           >
//             Register
//           </button>
//         </>
//       ) : (
//         <>
//           Already have an account?{" "}
//           <button
//             className="text-blue-600 underline"
//             onClick={() => setMode("login")}
//           >
//             Login
//           </button>
//         </>
//       )}
//     </p>

//     <button
//       onClick={onClose}
//       className="mt-4 text-gray-500 hover:text-black text-sm w-full"
//     >
//       Close
//     </button>
//   </div>
//     </div>
//   );
// }
