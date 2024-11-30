import Group from "../entities/group";
import useCreate from "./useCreate";

const useCreateGroup = () => {
  return useCreate<Group, FormData>("groups");
};

export default useCreateGroup;
