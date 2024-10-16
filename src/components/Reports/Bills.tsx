import {
  Box,
  Button,
  Collapse,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import resizeWindow from "../../services/resizeWindow";
import BillsTable from "./BillsTable";
import bill from "../../entities/bill";
import { RED } from "../../constants";
import BillDetails from "./BillDetails";

const bills: bill[] = [
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
  { id: 54546, customerName: "زلمة", date: "2025/10/20" },
];

const Bills = () => {
  const { height } = resizeWindow();
  const { isOpen: isOpen1, onToggle: onToggle1 } = useDisclosure();
  const { isOpen: isOpen2, onToggle: onToggle2 } = useDisclosure();

  return (
    <Box w={"98%"} h={height - 130} mt={4} mr={4} >
      <Box boxSize={82} w={"100%"} px={5}>
        <HStack pt={2} px={10} justifyContent={"space-between"}>
          <Text
            fontWeight={"bold"}
            fontFamily={"Noto"}
            fontSize={26}
            color={"gray.600"}
          >
            {" "}
            الفواتير:
          </Text>
          <HStack spacing={4}>
            <Button colorScheme="red" bgColor={RED} borderRadius={20}>
              {" "}
              بحث حسب...
            </Button>
            <Button colorScheme="green" borderRadius={20}>
              إضافة فاتورة
            </Button>
          </HStack>
        </HStack>
      </Box>
      <Box
        px={5}
        h={height - 220}
        overflow={"auto"}
        sx={{
          direction: "ltr",
          textAlign: "right",
          scrollbarWidth: "thin",
        }}
        boxShadow={`lg`}
        borderRadius={50}
        ml={2}
        mb={2}
      >
        <Collapse
          in={!isOpen1}
          animateOpacity
          transition={{ exit: { duration: 1 }, enter: { duration: 1 } }}
        >
          <BillsTable
            bills={bills}
            onToggle={onToggle1}
            onToggle2={onToggle2}
          />
        </Collapse>
        <Collapse
          in={isOpen2}
          animateOpacity
          transition={{ exit: { duration: 1 }, enter: { duration: 1 } }}
        >
          <BillDetails
            onToggle={onToggle2}
            onToggle2={onToggle1}
          />
        </Collapse>
      </Box>
    </Box>
  );
};

export default Bills;
