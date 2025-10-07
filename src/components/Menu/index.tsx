import LanguageSwitcher from '@/components/LanguageSwitcher';
import Auth from '@/components/Auth'
import { useState, useEffect, useRef } from 'react'

export default function Menu() {
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
        <div className="menu" ref={dropdownRef}>
            <div className="menu__container">
                <div className="menu__button-container">
                    <button className='menu__button' onClick={() => openList(!isOpen)}>
                        <img src="/icons/wheel.png" alt="wheel menu" />
                    </button>
                </div>
                <div className={`menu__list ${isOpen ? 'open' : 'close'}`}>
                    <LanguageSwitcher />
                    <Auth />
                    <button className='menu__button-close' onClick={()=>openList(false)}>X</button>
                </div>
                <div className='menu__lang-container'>
                    <LanguageSwitcher />
                    <Auth />
                </div>
            </div>
        </div>
    )
}