import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { createSectionRequest } from "../../../services/utils";

const CreateSectionForm = () => {
  const { user } = useAuth();
  const [obs, setObs] = useState("");
  const [type, setType] = useState("cut");
  const [data, setData] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    createSectionRequest({ obs, type, data, user });
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Agendar corte</legend>
      <div className="mb-4">
        <label htmlFor="whatsapp">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          readOnly
          value={user.name || ""}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="type">Tipo de atendimento</label>
        <select
          name="type"
          id="type"
          value={type}
          onChange={(e) => setType(e.target.value)}>
          <option value="cut">R$25 | Corte</option>
          <option value="barber">R$10 | Barba</option>
          <option value="cut & barber">R$30 | Corte + Barba</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="data">Data</label>
        <input
          type="text"
          id="data"
          name="data"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password">Observações</label>
        <textarea
          id="obs"
          name="obs"
          value={obs}
          onChange={(e) => setObs(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-full items-center">
        <button type="submit">Marcar</button>
      </div>
    </form>
  );
};

export default CreateSectionForm;
