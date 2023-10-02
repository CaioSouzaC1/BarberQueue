const Logo = () => {
  return (
    <>
      <p className="inline-flex font-bold text-2xl lg:text-4xl text-brownBarber py-2">
        <span className="font-black">Barber</span>Q{" "}
        <img
          className="w-4 lg:w-6 rotate-[270deg] -mb-2"
          src="../../../src/assets/svg/scissors-solid.svg"
          alt="scissors"
        />
        e{" "}
        <img
          className="w-4 lg:w-6 rotate-[270deg] -mb-2"
          src="../../../src/assets/svg/scissors-solid.svg"
          alt="scissors"
        />
        e
      </p>
    </>
  );
};
export default Logo;
