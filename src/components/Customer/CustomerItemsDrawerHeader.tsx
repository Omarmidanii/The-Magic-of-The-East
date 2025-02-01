import { Badge, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import CustomDelete from "../Delete";

interface Props {
  OnOpen: () => void;
  name: string;
  badge?: string;
  id?: number;
  fun?: () => void;
}

const CustomerItemsDrawerHeader = ({ badge, OnOpen, name, fun, id }: Props) => {
  const currentPathname = window.location.pathname;

  const handleEdit = () => {
    if (OnOpen) {
      OnOpen();
    }
  };
  return (
    <HStack justifyContent={"space-between"} paddingX={5} marginBottom={-2}>
      <Text textColor={"black"} mr={8} fontSize={24}>
        {name}
        {badge && (
          <Badge
            borderRadius={5}
            px={1.5}
            pb={0.5}
            mr={3}
            variant="subtle"
            fontSize="0.63em"
            colorScheme={badge == "1" ? "green" : "red"}
          >
            {badge == "1" ? "متاح" : "مباع"}
          </Badge>
        )}
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
        <CustomDelete
          ID={id || -1}
          refetch={fun}
          endpoint={
            currentPathname == "/dash/customers" ? "customers" : "groups"
          }
          type="Button"
          showText={false}
        />
      </HStack>
    </HStack>
  );
};

export default CustomerItemsDrawerHeader;
