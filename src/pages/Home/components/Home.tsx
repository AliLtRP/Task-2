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

  return <div></div>;
};

export default Home;
