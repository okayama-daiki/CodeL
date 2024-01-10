import style from "./FileTranslator.module.css";
import InputField from "./InputField/InputField";

export default function FileTranslator() {
  return (
    <div className={style.container}>
      <InputField></InputField>
    </div>
  );
}
