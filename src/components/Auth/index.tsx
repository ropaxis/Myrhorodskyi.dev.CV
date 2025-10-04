import { useState } from 'react';
import { useModal } from "@/context/ModalContext";
import { useLang } from "@/context/LangContext";
import ModalAuthForm from '@/components/ModalAuthForm'
import { useAuth } from '@/context/AuthContext'



export default function ModalAuth() {
    const { openModal } = useModal();
    const { text } = useLang();
    const { user, logout } = useAuth();




    function onLogin(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        openModal(<ModalAuthForm state="login" />);
    }

    function onRegister(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        openModal(<ModalAuthForm state="register" />);
    }





    return (
        <div className="auth">
            <div className='auth__container'>
                {user ? (
                    <><p> {`Welcome ${user.email}!`} </p>
                        <a onClick={() => logout()}>{text.auth.logout}</a>
                    </>
                ) : (
                    <>
                        <a onClick={onLogin}>{text.auth.login}</a>
                        <a onClick={onRegister}>{text.auth.registration}</a>
                    </>)
                }
            </div>
        </div>
    )
}