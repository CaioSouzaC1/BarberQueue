import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
  const [whatsapp, setWhatsapp] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const { create } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await create(whatsapp, password, name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <legend>Criar conta</legend>
      <div className="mb-4">
        <label htmlFor="whatsapp">WhatsApp</label>
        <input
          type="text"
          required
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
          Senha
        </label>
        <input
          type="text"
          required
          id="password"
          name="password"
          placeholder="********"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="name">Nome Completo</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          placeholder="(12) 99887-6655"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="flex justify-between w-full items-center">
        <button type="submit">Cadastrar</button>

        <p className="mt-1">
          Já tem uma conta?{" "}
          <Link className="mb-0" to={"/entrar"}>
            Entrar
          </Link>
        </p>
      </div>
    </form>
  );
};

export default CreateAccountForm;
