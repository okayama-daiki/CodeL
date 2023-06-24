import { useState } from "react";
import style from "./TargetLanguageContainer.module.css";
import { languageCandidates } from "../translateCode";
interface TargetLanguageContainerProps {
  language: string;
  handleSelectedLanguageChange: (language: string) => void;
}

export default function TargetLanguageContainer({
  language,
  handleSelectedLanguageChange,
}: TargetLanguageContainerProps) {
  const [isLanguageSelectOpen, setIsLanguageSelectOpen] = useState(false);
  return (
    <div className={style.languageContainer}>
      <button
        className={style.button}
        onClick={() => setIsLanguageSelectOpen(!isLanguageSelectOpen)}
      >
        <label htmlFor="language-select">
          <span className={style.language}>
            <strong>
              {!isLanguageSelectOpen && language !== ""
                ? language
                : "Select target language"}
            </strong>
          </span>
        </label>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={style.icon}
          style={{
            transition: "transform 0.1s",
            transform: isLanguageSelectOpen ? "rotate(180deg)" : "rotate(0)",
          }}
        >
          <path
            d="M19 9L12 16L5 9"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </button>
      {isLanguageSelectOpen && (
        <div className={style.dropdown}>
          {languageCandidates.map((lang) => (
            <div
              className={style.dropdownItem}
              key={lang}
              onClick={() => {
                handleSelectedLanguageChange(lang);
                setIsLanguageSelectOpen(false);
              }}
            >
              {lang}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
