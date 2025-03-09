import axios, { AxiosRequestConfig } from "axios";
import { serverurl } from "../constants";
const axiosInstance = axios.create({
  baseURL: serverurl,
  headers: {
    Accept: "application/json",
  },
});
export const setAuthToken = () => {
  const token = localStorage.getItem("token");
  if (token) {
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};
class APIClient<T> {
  endPoint: string;

  constructor(endPoint: string) {
    this.endPoint = endPoint;
  }
  get = async (config: AxiosRequestConfig) => {
    const res = await axiosInstance.get<T>(this.endPoint, config);
    return res.data;
  };
  post = async <D>(data: D) => {
    const res = await axiosInstance.post<T>(this.endPoint, data);
    return res.data;
  };

  put = async <D>(data: D) => {
    const headers: Record<string, string> = {
      "X-HTTP-Method-Override": "PUT",
    };

    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const res = await axiosInstance.post<T>(this.endPoint, data, {
      headers: headers,
    });

    return res.data;
  };

  delete = async () => {
    const res = await axiosInstance.post<T>(this.endPoint, {
      _method: "DELETE",
    });
    return res.data;
  };
  getWithId = async (id: number | undefined) => {
    const res = await axiosInstance.get<T>(this.endPoint + "/" + id);
    return res.data;
  };
}

export default APIClient;
