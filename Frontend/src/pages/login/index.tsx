import { Link } from "react-router-dom";
import Container from "../../components/Container";
import LoginForm from "../../components/Forms/Login";
import Grower from "../../components/Grower";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <Grower>
        <Container>
          <div>Você já está logado</div>
          <Link to={"/"}>Home</Link>
        </Container>
      </Grower>
    );
  }

  return (
    <Grower>
      <Container>
        <LoginForm />
      </Container>
    </Grower>
  );
};
export default LoginPage;
