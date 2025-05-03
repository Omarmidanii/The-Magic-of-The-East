import { Box, Grid, GridItem, Image, Show, Text } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import LandingSettings from "../components/SettingPage/LandingSettings";
import resizeWindow from "../services/resizeWindow";
import useFetchData from "../hooks/useFetchWithoutPaj";

export const SettingPage = () => {
  const { height } = resizeWindow();
  useFetchData<{ name: string; value: string }[]>(`settings`);
  return (
    <Box overflowY={"auto"} overflowX={"hidden"}>
      <Grid
        templateAreas={{
          lg: `"side main"`,
          base: `"main"`,
        }}
        templateRows={{ lg: "auto 1fr" }}
        templateColumns={{ lg: "1.5fr 3fr" }}
      >
        <Show above="lg">
          <GridItem area={"side"} alignItems={"center"}>
            <Image src={logo} />
          </GridItem>
        </Show>

        <GridItem area={"main"} py={20} px={5}>
          <Box maxH={height - 200} overflowY={"auto"}>
            <Text fontSize={28} fontFamily={"Khebrat"} color={"red.500"}>
              {" "}
              صالات مفروشات سحر الشرق
            </Text>
            <Text
              fontSize={18}
              fontFamily={"Beiruti"}
              mr={3}
              color={"#666666"}
              fontWeight={"bold"}
            >
              {" "}
              diaajomaa1234@gmail.com
            </Text>
            <LandingSettings />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
