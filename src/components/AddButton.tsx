import { Button, Divider } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
interface Props {
  onOpen: () => void;
  label: string;
}
const AddButton = ({ onOpen, label }: Props) => {
  const handleAdd = () => {
    if (onOpen) {
      onOpen();
    }
  };
  return (
    <>
      <Button
        leftIcon={<MdAdd />}
        m={4}
        mr={8}
        colorScheme="green"
        onClick={handleAdd}
      >
        {label}
      </Button>
      <Divider />
    </>
  );
};

export default AddButton;
