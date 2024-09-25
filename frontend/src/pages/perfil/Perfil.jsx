import React, { useState } from "react";
import "./Perfil.css";

const Perfil = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null); // Estado para a imagem do perfil
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    rg: "",
    cep: "",
    cidade: "",
    estado: "",
    bairro: "",
    rua: "",
    complemento: "",
    telefone: "",
    dataNascimento: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Lógica para salvar os dados
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Lógica para cancelar a edição
    setIsEditing(false);
    // Resetar os dados para os valores anteriores (se necessário)
    setFormData({
      nome: "",
      cpf: "",
      rg: "",
      cep: "",
      cidade: "",
      estado: "",
      bairro: "",
      rua: "",
      complemento: "",
      telefone: "",
      dataNascimento: "",
    });
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="perfil-container">
      <div className="perfil-header">
        <div className="perfil-image">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Foto de Perfil"
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
            />
          ) : (
            <span>Foto</span>
          )}
        </div>
        <h1>{formData.nome}</h1>
      </div>

      {isEditing && (
        <div className="input-group">
          <label>Carregar nova foto de perfil:</label>
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </div>
      )}

      <div className="perfil-info">
        <div className="input-group">
          <label>Nome:</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>CPF:</label>
          <input
            type="text"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>RG:</label>
          <input
            type="text"
            name="rg"
            value={formData.rg}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>CEP:</label>
          <input
            type="text"
            name="cep"
            value={formData.cep}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Cidade:</label>
          <input
            type="text"
            name="cidade"
            value={formData.cidade}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Estado:</label>
          <input
            type="text"
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Bairro:</label>
          <input
            type="text"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Rua:</label>
          <input
            type="text"
            name="rua"
            value={formData.rua}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Complemento:</label>
          <input
            type="text"
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
        <div className="input-group">
          <label>Telefone:</label>
          <input
            type="text"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            disabled={!isEditing}
          />
        </div>
      </div>

      {isEditing ? (
        <div>
          <button className="btn-salvar" onClick={handleSave}>
            Salvar
          </button>
          <button className="btn-cancelar" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      ) : (
        <button className="btn-edit" onClick={handleEdit}>
          Editar
        </button>
      )}
    </div>
  );
};

export default Perfil;
