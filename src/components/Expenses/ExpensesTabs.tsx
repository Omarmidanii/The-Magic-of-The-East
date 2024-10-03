import { Box, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const MotionBox = motion(Box);

const ExpensesTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <Flex justify="center" p={4} height="100vh">
      <MotionBox
        as={Button}
        onClick={() => handleTabClick("tab1")}
        bg={activeTab === "tab1" ? "blue.500" : "gray.200"}
        _hover={{ bg: "blue.500" }}
        color={activeTab === "tab1" ? "white" : "black"}
        animate={{
          x: activeTab === "tab1" ? 0 : -260,
          scale: activeTab === "tab1" ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
        zIndex={activeTab === "tab1" ? 1 : 0}
        fontSize={14}
      >
        {activeTab === "tab1" ? (
          <>
            مصاريف الصالات
            <br />و اجار العمال
          </>
        ) : (
          <BsArrowRight />
        )}
      </MotionBox>
      <MotionBox
        as={Button}
        onClick={() => handleTabClick("tab2")}
        _hover={{ bg: "blue.500" }}
        bg={activeTab === "tab2" ? "blue.500" : "gray.200"}
        color={activeTab === "tab2" ? "white" : "black"}
        animate={{
          x: activeTab === "tab2" ? 0 : 260,
          scale: activeTab === "tab2" ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
        zIndex={activeTab === "tab2" ? 1 : 0}
        fontSize={14}
      >
        {activeTab === "tab2" ? (
          <>
            اجار الصالات
            <br />و الضرائب
          </>
        ) : (
          <BsArrowLeft />
        )}
      </MotionBox>
    </Flex>
  );
};

export default ExpensesTabs;
