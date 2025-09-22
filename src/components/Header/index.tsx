
import { useEffect, useState, useRef } from 'react'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Like from '@/components/LikeButton';
import Logotype from '@/components/Logotype'
import { useLang } from "@/context/LangContext";

export default function PageHeader() {
    const { text } = useLang();
    const [isSticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [padding, setPadding] = useState(0);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);

        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    useEffect(() => {
        if (headerRef.current) {
            setPadding(headerRef.current.offsetHeight);
        }
    }, [isSticky]);

    return (
        <header className="header container">
            <div className={`header__container ${isSticky ? 'sticky' : ''}`}>
                <div className='header__nav-block' style={{ paddingBottom: isSticky ? `${padding}px` : "0px" }}>
                    <div className="header__logo">
                        <Logotype />
                    </div>
                    <div className="header__actions">
                        <LanguageSwitcher />
                        <Like />
                    </div>
                </div>
                <div className={`header__main-info ${isSticky ? 'sticky container' : ''}`} ref={headerRef}>
                    <div className={`header__main-info--container`}>
                        <div className={`header__logo-block ${isSticky ? 'fade-in' : 'fade-out'}`}>
                            <Logotype oneLetter className={isSticky ? "fade-in" : "fade-out"} />
                        </div>
                        <div className='header__name-avatar-block'>
                            <div className='header__name-block'>
                                <h1 className="header__name">{text.name}</h1>
                                <h2 className="header__profession">{text.title}</h2>
                                <button className='header__contact-button' onClick={() => setIsOpen(prev => !prev)}>{text.contact.description}</button>
                            </div>
                            <div className={`header__avatar-container ${isSticky ? 'sticky' : ''}`} >
                                <img src="/images/Myrhorodskyi.jpg" alt="Roman Myrhorodskyi photo" className='header__avatar-image'></img>
                            </div>
                        </div>
                    </div>
                    <div className='header__contact-block'>
                        {isOpen && <div className='header__contacts'>
                            <ul className='header__contacts-list'>
                                <li>
                                    <p>{text.contact.phone}:
                                    </p>
                                    <a href="tel:+48575916086">+48575916086</a>
                                </li>
                                <li>
                                    <p>{text.contact.email}:
                                    </p>
                                    <a href="mailto:myrhorodskyi.r@gmail.com">myrhorodskyi.r@gmail.com</a>
                                </li>
                                <li>
                                    <p>{text.contact.location}:
                                    </p>
                                    <p>Krakow</p>
                                </li>
                                <li>
                                    <p>{text.contact.linkedin}:
                                    </p>
                                    <a href='https://www.linkedin.com/in/roman-myrhorodskyi-195b0918a/'>linkedin.com</a>
                                </li>
                            </ul>
                        </div>}
                    </div>
                </div>

            </div>
        </header>
    )
}