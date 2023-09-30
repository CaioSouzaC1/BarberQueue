const Logo = () => {
  return (
    <>
      <p className="inline-flex font-bold text-4xl text-brownBarber">
        <span className="font-black">Barber</span>Q{" "}
        <img
          className="w-6 rotate-[270deg] -mb-2"
          src="../../../src/assets/svg/scissors-solid.svg"
          alt="scissors"
        />
        e{" "}
        <img
          className="w-6 rotate-[270deg] -mb-2"
          src="../../../src/assets/svg/scissors-solid.svg"
          alt="scissors"
        />
        e
      </p>
    </>
  );
};
export default Logo;
