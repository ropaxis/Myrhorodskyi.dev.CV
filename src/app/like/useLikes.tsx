import { useState, useEffect } from "react";

export const useLikes = () => {
    const [likes, setLikes] = useState([]);
    const [liked, setLiked] = useState(false);

    async function getLikes() {
        try {
            const res = await fetch("/api/likes");
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setLikes(data);
        } catch (error) {
            console.error("Failed to fetch likes:", error);
        }
    }

    useEffect(() => {
        getLikes();
        setLiked(localStorage.getItem("resume-liked") === 'true' ? true : false);
    }, []);

    return { likes, liked, setLiked, setLikes, getLikes };
};
