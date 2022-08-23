import useAxios from "axios-hooks";

const useGetUsers = () => {
  const [{ data, loading, error }, refetch] = useAxios("/users");
  return { data, loading, error, refetch };
};

export default useGetUsers;
