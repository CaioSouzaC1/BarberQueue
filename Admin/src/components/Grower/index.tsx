import { GROWER_MIN } from "../../../env";

interface IGrowerProps {
  children: React.ReactNode;
}

const Grower = ({ children }: IGrowerProps) => {
  return (
    <div style={{ minHeight: window.innerHeight - GROWER_MIN + "px" }}>
      {children}
    </div>
  );
};
export default Grower;
