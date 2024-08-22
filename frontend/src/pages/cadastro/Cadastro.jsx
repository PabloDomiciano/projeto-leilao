import React from "react";
import "./Cadastro.css";

const Cadastro = () => {
  return (
    <section className="cadastro">
      <h2>Cadastre-se</h2>
      <form>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />
        <div className="terms">
          <input type="checkbox" />
          <span>Aceito os Termos e Condições e a Política de Privacidade</span>
        </div>
        <button>Confirmar</button>
      </form>
    </section>
  );
};

export default Cadastro;
