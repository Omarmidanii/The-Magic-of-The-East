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
import { useState } from "react";

interface Props {
  employer: employer;
}

const EmployerInfo = ({ employer }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(employer);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button bg={"none"}>
          <Icon as={FaArrowDown} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
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
                  value={formData.phone}
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
              <>
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
                  {employer.phone}
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
              </>
            )}
          </Box>
        </PopoverBody>
        <PopoverFooter>
          <Box>
            <CustomDelete ID={2} endpoint="2" type="Button" />
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
