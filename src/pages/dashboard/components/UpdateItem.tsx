import { Link, useLocation } from "react-router-dom";
import Wrapper from "../../../components/Wrapper";
import CustomCard from "../../../components/CustomCard";
import CustomTitle from "../../../components/CustomTitle";
import Rating from "../../../components/Rating";
import Price from "../../../components/Price";
import CustomButton from "../../../components/CustomButton";
import UpdateForm from "./UpdateForm";

const UpdateItem = () => {
  const { state } = useLocation();
  const { v } = state;

  return (
    <Wrapper style="flex flex-col gap-16 md:flex-row">
      <CustomCard style="">
        <Link to={"/"}>
          <div className="w-full h-[50%] p-4">
            <img
              src={v.image}
              alt="items"
              className="object-scale-down w-full h-full"
            />
          </div>
        </Link>

        <Wrapper style="pl-4 flex flex-col gap-[1px]">
          <CustomTitle title={v.title} />
          <Rating />
        </Wrapper>

        <Wrapper style="flex justify-between px-4 py-2 items-center flex-wrap">
          <Price price={v.price} />
          <CustomButton
            title="Add to cart"
            disable={false}
            style="bg-blue-700 rounded-lg font-medium text-center text-sm text-white px-4 py-2.5"
            buttonType="button"
            handleClick={() => {}}
          />
        </Wrapper>
      </CustomCard>

      <UpdateForm />
    </Wrapper>
  );
};

export default UpdateItem;
