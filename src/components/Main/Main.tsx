import { useState } from "react";
import ModeSwitcher from "./ModeSwitcher/ModeSwitcher";
import Translator from "./Translator/Translator";
import style from "./Main.module.css";

export default function Main() {
  const [mode, setMode] = useState<"text" | "file">("text");
  return (
    <main className={style.main}>
      <ModeSwitcher mode={mode} handleMode={setMode} />
      <Translator mode={mode} />
    </main>
  );
}
