import style from "./Card.module.css";

interface CardProps {
  iconSource: string;
  text: string;
  caption: string;
}

export default function Card({ iconSource, text, caption }: CardProps) {
  return (
    <div className={style.card}>
      <div
        dangerouslySetInnerHTML={{ __html: iconSource }}
        className={style.icon}
      ></div>
      <div className={style.text}>
        <div className={style.textHeading}>
          <span>{text}</span>
        </div>
        <div className={style.textSubHeading}>
          <span>{caption}</span>
        </div>
      </div>
    </div>
  );
}
