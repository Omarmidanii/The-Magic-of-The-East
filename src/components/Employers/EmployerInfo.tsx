import {
  Box,
  Button,
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
import useDEleteEmployee from "../../hooks/useDEleteEmployee";

interface Props {
  employer: employer;
  fun: () => void;
}

const EmployerInfo = ({ employer, fun }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(employer);
  const Edit = useEditEmployee(employer.id ? employer.id : 0);
  const [deleteID, setDeleteID] = useState(-1);
  const deleteEmp = useDEleteEmployee(deleteID);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const showAlert = () => {
    swal({
      title: "تعديل" + employer.firstname,
      text: "تم التعديل بنجاح!",
      icon: "success",
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    Edit.mutate(formData);
  };

  useEffect(() => {
    if (Edit.isSuccess) {
      showAlert();
      fun();
    }
  }, [Edit.isPending]);

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
                  name="phone"
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
              <Box>
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
                <Text pb={2}>
                  <Icon as={MdLocationOn} ml={2} />
                  {employer.address}
                </Text>
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
          <Box>
            <CustomDelete ID={employer.id || -1} refetch={fun} endpoint="employees" type="Button" />
            {isEditing ? (
              <Button onClick={handleSave} colorScheme="blue" mr={2}>
                حفظ
              </Button>
            ) : (
              <Button
                onClick={() => setIsEditing(true)}
                leftIcon={<FaEdit />}
                colorScheme="blue"
                mr={2}
              >
                تعديل
              </Button>
            )}
          </Box>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default EmployerInfo;
