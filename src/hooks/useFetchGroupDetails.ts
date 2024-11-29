import Group from "../entities/group";
import useShow from "./useShow";

const useFetchGroupDetails = (id: number) => {
  return useShow<Group>(id, "groups");
};

export default useFetchGroupDetails;
