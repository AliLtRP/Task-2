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
      <CustomCard />
      {(data as Array<storeApi>)?.map((v) => {
        return <img src={v.image} alt="" />;
      })}
    </div>
  );
};

export default Home;
