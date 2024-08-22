import "./AlterarSenha.css";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { FloatLabel } from "primereact/floatlabel";

const AlterarSenha = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassoword] = useState("");
  const [confirmPassword, setConfirmPassoword] = useState("");
  const [newCodigo, setNewCodigo] = useState("");


  const header = <div className="font-bold mb-3">A senha deve conter:</div>;
  const footer = (
    <>
      <Divider />
      <p className="mt-2">Sugestões</p>
      <ul className="pl-2 ml-2 mt-0 line-height-3">
        <li>1 letra maiúscula</li>
        <li>1 letra minúscula</li>
        <li>1 número</li>
        <li>1 caractere especial</li>
      </ul>
    </>
  );

  
  return (
    <div className="container">
      <Card title="Alterar senha">

        <FloatLabel>
          <InputText
            id="email"
            className="input-field" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">E-mail:</label>
        </FloatLabel>

        <FloatLabel>
          <InputNumber
            id="codigo"
            className="input-field custom-input-number"
            value={newCodigo}
            onValueChange={(e) => setNewCodigo(e.value)}
            useGrouping={false}
          />
          <label htmlFor="codigo">Código: </label>
        </FloatLabel>

        <div className="password-card">
          <FloatLabel>
            <Password
              inputId="new-password"
              className="input-field"
              value={newPassword}
              onChange={(e) => setNewPassoword(e.target.value)}
              header={header}
              footer={footer}
            />
            <label htmlFor="new-password">Nova senha:</label>
          </FloatLabel>
        </div>

        <div className="password-card">
          <FloatLabel>
            <Password
              inputId="confirm-password"
              className="input-field"
              value={confirmPassword}
              onChange={(e) => setConfirmPassoword(e.target.value)}
              header={header}
              footer={footer}
            />
            <label htmlFor="confirm-password">Confirmar senha:</label>
          </FloatLabel>
        </div>
        <Button label="Confirmar" />
        <Button label="Cancelar" />
      </Card>
    </div>
  );
};
export default AlterarSenha;
