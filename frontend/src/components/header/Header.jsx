import React, { useState, useEffect } from "react";
import "./Header.css";
import Icon from "../../img/logo/logo.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const entrar = () => {
    navigate("/login");
  };

  const inicio = () => {
    navigate("/");
  };
  
  return (
    <header>
      <img src={Icon} alt="Icon" className="Icon" />
      <nav>
        <ul>
          <li>
            <a href="/" onClick={inicio}>
              Início
            </a>
          </li>
          <li>
            <a href="#services">O que fazemos</a>
          </li>
          <li>
            <a href="#about">Quem somos</a>
          </li>
          <li>{!isAuthenticated && <a href="#register">Cadastre-se</a>}</li>
          <li>
            {!isAuthenticated && (
              <li>
                <a href="/login" className="btn-entrar" onClick={entrar}>
                  Entrar
                </a>
              </li>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
