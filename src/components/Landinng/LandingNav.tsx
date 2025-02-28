import {
  Box,
  HStack,
  Icon,
  Image,
  Tab,
  TabList,
  Tabs,
  Text,
} from "@chakra-ui/react";
import home3 from "../../assets/home3.jpg";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import resizeWindow from "../../services/resizeWindow";
import { HiHome } from "react-icons/hi";
import { GiSofa } from "react-icons/gi";
import { IoLogIn } from "react-icons/io5";

const LandingNav = () => {
  const navigate = useNavigate();
  const { width } = resizeWindow();

  return (
    <Box
      bgImg={home3}
      bgPosition={"right"}
      bgSize={"cover"}
      width={"inherit"}
      height={600}
      bgRepeat={"no-repeat"}
      pt={5}
    >
      <HStack justifyContent={"space-between"}>
        {width >= 700 && <Box></Box>}

        <Tabs marginLeft={-40} variant="soft-rounded" colorScheme="yellow">
          <TabList>
            <Tab
              marginRight={width >= 700 ? 2 : 5}
              ml={width >= 700 ? 2 : -1}
              fontFamily="Beiruti"
              fontSize={20}
              onClick={() => navigate("/")}
            >
              <motion.div whileHover={{ rotate: -6 }}>
                {width >= 700 && "الصفحة الرئيسية"}
                {width < 700 && <Icon boxSize={6} mb={-1.5} as={HiHome} />}
              </motion.div>
            </Tab>
            <Tab
              marginX={width >= 700 ? 2 : -1}
              fontFamily="Beiruti"
              fontSize={20}
              onClick={() => navigate("/categories")}
            >
              <motion.div whileHover={{ rotate: -6 }}>
                {width >= 700 && "المفروشات"}
                {width < 700 && <Icon boxSize={6} mb={-1.5} as={GiSofa} />}
              </motion.div>
            </Tab>
            <Tab
              marginX={width >= 700 ? 2 : -1}
              fontFamily="Beiruti"
              fontSize={20}
              onClick={() => navigate("/login")}
            >
              <motion.div whileHover={{ rotate: -6 }}>
                {width >= 700 && "تسجيل الدخول"}
                {width < 700 && <Icon boxSize={6} mb={-1.5} as={IoLogIn} />}
              </motion.div>
            </Tab>
          </TabList>
        </Tabs>
        <HStack
          bgColor={"rgba(255, 255, 255, 0.3)"}
          width={"fit-content"}
          pr={2}
          ml={5}
          borderRadius={40}
        >
          <Text
            fontFamily="Beiruti"
            ml={-7}
            mr={3}
            mb={-6}
            pb={5}
            fontSize={14}
            color={"gray.600"}
          >
            <b>
              أبو عبدو
              <br /> سحر الشرق
            </b>
          </Text>
          <Image src={logo} boxSize={28} ml={-3} mt={-3} mb={-5} />{" "}
        </HStack>
      </HStack>
    </Box>
  );
};

export default LandingNav;
