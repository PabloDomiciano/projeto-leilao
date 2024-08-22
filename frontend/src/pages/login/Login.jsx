import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <button>Entrar</button>
      </form>
    </section>
  );
};

export default Login;
