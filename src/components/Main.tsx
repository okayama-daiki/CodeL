import CardContainer from "./Card/CardContainer";
import TextRemover from "./TextRemover/TextRemover";
import style from "./Main.module.css";

export default function Body() {
  return (
    <main className={style.main}>
      <CardContainer />
      <TextRemover />
    </main>
  );
}
