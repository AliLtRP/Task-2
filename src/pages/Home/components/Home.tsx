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

  console.log(data);

  return (
    <div className="py-20">
      {(data as Array<storeApi>)?.map((v) => {
        return v.description;
      })}
    </div>
  );
};

export default Home;
