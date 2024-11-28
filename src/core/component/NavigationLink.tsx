import { Link } from "react-router-dom";

interface Props {
  children?: React.ReactNode;
  to: string;
  onClick?: () => void;
  classNames?: string;
}
export const NavigationLink: React.FC<Props> = ({
  onClick,
  children,
  to,
  classNames,
}) => {
  return (
    <>
      <Link onClick={onClick} className={classNames} to={to}>
        {children}
      </Link>
    </>
  );
};
