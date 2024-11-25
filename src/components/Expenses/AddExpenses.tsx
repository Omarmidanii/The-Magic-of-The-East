import {
  Button,
  Collapse,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import swal from "sweetalert";
import AddEmplyoeeExpense from "./AddEmplyoeeExpense";
import AddoOtherExpenses from "./AddoOtherExpenses";

interface Props {
  onClose?: () => void;
}

const AddExpenses = ({ onClose = () => {} }: Props) => {
  const showAlert = () => {
    swal({
      title: "Hello!",
      text: "This is a SweetAlert2 alert",
      icon: "success",
    }).then(() => {
      onClose();
    });
  };

  const [value, setValue] = useState("1");

  return (
    <div>
      <RadioGroup onChange={setValue} value={value}>
        <Text mb={4} fontSize={18}>
          {" "}
          - قم بتحديد نوع المصروف:
        </Text>
        <Stack mr={3}>
          <Radio value="1">
            <text
              style={{
                fontSize: 15,
                color: value == "1" ? "black" : "#666666",
              }}
            >
              مكافئة/ خصم للعمال
            </text>
          </Radio>
          <Radio value="2">
            <text
              style={{
                fontSize: 15,
                color: value == "2" ? "black" : "#666666",
              }}
            >
              أجار صالة
            </text>
          </Radio>
          <Radio value="3">
            <text
              style={{
                fontSize: 15,
                color: value == "3" ? "black" : "#666666",
              }}
            >
              ضريبة جديدة
            </text>
          </Radio>
          <Radio value="4">
            <text
              style={{
                fontSize: 15,
                color: value == "4" ? "black" : "#666666",
              }}
            >
              مصاريف عامة للصالة
            </text>
          </Radio>
        </Stack>
      </RadioGroup>
      <Collapse in={value == "1"} transition={{ enter: { delay: 0.2 } }}>
        <AddEmplyoeeExpense />
      </Collapse>
      <Collapse in={value != "1"} transition={{ enter: { delay: 0.2 } }}>
        <AddoOtherExpenses />
      </Collapse>
      <Divider mt={7} mb={-1} />
      <Button
        mb={6}
        bgColor={"#228822"}
        _hover={{ bgColor: "#117711" }}
        color={"white"}
        width="30%"
        boxShadow={"md"}
        type="submit"
        marginTop={8}
        borderRadius={"10"}
        onClick={() => showAlert()}
      >
        {"اضافة"}
      </Button>
      <Button
        mb={6}
        _hover={{ bgColor: "#EEEEEE" }}
        width="30%"
        bgColor={"white"}
        borderWidth={"2px"}
        borderColor={"gray.100"}
        boxShadow={"md"}
        mr={2}
        type="submit"
        marginTop={8}
        borderRadius={"10"}
        onClick={() => onClose()}
      >
        {"الغاء"}
      </Button>
    </div>
  );
};

export default AddExpenses;
