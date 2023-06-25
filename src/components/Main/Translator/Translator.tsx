import { useState } from "react";
import TextTranslator from "./TextTranslator/TextTranslator";
import FileTranslator from "./FileTranslator/FileTranslator";
import LanguageContainer from "./LanguageContainer/LanguageContainer";

interface TranslatorProps {
  mode: "text" | "file";
}

export default function Translator({ mode }: TranslatorProps) {
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [originalLanguageIsFixed, setOriginalLanguageIsFixed] = useState(false);
  const [targetLanguage, setTargetLanguage] = useState("");
  return (
    <>
      <LanguageContainer
        originalLanguage={originalLanguage}
        setOriginalLanguage={setOriginalLanguage}
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
        originalLanguageIsFixed={originalLanguageIsFixed}
        setOriginalLanguageIsFixed={setOriginalLanguageIsFixed}
      />
      {mode === "text" && (
        <TextTranslator
          originalLanguage={originalLanguage}
          setOriginalLanguage={setOriginalLanguage}
          targetLanguage={targetLanguage}
          // InputField can change originalLanguage due to highlight.js to detect language.
          // Therefore, if the user selects a originalLanguage, the automatic language detection must be disabled.
          originalLanguageIsFixed={originalLanguageIsFixed}
        />
      )}
      {mode === "file" && <FileTranslator />}
    </>
  );
}
