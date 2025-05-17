import {
  Button,
  HStack,
  Icon,
  Input,
  PinInput,
  PinInputField,
  Collapse,
  Stack,
  Text,
} from "@chakra-ui/react";
import useSendpasswordCode from "../../hooks/useSendpasswordCode";
import loading from "../../assets/loading.mp4";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { PiArrowLeftBold } from "react-icons/pi";
import useCheckCode from "../../hooks/useCheckCode";
import useErrorStore from "../../stores/errorStore";
import useSendNewPassword from "../../hooks/useSendNewPassword";
interface Props {
  onClose: () => void;
}
const PasswordModal = ({ onClose }: Props) => {
  const { message } = useErrorStore();
  const sendCode = useSendpasswordCode();
  const checkCode = useCheckCode();
  const sendPassword = useSendNewPassword();

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRet, setPasswordRet] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (checkCode.isSuccess && page == 0) {
      setPassword("");
      setPasswordRet("");
      setPage((page + 1) % 3);
    }
    if (sendPassword.isSuccess && page == 1) {
      setPage((page + 1) % 3);
      setTimeout(() => {
        onClose();
      }, 2000);
      setTimeout(() => {
        setPage(0);
      }, 2500);
    }
  }, [checkCode.isPending, sendPassword.isPending]);

  return (
    <Stack
      h={230}
      mb={10}
      px={5}
      mt={-5}
      style={{ scrollbarWidth: "thin" }}
      overflow={"auto"}
      placeItems={"center"}
      placeContent={"center"}
    >
      {sendCode.isFetching ? (
        <ReactPlayer
          url={loading}
          playing
          loop
          controls={false}
          width="88px"
          height="88px"
          muted
        />
      ) : (
        <>
          <Collapse
            transition={{
              enter: { delay: 0.5, duration: 0.5 },
              exit: { duration: 0.5 },
            }}
            in={page == 0}
          >
            <Stack mb={8}>
              <Text
                fontSize={15}
                mb={1}
                px={2}
                fontFamily={"Beiruti"}
                fontWeight={"bold"}
              >
                يرجى ادخال الكود الذي تم ارساله الى ايميلك الخاص:{" "}
              </Text>
              <HStack placeContent={"center"} dir="ltr">
                <PinInput size="sm" placeholder="*" onChange={setCode}>
                  <PinInputField borderRadius={6} fontSize={18} />
                  <PinInputField borderRadius={6} fontSize={18} />
                  <PinInputField borderRadius={6} fontSize={18} />
                  <PinInputField borderRadius={6} fontSize={18} />
                  <PinInputField borderRadius={6} fontSize={18} />
                </PinInput>
              </HStack>
              <>
                {checkCode.isError && (
                  <Text placeSelf={"center"} color={"red.500"}>
                    {" "}
                    {message?.message}
                  </Text>
                )}
              </>
            </Stack>
          </Collapse>

          <Collapse
            transition={{
              enter: { delay: 0.5, duration: 0.5 },
              exit: { duration: 0.5 },
            }}
            in={page == 1}
          >
            <Stack mb={5}>
              <Text
                fontSize={15}
                mb={1}
                px={2}
                fontFamily={"Beiruti"}
                fontWeight={"bold"}
              >
                يرجى ادخال كلمة المرور الجديدة:{" "}
              </Text>
              <Input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                value={password}
                w={56}
                fontSize={13}
                placeholder="كلمة المرور"
              />
              <Input
                onChange={(e) => {
                  setPasswordRet(e.target.value);
                }}
                value={passwordRet}
                w={56}
                fontSize={13}
                placeholder="تأكيد كلمة المرور"
              />
              {(sendPassword.isError && (
                <Text placeSelf={"center"} color={"red.500"}>
                  {" "}
                  {message?.message}
                </Text>
              )) ||
                (password != passwordRet && (
                  <Text placeSelf={"center"} color={"red.500"}>
                    {" "}
                    كلمة المرور لا تطابق تاكيد كلمة المرور
                  </Text>
                ))}
            </Stack>
          </Collapse>
          <Collapse
            transition={{
              enter: { delay: 0.5, duration: 0.5 },
              exit: { duration: 0.5 },
            }}
            in={page == 2}
          >
            <Text color={"green"} fontSize={17}>
              {" "}
              تم تغيير كلمة المرور بنجاح
            </Text>
          </Collapse>

          {page < 2 && (
            <Button
              width={15}
              isDisabled={
                (Number(code) < 10000 && page == 0) ||
                (page == 1 &&
                  password != "" &&
                  passwordRet != "" &&
                  password != passwordRet)
              }
              placeSelf={"end"}
              colorScheme="blue"
              mb={-10}
              onClick={() => {
                if (page == 0) checkCode.mutate({ code: code });
                if (page == 1)
                  sendPassword.mutate({
                    password: password,
                    passwordRet: passwordRet,
                  });
              }}
            >
              <Icon as={PiArrowLeftBold} />
            </Button>
          )}
        </>
      )}
    </Stack>
  );
};

export default PasswordModal;
