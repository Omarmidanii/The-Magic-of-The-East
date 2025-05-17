import { Box, Icon, Text, useDisclosure } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import CustomModal from "../Modal";
import PasswordModal from "./PasswordModal";

const SetNewPassword = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Text
        fontSize={14}
        mt={2}
        mb={1}
        mr={3}
        fontFamily={"Beiruti"}
        fontWeight={"bold"}
      >
        كلمة السر{" "}
        <Icon
          as={FaEdit}
          padding={1}
          boxSize={5}
          mb={-1.5}
          mr={2}
          cursor={"pointer"}
          borderRadius={4}
          pr={0.5}
          bgColor={"gray.200"}
          onClick={onOpen}
        />
      </Text>
      <CustomModal
        buttonLabel="تغيير كلمة السر"
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
        size={{ md: "sm", base: "sm" }}
      >
        <PasswordModal onClose={onClose} />
      </CustomModal>
    </Box>
  );
};

export default SetNewPassword;
