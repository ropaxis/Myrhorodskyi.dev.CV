type Props = {
    lang: "en" | "pl" | "ua";
    onChange: (lang: "en" | "pl" | "ua") => void;
};

export default function LanguageSwitcher({ lang, onChange }: Props) {
    return (
        <div>
            <ul>
                <li id="en" onClick={() => onChange("en")}>
                    <p>En</p>
                </li>
                <li id="pl" onClick={() => onChange("pl")}>
                    <p>Pl</p>
                </li>
                <li id="ua" onClick={() => onChange("ua")}>
                    <p>Ua</p>
                </li>
            </ul>
        </div>
    )
}