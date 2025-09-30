import { useLang } from "@/context/LangContext";


export default function LanguageSwitcher() {
    const { changeLang, languages } = useLang();




    return (
        <div className="lang-switcher" >
            <div className="lang-switcher__container">
                <ul className='lang-switcher__list'>
                    {languages?.map((lang) => (
                        <li
                            key={lang}
                            onClick={() => {
                                changeLang(lang);
                            }}
                        >
                            <img src={`/icons/${lang}.png`} alt={`${lang} flag`} />
                        </li>)
                    )}
                </ul>
            </div>
        </div>
    )
}