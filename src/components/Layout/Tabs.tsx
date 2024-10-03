import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import YALLOW, { RED } from "../../constants";
import { PiChartLineUpBold } from "react-icons/pi";
import { useState } from "react";

interface valueofTab {
  enName: string;
  icon: IconType;
}

export const Tab: Record<string, valueofTab> = {
  السلع: { enName: "categories", icon: FaBoxOpen },
  الموظفين: { enName: "employers", icon: FaUsers },
  الزبائن: { enName: "customers", icon: RiCustomerService2Fill },
  المصاريف: { enName: "expenses", icon: GiExpense },
  التقارير: { enName: "reports", icon: PiChartLineUpBold },
};

export const Tabs = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(
    localStorage.getItem("CurrentPage")
  );
  return (
    <HStack>
      {Object.entries(Tab).map(([name, value], index) => (
        <Stack>
          <Box
            key={index}
            _hover={{
              ".button-hover": {
                textColor: RED,
                transform:
                  localStorage.getItem("CurrentPage") === value.enName
                    ? ""
                    : "scale(1.3)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            onClick={() => {
              setSelectedTab(value.enName);
              localStorage.removeItem("CurrentPage");
              localStorage.setItem("CurrentPage", value.enName);
            }}
          >
            <Link to={`/${value.enName}`}>
              <Button
                fontSize={"large"}
                bgColor={YALLOW}
                className="button-hover"
                _hover={{ bgColor: YALLOW }}
                textColor={
                  localStorage.getItem("CurrentPage") === value.enName
                    ? RED
                    : ""
                }
              >
                <Text
                  fontSize={
                    localStorage.getItem("CurrentPage") === value.enName
                      ? 24
                      : 16
                  }
                >
                  {t(name)}
                </Text>
              </Button>
            </Link>
          </Box>
          {localStorage.getItem("CurrentPage") === value.enName && (
            <Box
              mr={index % 2 ? 3 : 0}
              mt={2}
              boxShadow={`0 5px 15px 2px red`}
              mb={-10}
              boxSize={1}
              width={index % 2 ? 28 : 24}
              borderRadius={25}
              bgColor={RED}
            />
          )}
        </Stack>
      ))}
    </HStack>
  );
};
