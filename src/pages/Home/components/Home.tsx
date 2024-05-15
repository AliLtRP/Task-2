import { Link } from "react-router-dom";
import CustomCard from "../../../components/CustomCard";
import { storeApi } from "../../../types";
import useApi from "../../../utils/hooks/useApi";

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
      {(data as Array<storeApi>)?.map((v) => {
        return (
          <CustomCard style="">
            <Link to={"/"}>
              <div className="w-full h-[60%] p-4">
                <img
                  src={v.image}
                  alt="items"
                  className="object-scale-down w-full h-full"
                />
              </div>
            </Link>
          </CustomCard>
        );
      })}
    </div>
  );
};

export default Home;
