import { Link } from "react-router-dom";
import Container from "../../components/Container";

const NotFoundPage = () => {
  return (
    <Container>
      <h1>404</h1>
      <h3 className="mb-8">Página não encontrada!</h3>
      <Link to="/">Voltar para a Home</Link>
    </Container>
  );
};
export default NotFoundPage;
