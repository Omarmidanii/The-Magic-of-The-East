import { Stack } from "@chakra-ui/react";
import LandingNav from "../components/Landinng/LandingNav";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  document.dir = "rtl";
  return (
    <Stack>
      <LandingNav />
      <Outlet/>
    </Stack>
  );
};

export default HomePage;
