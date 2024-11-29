import { useQuery } from "@tanstack/react-query";
import APIClient, { setAuthToken } from "../services/APIClient";
import CustomError from "../entities/customeError";
import { useNavigate } from "react-router-dom";

interface TRes<T> {
  status: number;
  data: T[];
  message: string;
}

const useFetchData = <T>(endPoint: string, fun: () => void = () => {}) => {
  let backStatus;
  const apiClient = new APIClient<TRes<T>>(`/${endPoint}`);
  const navigate = useNavigate();
  setAuthToken();

  const fetchData = () =>
    apiClient.get({}).then((res) => {
      backStatus = res.status;
      fun();
      return res.data;
    });

  const query = useQuery<T[], Error>({
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
        navigate("/login");
      }
    }
  }
  return query;
};

export default useFetchData;
