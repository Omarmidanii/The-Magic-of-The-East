import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsPhone } from "react-icons/bs";
import { FaArrowDown, FaEdit, FaUser } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { PiMoney, PiRankingBold } from "react-icons/pi";
import employer from "../../entities/employer";
import CustomDelete from "../Delete";
import { useEffect, useState } from "react";
import useEditEmployee from "../../hooks/useEditEmployee";
import swal from "sweetalert";
import useErrorStore from "../../stores/errorStore";

interface Props {
  employer: employer;
  fun: () => void;
}

const EmployerInfo = ({ employer, fun }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(employer);
  const Edit = useEditEmployee(employer.id ? employer.id : 0);
  const { message } = useErrorStore();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showAlert = (type: "suc" | "err") => {
    swal({
      title: "تعديل" + employer.firstname,
      text:
        type == "suc"
          ? "تم التعديل بنجاح!"
          : (message?.firstname && message?.firstname[0]) ||
            (message?.lastname && message?.lastname[0]) ||
            (message?.phonenumber && message?.phonenumber[0]) ||
            (message?.position && message?.position[0]) ||
            (message?.salary && message?.salary[0]) ||
            "حدث خطأ اثناء التعديل الرجاء المحاولة لاحقا",
      icon: type == "suc" ? "success" : "error",
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    Edit.mutate(formData);
  };

  useEffect(() => {
    if (Edit.isSuccess) {
      fun();
      showAlert("suc");
    }
    if (Edit.error) {
      showAlert("err");
    }
  }, [Edit.isSuccess, Edit.error]);

  return (
    <Popover>
      <PopoverTrigger>
        <Button bg={"none"}>
          <Icon as={FaArrowDown} />
        </Button>
      </PopoverTrigger>
      <PopoverContent w={300}>
        <PopoverHeader fontWeight="semibold" mr={6}>
          معلومات الموظف
        </PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Box p={2}>
            {isEditing ? (
              <Stack>
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleInputChange}
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleInputChange}
                />
                <Input
                  type="number"
                  name="phonenumber"
                  value={formData.phonenumber}
                  onChange={handleInputChange}
                />
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
                <Input
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
                <Input
                  name="salary"
                  value={formData.salary}
                  onChange={handleInputChange}
                />
              </Stack>
            ) : (
              <Box w={250} overflowX={"auto"}>
                <Text pb={2}>
                  <Icon as={FaUser} ml={2} />
                  {employer.firstname}
                </Text>
                <Text pb={2}>
                  <Icon as={FaUser} ml={2} />
                  {employer.lastname}
                </Text>
                <Text pb={2}>
                  <Icon as={BsPhone} ml={2} />
                  {employer.phonenumber}
                </Text>
                <Box pb={2} w={250}>
                  <Icon as={MdLocationOn} ml={2} />
                  {employer.address}
                </Box>
                <Text pb={2}>
                  <Icon as={PiRankingBold} ml={2} />
                  {employer.position}
                </Text>
                <Text pb={2}>
                  <Icon as={PiMoney} ml={2} />
                  {employer.salary}
                </Text>
              </Box>
            )}
          </Box>
        </PopoverBody>
        <PopoverFooter>
          <HStack>
            <CustomDelete
              ID={employer.id || -1}
              refetch={fun}
              endpoint="employees"
              type="Button"
            />
            {isEditing ? (
              <Button onClick={handleSave} colorScheme="blue" mr={2}>
              {Edit.isPending ? "يتم الحفظ..." : " حفظ"}
              </Button>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                leftIcon={<FaEdit size={17} />}
                colorScheme="blue"
                h={8}
                px={-2}
                pr={1}
              />
            )}
          </HStack>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default EmployerInfo;
