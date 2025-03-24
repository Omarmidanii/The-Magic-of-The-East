import { HStack, Link, Stack, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import location from "../../assets/LandingFooter/location.mp4";
import facebook from "../../assets/LandingFooter/facebook.mp4";
import whatsapp from "../../assets/LandingFooter/whatsapp.mp4";
import instagram from "../../assets/LandingFooter/instagram.mp4";
import phone from "../../assets/LandingFooter/phone.mp4";
import resizeWindow from "../../services/resizeWindow";
import landingInfo from "../../landingInfo.json";

const LandingFooter = () => {
  const { width } = resizeWindow();
  return (
    <Stack>
      {" "}
      <Text
        placeSelf={"center"}
        boxShadow={`0 1.5px 0px 0px gray`}
        pb={2}
        px={3}
        fontFamily="Beiruti"
        fontSize={32}
      >
        <b>معلومات حولنا</b>
      </Text>
      <Stack
        direction={width >= 900 ? "row" : "column"}
        justifyContent={width >= 900 ? "space-evenly" : ""}
        mb={24}
        mt={10}
      >
        <HStack>
          <ReactPlayer
            url={location}
            playing
            loop
            controls={false}
            width={135}
            height={90}
            muted
          />{" "}
          <Text mr={-10} mb={-2}>
            جرمانا - آخر الخط - ساحة النجوم <br /> -تجاه ساحة عصام زهر الدين
          </Text>
        </HStack>
        <HStack>
          <ReactPlayer
            url={location}
            playing
            loop
            controls={false}
            width={135}
            height={90}
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
            mb={0}
          >
            <HStack
              w={width < 700 ? width : "auto"}
              //ml={-32} mr={28}
            >
              <ReactPlayer
                url={facebook}
                playing
                loop
                controls={false}
                width={90}
                height={90}
                muted
              />{" "}
              <Link mr={-1} color={"blue.500"} cursor={"pointer"}>
                <a href={landingInfo.facebook} target="_blank">
                  {landingInfo.facebook}
                </a>
              </Link>
            </HStack>
            <HStack mb={-1} w={width < 700 ? width : "auto"}>
              <ReactPlayer
                url={whatsapp}
                playing
                loop
                controls={false}
                width={90}
                height={90}
                muted
              />{" "}
              <Text
                mr={-1}
                color={"blue.500"}
                width={width < 900 ? width / 1.5 : "auto"}
                sx={{
                  direction: "ltr",
                  textAlign: "right",
                }}
              >
                {landingInfo.whatsapp.map((num) => (
                  <>
                    <Link>{num}</Link>{" "}
                    <text style={{ color: "black" }}> / </text>
                  </>
                ))}
              </Text>
            </HStack>
          </Stack>
          <Stack
            direction={width >= 900 ? "row" : "column"}
            spacing={width >= 900 ? 20 : ""}
            mt={width >= 900 ? 0 : ""}
          >
            <HStack
              mb={-1}
              //ml={-32} mr={28}
              w={width < 700 ? width : "auto"}
            >
              <ReactPlayer
                url={instagram}
                playing
                loop
                controls={false}
                width={85}
                height={85}
                muted
              />{" "}
              <Link mr={-1} color={"blue.500"}>
                <a href={landingInfo.facebook} target="_blank">
                  {landingInfo.facebook}
                </a>
              </Link>
            </HStack>
            <HStack>
              <ReactPlayer
                url={phone}
                playing
                loop
                controls={false}
                width={80}
                height={80}
                muted
              />{" "}
              <Link
                mr={-1}
                color={"blue.500"}
                sx={{
                  direction: "ltr",
                  textAlign: "right",
                }}
              >
                {landingInfo.phone}
              </Link>
            </HStack>
          </Stack>
        </Stack>
      }{" "}
    </Stack>
  );
};

export default LandingFooter;
