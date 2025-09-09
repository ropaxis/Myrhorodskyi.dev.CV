
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Like from '@/components/LikeButton';
import Logotype from '@/components/Logotype'

export default function PageHeader() {
    return (
        <header className="header container">
            <div className="header__container">
                <div className="header__logo-container">
                    <Logotype />
                </div>
                <div className="header__actions">
                    <LanguageSwitcher />
                    <Like />
                </div>
            </div>
        </header>
    )
}