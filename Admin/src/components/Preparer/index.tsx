import { GROWER_MIN } from "../../../env";
import LateralMenu from "../LateralMenu/Index";

interface PreparerProps {
  children: React.ReactNode;
}

const Preparer = ({ children }: PreparerProps) => {
  return (
    <>
      <div
        style={{ minHeight: window.innerHeight - GROWER_MIN + "px" }}
        className="flex">
        <LateralMenu />
        <div className="flex-1">{children}</div>
      </div>
    </>
  );
};

export default Preparer;
