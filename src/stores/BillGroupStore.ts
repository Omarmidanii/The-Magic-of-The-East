import { create } from "zustand";
import { Card } from "../hooks/useFetchAllClassGroups";

interface BillGroup {
  groups: Card[] | undefined;
  setGroups: (color: Card) => void;
  removeGroup: (color: Card) => void;
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
