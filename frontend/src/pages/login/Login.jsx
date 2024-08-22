import "./Login.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleChange = (input) => {
    setUser({ ...user, [input.target.name]: input.target.value });
  };

  const login = () => {
    //chamaria o backend para buscar as credenciais
    if (user.email === "teste@gmail.com" && user.password === "123") {
      let token = "token do backend";
      localStorage.setItem("token", token);
      localStorage.setItem("email", user.email);
      navigate("/");
    } else {
      alert("usuário ou senha incorretos");
    }
  };

  return (
    <section className="login">
      <h2>Login</h2>
      <form>
        <input
          name="email"
          id="email"
          onChange={handleChange}
          type="email"
          placeholder="E-mail"
          className=""
        />
        <input
          name="password"
          id="password"
          onChange={handleChange}
          type="password"
          placeholder="Senha"
        />
        <button onClick={login} label="Login" className="">
          Entrar
        </button>
      </form>
    </section>
  );
};

export default Login;
