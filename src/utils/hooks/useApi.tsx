import { useEffect, useState } from "react";
import client from "../../api/axios";
import { useApiProps } from "../../types";
import { AxiosResponse } from "axios";

const useApi = <T,>({ payload, url, method }: useApiProps) => {
  const [data, setData] = useState<null | AxiosResponse<T>>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    setLoading(true);
    client
      .request({ data: payload, method, url })
      .then((res) => setData(res))
      .catch((e) => setError((e as Error).message))
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, payload]);

  return { data, loading, error };
};

export default useApi;
