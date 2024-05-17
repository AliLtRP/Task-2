import { useEffect, useState } from "react";
import client from "../../api/axios";
import { useApiProps } from "../../types";

const useApi = <T,>({ payload, url, method }: useApiProps) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    if (method !== "GET" && payload === undefined) return;

    setLoading(true);
    client
      .request({ data: payload, method, url })
      .then((res) => {
        setData(res.data);
        setStatus(res.status);
      })
      .catch((e) => setError((e as Error).message))
      .finally(() => {
        setLoading(false);
      });
  }, [url, method, payload]);

  return { data, status, loading, error };
};

export default useApi;
