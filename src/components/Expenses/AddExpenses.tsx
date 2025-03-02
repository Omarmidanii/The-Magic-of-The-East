import {
  Button,
  Collapse,
  Divider,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import AddEmplyoeeExpense from "./AddEmplyoeeExpense";
import AddoOtherExpenses from "./AddoOtherExpenses";
import useAddExpense from "../../hooks/useAddExpense";

interface Props {
  onClose?: () => void;
}

const AddExpenses = ({ onClose = () => {} }: Props) => {
  const [value, setValue] = useState("1");
  const [name, setName] = useState("");
  const [cost, setCost] = useState(0);
  const [employee, setEmployee] = useState(0);
  const [bouns, setBouns] = useState("1");

  const add = useAddExpense(value);

  const showAlert = (type: "suc" | "err") => {
    swal({
      title: "اضافة" + name,
      text:
        type == "suc"
          ? " تمت اضافة  المصروف بنجاح! قم باعادة تحميل الصفحة"
          : "حدث خطأ اثناء اضافة المصروف الرجاء المحاولة لاحقا",
      icon: type == "suc" ? "success" : "error",
    });
  };

  useEffect(() => {
    if (add.isSuccess) {
      onClose();
      showAlert("suc");
    }
    if (add.error) {
      showAlert("err");
    }
  }, [add.isSuccess, add.error]);

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
              مصاريف عامة للصالة
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
              مكافئة/ خصم للعمال
            </text>
          </Radio>
        </Stack>
      </RadioGroup>
      <Collapse in={value == "4"} transition={{ enter: { delay: 0.2 } }}>
        <AddEmplyoeeExpense
          setEmployee={setEmployee}
          setamount={setCost}
          settype={setBouns}
          cost={cost}
          isReward={bouns}
        />
      </Collapse>
      <Collapse in={value != "4"} transition={{ enter: { delay: 0.2 } }}>
        <AddoOtherExpenses setName={setName} setCost={setCost} />
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
        isDisabled={add.isPending}
        onClick={() =>
          value != "4"
            ? add.mutate({
                type: value,
                name: name,
                cost: cost,
                employee_id: 0,
                amount: 0,
              })
            : add.mutate({
                type: bouns,
                name: "",
                cost: 0,
                employee_id: employee,
                amount: cost,
              })
        }
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
