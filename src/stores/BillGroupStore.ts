import { create } from "zustand";
import Group from "../entities/group";

interface BillGroup {
  groups: Group[] | undefined;
  setGroups: (color: Group) => void;
  removeGroup: (color: Group) => void;
}

const useBillGroupStore = create<BillGroup>()((set) => ({
  groups: undefined,
  setGroups: (group) =>
    set((state) => ({
      groups: state.groups ? [...state.groups, group] : [group],
    })),
  removeGroup: (Removedgroup) =>
    set((state) => ({
      groups: state.groups?.filter((group) => group.name !== Removedgroup.name),
    })),
}));

export default useBillGroupStore;
