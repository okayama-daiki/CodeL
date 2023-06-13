import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import "highlight.js/styles/xcode.css";
import style from "./InputField.module.css";

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

interface InputTextFieldProps {
  inputText: string;
  handleInputTextChange: (inputText: string) => void;
  language: string;
  handleSelectedLanguageChange: (language: string) => void;
}

function InputField({
  inputText,
  handleInputTextChange,
  language,
  handleSelectedLanguageChange,
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
        highlight={(code) =>
          hljs.highlight(language ? language : "javascript", code).value
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
