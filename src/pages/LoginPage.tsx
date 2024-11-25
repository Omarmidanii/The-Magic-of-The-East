import { Box, Image, Stack, Text, Tooltip } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.jpg";
import Logo from "../assets/logo.png";
import LoginForm from "../components/Login/LoginForm";
import { RED } from "../constants";
import resizeWindow from "../services/resizeWindow";
const LoginPage = () => {
  document.dir = "lft";
  const navigate = useNavigate();
  const { width } = resizeWindow();
  return (
    <Stack
      position="relative"
      justify={"space-between"}
      width="100vw"
      height="100vh"
    >
      {
        <Box
          bgImg={login}
          bgRepeat={"no-repeat"}
          justifyContent="space-between"
          bgPosition={"center"}
          bgSize={"cover"}
          bgImage={login}
          boxSize={740}
          h={"100%"}
          width={"100%"}
          zIndex={1}
          position="absolute"
        >
          <Tooltip
            label="العودة الى الصفحة الرئيسية"
            borderRadius={20}
            textColor={"gray.200"}
            bgColor={RED}
            ml={2}
            mt={-10}
          >
            <Image
              src={Logo}
              boxSize={36}
              cursor={"pointer"}
              onClick={() => navigate("/")}
            />
          </Tooltip>
          <Box boxSize={{ md: 500, base: "70%" }} mt={16} ml={16}>
            <Text
              color={"white"}
              placeSelf={"center"}
              fontFamily="Noto"
              fontSize={18}
              sx={{
                direction: "ltr",
                textAlign: "right",
              }}
            >
              <b
                style={{
                  fontSize: 50,
                  marginRight: width > 600 ? 60 : 2,
                  color: "white",
                  fontFamily: "Beiruti",
                  lineHeight: width > 308 ? 1.5 : 1.1,
                }}
              >
                ! أهلا بعودتك
              </b>
              <br />
              الرجاء تسجيل الدخول في حالة كنت مدير الصالة فقط
            </Text>
            <LoginForm />
          </Box>{" "}
        </Box>
      }
    </Stack>
  );
};

export default LoginPage;
