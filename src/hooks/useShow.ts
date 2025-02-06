import { useNavigate } from "react-router-dom";
import GlobalResponse from "../entities/GlobalResponse";
import APIClient, { setAuthToken } from "../services/APIClient";
import { useQuery } from "@tanstack/react-query";
import CustomError from "../entities/customeError";

const useShow = <T>(id: number, endPoint: string) => {
  const apiClient = new APIClient<GlobalResponse<T>>(`/${endPoint}`);
  const navigate = useNavigate();
  setAuthToken();
  const query = useQuery({
    queryKey: [`one${endPoint}`, id],
    queryFn: () => apiClient.getWithId(id),
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
export default useShow;
