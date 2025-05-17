import useCreate from "./useCreate";

const useSendNewPassword = () => {
    return useCreate<'', {password:string, passwordRet:string}>("ChangePassword");
  };
  
  export default useSendNewPassword;