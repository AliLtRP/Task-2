import { useForm, SubmitHandler } from "react-hook-form";
import { StoreApi } from "../../../types";
import CustomButton from "../../../components/CustomButton";
import CustomInput from "../../../components/CustomInput";
import Wrapper from "../../../components/Wrapper";
import useApi from "../../../utils/hooks/useApi";
import { useState } from "react";

const UpdateForm = ({ id }: { id: number }) => {
  const [data, setData] = useState<StoreApi>();
  const { register, handleSubmit } = useForm<StoreApi>();
  const apiResponse = useApi({
    payload: data,
    url: `/products/${id}`,
    method: "PUT",
  });

  const onSubmit: SubmitHandler<StoreApi> = (formData) => {
    setData(formData);
    console.log(formData);
    console.log(apiResponse);

    if (apiResponse.status !== 200) {
      alert("something happend");
      return;
    }

    alert("item get updated");
  };

  return (
    <Wrapper style="basis-[70%]">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <CustomInput
            title="Item Title"
            placeHolder="Men Casual shirt"
            registerField={register}
            registerOption="title"
          />
          <Wrapper style="w-full flex gap-4">
            <CustomInput
              title="Item rate"
              style="w-full"
              placeHolder="3.5"
              registerField={register}
              registerOption="rating.rate"
            />
            <CustomInput
              title="Item count"
              style="w-full"
              placeHolder="120"
              registerField={register}
              registerOption="rating.count"
            />
          </Wrapper>

          <CustomInput
            title="price"
            placeHolder="20"
            registerField={register}
            registerOption="price"
          />

          <CustomInput
            title="category"
            placeHolder="Men Clothes"
            registerField={register}
            registerOption="category"
          />

          <CustomInput
            title="description"
            placeHolder="Recommended for FAT people"
            registerField={register}
            registerOption="description"
          />

          <CustomInput
            title="image"
            placeHolder="image url"
            registerField={register}
            registerOption="image"
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
