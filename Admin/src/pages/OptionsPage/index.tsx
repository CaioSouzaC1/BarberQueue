import AdminLogo from "../../components/Forms/AdminLogo";
import AdminOptions from "../../components/Forms/AdminOptions";
import Preparer from "../../components/Preparer";

const OptionsPage = () => {
  return (
    <>
      <Preparer>
        <div className="flex flex-wrap mx-4 gap-4 justify-between">
          <AdminOptions />
          <AdminLogo />
        </div>
      </Preparer>
    </>
  );
};

export default OptionsPage;
