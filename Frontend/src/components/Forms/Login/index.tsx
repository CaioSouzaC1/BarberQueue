import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

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

      <div className="flex justify-between w-full items-center">
        <button type="submit">Entrar</button>

        <p className="mt-1">
          Não tem uma conta?{" "}
          <Link className="mb-0" to={"/criar-conta"}>
            Crie uma
          </Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
