import style from "./LanguageContainer.module.css";

interface LanguageContainerProps {
  language: string;
  userChosen: boolean;
  handleSelectedLanguageChange: (language: string) => void;
}

const languageCandidates = [
  "javascript",
  "python",
  "java",
  "c",
  "c++",
  "c#",
  "go",
  "ruby",
  "rust",
  "swift",
  "kotlin",
  "php",
  "typescript",
  "dart",
  "scala",
  "haskell",
  "r",
];

export default function LanguageContainer({
  language,
  userChosen,
  handleSelectedLanguageChange,
}: LanguageContainerProps) {
  return (
    <div className={style.languageContainer}>
      <button className={style.button}>
        <label htmlFor="language-select">
          <span className={style.language}>
            <strong>
              {language !== undefined ? language : "Detect language"}
            </strong>
            <span className={style.detected}>
              {language === undefined || userChosen ? "" : "(detected)"}
            </span>
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
      <select
        value={language}
        onChange={(e) => handleSelectedLanguageChange(e.target.value)}
        id="language-select"
        className={style.select}
      >
        {languageCandidates.map((language) => (
          <option value={language}>{language}</option>
        ))}
      </select>
    </div>
  );
}
