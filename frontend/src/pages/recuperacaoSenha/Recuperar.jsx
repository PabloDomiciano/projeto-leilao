import "./Recuperar.css";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useState } from "react";
import { FloatLabel } from "primereact/floatlabel";

const Recuperar = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <Card title="Recuperar a senha">

        <FloatLabel>
          <InputText
            id="email"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="email">E-mail:</label>
        </FloatLabel>

        <Button label="Enviar" />
        <Button label="Cancelar" />
      </Card>
    </div>
  );
};
export default Recuperar;
