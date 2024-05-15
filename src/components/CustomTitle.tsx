import { CustomTitleProps } from "../types";

const CustomTitle = (props: CustomTitleProps) => {
  return (
    <div
      className={`${props.style} pl-4 pr-[2px] pt-1 text-sm text-left text-wrap font-bold`}
    >
      {props.title}
    </div>
  );
};

export default CustomTitle;
