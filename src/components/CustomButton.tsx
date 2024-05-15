import { ButtonProps } from "../types";

const CustomButton = ({
  title,
  style,
  buttonType,
  disable,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      disabled={disable || false}
      type={buttonType || "button"}
      onClick={handleClick}
      className={`custom-btn ${style}`}
    >
      <span className="flex-1">{title}</span>
    </button>
  );
};

export default CustomButton;
