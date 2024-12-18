import React, { useState, useEffect } from "react";
import "./Header.css";
import Icon from "../../assets/logo/logo.png";
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

  const categoria = () => {
    navigate("/category");
  };
  const auction = () => {
    navigate("/auction");
  };

  const entrar = () => {
    navigate("/login");
  };

  const inicio = () => {
    navigate("/");
  };

  const cadastro = () => {
    navigate("/cadastro");
  };

  return (
    <header>
      <img src={Icon} alt="Icon" className="Icon" />
      <nav>
        <ul>
          <li>
            <a onClick={inicio}>Início</a>
          </li>
          <li>
            <a href="#services">O que fazemos</a>
          </li>
          <li>
            <a onClick={categoria}>Categoria</a>
          </li>
          <li>
            <a onClick={auction}>Leilão</a>
          </li>
          <li>{!isAuthenticated && <a onClick={cadastro}>Cadastre-se</a>}</li>
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
