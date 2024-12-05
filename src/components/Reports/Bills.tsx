import {
  Box,
  Button,
  Collapse,
  HStack,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import resizeWindow from "../../services/resizeWindow";
import BillsTable from "./BillsTable";
import bill from "../../entities/bill";
import BillDetails from "./BillDetails";
import SearchBy from "./SearchBy";
import CustomModal from "../Modal";
import AddBill from "./AddBill/AddBill";
import useBillGroupStore from "../../stores/BillGroupStore";
import { useEffect } from "react";

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

  const { groups, resetGroups, pickOne } = useBillGroupStore();
  const {
    isOpen: isOpenAddBill,
    onClose: onCloseAddBill,
    onOpen: onOpenAddBill,
  } = useDisclosure();

  const {
    isOpen: isOpenSearchBy,
    onClose: onCloseSearchBy,
    onToggle: onToggleSearchBy,
  } = useDisclosure();

  useEffect(() => {
    if (groups?.length && groups?.length > 0) {
      if (!isOpenAddBill && !pickOne) onOpenAddBill();
      if (!isOpenSearchBy && pickOne) onToggleSearchBy();
    }
  }, []);

  return (
    <Box w={"98%"} h={Math.max(height - 130, 400)} mt={4} mr={4}>
      <Box boxSize={82} w={"100%"} px={{ sm: 5, base: 0 }}>
        <Stack
          direction={{ md: "row", base: "column" }}
          pt={2}
          px={10}
          justifyContent={"space-between"}
        >
          <Text
            fontWeight={"bold"}
            fontFamily={"Noto"}
            fontSize={26}
            color={"gray.600"}
          >
            {" "}
            الفواتير:
          </Text>
          <HStack spacing={4} mt={{ base: 2, md: 0 }}>
            <SearchBy
              isOpen={isOpenSearchBy}
              onClose={onCloseSearchBy}
              onToggle={onToggleSearchBy}
            />
            <Button
              colorScheme="green"
              borderRadius={20}
              onClick={() => {
                resetGroups();
                onOpenAddBill();
              }}
            >
              إضافة فاتورة
            </Button>
          </HStack>
        </Stack>
      </Box>
      <Box
        px={5}
        mt={{ base: 12, md: 0 }}
        h={Math.max(height - 220, 300)}
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
          <BillDetails BillId={2} onToggle={onToggle2} onToggle2={onToggle1} />
        </Collapse>
      </Box>
      <CustomModal
        buttonLabel="اضافة فاتورة"
        isOpen={isOpenAddBill}
        onClose={onCloseAddBill}
        color={"white"}
      >
        <AddBill onCloseAll={onCloseAddBill} />
      </CustomModal>
    </Box>
  );
};

export default Bills;
