import Container from "../../components/Container";
import { useAuth } from "../../context/AuthContext";
import { formatDate } from "../../services/utils";

const MyProfilePage = () => {
  const { user } = useAuth();
  return (
    <Container>
      <form>
        <legend>Meu perfil</legend>

        <div className="mb-4">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" value={user.name || ""} readOnly />
        </div>

        <div className="mb-4">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input
            type="text"
            id="whatsapp"
            value={user.whatsapp || ""}
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="contaCriada">Data da criação da conta</label>
          <input
            type="text"
            id="contaCriada"
            value={formatDate(user.created_at) || ""}
            readOnly
          />
        </div>
      </form>
    </Container>
  );
};
export default MyProfilePage;
