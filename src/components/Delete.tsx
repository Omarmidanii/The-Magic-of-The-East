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
} from "@chakra-ui/react";
import { useRef, useState } from "react";
//import useDelete from "../hooks/useDelete";
import { FaTrash } from "react-icons/fa";
import ReactPlayer from "react-player";
import check from "../assets/check.mp4";

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
  /*const showAlert = () => {
    swal({
      title: "هل أنت متأكد؟",
      text: "في حال حذف هذا العنصر لن تتمكن من استعادته!",
      icon: "warning",
      buttons:['إلغاء', 'حذف'],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };*/

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
        <IconButton
          aria-label=""
          boxSize={8}
          icon={<FaTrash />}
          colorScheme="red"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          {showText ? "حذف" : ""}
        </IconButton>
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
              {/*<ReactPlayer
                url={check}
                playing
                loop
                controls={false}
                width="70%"
                height="70%"
              />*/}
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
