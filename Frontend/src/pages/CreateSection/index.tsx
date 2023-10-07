import Container from "../../components/Container";
import CreateSectionForm from "../../components/Forms/CreateSection";
import { changeTitle } from "../../services/utils";

const CreateSectionPage = () => {
  changeTitle("Agendar seção");
  return (
    <>
      <Container>
        <CreateSectionForm />
      </Container>
    </>
  );
};
export default CreateSectionPage;
