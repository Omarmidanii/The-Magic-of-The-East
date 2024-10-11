import { Box, Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import kitchen from "../../assets/LandingAnimation/kitchen.mp4";
import bed from "../../assets/LandingAnimation/bed.mp4";
import drawer from "../../assets/LandingAnimation/drawer.mp4";
import table from "../../assets/LandingAnimation/table.mp4";
import { RED } from "../../constants";
import whitebed from "../../assets/whitebed.png";
import redbed from "../../assets/redbed.png";
import { motion } from "framer-motion";

const UpperPart = () => {
  return (
    <Stack placeItems={"center"}>
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
        نحن في صالات{" "}
        <b style={{ color: "#D12F2F", margin: 5 }}>أبو عبدو سحر الشرق</b> نفخر
        بتقديم مجموعة واسعة
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
      <HStack mb={48} px={10} mt={5}>
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
          <Text boxShadow={`0 -1.5px 0px 0px #D32F2F`} pt={2} px={2}>
            مطابخ
          </Text>
        </Stack>
        <Stack mt={-2} placeItems={"center"}>
          <ReactPlayer
            url={table}
            playing
            loop
            controls={false}
            width="38%"
            height="9%"
            muted
          />
          <Text boxShadow={`0 -1.5px 0px 0px #D32F2F`} mt={-1} pt={2} px={2}>
            طاولات سفرة
          </Text>
        </Stack>
        <Stack mb={-1} placeItems={"center"}>
          <ReactPlayer
            url={drawer}
            playing
            loop
            controls={false}
            width="30%"
            height="9%"
            muted
          />
          <Text
            boxShadow={`0 -1.5px 0px 0px #D32F2F`}
            mt={1}
            mb={-2}
            pt={2}
            px={2}
          >
            مكتبيات
          </Text>
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
          <Text boxShadow={`0 -1.5px 0px 0px #D32F2F`} pt={2} px={2}>
            غرف نوم
          </Text>
        </Stack>
      </HStack>
      <Divider width={900} borderColor={"gray.600"} />

      <HStack ml={-58} spacing={28} mt={32}>
        <Stack placeItems={"start"} my={20}>
          <HStack mr={-96} my={-32}>
            <Box
              bgColor={"gray.200"}
              bgGradient={`linear(90deg,#BBBBBB,#DDDDDD )`} // blanchedalmond, honeydew
              px={180}
              boxSize={200}
              borderRadius={20}
            />

            <Text
              fontFamily={"Khebrat"}
              mr={-96}
              ml={5}
              pr={8}
              fontSize={40}
              color={"black"}
              as={motion.div}
              animate={{
                y: [0, -12, 0, 0, 0, 0, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
            >
              ابحث عن
              <br />
              أثاثك{" "}
            </Text>
            <Image boxSize={250} mr={-6} h={280} mt={-5} w={350} src={redbed} />
          </HStack>
          <HStack mr={-80}>
            <Box
              px={190}
              bgGradient={`linear(90deg,#990000,#770000 )`} // blanchedalmond, honeydew
              boxSize={200}
              borderRadius={20}
            />
            <Image boxSize={320} height={480} mr={-480} src={whitebed} />
            <Text
              as={motion.div}
              animate={{
                rotateZ: [0, 10, -10, 0, 0, 0, 0],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              }}
              fontSize={40}
              color={"white"}
              fontFamily={"Khebrat"}
            >
              المناسب
              <br /> بسهولة{" "}
            </Text>
          </HStack>
        </Stack>
        {
          <Box borderLeftRadius={40} mt={-72} boxSize={400} ml={-32}>
            {" "}
            <Text
              borderBottom={"2px"}
              borderColor={RED}
              fontSize={32}
              fontFamily="Beiruti"
              mb={5}
              color={"#AA0000"}
            >
              <b>اختيار الأثاث المثالي مهمة صعبة</b>
            </Text>
            <Text fontSize={24} fontFamily="Beiruti" mb={3} color={"gray.700"}>
              لذلك نقدم لكم تجربة تسوق فريدة ومريحة من منزلك مباشرة عبر موقعنا
              الإلكتروني المتطور.{" "}
            </Text>
            <Text fontSize={24} fontFamily="Beiruti" color={"gray.700"}>
              نوفر لكم امكانية عرض مفروشاتنا كافة عبر تصنيفاتها بالاضافة الى اهم
              العروض الحالية.
              <br />
              كما ونمكنكم من استخدام أدوات بحث متقدمة تمكنكم من تصفية النتائج
              حسب <b>اللون، الحجم، المادة</b>.
            </Text>
            <Text fontSize={24} fontFamily="Beiruti" my={2} color={"gray.700"}>
              هذا يعني أنكم ستتمكنون من العثور على القطع التي تناسب ذوقكم بكل
              سهولة
            </Text>
          </Box>
        }
      </HStack>

    </Stack>
  );
};

export default UpperPart;
