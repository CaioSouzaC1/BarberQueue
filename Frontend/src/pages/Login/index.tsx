import { Link } from "react-router-dom";
import Container from "../../components/Container";
import LoginForm from "../../components/Forms/Login";
import { useAuth } from "../../context/AuthContext";
import { changeTitle } from "../../services/utils";

const LoginPage = () => {
  changeTitle("Entrar");
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return (
      <Container>
        <div>Você já está logado</div>
        <Link to={"/"}>Home</Link>
      </Container>
    );
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};
export default LoginPage;
