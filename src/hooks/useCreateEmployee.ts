import employer from "../entities/employer";
import useCreate from "./useCreate"

const useCreateEmployee = () => {
  return useCreate<employer, employer>('employees')
  //const Create = useCreate<Branches, FormData>("branches","branches/indexMainBranch");

}

export default useCreateEmployee