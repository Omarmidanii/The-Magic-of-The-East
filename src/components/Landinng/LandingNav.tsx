import { Box, HStack, Image, Tab, TabList, Tabs, Text } from "@chakra-ui/react";
import home3 from "../../assets/home3.jpg"
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const LandingNav = () => {
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
      <HStack justifyContent={'space-between'}>
        <HStack
          bgColor={"rgba(255, 255, 255, 0.3)"}
          width={"fit-content"}
          pr={2}
          ml={5}
          borderRadius={40}
        >
          <Image src={logo} boxSize={28} ml={-3} mt={-3} mb={-5} />{" "}
          <Text fontFamily="Beiruti" ml={-6} mr={1} mb={-5} pb={5} fontSize={14} color={"gray.600"}>
            <b>
              أبو عبدو
              <br /> سحر الشرق
            </b>
          </Text>
        </HStack>
      <Tabs marginLeft={-40} variant="soft-rounded" colorScheme="yellow" >
        <TabList>
          <Tab marginX={2} fontFamily="Beiruti" fontSize={20}>
            <motion.div whileHover={{ rotate: -6 }}>الصفحة الرئيسية</motion.div>
          </Tab>
          <Tab marginX={2} fontFamily="Beiruti" fontSize={20}>
            <motion.div whileHover={{ rotate: -6 }}>المفروشات</motion.div>
          </Tab>
          <Tab marginX={2} fontFamily="Beiruti" fontSize={20}>
            <motion.div whileHover={{ rotate: -6 }}>تسجيل الدخول</motion.div>
          </Tab>
        </TabList>
      </Tabs>
      <Box></Box>
      </HStack>
    </Box>
  )
}

export default LandingNav