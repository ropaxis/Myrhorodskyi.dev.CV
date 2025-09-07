import Logo from "../svg/Logo"
import LanguageSwitcher from '../LanguageSwitcher';
import Like from '../Like';

export default function PageHeader() {
    return (
        <header className="header">
            <div className="header__container container">
                <div className="header__logo-container">
                    <a href="/" className="header__logo">
                        <Logo />
                    </a>
                </div>
                <div className="header__actions">
                    <Like />
                    <LanguageSwitcher />
                </div>
            </div>
        </header>
    )
}