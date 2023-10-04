import Container from "../../components/Container";
import LoginForm from "../../components/Forms/Login";
import Grower from "../../components/Grower";

const Home = () => {
  return (
    <Grower>
      <Container>
        <h1>HOME</h1>
        <LoginForm />
      </Container>
    </Grower>
  );
};
export default Home;
