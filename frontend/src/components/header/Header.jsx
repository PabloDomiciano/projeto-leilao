import React from "react";
import "./Header.css";
import Icon from "../../img/logo/logo.png"



const Header = () => {
  return (
    <header>
      <img src={Icon} alt="Icon" className="Icon" />
      <nav>
        <ul>
          <li>
            <a href="#services">O que fazemos</a>
          </li>
          <li>
            <a href="#about">Quem somos</a>
          </li>
          <li>
            <a href="#register">Cadastre-se</a>
          </li>
          <li>
            <a href="#login">Entrar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
