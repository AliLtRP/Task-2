import { ReactNode } from "react";

const Wrapper: React.FC<{ children: ReactNode; style: string }> = ({
  children,
  style,
}) => {
  return <div className={`${style}`}>{children}</div>;
};

export default Wrapper;
