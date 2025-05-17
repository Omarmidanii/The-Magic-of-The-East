import { Box, Icon, Input, Stack, Text } from "@chakra-ui/react";
import landingInfo from "../../landingInfo.json";
import resizeWindow from "../../services/resizeWindow";
import { PiPlusCircleFill } from "react-icons/pi";
import { useState } from "react";

const LandingSettings = () => {
  const { width } = resizeWindow();
  const OnAddNum = () => {
    if (num[num.length - 1] != "") setNum([...num, ""]);
  };
  const onchangeNum = (id: number, newNum: string) => {
    setNum(num.map((v, index) => (id === index ? newNum : v)));
  };
  const [num, setNum] = useState(landingInfo.whatsapp);
  return (
    <Stack mt={10} spacing={7} w={Math.min(width, 600)} pl={10} pr={3}>
      <Box>
        <Text fontSize={18} mb={1} fontFamily={"Beiruti"} fontWeight={"bold"}>
          رابط صفحة الفيس بوك:
        </Text>
        <Input value={landingInfo.facebook} />
      </Box>
      <Box>
        <Text fontSize={18} mb={1} fontFamily={"Beiruti"} fontWeight={"bold"}>
          رابط صفحة الانستاغرام:{" "}
        </Text>
        <Input value={landingInfo.instagram} />
      </Box>
      <Box>
        <Text fontSize={18} mb={1} fontFamily={"Beiruti"} fontWeight={"bold"}>
          رقم الهاتف:{" "}
        </Text>
        <Input value={landingInfo.phone} />
      </Box>

      <Box>
        <Text fontSize={18} mb={1} fontFamily={"Beiruti"} fontWeight={"bold"}>
          ارقام الجوال:{" "}
        </Text>
        {num.map((v, index) => (
          <Input
            onChange={(e) => onchangeNum(index, e.target.value)}
            my={3}
            ml={index % 3 == 2 ? 0 : 2}
            mr={index % 3 == 0 ? 0 : 2}
            sx={{ direction: "ltr" }}
            w={170}
            value={v}
          />
        ))}
        <Icon
          onClick={OnAddNum}
          borderRadius={50}
          _hover={{ color: "gray" }}
          as={PiPlusCircleFill}
          boxSize={8}
          color={"gray.400"}
          mb={-2}
          mx={4}
          cursor={"pointer"}
        />
      </Box>
    </Stack>
  );
};

export default LandingSettings;
