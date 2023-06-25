import LanguageSelector from "./LanguageSelector/LanguageSelector";
import style from "./LanguageContainer.module.css";

interface LanguageContainerProps {
  originalLanguage: string;
  setOriginalLanguage: (language: string) => void;
  targetLanguage: string;
  setTargetLanguage: (language: string) => void;
  originalLanguageIsFixed: boolean;
  setOriginalLanguageIsFixed: (isFixed: boolean) => void;
}

export default function LanguageContainer({
  originalLanguage,
  setOriginalLanguage,
  targetLanguage,
  setTargetLanguage,
  originalLanguageIsFixed,
  setOriginalLanguageIsFixed,
}: LanguageContainerProps) {
  return (
    <div className={style.languageContainer}>
      <LanguageSelector
        defaultMessage="Detect Language"
        selectedLanguage={originalLanguage}
        handleSelectedLanguageChange={setOriginalLanguage}
        selectedLanguageIsFixed={originalLanguageIsFixed}
        setSelectedLanguageIsFixed={setOriginalLanguageIsFixed}
      />
      <LanguageSelector
        defaultMessage="Select target language"
        selectedLanguage={targetLanguage}
        handleSelectedLanguageChange={setTargetLanguage}
      />
    </div>
  );
}
