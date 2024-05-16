import { Link, useNavigate } from "react-router-dom";
import CustomCard from "../../../components/CustomCard";
import { StoreApi } from "../../../types";
import useApi from "../../../utils/hooks/useApi";
import CustomTitle from "../../../components/CustomTitle";
import Rating from "../../../components/Rating";
import Wrapper from "../../../components/Wrapper";
import Price from "../../../components/Price";
import CustomButton from "../../../components/CustomButton";
import CustomDashboardCrud from "../../../components/CustomDashboardCrud";

const Home = ({ isDashboard }: { isDashboard?: boolean }) => {
  const navigator = useNavigate();

  const { data, loading } = useApi({
    payload: "",
    url: "/products",
    method: "GET",
  });

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="py-10 flex justify-center flex-wrap gap-4">
      {(data as Array<StoreApi>)?.map((v) => {
        return (
          <CustomCard style={isDashboard ? "h-96" : ""}>
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

              {isDashboard && (
                <CustomDashboardCrud
                  title="Update Item"
                  operationFn={() => navigator("/update/item")}
                />
              )}
              {isDashboard && (
                <CustomDashboardCrud
                  title="Delete Item"
                  operationFn={() => navigator("/remove/item")}
                />
              )}
            </Wrapper>
          </CustomCard>
        );
      })}
    </div>
  );
};

export default Home;
