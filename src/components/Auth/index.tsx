import { useState } from 'react';
import { useModal } from "@/context/ModalContext";
import { useLang } from "@/context/LangContext";
import ModalAuthForm from '@/components/ModalAuthForm'

export default function ModalAuth() {
    const { openModal, closeModal } = useModal();
    const { text } = useLang();

    function onLogin(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        openModal(<ModalAuthForm state="login"/>);
    }

    function onRegister(e: React.MouseEvent<HTMLAnchorElement>) {
        e.preventDefault();
        openModal(<ModalAuthForm state="register"/>);
    }

 



    return (
        <div className="auth">
            <div className='auth__container'>
                <a onClick={onLogin}>{text.auth.login}</a>
                <a onClick={onRegister}>{text.auth.registration}</a>
            </div>
        </div>
    )
}