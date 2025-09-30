import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function Menu() {
    return (
        <div className="menu">
            <div className="menu__container">
                <div className="menu__button-container">
                    <button className='menu__button'>
                        <img src="/wheel.png" alt="wheel menu" />
                    </button>
                </div>
                <ul className="menu__list">
                    <LanguageSwitcher />
                </ul>
            </div>
        </div>
    )
}