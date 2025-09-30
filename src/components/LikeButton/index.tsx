"use client";


import { useLang } from '@/context/LangContext';
import Heart from '@/components/svg/Heart';
import { useModal } from "@/context/ModalContext";
import ModalForm from '@/components/ModalForm';
import { useLikesContext } from "@/context/LikesContext";

export default function Like() {
    const { likes, liked } = useLikesContext();
    const { text } = useLang();
    const { openModal, closeModal } = useModal();


    const onLikeAlready = () => {
        openModal(
            (<h3 className="like__warning" > {text.like["like-warning"]}</h3>)
        )
        const timer = setTimeout(
            closeModal, 3000)
        return () => {
            clearTimeout(timer);
        };
    }


    return (
        <div className="like">
            <button
                onClick={liked ? onLikeAlready : () => openModal(<ModalForm />)}
                className={`like__button ${liked ? 'liked' : ''}`}>
                    <img src="/heart.png" alt="like button" className='like__icon'/>
                <p className="like__count"> <span className='like__count-text'>{`${text.like['like-button']}:`}</span> {likes.length}</p>
            </button>
        </div>
    )
}
