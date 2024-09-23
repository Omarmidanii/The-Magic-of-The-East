import { Box, Button, HStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaBoxOpen, FaChartLine, FaUsers } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RED } from "../../constants";
import { useState } from "react";

interface valueofTab {
  enName: string;
  icon: IconType;
}

export const Tab: Record<string, valueofTab> = {
  الموظفين: { enName: "employers", icon: FaUsers },
  الزبائن: { enName: "customers", icon: RiCustomerService2Fill },
  السلع: { enName: "items", icon: FaBoxOpen },
  المصاريف: { enName: "expenses", icon: GiExpense },
  التقارير: { enName: "reports", icon: FaChartLine },
};
export const Tabs = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("");
  return (
    <HStack>
      {Object.entries(Tab).map(([name, value], index) => (
        <Box
          key={index}
          p={3}
          m={1}
          _hover={{
            ".button-hover": {
              textColor: RED,
              transform: "scale(1.3)",
              transition: "transform 0.3s ease-in-out",
            },
          }}
          onClick={() => setSelectedTab(value.enName)}
        >
          <Link to={`/${value.enName}`}>
            <Button
              fontSize={"large"}
              variant={"link"}
              color={"white"}
              className="button-hover"
              textColor={selectedTab === value.enName ? RED : ""}
            >
              <Text fontSize={selectedTab === value.enName ? 22 : 16}>
                {t(name)}
              </Text>
            </Button>
          </Link>
        </Box>
      ))}
    </HStack>
  );
};
