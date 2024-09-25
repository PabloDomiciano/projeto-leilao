import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../logout/Logout";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "" : "collapsed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "◀" : "▶"}
      </button>
      {isOpen && (
        <>
          <h2>Menu</h2>
          <ul>
            <li>
              <Link to="/perfil">Perfil</Link>
            </li>
            <li>
              <Link to="/dashboard/resumo">Resumo Geral</Link>
            </li>
            <li>
              <Link to="/dashboard/recentes">Leilões Recentes</Link>
            </li>
            <li>
              <Link to="/dashboard/favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/dashboard/estatisticas">Estatísticas</Link>
            </li>
            <li>
              <Link to="/dashboard/alertas">Alertas</Link>
            </li>
            <li>
              <Link to="/dashboard/atividades">Atividades</Link>
            </li>
            <li>
              <Link to="/dashboard/configurações">Configurações</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </>
      )}{" "}
    </div>
  );
};

export default Sidebar;
