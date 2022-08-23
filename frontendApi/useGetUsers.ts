import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const slug = "/users/";

const useGetYaml = () => {
  const params = {};

  const queryConfig: AxiosRequestConfig = {
    method: "get",
    url: `${slug}`,
    params,
  };
  const [{ data, loading, error }, refetch] = useAxios(queryConfig, {
    manual: true,
  });

  return { data, loading, error, refetch };
};

export default useGetYaml;
