import { useState, FormEvent } from "react";
import { useModal } from "@/context/ModalContext"
import { useLang } from '@/context/LangContext'
import { useLikesContext } from "@/context/LikesContext";

export default function ModalForm() {
    const [name, setName] = useState('');
    const { text } = useLang();
    const { setLiked, getLikes } = useLikesContext();
    const { closeModal } = useModal();



    async function onSubmitForm(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await fetch("/api/likes", {
                method: "POST",
                body: JSON.stringify({ name: name || 'anonymous' }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            await getLikes();
            closeModal();
            setName('');
            setLiked(true);
            localStorage.setItem("resume-liked", 'true')
        } catch (error: any) {
            console.error("Form submission error", error);
        }
    }

    return (
        <div className="modal-form">
            <div className="modal-form__container">
                <h3 className="modal-form__title">{text.like.description}</h3>
                <form onSubmit={onSubmitForm} className="modal-form__form">
                    <div className="modal-form__input-block">
                        <label htmlFor="name" className="">{text.like['like-name']}:</label>
                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="" />
                    </div>
                    <div className="modal-form__buttons">
                        <button type="button" onClick={() => closeModal()} className="">{text.like['like-cancel']}</button>
                        <button type="submit" className="">{text.like['like-accept']}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}