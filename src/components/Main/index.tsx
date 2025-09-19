import { useLang } from "@/context/LangContext";
export default function Main() {
    const { text } = useLang();
    return (
        <main className="main container">
            <div className="main__container container">
                <h2 className="main__title">
                    {text.summary}
                </h2>
                <div className="main__skills-block">
                    <h3>
                        {text.skills.title}
                    </h3>
                    <ul>
                        {text.skills.main.map((item, index) => (
                            <li key={index}>
                                <p>
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {text.skills.secondary.map((item, index) => (
                            <li key={index}>
                                <p>
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main__experience-block">
                    <div className="main__experience">
                        <h3>{text.experience.title}</h3>
                        <ul className="main__experience-list">
                            {text.experience.list.map((item, index) => (
                                <li key={index}>
                                    <div className="main__experience-item-block">
                                        <h4>{item.role}</h4>
                                        <p>{item.years}</p>
                                        <p>{item.description}</p>
                                        <p>{item.tech}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
                <div className="main__achievements-block">
                    <h3>{text.achievements.title}</h3>
                    <ul>
                        {text.achievements.list.map((item, index) => (
                            <li key={index}>
                                <p>
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main__projects-block">
                    <h3>{text.languages.title}</h3>
                    <ul className="main__projects-list">
                        {text.languages.list.map((item, index) => (
                            <li key={index}>
                                <div className="main__projects-item-block">
                                    <p>
                                        {item}
                                    </p>

                                </div>
                            </li>))}
                    </ul>
                </div>
                <div className="main__education-block">
                    <h3>{text.education.title}</h3>
                    <ul className="main__education-list">
                        {text.education.list.map((item, index) => (
                            <li key={index}>
                                <div className="main__education-item-block">
                                    <p>{item}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="main__interests-block">
                    <h3>{text.interests.title}</h3>
                    <ul>
                        {text.interests.list.map((item, index) => (
                            <li key={index}>
                                <p>
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    );
}