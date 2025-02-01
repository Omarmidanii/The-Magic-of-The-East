import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Input,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { LuSofa } from "react-icons/lu";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useCreateBill from "../../../hooks/useCreateBill";
import useAddBillStore from "../../../stores/AddBillStore";
import useBillGroupStore from "../../../stores/BillGroupStore";
import useErrorStore from "../../../stores/errorStore";
import AddButton from "../../AddButton";
import CustomerForm from "../../Customer/CustomerForm";
import CustomModal from "../../Modal";
import GroupsBillTable from "../GroupsBillTable";
import CustomerSelector from "./CustomerSelector";

interface Props {
  onCloseAll?: () => void;
}

const AddBill = ({ onCloseAll = () => {} }: Props) => {
  const { message } = useErrorStore();

  const showAlert = (type: "suc" | "err") => {
    swal({
      title: "اضافة فاتورة",
      text:
        type == "suc"
          ? "تمت اضافة الفاتورة بنجاح"
          : (message?.groups && message.groups[0]) ||
            (message?.notes && message.notes[0]) ||
            (message?.total_sell_price && message.total_sell_price[0]) ||
            (message?.customer_id && message.customer_id[0]) ||
            message?.message ||
            "حدث خطا اثناء اضافة الفاتورة، الرجاء المحاولة مرة اخرى",
      icon: type == "suc" ? "success" : "error",
    });
  };

  const create = useCreateBill();

  const { setPickone, groups, resetGroups } = useBillGroupStore();

  const {
    customer,
    notes,
    setNotes,
    total_sell_price,
    setTotal_Sell_Price,
    resetAddBill,
  } = useAddBillStore();

  const { isOpen, onClose, onOpen } = useDisclosure();

  const onSubmit = () => {
    const data = new FormData();
    if (notes) data.append("notes", notes);
    if (groups) {
      groups.map(
        (group, index) => (
          data.append(`groups[${index}][quantity]`, `${group.count}`),
          data.append(`groups[${index}][id]`, `${group.group.id}`)
        )
      );
    }
    data.append("total_sell_price", `${total_sell_price}`);
    if (customer) data.append("customer_id", `${customer.id}`);
    create.mutate(data);
  };
  useEffect(() => {
    if (create.isSuccess) {
      resetAddBill();
      resetGroups();
      showAlert("suc");
    }
    if (create.error) {
      showAlert("err");
    }
  }, [create.isSuccess, create.error]);
  return (
    <Box>
      <Box px={5} h={400} overflowY={"auto"}>
        <Text my={5}> الزبون:</Text>
        <CustomerSelector />
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
        <Textarea
          onChange={(e) => {
            setNotes(e.target.value);
          }}
          mb={8}
          placeholder={notes ? notes : " اضاف ملاحظات"}
        />
        <Divider mb={8} />

        <CustomModal
          buttonLabel="اضافة زبون"
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
          }}
        >
          <Button mt={5} mb={5}>
            <Icon as={LuSofa} mb={-1} ml={2} /> إضافة مجموعة للفاتورة
          </Button>
        </Link>
        <GroupsBillTable />
        <HStack mt={20} pl={2}>
          <Text w={36}>إجمالي المبيع:</Text>
          <Input
            type="number"
            min={0}
            onChange={(e) => {
              setTotal_Sell_Price(Number(e.target.value));
            }}
            placeholder={
              total_sell_price != 0 ? `${total_sell_price}` : "000,000,000"
            }
          />
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
        onClick={onSubmit}
      >
        {create.isPending ? "يتم الاضافة..." : "اضافة"}
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
