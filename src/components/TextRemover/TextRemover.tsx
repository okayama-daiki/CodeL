import { useState } from "react";
import LanguageContainer from "./LanguageContainer";
import InputField from "./InputField";
import OutputField from "./OutputField";
import style from "./TextRemover.module.css";

function TextRemover() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [language, setLanguage] = useState("");
  const [userChosen, setUserChosen] = useState(false);

  const handleInputTextChange = async (inputText: string) => {
    setInputText(inputText);
    try {
      const response = await fetch("http://localhost:5000/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ script: inputText }),
      });
      const data = await response.json();
      setOutputText(data.text);
    } catch {
      setOutputText(inputText);
    }
  };

  return (
    <>
      <div className={style.containerHeader}>
        <LanguageContainer
          language={language}
          userChosen={userChosen}
          handleSelectedLanguageChange={setLanguage}
        />
      </div>
      <div className={style.container}>
        <InputField
          inputText={inputText}
          handleInputTextChange={handleInputTextChange}
          language={language}
          handleSelectedLanguageChange={setLanguage}
        ></InputField>
        <OutputField outputText={outputText} language={language}></OutputField>
      </div>
    </>
  );
}

export default TextRemover;
