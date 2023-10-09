import Container from "../Container";

const Header = () => {
  return (
    <header className="bg-blue-950 px-2 pt-4 pb-4">
      <Container>
        <div className="flex flex-wrap justify-between items-center ">
          Painel de Administração
        </div>
      </Container>
    </header>
  );
};

export default Header;
