import { useLang } from "@/context/LangContext";
import Earth from '@/components/svg/Earth';
import {useState} from 'react'


export default function LanguageSwitcher() {
    const { changeLang, languages } = useLang();
    const [isOpen, openList] = useState(false);


    return (
        <div className="lang-switcher">
            <div className="lang-switcher__container">
                <button onClick={() => openList(!isOpen)} className="lang-switcher__button-earth">
                    <div className="lang-switcher__earth-icon">
                        <Earth />
                    </div>
                </button>

                <ul className={`lang-switcher__list ${isOpen ? 'lang-switcher__list--open' : ''}`}>
                    {languages?.map((lang) => (
                        <li key={lang} onClick={() => changeLang(lang)}>
                            <p>{lang.toUpperCase()}</p>
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}