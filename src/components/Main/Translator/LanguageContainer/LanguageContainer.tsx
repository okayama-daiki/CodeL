import LanguageSelector from "./LanguageSelector/LanguageSelector";
import style from "./LanguageContainer.module.css";

interface LanguageContainerProps {
  originalLanguage: string;
  originalLanguageIsFixed: boolean;
  setOriginalLanguage: (language: string) => void;
  targetLanguage: string;
  setTargetLanguage: (language: string) => void;
}

export default function LanguageContainer({
  originalLanguage,
  originalLanguageIsFixed,
  setOriginalLanguage,
  targetLanguage,
  setTargetLanguage,
}: LanguageContainerProps) {
  return (
    <div className={style.languageContainer}>
      <LanguageSelector
        selectedLanguage={originalLanguage}
        handleSelectedLanguageChange={setOriginalLanguage}
      />
      <LanguageSelector
        selectedLanguage={targetLanguage}
        handleSelectedLanguageChange={setTargetLanguage}
      />
    </div>
  );
}
