interface IGrowerProps {
  children: React.ReactNode;
}

const Grower = ({ children }: IGrowerProps) => {
  return <div className="min-h-[calc(100vh-294px)]">{children}</div>;
};
export default Grower;
