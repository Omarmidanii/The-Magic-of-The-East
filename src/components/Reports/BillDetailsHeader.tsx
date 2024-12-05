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

interface Props {
  onToggle: () => void;
  onToggle2: () => void;
}

const BillDetailsHeader = ({ onToggle, onToggle2 }: Props) => {
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
            <b>المشتري:</b> فلاني الفلاني
            <Icon mx={1} mb={-0.5} as={IoPerson} />
          </Text>{" "}
          <Text>
            586654 <b>:رقم العملية #</b>
          </Text>
        </Stack>
        <Stack
          direction={{ sm: "row", base: "column" }}
          mb={2}
          justifyContent={"space-evenly"}
        >
          <Text>
            {" "}
            <b>إجمالي المبيع:</b> 156,000,000
            <Icon mx={1} mb={-0.5} boxSize={4} as={FaMoneyBillTrendUp} />
          </Text>
          <Text>
            {" "}
            <b>إجمالي الشراء:</b> 156,000,000
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
            15/45/5126 <b>:التاريخ</b>
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
            value={
              "  م شسنمسشمن شسم سم شسنسشنسشنس سن مسشمن من سمن سمش ننمنسش سنس ن سسن نس"
            }
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
