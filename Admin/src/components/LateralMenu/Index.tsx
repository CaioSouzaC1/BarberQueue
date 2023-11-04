import { Link } from "react-router-dom";

const LateralMenu = () => {
  return (
    <div className="bg-neutral-400 w-40 p-4">
      <Link className="text-white font-black my-8 block" to="/editar-opcoes">
        Opções
      </Link>
    </div>
  );
};
export default LateralMenu;
