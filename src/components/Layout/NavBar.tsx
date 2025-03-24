import {
  HStack,
  IconButton,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import YALLOW from "../../constants";
import NavDrawer from "./NavDrawer";
import { SearchInput } from "../SearchInput";
import { Tabs } from "./Tabs";
import usePathStore from "../../stores/pathStore";

export const NavBar = () => {
  const showTabs = useBreakpointValue({ base: false, lg: true });
  const { path } = usePathStore();

  return (
    <HStack justifyContent="space-between" p={2} paddingX={5} bgColor={YALLOW}>
      <Link to="/">
        <Image
          src={logo}
          marginBottom={-6}
          marginTop={-3}
          boxSize={{ lg: "120px", base: "100px" }}
        />
      </Link>
      {showTabs && <Tabs />}
      <HStack spacing={4}>
        {(path == "/dash/customers" || path == "/dash/employers") && (
          <SearchInput />
        )}
        
        <Link to="/dash/settings">
          <IconButton
            aria-label=""
            icon={<IoMdSettings size="26px" color="white" />}
            bgColor={YALLOW}
            borderRadius={100}
            _hover={{ bg: "yellow.500" }}
          />
        </Link>
        {!showTabs && <NavDrawer />}
      </HStack>
    </HStack>
  );
};
