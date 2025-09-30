import { useLang } from "@/context/LangContext";
import Earth from '@/components/svg/Earth';
import { useState, useEffect, useRef } from 'react'


export default function LanguageSwitcher() {
    const { changeLang, languages } = useLang();
    const [isOpen, openList] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                openList(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="lang-switcher" ref={dropdownRef}>
            <div className="lang-switcher__container">
                {/* <button onClick={() => openList(!isOpen)} className="lang-switcher__button-earth">
                    <div className="lang-switcher__earth-icon">
                        <Earth />
                    </div>
                </button> */}
                <ul className={`lang-switcher__list ${isOpen ? 'lang-switcher__list--open' : ''}`}>
                    {languages?.map((lang) => (
                        <li
                            key={lang}
                            onClick={() => {
                                changeLang(lang);
                                openList(false);
                            }}
                        >
                            <p>{lang.toUpperCase()}</p>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}