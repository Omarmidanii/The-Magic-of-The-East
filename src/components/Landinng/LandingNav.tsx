import { Box, HStack, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import home3 from "../../assets/home3.jpg";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const LandingNav = () => {
  const navigate = useNavigate();

  return (
    <Box
      bgImg={home3}
      bgPosition={"center"}
      bgSize={"cover"}
      width={"inherit"}
      height={600}
      bgRepeat={"no-repeat"}
      pt={5}
    >
      <HStack justifyContent={"space-between"}>
        <Box></Box>

        <Tabs marginLeft={-40} variant="soft-rounded" colorScheme="yellow">
          <TabList>
            <Tab
              marginX={2}
              fontFamily="Beiruti"
              fontSize={20}
              onClick={() => navigate("/")}
            >
              <motion.div whileHover={{ rotate: -6 }}>
                الصفحة الرئيسية
              </motion.div>
            </Tab>
            <Tab
              marginX={2}
              fontFamily="Beiruti"
              fontSize={20}
              onClick={() => navigate("/categories")}
            >
              <motion.div whileHover={{ rotate: -6 }}>المفروشات</motion.div>
            </Tab>
            <Tab marginX={2} fontFamily="Beiruti" fontSize={20}>
              <motion.div whileHover={{ rotate: -6 }}>تسجيل الدخول</motion.div>
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
