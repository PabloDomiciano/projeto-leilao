import React from "react";
import "./Header.css";
import Icon from "../../img/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const entrar = () => {
    navigate("/login");
  };

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
            <button className="btn-entrar" onClick={entrar}>Entrar</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
