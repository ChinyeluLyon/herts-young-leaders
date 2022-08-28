import { AxiosRequestConfig } from "axios";
import useAxios from "axios-hooks";

const slug = "/users/";

type getUsersProps = {
  id?: string;
  name?: string;
  minAge?: number;
  maxAge?: number;
};

const useGetParticipants = () => {
  const params = {};

  const [{ data, loading, error }, refetch] = useAxios(
    {},
    {
      manual: true,
    }
  );

  const fetch = ({ id, name, minAge, maxAge }: getUsersProps) => {
    const queryConfig: AxiosRequestConfig = {
      method: "GET",
      url: `${slug}${id ? id : ""}`,
      params: { name, minAge, maxAge },
    };
    return refetch(queryConfig);
  };

  return { data, loading, error, fetch };
};

export default useGetParticipants;
