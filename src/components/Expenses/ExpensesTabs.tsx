import {
  Box,
  Button,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { RED } from "../../constants";
import useExpensesTab from "../../stores/ExpensesTabStore";
import ExpensesTable from "./ExpensesTable";

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
    <Tabs pt={10}>
      <TabList pb={2} justifyContent="center">
        <Tab
          bgColor={"transparent"}
          sx={{
            outline: "none",
            border: "none",
          }}
        >
          <MotionBox
            as={Button}
            onClick={() => handleTabClick("tab1")}
            bg={activeTab === "tab1" ? RED : "gray.200"}
            _hover={{ bg: RED }}
            color={activeTab === "tab1" ? "white" : "black"}
            animate={{
              x: activeTab === "tab1" ? -60 : -200,
              scale: activeTab === "tab1" ? 1.2 : 1,
            }}
            transition={{ duration: 0.5 }}
            zIndex={activeTab === "tab1" ? 1 : 0}
            fontSize={14}
          >
            مصاريف الصالات
            <br />و اجار العمال
          </MotionBox>
        </Tab>
        <Tab
          bgColor={"transparent"}
          sx={{
            outline: "none",
            border: "none",
          }}
        >
          <MotionBox
            as={Button}
            onClick={() => handleTabClick("tab2")}
            _hover={{ bg: RED }}
            bg={activeTab === "tab2" ? RED : "gray.200"}
            color={activeTab === "tab2" ? "white" : "black"}
            animate={{
              x: activeTab === "tab2" ? 90 : 230,
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
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <ExpensesTable />
        </TabPanel>
        <TabPanel>32</TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ExpensesTabs;
