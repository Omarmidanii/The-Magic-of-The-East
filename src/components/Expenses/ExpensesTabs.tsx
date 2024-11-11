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
import { FaDollarSign, FaUserTie } from "react-icons/fa";
import { BsReceiptCutoff } from "react-icons/bs";

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
    <Tabs pt={9}>
      <TabList borderWidth={"0px"} pb={8} justifyContent="center">
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
            _hover={{ bg: activeTab === "tab1" ? RED : "gray.300" }}
            color={activeTab === "tab1" ? "white" : "black"}
            animate={{
              x: activeTab === "tab1" ? -60 : -200,
              scale: activeTab === "tab1" ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
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
            _hover={{ bg: activeTab === "tab2" ? RED : "gray.300" }}
            bg={activeTab === "tab2" ? RED : "gray.200"}
            color={activeTab === "tab2" ? "white" : "black"}
            animate={{
              x: activeTab === "tab2" ? 90 : 230,
              scale: activeTab === "tab2" ? 1.2 : 1,
            }}
            transition={{ duration: 0.3 }}
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
          {activeTab == "tab1" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              exit={{ opacity: 0 }}
            >
              <ExpensesTable
                headers={[
                  { icon: FaUserTie, name: "اجار العمال ", enName: "salary" },
                  {
                    icon: FaDollarSign,
                    name: "مصاريف الصالات ",
                    enName: "expenses",
                  },
                ]}
              />
            </motion.div>
          )}
        </TabPanel>

        <TabPanel>
          {activeTab == "tab2" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.8 },
              }}
              exit={{ opacity: 0 }}
            >
              <ExpensesTable
                headers={[
                  { icon: FaUserTie, name: "اجار الصالات ", enName: "rent" },
                  { icon: BsReceiptCutoff, name: "الضرائب ", enName: "bills" },
                ]}
              />
            </motion.div>
          )}
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ExpensesTabs;
