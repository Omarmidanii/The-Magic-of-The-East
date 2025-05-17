import useFetchData from "./useFetchWithoutPaj";

const useSendpasswordCode = () => {
  return useFetchData<"">("ForgotPassword");
};

export default useSendpasswordCode;
