interface IGrowerProps {
  children: React.ReactNode;
}

const Grower = ({ children }: IGrowerProps) => {
  return <div className="min-h-[calc(100vh-224px)]">{children}</div>;
};
export default Grower;
