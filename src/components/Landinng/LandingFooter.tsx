import { Divider, HStack, Link, Stack, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import location from "../../assets/LandingFooter/location.mp4";
import facebook from "../../assets/LandingFooter/facebook.mp4";
import whatsapp from "../../assets/LandingFooter/whatsapp.mp4";
import instagram from "../../assets/LandingFooter/instagram.mp4";
import phone from "../../assets/LandingFooter/phone.mp4";

const LandingFooter = () => {
  return (
    <Stack>
      {" "}
      <Divider
        my={10}
        width={1000}
        placeSelf={"center"}
        borderColor={"gray.600"}
      />
      <Text
        placeSelf={"center"}
        boxShadow={`0 1.5px 0px 0px gray`}
        pb={2}
        px={3}
        fontFamily="Beiruti"
        fontSize={32}
        mb={8}
      >
        <b>معلومات حولنا</b>
      </Text>
      <HStack justifyContent={"space-evenly"} mb={16} pr={72}>
        <HStack ml={-48}mr={20}>
          <ReactPlayer
            url={location}
            playing
            loop
            controls={false}
            width="13%"
            height="9%"
            muted
          />{" "}
          <Text mr={-6} mb={-2}>
            جرمانا - آخر الخط - ساحة النجوم <br /> -تجاه ساحة عصام زهر الدين
          </Text>
        </HStack>
        <HStack>
          <ReactPlayer
            url={location}
            playing
            loop
            controls={false}
            width="13%"
            height="9%"
            muted
          />{" "}
          <Text mr={-6} mb={-2}>
            جرمانا - آخر الخط - ساحة النجوم <br /> -تجاه ساحة عصام زهر الدين
          </Text>
        </HStack>
      </HStack>
      <Stack alignItems={"start"} pr={32} mb={20}>
        <HStack mb={-4}>
          <HStack  ml={-32} mr={28}>
            <ReactPlayer
              url={facebook}
              playing
              loop
              controls={false}
              width="5.8%"
              height="9%"
              muted
            />{" "}
            <Link mr={-1} color={"blue.500"}>
              <a
                href="https://www.facebook.com/profile.php?id=100073318590837"
                target="_blank"
              >
                https://www.facebook.com/profile.php?id=100073318590837
              </a>
            </Link>
          </HStack>
          <HStack mb={-1}>
            <ReactPlayer
              url={whatsapp}
              playing
              loop
              controls={false}
              width="6%"
              height="9%"
              muted
            />{" "}
            <Text mr={-1} color={"blue.500"}>
              <Link>044 694 958 963+ </Link>{" "}
              <text style={{ color: "black" }}> / </text>{" "}
              <Link>660 116 998 963+ </Link>
              <text style={{ color: "black" }}> / </text>{" "}
              <Link>759 677 938 963+ </Link>
            </Text>
          </HStack>
        </HStack>
        <HStack>
          <HStack mb={-1} ml={-32} mr={28}>
            <ReactPlayer
              url={instagram}
              playing
              loop
              controls={false}
              width="4.8%"
              height="9%"
              muted
            />{" "}
            <Link mr={-1} color={"blue.500"}>
              <a
                href="https://www.facebook.com/profile.php?id=100073318590837"
                target="_blank"
              >
                https://www.facebook.com/profile.php?id=100073318590837
              </a>
            </Link>
          </HStack>
          <HStack >
            <ReactPlayer
              url={phone}
              playing
              loop
              controls={false}
              width="11%"
              height="9%"
              muted
            />{" "}
            <Link mr={-1} color={"blue.500"}>
              0010 566 011
            </Link>
          </HStack>
        </HStack>
      </Stack>
    </Stack>
  );
};

export default LandingFooter;
