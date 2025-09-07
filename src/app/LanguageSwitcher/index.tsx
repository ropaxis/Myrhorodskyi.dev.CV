import { useLang } from "@/context/LangContext";


export default function LanguageSwitcher() {
    const { changeLang, languages } = useLang();
    console.log("🚀 ~ LanguageSwitcher ~ languages:", useLang())


    return (
        <div className="lang-switcher">
            <ul className="lang-switcher__list">
                {languages?.map((lang) => (
                    <li key={lang} onClick={() => changeLang(lang)}>
                        <p>{lang.toUpperCase()}</p>
                    </li>)
                )}
            </ul>
        </div>
    )
}