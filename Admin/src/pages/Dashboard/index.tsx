import { Link } from "react-router-dom";
import Container from "../../components/Container";

const DashboardPage = () => {
  return (
    <Container>
      <div>
        <Link className="text-white font-black my-8 block" to="/editar-opcoes">
          Opções
        </Link>
      </div>
    </Container>
  );
};
export default DashboardPage;
