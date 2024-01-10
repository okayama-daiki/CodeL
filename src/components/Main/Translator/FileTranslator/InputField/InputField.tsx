import { useRef, useState } from "react";
import PythonIcon from "./PythonIcon.svg";
import CppIcon from "./CppIcon.svg";
import UploadIcon from "./UploadIcon.svg";
import style from "./InputField.module.css";

export default function InputField() {
  const [isHandleOver, setIsHandleOver] = useState(false);
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileType, setFileType] = useState("");
  const [fileContent, setFileContent] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleFileInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsFileSelected(true);
      setFileName(file.name);
      setFileType(file.type);
      const reader = new FileReader();
      reader.onload = (event) => {
        setFileContent(event.target?.result as string);
      };
    }
  };
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsHandleOver(false);

    const file = event.dataTransfer.files[0];
    setIsFileSelected(true);
    setFileName(file.name);
    setFileType(file.type);
    const reader = new FileReader();
    reader.onload = (event) => {
      setFileContent(event.target?.result as string);
    };
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    setIsHandleOver(true);
    event.preventDefault();
  };

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    setIsHandleOver(false);
    event.preventDefault();
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    setIsHandleOver(false);
    event.preventDefault();
  };
  return (
    <div
      className={style.content}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      {isHandleOver ? (
        <>
          <img src={UploadIcon} alt="Upload Icon" />
          <p className={style.textSub}>Drop a file to translate.</p>
        </>
      ) : isFileSelected ? (
        <>
          <img src={PythonIcon} alt="" />
          <p className={style.text}>{fileName}</p>
          <br></br>
          <button className={style.button}>Translate into Cpp</button>
          <button
            className={style.subButton}
            onClick={() => setIsFileSelected(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <div className={style.icon}>
          <img src={PythonIcon} alt="Python Icon" />
          <img src={CppIcon} alt="C++ Icon" />
          <p className={style.text}>
            Drag your Python (.py), C++(.cpp), etc. file here
          </p>
          <p className={style.textSub}>or</p>
          <button
            className={style.button}
            onClick={() => {
              fileInputRef.current?.click();
            }}
          >
            Select from your computer
          </button>
          <input
            ref={fileInputRef}
            type="file"
            style={{ display: "none" }}
            onChange={handleFileInput}
          />
        </div>
      )}
    </div>
  );
}
