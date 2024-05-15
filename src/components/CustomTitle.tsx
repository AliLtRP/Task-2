import { CustomTitleProps } from "../types";

const CustomTitle = (props: CustomTitleProps) => {
  return (
    <div
      className={`${props.style} h-16 pr-[2px] pt-1 text-sm text-left text-wrap font-bold overflow-auto`}
    >
      {props.title}
    </div>
  );
};

export default CustomTitle;
