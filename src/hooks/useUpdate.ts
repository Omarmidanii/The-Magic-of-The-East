import { useMutation } from "@tanstack/react-query";
import GlobalResponse from "../entities/GlobalResponse";
import APIClient, { setAuthToken } from "../services/APIClient";
import useErrorStore from "../stores/errorStore";

const useUpdate = <T, D>(id : number  , endPoint: string) => {
    const apiClient = new APIClient<GlobalResponse<T>>(`/${endPoint}/${id}`);
    setAuthToken();
    const {setMessage} = useErrorStore();
    return useMutation<GlobalResponse<T>, Error, D>({
      mutationKey: [`update${id}.${endPoint}`],
      mutationFn: (data) => apiClient.put<D>(data),
      onError(error : any) {
        if (error.response && error.response.status === 422) {
          const errorMessage = error.response.data.errors;
          setMessage(errorMessage);
        } else {
          console.error("An error occurred:", error.message);
        }
      },
      onSuccess: (vlaues, variables) => {
        console.log(vlaues, variables);
      },
    });
  };
  export default useUpdate;