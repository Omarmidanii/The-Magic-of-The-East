import { Employers } from "./employer";

export default interface DataItem {
    month: string;
    employers: Employers;
    expenses: number;
  }