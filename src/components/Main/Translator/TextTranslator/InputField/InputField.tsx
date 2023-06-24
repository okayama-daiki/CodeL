import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/xcode.css";
import { languageCandidates } from "../../translateCode";
import style from "./InputField.module.css";

interface InputTextFieldProps {
  inputText: string;
  handleInputTextChange: (inputText: string) => void;
  originalLanguage: string;
  handleSelectedLanguageChange: (language: string) => void;
  handleTranslate: () => void;
  originalLanguageIsFixed: boolean;
}

export default function InputField({
  inputText,
  handleInputTextChange,
  originalLanguage,
  handleSelectedLanguageChange,
  handleTranslate,
  originalLanguageIsFixed,
}: InputTextFieldProps) {
  return (
    <div className={style.leftBox}>
      <Editor
        value={inputText}
        onValueChange={(text) => {
          const highlightedCode = hljs.highlightAuto(text, languageCandidates);
          if (!originalLanguageIsFixed) {
            handleSelectedLanguageChange(highlightedCode.language || "");
          }
          handleInputTextChange(text);
        }}
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === "Enter") {
            e.preventDefault();
            handleTranslate();
          }
        }}
        highlight={(code) =>
          hljs.highlight(code, {
            language: originalLanguage ? originalLanguage : "javascript",
          }).value
        }
        tabSize={2}
        insertSpaces={true}
        placeholder="Type to translate."
        className={style.field}
      />
    </div>
  );
}
