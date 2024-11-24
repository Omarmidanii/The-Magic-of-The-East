import employer from "../entities/employer";
import useDelete from "./useDelete";

const useDEleteEmployee = (id : number) => {
  return useDelete<employer, employer>(id, "employees");

}

export default useDEleteEmployee