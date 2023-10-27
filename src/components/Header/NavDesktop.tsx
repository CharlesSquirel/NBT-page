import React from "react";
import style from "../../styles/Header.module.scss";
import hamburgerImg from "../assets/hamburger.svg";
import { NavLink } from "react-router-dom";

interface Props {
  onClick: () => void;
}

const NavDesktop: React.FC<Props> = ({ onClick }) => {
  return (
    <nav className={style.nav}>
      <img src={hamburgerImg} alt="Hamburger logo" className={style.hamburger} onClick={onClick} />
      <ul>
        <li>
          <NavLink to="/about">O mnie</NavLink>
        </li>
        <li>
          <NavLink to="/">Oferta</NavLink>
        </li>
        <li>
          <NavLink to="/trusted">Zaufali mi</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontakt</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavDesktop;
