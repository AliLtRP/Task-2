import { UseFormRegister } from "react-hook-form";
import { RegisterOptions, StoreApi } from "../types";

const CustomInput = ({
  registerField,
  registerOption,
  title,
  style,
  placeHolder,
}: {
  registerField: UseFormRegister<StoreApi>;
  registerOption: RegisterOptions;
  title: string;
  style?: string;
  placeHolder?: string;
}) => {
  return (
    <div className={`mb-6 ${style}`}>
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {title}
      </label>
      <input
        type="text"
        placeholder={placeHolder}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500"
        {...registerField(registerOption)}
      />
    </div>
  );
};

export default CustomInput;
