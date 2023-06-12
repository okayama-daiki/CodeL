import style from "./Header.module.css";
import Logo from "./Logo";

function Header() {
  return (
    <header className={style.header}>
      <div className={style.links}>
        <li>
          <a href="/">
            <Logo />
          </a>
        </li>
        <li className={style.logoText}>CodeL</li>
        <li className={style.logoTextSub}>Translator</li>
      </div>
    </header>
  );
}

export default Header;
