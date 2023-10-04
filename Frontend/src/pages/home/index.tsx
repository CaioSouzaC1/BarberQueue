import { Link } from "react-router-dom";
import Container from "../../components/Container";
import Grower from "../../components/Grower";

const Home = () => {
  return (
    <Grower>
      <Container>
        <h1>HOME</h1>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/criar-conta">Criar conta</Link>
      </Container>
    </Grower>
  );
};
export default Home;
