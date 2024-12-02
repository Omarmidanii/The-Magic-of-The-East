import { create } from "zustand";
import { Card } from "../hooks/useFetchAllClassGroups";

interface BillGroup {
  groups: { group: Card; count: number }[] | undefined;
  setGroups: (group: Card) => void;
  changeCount: (newcount: number, index: number) => void;
  removeGroup: (Removedgroup: Card) => void;
}

const useBillGroupStore = create<BillGroup>()((set) => ({
  groups: undefined,
  setGroups: (group) =>
    set((state) => ({
      groups: state.groups
        ? [...state.groups, { group: group, count: 1 }]
        : [{ group: group, count: 1 }],
    })),
  changeCount: (newcount, id) =>
    set((state) => ({
      groups: state.groups?.map((group) =>
        group.group.id === id ? { ...group, count: newcount } : group
      ),
    })),

  removeGroup: (Removedgroup) =>
    set((state) => ({
      groups: state.groups?.filter(
        (group) => group.group.id !== Removedgroup.id
      ),
    })),
}));

export default useBillGroupStore;
