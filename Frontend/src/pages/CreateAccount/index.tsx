import Container from "../../components/Container";
import CreateAccountForm from "../../components/Forms/CreateAccount";
import { changeTitle } from "../../services/utils";

const CreateAccountPage = () => {
  changeTitle("Criar conta");
  return (
    <Container>
      <CreateAccountForm />
    </Container>
  );
};

export default CreateAccountPage;
