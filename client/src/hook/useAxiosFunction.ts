import { rejects } from "assert";
import { useState, useEffect } from "react";

const useAxiosFunction = () => {
  const [response, setResponse] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false); //different!
  const [controller, setController] = useState<any>();

  const axiosFetch = async (configObj: any) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl: any = new AbortController();
      setController(ctrl);
      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });

      setResponse(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, axiosFetch];
};

export default useAxiosFunction;
