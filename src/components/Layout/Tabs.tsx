import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaBoxOpen, FaUsers } from "react-icons/fa";
import { GiExpense } from "react-icons/gi";
import { IconType } from "react-icons/lib";
import { RiCustomerService2Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { RED } from "../../constants";
import { PiChartLineUpBold } from "react-icons/pi";

interface valueofTab {
  enName: string;
  icon: IconType;
}

export const Tab: Record<string, valueofTab> = {
  السلع: { enName: "dash/categories", icon: FaBoxOpen },
  الموظفين: { enName: "dash/employers", icon: FaUsers },
  الزبائن: { enName: "dash/customers", icon: RiCustomerService2Fill },
  المصاريف: { enName: "dash/expenses", icon: GiExpense },
  التقارير: { enName: "dash/reports", icon: PiChartLineUpBold },
};

export const Tabs = () => {
  const { t } = useTranslation();
  const url = useLocation();
  return (
    <HStack>
      {Object.entries(Tab).map(([name, value], index) => (
        <Stack key={index}>
          <Box
            style={{
              transform:
                url.pathname === `/${value.enName}`
                  ? "translateY(15px) translateX(-20px) scale(1.5)" // Adjust the values as needed
                  : "translateY(0) scale(1)",
              transition: "transform 0.4s ease-in-out",
            }}
          >
            <Link to={`/${value.enName}`}>
              <Button
                fontSize={"large"}
                backgroundColor={"transparent"}
                _hover={{
                  backgroundColor: "transparent",
                  textColor: RED,
                  transform:
                    url.pathname === `/${value.enName}` ? "" : "scale(1.3)",
                  transition: "transform 0.4s ease-in-out",
                }}
                textColor={url.pathname === `/${value.enName}` ? RED : ""}
              >
                <Text fontSize={16}>{t(name)}</Text>
              </Button>
            </Link>
          </Box>
          {url.pathname === `/${value.enName}` && (
            <Box
              mr={index % 2 ? 3 : 0}
              mt={5}
              boxShadow={`0 5px 15px 2px red`}
              mb={-7}
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
