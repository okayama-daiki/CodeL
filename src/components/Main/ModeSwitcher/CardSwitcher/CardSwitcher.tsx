import style from "./CardSwitcher.module.css";

interface CardSwitcherProps {
  iconSource: string;
  text: string;
  caption: string;
  isActive: boolean;
}

export default function CardSwitcher({
  iconSource,
  text,
  caption,
  isActive,
}: CardSwitcherProps) {
  return (
    <div className={style.wrapper}>
      <div className={`${style.card} + ${isActive ? style.active : ""}`}>
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
    </div>
  );
}
