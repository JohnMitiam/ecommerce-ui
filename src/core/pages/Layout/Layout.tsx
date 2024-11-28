interface Props {
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-gray-200 w-full h-full pt-20">{children}</div>
    </>
  );
};
