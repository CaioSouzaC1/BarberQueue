import Container from "../../components/Container";
import AdminOptions from "../../components/Forms/AdminOptions";
import Preparer from "../../components/Preparer";

const OptionsPage = () => {
  return (
    <>
      <Preparer>
        <Container>
          <AdminOptions />
        </Container>
      </Preparer>
    </>
  );
};

export default OptionsPage;
