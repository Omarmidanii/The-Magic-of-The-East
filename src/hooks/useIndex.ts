import { useNavigate } from "react-router-dom";
import APIClient, { setAuthToken } from "../services/APIClient";
import indexResponse from "../entities";
import { useInfiniteQuery } from "@tanstack/react-query";
import CustomError from "../entities/customeError";

const useIndex = <T>(endPoint: string) => {
  const navigate = useNavigate();
  const apiClient = new APIClient<indexResponse<T>>(`/${endPoint}`);
  setAuthToken();
  const query = useInfiniteQuery<indexResponse<T>, CustomError>({
    queryKey: [endPoint],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.get({
        params: {
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.meta)
        return lastPage.meta.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
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
export default useIndex;
