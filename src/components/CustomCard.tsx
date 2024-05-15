import { ReactNode } from "react";

const CustomCard: React.FC<{ children: ReactNode; style: string }> = ({
  children,
  style,
}) => {
  return (
    <div
      className={`h-64 w-60 max-w-sm border border-gray-200 rounded-lg shadow bg-blac ${style}`}
    >
      {children}
    </div>
  );
};

export default CustomCard;
