import { Link } from "react-router-dom";
import Container from "../Container";

const Header = () => {
  return (
    <header className="bg-neutral-400 px-2 pt-4 pb-4">
      <Container>
        <div className="flex flex-wrap justify-between items-center text-white">
          <Link to={"/"}> Painel de Administração</Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
