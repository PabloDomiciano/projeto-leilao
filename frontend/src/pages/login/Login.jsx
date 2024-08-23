import "./Login.css";
import ImgLogin from "../../img/img-login/formlogin.jpg";
import IconMarca from "../../img/img-login/marca.png";
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
    <div className="body-login">
      <div class="login-container">
        <div class="login-image">
          <img src={ImgLogin} alt="Imagem de Login" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <h5>Bem-vindo de volta!</h5>
          <form>
            <input
              name="email"
              id="email"
              onChange={handleChange}
              type="email"
              placeholder="E-mail:"
              className=""
            />
            <input
              name="password"
              id="password"
              onChange={handleChange}
              type="password"
              placeholder="Senha:"
            />
          </form>
          <button onClick={login} label="Entrar" className="">
            Entrar
          </button>
        </div>
        <div className="login-header">
          <img src={IconMarca} alt="Marca" class="login-icon" />
        </div>
      </div>
    </div>
  );
};

export default Login;
