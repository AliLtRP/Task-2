import { useForm, SubmitHandler } from "react-hook-form";
import { StoreApi } from "../../../types";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import Wrapper from "../../../components/Wrapper";

const UpdateForm = () => {
  const { register, handleSubmit, watch, formState } = useForm<StoreApi>();
  const onSubmit: SubmitHandler<StoreApi> = (data) => console.log(data);

  return (
    <Wrapper style="basis-[70%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <CustomInput
            title="Item Title"
            registerField={register}
            registerOption="title"
          />
          <CustomInput
            title="Item rating"
            registerField={register}
            registerOption="rating"
          />
          <CustomInput
            title="Item price"
            registerField={register}
            registerOption="price"
          />
          <CustomInput
            title="Item Title"
            registerField={register}
            registerOption="title"
          />
        </Wrapper>

        <CustomButton
          title="submit form"
          buttonType="submit"
          style="bg-blue-700 rounded-lg font-medium text-center text-sm text-white px-4 py-2.5"
          handleClick={() => {}}
        />
      </form>
    </Wrapper>
  );
};

export default UpdateForm;
