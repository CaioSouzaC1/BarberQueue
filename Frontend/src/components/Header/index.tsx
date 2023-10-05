// import { List } from "react-bootstrap-icons";
import Container from "../Container";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="mb-4">
      <Container>
        <div className="flex flex-wrap justify-between items-center">
          <Logo />
          {/* <List size={28} color="#4c2d12" /> */}
        </div>
      </Container>
    </header>
  );
};

export default Header;
