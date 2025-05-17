import useCreate from "./useCreate";

const useCheckCode = () => {
    return useCreate<{message:string}, {code:string}>("CheckCode");
  };
  
  export default useCheckCode;