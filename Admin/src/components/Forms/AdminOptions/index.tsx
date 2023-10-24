import { toast } from "react-toastify";
import { API_URL } from "../../../../env";

const AdminOptions = () => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/admin/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ arr: "array com chave e valor dos campos" }),
      });

      if (response.ok) {
        // const data = await response.json();
        toast.success("Configurações atualizadas!", {
          theme: "dark",
        });
      } else {
        toast.error("Erro ao atualizar credenciais.", {
          theme: "dark",
        });
      }
    } catch (error) {
      toast.error("Erro interno do sistema.", {
        theme: "dark",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="_est_name">Nome do estabelecimento</label>
      <input
        type="text"
        name="name"
        id="_est_name"
        placeholder="Victor Barber Shop"
      />
      <button type="submit">Enviar</button>
    </form>
  );
};
export default AdminOptions;
