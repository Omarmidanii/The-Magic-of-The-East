import details from "./details";
import { Employers } from "./employer";

export default interface DataItem {
  month: string;
  employers: Employers;
  expenses: number;
  expensesDetails:details[];
  bills: number;
  billsDetails: details[];
  rent: number;
  rentDetails: details[];
}
