import { HStack, IconButton, Text } from "@chakra-ui/react";
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
    <HStack justifyContent={"space-between"} paddingX={5} marginBottom={-2}>
      <Text textColor={"black"} mr={8} fontSize={24}>
        {name}
      </Text>
      <HStack justifyContent={"center"} spacing={0} marginBottom={-2}>
        <IconButton
          aria-label=""
          paddingBottom={0.5}
          paddingLeft={0.5}
          icon={<FaEdit size={17} />}
          boxSize={8}
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
