import { useMutation } from "@tanstack/react-query";
import GlobalResponse from "../entities/GlobalResponse";
import APIClient, { setAuthToken } from "../services/APIClient";
import useErrorStore from "../stores/errorStore";

const useDelete = <T, D>(id: number, endPoint: string) => {
  const apiClient = new APIClient<GlobalResponse<T>>(`/${endPoint}/${id}`);
  setAuthToken();
  const { setMessage } = useErrorStore();
  return useMutation<GlobalResponse<T>, Error, D>({
    mutationKey: [`delete${id}.${endPoint}`],
    mutationFn: () => apiClient.delete(),
    onError(error: any) {
      if (error.response && error.response.status === 422) {
        const errorMessage = error.response.data.errors;
        setMessage(errorMessage);
      } else if (error.response) {
        const message = { message: error.response.data.message };
        setMessage(message as any);
        console.error("An error occurred:", error.message);
      }
    },
    onSuccess: (vlaues, variables) => {
      console.log(vlaues, variables);
    },
  });
};
export default useDelete;
