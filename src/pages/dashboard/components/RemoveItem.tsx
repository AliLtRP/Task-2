import { useLocation } from "react-router-dom";
import useApi from "../../../utils/hooks/useApi";
import { StoreApi } from "../../../types";

const RemoveItem = () => {
  const { state } = useLocation();
  const { v }: { v: StoreApi } = state;

  const { data, loading } = useApi<StoreApi>({
    payload: null,
    url: `/products/${v.id}`,
    method: "DELETE",
  });

  console.log(v.id);
  console.log(data);

  if (loading) {
    <div>loading...</div>;
  }
  return (
    <div>Delete Item with id: {data && "id" in data ? data.id : "unkown"}</div>
  );
};

export default RemoveItem;
