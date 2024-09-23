import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Icon,
  IconButton,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "./Tabs";
import { PiListBulletsBold, PiListBulletsLight } from "react-icons/pi";
import { MdLogout } from "react-icons/md";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import YALLOW, { RED } from "../../constants";
import { useTranslation } from "react-i18next";
import useLanguage from "../../stores/LanguageStore";
function NavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const { t } = useTranslation();
  const lng = useLanguage((s) => s.lng);
  return (
    <>
      <IconButton
        ref={btnRef}
        bgColor={YALLOW}
        icon={<PiListBulletsBold size={24} color="white" />}
        onClick={onOpen}
        borderRadius={100}
        _hover={{ bg: "yellow.500" }}
        aria-label="Open Drawer"
      />
      <Drawer
        isOpen={isOpen}
        placement={lng == "en" ? "left" : "right"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent borderRadius={10}>
          <DrawerCloseButton />
          <DrawerHeader
            paddingTop={4}
            borderTopRadius={10}
            paddingRight={12}
            bgColor={"gray.100"}
            textColor={RED}
          >
            {t("The Magic Of The East")}
          </DrawerHeader>
          <DrawerBody bgColor={"gray.100"}>
            <Divider borderColor={RED} marginBottom={5} />
            <List color={"white"} spacing={-4}>
              {Object.entries(Tab).map(([name, value], index) => (
                <Box
                  key={index}
                  pb={3}
                  _last={{ borderBottom: "none" }}
                  _hover={{
                    ".button-hover": {
                      textColor: RED,
                      transform: "scale(1.3)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  <Link to={`/${value.enName}`}>
                    <ListItem textAlign={lng == "en" ? "left" : "right"} py={4}>
                      <Icon
                        as={value.icon}
                        mr={2}
                        ml={2}
                        marginBottom={-1}
                        color={RED}
                      />
                      <Button
                        marginX={1}
                        fontSize={"large"}
                        variant={"link"}
                        color={"white"}
                        className="button-hover"
                        textColor={"black"}
                      >
                        {t(name)}
                      </Button>
                    </ListItem>
                  </Link>
                </Box>
              ))}
              <Box
                pb={3}
                _hover={{
                  ".button-hover": {
                    textColor: RED,
                    transform: "scale(1.3)",
                    transition: "transform 0.3s ease-in-out",
                  },
                }}
              >
                <ListItem textAlign={lng == "en" ? "left" : "right"} py={4}>
                  <Icon
                    as={MdLogout}
                    mr={2}
                    ml={2}
                    marginBottom={-1}
                    color={RED}
                  />
                  <Button
                    fontSize={"large"}
                    variant={"link"}
                    color={"white"}
                    className="button-hover"
                    textColor={"black"}
                  >
                    {t("Logout")}
                  </Button>
                </ListItem>
              </Box>
            </List>
          </DrawerBody>
          <DrawerFooter
            bgColor={YALLOW}
            borderBottomRadius={10}
            borderTopWidth="1px"
            height={14}
          >
            <HStack spacing={-4}>
              <IconButton
                icon={<FaWhatsapp size={20} />}
                boxSize={8}
                bgColor={YALLOW}
                aria-label="Open WhatsApp chat"
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={() =>
                  window.open("https://wa.me/00963938625359", "_blank")
                }
              />
              <IconButton
                icon={<FaFacebook size={18} />}
                boxSize={8}
                bgColor={YALLOW}
                aria-label="Open Facebook Page"
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={() =>
                  window.open("https://wa.me/00963938625359", "_blank")
                }
              />
              <IconButton
                icon={<FaInstagram size={20} />}
                boxSize={8}
                bgColor={YALLOW}
                aria-label="Open Instagram Page"
                _hover={{
                  bg: "yellow.500",
                }}
                onClick={() =>
                  window.open("https://wa.me/00963938625359", "_blank")
                }
              />
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
export default NavDrawer;
