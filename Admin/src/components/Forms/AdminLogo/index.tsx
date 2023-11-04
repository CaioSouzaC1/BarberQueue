const AdminLogo = () => {
  return (
    <div className="w-full lg:w-[calc(40%-.5rem)] flex-wrap bg-neutral-400 my-4 px-4">
      <form className="py-2 mt-4 mb-8 w-full border-dashed border-2 border-neutral-500 rounded-none h-fit ">
        <legend>Arraste e solte a logo aqui</legend>
        <input className="py-8 my-4 cursor-pointer" type="file" name="" id="" />
      </form>

      <form className="py-2 mt-4 mb-8 w-full border-dashed border-2 border-neutral-500 rounded-none h-fit ">
        <legend>Arraste e solte a outra imagem aqui</legend>
        <input className="py-8 my-4 cursor-pointer" type="file" name="" id="" />
      </form>
    </div>
  );
};

export default AdminLogo;
