import { useQuery } from "@tanstack/react-query";
import APIClient, { setAuthToken } from "../services/APIClient";
import CustomError from "../entities/customeError";
import { useNavigate } from "react-router-dom";
import TRes from "../entities/TRes";

const useFetchData = <T>(endPoint: string, fun: () => void = () => {}) => {
  const apiClient = new APIClient<TRes<T>>(`/${endPoint}`);
  const navigate = useNavigate();
  setAuthToken();

  const fetchData = () =>
    apiClient.get({}).then((res) => {
      fun();
      return res.data;
    });

  const query = useQuery<T, Error>({
    queryKey: [endPoint],
    queryFn: fetchData,
    staleTime: 10 * 1000,
    refetchOnWindowFocus: true,
  });
  if (query.error) {
    const err = query.error as CustomError;
    if (err.response) {
      const statusCode = err.response.status;
      if (statusCode === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    }
  }
  return query;
};

export default useFetchData;
