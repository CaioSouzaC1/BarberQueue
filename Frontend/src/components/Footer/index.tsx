import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Container from "../Container";

const Footer = () => {
  const { isAuthenticated } = useAuth();

  return (
    <footer className="bg-brownBarber px-2 pt-8 pb-4">
      <Container>
        <ul className="text-creamBarber capitalize flex flex-col gap-2 mb-4">
          {!isAuthenticated ? (
            <>
              {" "}
              <li>
                <Link
                  className="text-creamBarber border-b-creamBarber"
                  to={"/criar-conta"}>
                  Criar conta
                </Link>
              </li>
              <li>
                <Link
                  className="text-creamBarber border-b-creamBarber"
                  to={"/entrar"}>
                  Entrar
                </Link>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <Link
                  className="text-creamBarber border-b-creamBarber"
                  to={"/meu-perfil"}>
                  Meu perfil
                </Link>
              </li>
              <li>
                <Link
                  className="text-creamBarber border-b-creamBarber"
                  to={"/minhas-secoes"}>
                  Minhas seções
                </Link>
              </li>
            </>
          )}
          <li>
            <Link
              className="text-creamBarber border-b-creamBarber"
              to={"/sobre-nos"}>
              sobre-nos
            </Link>
          </li>
        </ul>
        <p className="text-creamBarber">2023 Todos os direitos reservados.</p>
      </Container>
    </footer>
  );
};
export default Footer;
