import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const slug = "/users/";

type getUsersProps = {
  id?: string;
  name?: string;
  age?: string;
};

const useGetUsers = () => {
  const params = {};

  const [{ data, loading, error }, refetch] = useAxios(
    {},
    {
      manual: true,
    }
  );

  const fetch = ({ id, name, age }: getUsersProps) => {
    const queryConfig: AxiosRequestConfig = {
      method: "GET",
      url: `${slug}${id ? id : ""}`,
      params: { name, age },
    };
    return refetch(queryConfig);
  };

  return { data, loading, error, fetch };
};

export default useGetUsers;
