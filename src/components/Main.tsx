import CardContainer from "./Card/CardContainer";
import TextRemover from "./TextRemover/TextRemover";
import style from "./Main.module.css";

export default function Main() {
  return (
    <main className={style.main}>
      <CardContainer />
      <TextRemover />
    </main>
  );
}
