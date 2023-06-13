import { useState } from "react";
import OriginalLanguageContainer from "./OriginalLanguageContainer/OriginalLanguageContainer";
import TargetLanguageContainer from "./TargetLanguageContainer/TargetLanguageContainer";
import InputField from "./InputField/InputField";
import OutputField from "./OutputField/OutputField";
import style from "./TextRemover.module.css";

function TextRemover() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [originalLanguageIsChosen, setOriginalLanguageIsChosen] =
    useState(false);

  const handleInputTextChange = async (inputText: string) => {
    setInputText(inputText);
    // try {
    //   const response = await fetch("http://localhost:5000/remove", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ script: inputText }),
    //   });
    //   const data = await response.json();
    //   setOutputText(data.text);
    // } catch {
    setOutputText(inputText);
    // }
  };

  return (
    <>
      <div className={style.containerHeader}>
        <OriginalLanguageContainer
          language={originalLanguage}
          userChosen={originalLanguageIsChosen}
          handleSelectedLanguageChange={setOriginalLanguage}
          handleOriginalLanguageIsChosen={setOriginalLanguageIsChosen}
        />
        <TargetLanguageContainer
          language={targetLanguage}
          handleSelectedLanguageChange={setTargetLanguage}
        />
      </div>
      <div className={style.container}>
        <InputField
          inputText={inputText}
          handleInputTextChange={handleInputTextChange}
          language={originalLanguage}
          handleSelectedLanguageChange={setOriginalLanguage}
        ></InputField>
        <OutputField
          outputText={outputText}
          language={targetLanguage}
        ></OutputField>
      </div>
    </>
  );
}

export default TextRemover;
