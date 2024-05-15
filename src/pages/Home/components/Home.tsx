import { Link } from "react-router-dom";
import CustomCard from "../../../components/CustomCard";
import { StoreApi } from "../../../types";
import useApi from "../../../utils/hooks/useApi";
import CustomTitle from "../../../components/CustomTitle";
import Rating from "../../../components/Rating";

const Home = () => {
  const { data, loading } = useApi({
    payload: "",
    url: "/products",
    method: "GET",
  });

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="py-20">
      {(data as Array<StoreApi>)?.map((v) => {
        return (
          <CustomCard style="">
            <Link to={"/"}>
              <div className="w-full h-[55%] p-4">
                <img
                  src={v.image}
                  alt="items"
                  className="object-scale-down w-full h-full"
                />
              </div>

              <CustomTitle title={v.title} />
              <Rating />
              <div>price</div>
              <div>button</div>
            </Link>
          </CustomCard>
        );
      })}
    </div>
  );
};

export default Home;
