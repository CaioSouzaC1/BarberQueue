import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { PersonCircle } from "react-bootstrap-icons";

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-4xl">
      <PersonCircle className="mx-auto mb-4" size={64} color="#dbeafe" />
      <legend>Entrar na dashboard</legend>
      <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="administração@admin.com.br"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="********"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-full items-center">
        <button type="submit">Entrar</button>
      </div>
    </form>
  );
};

export default LoginForm;
