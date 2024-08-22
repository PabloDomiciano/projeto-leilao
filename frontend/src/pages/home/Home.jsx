import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Marca from "../../img/img-inicial/logo-inicio.png";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="corpoGeral">
        <div className="text-container">
          <h1>Seja bem-vindo!</h1>
          <p>Está pronto para escolher o carro dos seus sonhos?</p>
          <p>
            Estamos aqui para te ajudar a financiar seu primeiro carro, de
            maneira rápida e fácil. <u>Quer conhecer mais a respeito?</u>
          </p>
        </div>
        <img src={Marca} alt="Logo" className="img-principal" />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
