import { Stack} from "@chakra-ui/react";
import LandingNav from "../components/Landinng/LandingNav";
import UpperPart from "../components/Landinng/UpperPart";


const LandingPage = () => {
  return (
    <Stack>
      <LandingNav />
      <UpperPart/>
    </Stack>
  );
};

export default LandingPage;
