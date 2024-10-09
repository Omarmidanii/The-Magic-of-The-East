import {Stack} from "@chakra-ui/react";
import UpperPart from "../components/Landinng/UpperPart";
import LandingFooter from "../components/Landinng/LandingFooter";


const LandingPage = () => {
  return (
    <Stack>
      <UpperPart/>
      <LandingFooter/>
    </Stack>
  );
};

export default LandingPage;
