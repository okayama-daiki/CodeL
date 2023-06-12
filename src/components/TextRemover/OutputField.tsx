import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import style from "./OutputField.module.css";

interface OutputTextFieldProps {
  outputText: string;
  language: string;
}

function OutputField({ outputText, language }: OutputTextFieldProps) {
  return (
    <div className={style.rightBox}>
      <Editor
        value={outputText}
        onValueChange={(e) => {}}
        highlight={(code) =>
          hljs.highlight(language ? language : "javascript", code).value
        }
        onKeyDown={(e) => e.preventDefault()}
        className={style.field}
      />
    </div>
  );
}

export default OutputField;
