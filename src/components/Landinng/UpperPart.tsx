import { HStack, Stack, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import kitchen from "../../assets/LandingAnimation/kitchen.mp4";
import bed from "../../assets/LandingAnimation/bed.mp4";
import drawer from "../../assets/LandingAnimation/drawer.mp4";
import table from "../../assets/LandingAnimation/table.mp4";

const UpperPart = () => {
  return (
    <Stack placeItems={"center"} >
      <Text mt={40} placeSelf={"center"} fontFamily="Khebrat" fontSize={40}>
        صالات مفروشات سحر الشرق
      </Text>
      <Text
        placeSelf={"center"}
        color={"gray.600"}
        fontSize={26}
        mt={16}
        fontFamily="Beiruti"
      >
        نحن في صالات <b>أبو عبدو سحر الشرق</b> نفخر بتقديم مجموعة واسعة
      </Text>
      <Text
        placeSelf={"center"}
        color={"gray.600"}
        fontSize={26}
        fontFamily="Beiruti"
      >
        من المفروشات الفاخرة التي تجمع بين الأناقة والراحة
      </Text>
      <Text
        mb={20}
        placeSelf={"center"}
        color={"gray.600"}
        fontSize={26}
        fontFamily="Beiruti"
      >
        {" "}
        سواء كنت تبحث عن تجديد غرفة المعيشة، أو إضافة لمسة جمالية لغرفة النوم،
        أو تجهيز مكتبك بأثاث عملي وأنيق
      </Text>
      <HStack mb={32} px={10} mt={24}>
        <Stack placeItems={"center"}>
          <ReactPlayer
            url={kitchen}
            playing
            loop
            controls={false}
            width="35%"
            height="9%"
            muted
          />
          <Text>مطابخ</Text>
        </Stack>
        <Stack placeItems={"center"}>
          <ReactPlayer
            url={table}
            playing
            loop
            controls={false}
            width="38%"
            height="9%"
            muted
          />
          <Text>طاولات سفرة</Text>
        </Stack>
        <Stack placeItems={"center"}>
          <ReactPlayer
            url={drawer}
            playing
            loop
            controls={false}
            width="30%"
            height="9%"
            muted
          />
          <Text>مكتبيات</Text>
        </Stack>
        <Stack placeItems={"center"}>
          <ReactPlayer
            url={bed}
            playing
            loop
            controls={false}
            width="35%"
            height="9%"
            muted
          />
          <Text>غرف نوم</Text>
        </Stack>
      </HStack>
    </Stack>
  );
};

export default UpperPart;
