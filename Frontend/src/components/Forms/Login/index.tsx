import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(whatsapp, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Entre</legend>
      <div className="mb-4">
        <label htmlFor="whatsapp">WhatsApp</label>
        <input
          type="text"
          id="whatsapp"
          name="whatsapp"
          placeholder="(12) 99887-6655"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-6 text-brownBarber mb-1">
          Password
        </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
