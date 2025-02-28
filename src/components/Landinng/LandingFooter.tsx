import { Divider, HStack, Link, Stack, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import location from "../../assets/LandingFooter/location.mp4";
import facebook from "../../assets/LandingFooter/facebook.mp4";
import whatsapp from "../../assets/LandingFooter/whatsapp.mp4";
import instagram from "../../assets/LandingFooter/instagram.mp4";
import phone from "../../assets/LandingFooter/phone.mp4";
import resizeWindow from "../../services/resizeWindow";

const LandingFooter = () => {
  const { width } = resizeWindow();
  return (
    <Stack>
      {" "}
      <Divider
        my={10}
        width={width}
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
      <Stack
        direction={width >= 900 ? "row" : "column"}
        justifyContent={width >= 900 ? "space-evenly" : ""}
        mb={16}
        mt={width >= 900 ? -24 : 0}
      >
        <HStack
          //ml={-48}mr={20}
          mt={width < 900 ? -28 : 0}
        >
          <ReactPlayer
            url={location}
            playing
            loop
            controls={false}
            width={135}
            muted
          />{" "}
          <Text mr={-10} mb={-2}>
            جرمانا - آخر الخط - ساحة النجوم <br /> -تجاه ساحة عصام زهر الدين
          </Text>
        </HStack>
        <HStack mt={width < 900 ? -72 : 0}>
          <ReactPlayer
            url={location}
            playing
            loop
            controls={false}
            width={135}
            muted
          />{" "}
          <Text mr={-10} mb={-2}>
            جرمانا - آخر الخط - ساحة النجوم <br /> -تجاه ساحة عصام زهر الدين
          </Text>
        </HStack>
      </Stack>
      {
        <Stack
          alignItems={width >= 900 ? "center" : "start"}
          //pr={32} mb={20}
        >
          <Stack
            spacing={width >= 900 ? 20 : ""}
            direction={width >= 900 ? "row" : "column"}
            mt={width >= 900 ? -52 : ""}
            mb={-4}
          >
            <HStack
              //ml={-32} mr={28}
              mt={width < 900 ? -52 : 0}
            >
              <ReactPlayer
                url={facebook}
                playing
                loop
                controls={false}
                width={100}
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
            <HStack mt={width < 900 ? -64 : 0} mb={-1}>
              <ReactPlayer
                url={whatsapp}
                playing
                loop
                controls={false}
                width={90}
                muted
              />{" "}
              <Text
                mr={-1}
                color={"blue.500"}
                width={width < 900 ? width / 1.5 : "auto"}
              >
                <Link>044 694 958 963+ </Link>{" "}
                <text style={{ color: "black" }}> / </text>{" "}
                <Link>660 116 998 963+ </Link>
                <text style={{ color: "black" }}> / </text>{" "}
                <Link>759 677 938 963+ </Link>
              </Text>
            </HStack>
          </Stack>
          <Stack
            direction={width >= 900 ? "row" : "column"}
            spacing={width >= 900 ? 20 : ""}
            mt={width >= 900 ? -64 : ""}
          >
            <HStack
              mb={-1}
              //ml={-32} mr={28}
              mt={width < 900 ? -60 : 0}
            >
              <ReactPlayer
                url={instagram}
                playing
                loop
                controls={false}
                width={100}
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
            <HStack mt={width < 900 ? -64 : 0}>
              <ReactPlayer
                url={phone}
                playing
                loop
                controls={false}
                width={80}
                muted
              />{" "}
              <Link mr={-1} color={"blue.500"}>
                0010 566 011
              </Link>
            </HStack>
          </Stack>
        </Stack>
      }{" "}
    </Stack>
  );
};

export default LandingFooter;
