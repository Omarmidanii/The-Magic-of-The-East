import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import login from "../assets/login.jpg";
import { Box, Image, Input, Stack, Text, Tooltip } from "@chakra-ui/react";
import { RED } from "../constants";
const LoginPage = () => {
  document.dir = "lft";
  const navigate = useNavigate();
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
          <Box boxSize={500} mt={16} ml={16}>
            <Text
              color={"white"}
              placeSelf={"center"}
              fontFamily="Noto"
              fontSize={18}
            >
              <b
                style={{
                  fontSize: 50,
                  marginLeft: 70,
                  color: "white",
                  fontFamily: "Beiruti",
                }}
              >
                ! أهلا بعودتك
              </b>
              <br />
              الرجاء تسجيل الدخول في حالة كنت مدير الصالة فقط
            </Text>
            <Input
              pr={8}
              sx={{
                direction: "ltr",
                textAlign: "right",
              }}
              bgColor={"gray.100"}
              placeholder="البريد الالكتروني"
              mt={16}
            />
            <Input
              pr={8}
              type="password"
              sx={{
                direction: "ltr",
                textAlign: "right",
              }}
              bgColor={"gray.100"}
              placeholder="كلمة السر"
              mt={8}
            />
          </Box>{" "}
        </Box>
      }
    </Stack>
  );
};

export default LoginPage;
