import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/xcode.css";
import { languageCandidates } from "../translateCode";
import style from "./InputField.module.css";

interface InputTextFieldProps {
  inputText: string;
  handleInputTextChange: (inputText: string) => void;
  language: string;
  handleSelectedLanguageChange: (language: string) => void;
  handleTranslate: () => void;
}

function InputField({
  inputText,
  handleInputTextChange,
  language,
  handleSelectedLanguageChange,
  handleTranslate,
}: InputTextFieldProps) {
  return (
    <div className={style.leftBox}>
      <Editor
        value={inputText}
        onValueChange={(text) => {
          const highlightedCode = hljs.highlightAuto(text, languageCandidates);
          handleSelectedLanguageChange(highlightedCode.language || "");
          handleInputTextChange(text);
        }}
        onKeyDown={(e) => {
          if (e.ctrlKey && e.key === "Enter") {
            e.preventDefault();
            handleTranslate();
          }
        }}
        highlight={(code) =>
          hljs.highlight(code, { language: language ? language : "javascript" })
            .value
        }
        tabSize={2}
        insertSpaces={true}
        placeholder="Type to translate."
        className={style.field}
      />
    </div>
  );
}

export default InputField;
