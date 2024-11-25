import employer from "../entities/employer";
import useUpdate from "./useUpdate";

const useEditEmployee = (id: number) => {
    return useUpdate<employer, employer>(id, "employees");
}

export default useEditEmployee