import Editor from "react-simple-code-editor";
import hljs from "highlight.js";
import { LoadingOutlined } from "@ant-design/icons";
import style from "./OutputField.module.css";

interface OutputTextFieldProps {
  outputText: string;
  targetLanguage: string;
  isTranslating: boolean;
}

function OutputField({
  outputText,
  targetLanguage,
  isTranslating,
}: OutputTextFieldProps) {
  return (
    <div className={style.rightBox}>
      <Editor
        value={outputText}
        onValueChange={(e) => {}}
        highlight={(code) =>
          hljs.highlight(code, {
            language: targetLanguage ? targetLanguage : "javascript",
          }).value
        }
        onKeyDown={(e) => e.preventDefault()}
        className={style.field}
        placeholder="Control + Enter to translate."
      />
      {isTranslating && (
        <LoadingOutlined
          style={{ fontSize: 24 }}
          spin
          className={style.spinner}
        />
      )}
    </div>
  );
}

export default OutputField;
