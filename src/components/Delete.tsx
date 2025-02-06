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
  IconButton,
  Box,
  Icon,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { FaTrash } from "react-icons/fa";
import useDelete from "../hooks/useDelete";
import { RxCross2 } from "react-icons/rx";

interface Props {
  ID: number;
  refetch?: () => void;
  endpoint: string;
  type: string;
  showText?: boolean;
}

function CustomDelete({
  ID,
  refetch = () => {},
  endpoint,
  type,
  showText = true,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = useRef(null);

  const showAlert = () => {
    swal({
      text: "تم الحذف بنجاح!",
      icon: "success",
    });
  };

  const Delete = useDelete(ID, endpoint);
  const handleDelete = () => {
    Delete.mutate({
      _method: "DELETE",
    });
  };
  // if (Delete.isLoading) {
  //   if (isOpen == true) onClose();
  //   return <Spinner />;
  // }

  useEffect(() => {
    if (Delete.isSuccess) {
      showAlert();
      onClose();
      refetch();
    }
  }, [Delete.isSuccess]);

  return (
    <Box>
      {type === "Button" && (
        <IconButton
          aria-label=""
          boxSize={8}
          icon={<FaTrash />}
          colorScheme="red"
          isDisabled={Delete.isPending}
          onClick={(e) => {
            if (!Delete.isPending) {
              e.stopPropagation();
              setIsOpen(true);
            }
          }}
        >
          {showText ? "حذف" : ""}
        </IconButton>
      )}
      {type === "smallButton" && (
        <Icon
          as={RxCross2}
          borderRadius={20}
          p={0.5}
          mt={1}
          mb={-0.5}
          boxSize={5}
          _hover={{
            bgColor: Delete.isPending ? "red.300" : "red.600",
            color: "white",
          }}
          cursor="pointer"
          onClick={(e) => {
            if (!Delete.isPending) {
              e.stopPropagation();
              setIsOpen(true);
            }
          }}
        />
      )}
      {type != "Button" && type != "smallButton" && (
        <CloseButton
          boxSize={2}
          _hover={{
            boxSize: 5,
            bg: "red.500",
          }}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
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
              <Button
                colorScheme="red"
                mr={3}
                isDisabled={Delete.isPending}
                onClick={() => {
                  handleDelete();
                  console.log("njkbjm");
                }}
              >
                {Delete.isPending ? "جاري الحذف..." : "حذف"}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
}
export default CustomDelete;
