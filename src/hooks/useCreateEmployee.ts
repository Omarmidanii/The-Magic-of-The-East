import employer from "../entities/employer";
import useCreate from "./useCreate";

const useCreateEmployee = () => {
  return useCreate<employer, FormData>("employees");
};

export default useCreateEmployee;
