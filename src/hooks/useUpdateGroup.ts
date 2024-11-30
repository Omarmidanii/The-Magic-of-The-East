import Group from "../entities/group";
import useUpdate from "./useUpdate";

const useUpdateGroup = (id: number) => {
  return useUpdate<Group, FormData>(id, "groups");
};

export default useUpdateGroup;
