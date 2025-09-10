
import { useEffect, useState } from 'react'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Like from '@/components/LikeButton';
import Logotype from '@/components/Logotype'
import { useLang } from "@/context/LangContext";

export default function PageHeader() {
    const { text } = useLang();
    const [isSticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 100);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <header className="header container">
            <div className="header__container">
                <div className='header__nav-block'>
                    <div className="header__logo">
                        <Logotype />
                    </div>
                    <div className="header__actions">
                        <LanguageSwitcher />
                        <Like />
                    </div>
                </div>
                <div className="header__placeholder" style={{ height: isSticky ? '50px' : '0' }}></div>
                <div className={`header__main-info ${isSticky ? 'sticky' : ''}`}>
                    <div className='header__name'>
                        <h1 className="header__name">{text.name}</h1>
                        <h2 className="header__profession">{text.title}</h2>
                    </div>
                    <div className='header__contact-block'>
                        <button className='header__contact-button' onClick={() => setIsOpen(prev => !prev)}>{text.contact.description}</button>
                        {isOpen && <div className='header__contacts'>
                            <ul>
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
                    <div className={`header__avatar-container ${isSticky ? 'sticky' : ''}`} >
                        <img src="/images/Myrhorodskyi.jpg" alt="Roman Myrhorodskyi photo" className='header__avatar-image'></img>
                    </div>
                </div>
            </div>
        </header>
    )
}