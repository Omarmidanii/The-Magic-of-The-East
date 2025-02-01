import useFetchData from "./useFetchWithoutPaj";

const useFetchLastYearEarnings = () => {
  return useFetchData<String>(`reports/lastyearearnings`);
};

export default useFetchLastYearEarnings;
