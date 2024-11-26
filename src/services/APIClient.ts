import axios, { AxiosRequestConfig } from "axios";
const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
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
    const res = await axiosInstance.put<T>(this.endPoint, data);
    return res.data;
  };
  delete = async () => {
    const res = await axiosInstance.delete<T>(this.endPoint);
    return res.data;
  };
  getWithId = async (id: number | undefined) => {
    const res = await axiosInstance.get<T>(this.endPoint + "/" + id);
    return res.data;
  };
}

export default APIClient;
