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
import resizeWindow from "../../services/resizeWindow";

const UpperPart = () => {
  const { width } = resizeWindow();
  return (
    <Stack placeItems={"center"}>
      {width >= 700 ? (
        <Text mt={40} placeSelf={"center"} fontFamily="Khebrat" fontSize={40}>
          صالات مفروشات سحر الشرق
        </Text>
      ) : (
        <>
          <Text mt={40} placeSelf={"center"} fontFamily="Khebrat" fontSize={52}>
            سحر الشرق
          </Text>
          <Text mt={-2} placeSelf={"center"} fontFamily="Khebrat" fontSize={24}>
            صالات مفروشات
          </Text>
        </>
      )}
      <Text
        p={3}
        textAlign={"center"}
        color={"gray.600"}
        fontSize={26}
        mt={16}
        fontFamily="Beiruti"
        lineHeight={1.4}
      >
        نحن في صالات{" "}
        <b style={{ color: "#D12F2F", marginLeft: 5, marginRight: 5 }}>
          أبو عبدو سحر الشرق
        </b>{" "}
        نفخر بتقديم مجموعة واسعة
      </Text>
      <Text
        p={3}
        lineHeight={1.4}
        textAlign={"center"}
        color={"gray.600"}
        fontSize={26}
        my={2}
        fontFamily="Beiruti"
      >
        من المفروشات الفاخرة التي تجمع بين الأناقة والراحة
      </Text>
      <Text
        p={3}
        mb={20}
        lineHeight={1.4}
        textAlign={"center"}
        color={"gray.600"}
        fontSize={26}
        fontFamily="Beiruti"
      >
        {" "}
        سواء كنت تبحث عن تجديد غرفة المعيشة، أو إضافة لمسة جمالية لغرفة النوم،
        أو تجهيز مكتبك بأثاث عملي وأنيق
      </Text>
      <Stack mb={40} px={10} mt={5} direction={width >= 700 ? "row" : "column"}>
        <HStack>
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
            <Text boxShadow={`0 -1.5px 0px 0px #D32F2F`} pt={2} px={3}>
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
            <Text
              boxShadow={`0 -1.5px 0px 0px #D32F2F`}
              mt={-1}
              pt={2}
              px={2.5}
            >
              طاولات سفرة
            </Text>
          </Stack>
        </HStack>
        <HStack>
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
              px={3}
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
            <Text boxShadow={`0 -2px 0px 0px #D32F2F`} pt={2} px={3}>
              غرف نوم
            </Text>
          </Stack>
        </HStack>
      </Stack>
      <Divider width={width / 3} borderColor={"gray.600"} />

      {
        <Stack
          justifyContent={"space-between"}
          direction={width >= 700 ? "row" : "column"}
          spacing={28}
          mt={16}
        >
          {width >= 700 && <Box width={width / 6}></Box>}
          <Stack placeItems={'center'}>
            <HStack mr={width >= 700 ? -96 : 5}>
              <Box
                bgColor={"gray.200"}
                bgGradient={`linear(90deg,#BBBBBB,#DDDDDD )`} // blanchedalmond, honeydew
                px={width >= 700 ? 180 : width > 500 ? 155 : width / 2.6}
                boxSize={200}
                borderRadius={20}
              />

              <Text
                fontFamily={"Khebrat"}
                mr={width >= 700 ? -96 : width<400?-72:-80}
                ml={width >= 700 ? 5 : 8}
                pr={width >= 700 ? 8 : 5}
                fontSize={width >= 700 ? 40 : 32}
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
              <Image
                boxSize={width >= 700 ? 250 : 180}
                mr={-6}
                ml={width >= 700 ? 12 : width<400?3:5}
                h={280}
                mt={-5}
                w={width >= 700 ? 350 : width<400?250:280}
                src={redbed}
              />
            </HStack>
            <HStack mr={width >= 700 ? -80 : 10} mt={-24}>
              <Box
                px={width >= 700 ? 190 : width >= 500 ? 170 : width / 2.5}
                bgGradient={`linear(90deg,#990000,#770000 )`} // blanchedalmond, honeydew
                boxSize={200}
                borderRadius={20}
              />
              <Image
                boxSize={width >= 700 ? 320 :width<400?240: 260}
                height={480}
                mr={width >= 700 ? -480 : width<400?-370:-390}
                src={whitebed}
              />
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
                fontSize={width >= 700 ? 40 : 32}
                color={"white"}
                fontFamily={"Khebrat"}
              >
                المناسب
                <br /> بسهولة{" "}
              </Text>
            </HStack>
          </Stack>
          {
            <Box
              borderLeftRadius={40}
              mt={width >= 700 ? 10 : -28}
              boxSize={width >= 700 ? 400 : width}
              px={5}
            >
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
              <Text
                textAlign={"center"}
                fontSize={24}
                fontFamily="Beiruti"
                mb={3}
                lineHeight={1.45}
                color={"gray.700"}
              >
                لذلك نقدم لكم تجربة تسوق فريدة ومريحة من منزلك مباشرة عبر موقعنا
                الإلكتروني المتطور.{" "}
              </Text>
              <Text
                textAlign={"center"}
                fontSize={24}
                fontFamily="Beiruti"
                lineHeight={1.45}
                color={"gray.700"}
              >
                نوفر لكم امكانية عرض مفروشاتنا كافة عبر تصنيفاتها بالاضافة الى
                اهم العروض الحالية.
                <br />
                كما ونمكنكم من استخدام أدوات بحث متقدمة تمكنكم من تصفية النتائج
                حسب <b>اللون، الحجم، المادة</b>.
              </Text>
              <Text
                lineHeight={1.45}
                textAlign={"center"}
                fontSize={24}
                fontFamily="Beiruti"
                my={2}
                color={"gray.700"}
              >
                هذا يعني أنكم ستتمكنون من العثور على القطع التي تناسب ذوقكم بكل
                سهولة
              </Text>
            </Box>
          }
        </Stack>
      }
    </Stack>
  );
};

export default UpperPart;
