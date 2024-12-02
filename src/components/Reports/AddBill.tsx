import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  Select,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { LuSofa } from "react-icons/lu";
import swal from "sweetalert";
import { customers } from "../Customer/CustomerTable";
import AddButton from "../AddButton";
import CustomerForm from "../Customer/CustomerForm";
import CustomModal from "../Modal";
import { Link } from "react-router-dom";
import GroupsBillTable from "./GroupsBillTable";
import useBillGroupStore from "../../stores/BillGroupStore";

interface Props {
  onCloseAll?: () => void;
}

const AddBill = ({ onCloseAll = () => {} }: Props) => {
  const showAlert = () => {
    swal({
      title: "Hello!",
      text: "This is a SweetAlert2 alert",
      icon: "success",
    }).then(() => {
      onCloseAll();
    });
  };

  const { setPickone, pickOne } = useBillGroupStore();

  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
      <Box px={5} h={400} overflowY={"auto"}>
        <Text my={5}> الزبون:</Text>
        <Select
          sx={{
            direction: "ltr",
            textAlign: "right",
          }}
          placeholder="اختر الزبون"
          color={"gray.600"}
          maxHeight={"100px"}
        >
          {customers.map((value, index) => (
            <option value={index}>
              {value.firstname + " " + value.lastname}
            </option>
          ))}
        </Select>
        <HStack mt={-2}>
          <Text
            color={"gray.500"}
            w={"fit-content"}
            p={1}
            borderBottom={"2px"}
            borderColor={"gray.300"}
            ml={-5}
          >
            زبون جديد؟
          </Text>
          <AddButton onOpen={onOpen} label=" قم باضافة زبون" />
        </HStack>

        <Text my={5} mt={8}>
          {" "}
          الملاحظات:
        </Text>
        <Textarea mb={8} placeholder=" اضاف ملاحظات" />
        <Divider mb={8} />

        <CustomModal
          buttonLabel="اضافة مصروف للصالة"
          isOpen={isOpen}
          onClose={onClose}
          color={"white"}
        >
          <CustomerForm onClose={onClose} />
        </CustomModal>

        <Link
          to={"/chooseGroup"}
          onClick={() => {
            setPickone(false);
            console.log(pickOne);
          }}
        >
          <Button mt={5} mb={5}>
            <Icon as={LuSofa} mb={-1} ml={2} /> إضافة مجموعة للفاتورة
          </Button>
        </Link>
        <GroupsBillTable />
        <HStack mt={20} pl={2}>
          <Text w={36}>إجمالي المبيع:</Text>
          <Input placeholder="000,000,000" />
        </HStack>
      </Box>
      <Divider mt={8} mb={-1} />
      <Button
        mb={8}
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
        mb={8}
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
        onClick={() => onCloseAll()}
      >
        {"الغاء"}
      </Button>
    </Box>
  );
};

export default AddBill;
