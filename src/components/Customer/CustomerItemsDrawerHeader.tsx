import { Button, HStack, Text } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import CustomDelete from "../Delete";

interface Props {
  OnOpen: () => void;
  name: string;
}

const CustomerItemsDrawerHeader = ({ OnOpen, name }: Props) => {
  const handleEdit = () => {
    if (OnOpen) {
      OnOpen();
    }
  };
  return (
    <HStack justifyContent={"space-between"}>
      <Text textColor={"black"} mr={8} fontSize={32}>
        {name}
      </Text>
      <HStack justifyContent={"center"} spacing={0}>
        <Button
          leftIcon={<FaEdit />}
          ml={2}
          onClick={handleEdit}
          bg="blue.500"
          textColor="white"
          _hover={{ bg: "blue.600" }}
        />
        <CustomDelete ID={1} endpoint="2" type="Button" showText={false} />
      </HStack>
    </HStack>
  );
};

export default CustomerItemsDrawerHeader;
