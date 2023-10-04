import Container from "../../components/Container";
import CreateAccountForm from "../../components/Forms/CreateAccount";
import Grower from "../../components/Grower";

const CreateAccountPage = () => {
  return (
    <Grower>
      <Container>
        <CreateAccountForm />
      </Container>
    </Grower>
  );
};

export default CreateAccountPage;
