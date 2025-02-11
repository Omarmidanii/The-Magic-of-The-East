import classGroups from "../entities/classGroups";
import useFetchData from "./useFetchWithoutPaj";

const useFetchAllClassGroups = () => {
  return useFetchData<classGroups[]>("classifications/getgroups");
};

export default useFetchAllClassGroups;
