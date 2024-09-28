import {
  Button,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  //Spinner,
  CloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
//import useDelete from "../hooks/useDelete";
import { FaTrash } from "react-icons/fa";

interface Props {
  ID: number;
  endpoint: string;
  type: string;
  showText?: boolean;
}

function CustomDelete({ ID, endpoint, type, showText = true }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);
  //const Delete = useDelete(ID, target , target2);
  // const handleDelete = () => {
  //   Delete.mutate({
  //     _method: "DELETE",
  //   });
  // };
  // if (Delete.isLoading) {
  //   if (isOpen == true) onClose();
  //   return <Spinner />;
  // }
  return (
    <>
      {type === "Button" && (
        <Button
          leftIcon={<FaTrash />}
          colorScheme="red"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          {showText ? "حذف" : ""}
        </Button>
      )}
      {type != "Button" && (
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
          _hover={{
            bg: "red.500",
          }}
        />
      )}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {"حذف عنصر"}
            </AlertDialogHeader>

            <AlertDialogBody>
              {"هل انت متاكد من حذف هذا العنصر؟"}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {"الغاء"}
              </Button>
              <Button colorScheme="red" mr={3}>
                {"حذف"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
export default CustomDelete;
