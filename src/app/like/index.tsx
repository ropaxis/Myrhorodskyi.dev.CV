"use client";

import { useState, FormEvent, useEffect } from "react";
import { useLikes } from "./useLikes";

interface LikeProps {
  text: {
    'like-button': string;
    'description': string;
    'like-accept': string;
    'like-cancel': string;
    'like-name': string,
    'like-warning': string
  };
}

export default function Like({ text }: LikeProps) {
    const { likes, liked, getLikes, setLiked } = useLikes();
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        if (showModal && liked) {
            const timer = setTimeout(() => {
                setShowModal(false);
            }, 3000); 

            return () => {
                clearTimeout(timer);
            };
        }
    }, [showModal, liked]); 

    function onOpenModal() {
        setShowModal(true);
    }

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
            setName('');
            setShowModal(false);
            localStorage.setItem("resume-liked", 'true')
            setLiked(true);
        } catch (error: any) {
            console.error("Form submission error", error);
        }
    }

    return (
        <div>
            <button
                onClick={onOpenModal}
                style={{backgroundColor: liked ? 'gray' : 'green'}}
            >
                {text['like-button'] + " " + (likes?.length ?? '')}
            </button>

            {showModal && (
                <div className="">
                    <div className="">
                        {liked ? (
                            <h3 className="">{text['like-warning']}</h3>
                        ) : (
                            <>
                                <h3 className="">{text.description}</h3>
                                <form onSubmit={onSubmitForm} className="mt-4">
                                    <div>
                                        <label htmlFor="name" className="">{text['like-name']}:</label>
                                        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="" />
                                    </div>
                                    <div className="flex justify-end mt-4">
                                        <button type="button" onClick={() => setShowModal(false)} className="">{text['like-cancel']}</button>
                                        <button type="submit" className="">{text['like-accept']}</button>
                                    </div>
                                </form>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
