import { useState } from "react";
import OriginalLanguageContainer from "./OriginalLanguageContainer/OriginalLanguageContainer";
import TargetLanguageContainer from "./TargetLanguageContainer/TargetLanguageContainer";
import InputField from "./InputField/InputField";
import OutputField from "./OutputField/OutputField";
import { translateCode } from "./translateCode";
import style from "./TextRemover.module.css";

export default function TextTranslator() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  const [originalLanguageIsChosen, setOriginalLanguageIsChosen] =
    useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  const handleInputTextChange = (inputText: string) => {
    setInputText(inputText);
  };

  const handleTranslate = async () => {
    setIsTranslating(true);
    const translatedCode = await translateCode(
      inputText,
      originalLanguage,
      targetLanguage
    );
    setOutputText(translatedCode);
    setIsTranslating(false);
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
          handleTranslate={handleTranslate}
        ></InputField>
        <OutputField
          outputText={outputText}
          language={targetLanguage}
          isTranslating={isTranslating}
        ></OutputField>
      </div>
    </>
  );
}
