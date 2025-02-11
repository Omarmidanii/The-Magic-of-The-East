import monthlyreport from "../entities/monthlyreport";
import useFetchData from "./useFetchWithoutPaj";

const useFetchMonthlyReport = (month: number, year: number) => {
  return useFetchData<monthlyreport>(`reports/monthlyreport/${month}/${year}`);
};
export default useFetchMonthlyReport;
