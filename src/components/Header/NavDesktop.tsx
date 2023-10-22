import React from "react";
import style from "../../styles/Header.module.scss";
import hamburgerImg from "../assets/hamburger.svg";

interface Props {
  onClick: () => void;
}

const NavDesktop: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={style.nav}>
      <img src={hamburgerImg} alt="Hamburger logo" className={style.hamburger} onClick={onClick} />
      <ul>
        <li>O mnie</li>
        <li>Oferta</li>
        <li>Zaufali mi</li>
        <li>Kontakt</li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
