import React, { useState } from "react";
import ImgCadastro from "../../assets/img-login/formlogin.jpg";
import IconMarca from "../../assets/img-login/marca.png";
import "./Cadastro.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    termos: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.nome) newErrors.nome = "Nome é obrigatório.";
    if (!formData.email) newErrors.email = "E-mail é obrigatório.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "E-mail inválido.";
    if (!formData.senha) newErrors.senha = "Senha é obrigatória.";
    if (formData.senha !== formData.confirmarSenha)
      newErrors.confirmarSenha = "As senhas não coincidem.";
    if (!formData.termos)
      newErrors.termos = "Você deve aceitar os termos e condições.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulário enviado com sucesso!", formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="cadastro">
      <div className="cadastro-container">
        <div className="cadastro-image">
          <img src={ImgCadastro} alt="Imagem de Cadastro" />
        </div>
        <div className="cadastro-form">
          <h2>Cadastre-se</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
                className="form-input"
              />
              {errors.nome && <span className="error">{errors.nome}</span>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div>
              <input
                type="password"
                name="senha"
                placeholder="Senha"
                value={formData.senha}
                onChange={handleChange}
                className="form-input"
              />
              {errors.senha && <span className="error">{errors.senha}</span>}
            </div>
            <div>
              <input
                type="password"
                name="confirmarSenha"
                placeholder="Confirmar senha"
                value={formData.confirmarSenha}
                onChange={handleChange}
                className="form-input"
              />
              {errors.confirmarSenha && (
                <span className="error">{errors.confirmarSenha}</span>
              )}
            </div>
            <div>
              <input
                type="checkbox"
                name="termos"
                checked={formData.termos}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>
                Aceito os <u>Termos e Condições e a Política de Privacidade</u>
              </span>
              {errors.termos && <span className="error">{errors.termos}</span>}
            </div>
            <button type="submit">Confirmar</button>
          </form>
        </div>
        <div className="cadastro-header">
          <img src={IconMarca} alt="Marca" class="cadastro-icon" />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
