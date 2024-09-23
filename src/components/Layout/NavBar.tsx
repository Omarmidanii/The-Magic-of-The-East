import {
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import YALLOW, { RED } from "../../constants";
import NavDrawer from "./NavDrawer";
import { SearchInput } from "../SearchInput";
import { Tabs } from "./Tabs";

export const NavBar = () => {
  const showTabs = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack justifyContent="space-between" p={2} bgColor={YALLOW}>
      <Link to="/Home">
        <Image src={logo} marginBottom={-6} marginTop={-3} boxSize={{ lg: "120px", base: "100px" }} />
      </Link>
      {!showTabs && <NavDrawer />}
      {showTabs && <Tabs />}
      <SearchInput />
      <Link to="/settings">
        <IconButton
          aria-label=""
          icon={<IoMdSettings size="30px" color="white" />}
          bgColor={YALLOW}
          _hover={{ bg: RED }}
        />
      </Link>
    </HStack>
  );
};
