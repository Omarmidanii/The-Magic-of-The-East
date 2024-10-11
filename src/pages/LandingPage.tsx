import {Stack} from "@chakra-ui/react";
import UpperPart from "../components/Landinng/UpperPart";
import LandingFooter from "../components/Landinng/LandingFooter";
import ShowItems from "../components/Landinng/ShowItems";
import { items } from "../components/Items/ItemsGrid";


const LandingPage = () => {
  return (
    <Stack>
      <UpperPart/>
      <ShowItems items={items}/>
      <LandingFooter/>
    </Stack>
  );
};

export default LandingPage;
