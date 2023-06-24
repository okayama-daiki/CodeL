import CardContainer from "./Card/CardContainer";
import TextTranslator from "./TextTranslator/TextTranslator";
import style from "./Main.module.css";

export default function Main() {
  return (
    <main className={style.main}>
      <CardContainer />
      <TextTranslator />
    </main>
  );
}
