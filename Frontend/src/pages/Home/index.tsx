import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { changeTitle } from "../../services/utils";

const Home = () => {
  changeTitle("Home");
  return (
    <Container>
      <h1>Seja bem vindo!</h1>
      <Link to="/entrar">Login</Link>
      <br />
      <Link to="/criar-conta">Criar conta</Link>
    </Container>
  );
};
export default Home;
