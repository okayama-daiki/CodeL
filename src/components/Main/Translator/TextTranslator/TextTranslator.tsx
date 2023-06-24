import { useState } from "react";
import InputField from "./InputField/InputField";
import OutputField from "./OutputField/OutputField";
import { translateCode } from "../translateCode";
import style from "./TextTranslator.module.css";

interface TextTranslatorProps {
  originalLanguage: string;
  setOriginalLanguage: (language: string) => void;
  originalLanguageIsFixed: boolean;
  targetLanguage: string;
}

export default function TextTranslator({
  originalLanguage,
  setOriginalLanguage,
  originalLanguageIsFixed,
  targetLanguage,
}: TextTranslatorProps) {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);

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
      <div className={style.container}>
        <InputField
          inputText={inputText}
          handleInputTextChange={setInputText}
          originalLanguage={originalLanguage}
          handleSelectedLanguageChange={setOriginalLanguage}
          handleTranslate={handleTranslate}
          originalLanguageIsFixed={originalLanguageIsFixed}
        ></InputField>
        <OutputField
          outputText={outputText}
          targetLanguage={targetLanguage}
          isTranslating={isTranslating}
        ></OutputField>
      </div>
    </>
  );
}
