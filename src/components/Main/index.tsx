import { useLang } from "@/context/LangContext";
export default function Main() {
    const { text } = useLang();
    return (
        <main className="main container"> 
            <div className="main__container">
                <h2 className="main__title">
                    {text.summary}
                </h2>
                <h2>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam dicta deleniti facere delectus corporis quos temporibus sunt unde voluptatibus. Rerum non provident suscipit amet nulla harum, alias nihil tempore deserunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident quod odit sed iure, labore, saepe minus distinctio nostrum harum officiis delectus quae laudantium tempore fugiat cum dolore totam architecto quaerat. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, natus illo sequi neque dolorum, perferendis laudantium, quasi temporibus eos ab laboriosam deleniti? Perferendis officiis amet blanditiis incidunt? Hic, maxime quaerat?
                </h2>
            </div>
        </main>
    );
}