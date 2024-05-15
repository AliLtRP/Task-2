import { ReactNode } from "react";

const CustomCard: React.FC<{ children: ReactNode; style: string }> = ({
  children,
  style,
}) => {
  return (
    <div
      className={`h-80 w-64 max-w-sm border border-gray-200 rounded-lg shadow ${style}`}
    >
      {children}
    </div>
  );
};

export default CustomCard;
