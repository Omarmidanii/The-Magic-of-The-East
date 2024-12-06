import {
  Box,
  Button,
  HStack,
  Icon,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaMoneyBillTrendUp, FaRegCalendarDays } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { PiArrowRightBold } from "react-icons/pi";
import bill from "../../entities/bill";

interface Props {
  onToggle: () => void;
  onToggle2: () => void;
  bill: bill;
}

const BillDetailsHeader = ({ bill, onToggle, onToggle2 }: Props) => {
  return (
    <div>
      <HStack justifyContent={"space-between"}>
        <Box></Box>
        <Text
          fontSize={"19"}
          color={"#555555"}
          style={{ textDecoration: "underline" }}
        >
          {" "}
          تفاصيل الفاتورة
        </Text>
        <Button
          px={-1}
          onClick={() => {
            onToggle();
            setTimeout(onToggle2, 1000);
          }}
        >
          <Icon as={PiArrowRightBold} boxSize={5} />
        </Button>
      </HStack>
      <br />
      <Box>
        <Stack
          direction={{ sm: "row", base: "column" }}
          mb={3}
          mt={5}
          justifyContent={"space-evenly"}
        >
          <Text>
            {" "}
            <b>المشتري:</b>
            {bill.customer}
            <Icon mx={1} mb={-0.5} as={IoPerson} />
          </Text>{" "}
          <Text>
            {bill.id} <b>:رقم العملية #</b>
          </Text>
        </Stack>
        <Stack
          direction={{ sm: "row", base: "column" }}
          mb={2}
          justifyContent={"space-evenly"}
        >
          <Text>
            {" "}
            <b>إجمالي المبيع:</b> {bill.total_sell_price}
            <Icon mx={1} mb={-0.5} boxSize={4} as={FaMoneyBillTrendUp} />
          </Text>
          <Text>
            {" "}
            <b>إجمالي الشراء:</b> {bill.total_net_price}
            <Icon mx={1} mb={-1} boxSize={4} as={FaMoneyBillWave} />
          </Text>
        </Stack>
        <Stack
          direction={{ sm: "row", base: "column" }}
          mb={3}
          mt={5}
          justifyContent={"space-evenly"}
        >
          <Text>
            {bill.date} <b>:التاريخ</b>
            <Icon mx={1} mb={-0.5} as={FaRegCalendarDays} />
          </Text>
        </Stack>
        <Box px={20} mt={12}>
          : الملاحظات
          <Textarea
            mt={4}
            textAlign="right"
            contentEditable={false}
            focusBorderColor="gray.200"
            value={bill.notes || ""}
            onChange={() => {}}
          >
            {" "}
          </Textarea>
        </Box>
      </Box>
    </div>
  );
};

export default BillDetailsHeader;
