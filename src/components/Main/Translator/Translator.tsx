import { useState } from "react";
import TextTranslator from "./TextTranslator/TextTranslator";
import FileTranslator from "./FileTranslator/FileTranslator";
import LanguageContainer from "./LanguageContainer/LanguageContainer";

interface TranslatorProps {
  mode: "text" | "file";
}

export default function Translator({ mode }: TranslatorProps) {
  const [originalLanguage, setOriginalLanguage] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  return (
    <>
      <LanguageContainer
        originalLanguage={originalLanguage}
        setOriginalLanguage={setOriginalLanguage}
        targetLanguage={targetLanguage}
        setTargetLanguage={setTargetLanguage}
        originalLanguageIsFixed={false}
      />
      {mode === "text" && (
        <TextTranslator
          originalLanguage={originalLanguage}
          setOriginalLanguage={setOriginalLanguage}
          targetLanguage={targetLanguage}
          originalLanguageIsFixed={false}
        />
      )}
      {mode === "file" && <FileTranslator />}
    </>
  );
}
