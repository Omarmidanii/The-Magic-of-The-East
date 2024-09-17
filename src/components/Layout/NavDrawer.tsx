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
import { PiListBulletsLight } from "react-icons/pi";
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
        icon={<PiListBulletsLight />}
        onClick={onOpen}
        aria-label="Open Drawer"
      />
      <Drawer
        isOpen={isOpen}
        placement={lng == "en" ? "left" : "right"}
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader bgColor={YALLOW} textColor={RED}>
            {t("The Magic Of The East")}
          </DrawerHeader>
          <DrawerBody bgColor={YALLOW}>
            <Divider borderColor={RED} />
            <List color={"white"}>
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
                        color={RED}
                      />
                      <Button
                        fontSize={"large"}
                        variant={"link"}
                        color={"white"}
                        className="button-hover"
                        textColor={'black'}
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
                  <Icon as={MdLogout} mr={2} ml={2}  color={RED} />
                  <Button fontSize={"large"} variant={"link"} color={"white"}  className="button-hover" textColor={'black'}>
                    {t("Logout")}
                  </Button>
                </ListItem>
              </Box>
            </List>
          </DrawerBody>
          <DrawerFooter bgColor={YALLOW} borderTopWidth="1px">
            <HStack>
              <IconButton
                icon={<FaWhatsapp />}
                bgColor={YALLOW}
                aria-label="Open WhatsApp chat"
                _hover={{
                  bg : RED
                }}
                onClick={() =>
                  window.open("https://wa.me/00963938625359", "_blank")
                }
              />
              <IconButton
                icon={<FaFacebook />}
                bgColor={YALLOW}
                aria-label="Open Facebook Page"
                _hover={{
                  bg : RED
                }}
                onClick={() =>
                  window.open("https://wa.me/00963938625359", "_blank")
                }
              />
              <IconButton
                icon={<FaInstagram />}
                bgColor={YALLOW}
                aria-label="Open Instagram Page"
                _hover={{
                  bg : RED
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
