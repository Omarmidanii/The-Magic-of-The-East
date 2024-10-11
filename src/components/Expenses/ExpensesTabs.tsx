import { Box, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { RED } from "../../constants";
import useExpensesTab from "../../stores/ExpensesTabStore";

const MotionBox = motion(Box);

const ExpensesTabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const { setTab } = useExpensesTab();
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setTab(tab);
    localStorage.removeItem("ExpensesTab");
    localStorage.setItem("ExpensesTab", tab);
    console.log(tab);
  };
  return (
    <Flex justify="center" pt={10} pb={8}>
      <MotionBox
        as={Button}
        onClick={() => handleTabClick("tab1")}
        bg={activeTab === "tab1" ? RED : "gray.200"}
        _hover={{ bg: RED }}
        color={activeTab === "tab1" ? "white" : "black"}
        animate={{
          x: activeTab === "tab1" ? -50 : -180,
          scale: activeTab === "tab1" ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
        zIndex={activeTab === "tab1" ? 1 : 0}
        fontSize={14}
      >
        مصاريف الصالات
        <br />و اجار العمال
      </MotionBox>
      <MotionBox
        as={Button}
        onClick={() => handleTabClick("tab2")}
        _hover={{ bg: RED }}
        bg={activeTab === "tab2" ? RED : "gray.200"}
        color={activeTab === "tab2" ? "white" : "black"}
        animate={{
          x: activeTab === "tab2" ? 80 : 210,
          scale: activeTab === "tab2" ? 1.2 : 1,
        }}
        transition={{ duration: 0.5 }}
        zIndex={activeTab === "tab2" ? 1 : 0}
        fontSize={14}
      >
        {" "}
        اجار الصالات
        <br />و الضرائب
      </MotionBox>
    </Flex>
  );
};

export default ExpensesTabs;
