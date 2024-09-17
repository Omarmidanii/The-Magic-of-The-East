import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props{
    children: ReactNode | ReactNode[];
    color : string;
    buttonLabel: string;
    isOpen: boolean;
    onClose: () => void;
}
const CustomModal = ({ children, buttonLabel, isOpen , onClose , color } : Props) => {
  return (
      <Modal isOpen={isOpen} size={{lg:'lg' , base:'md'}} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={color}>
          <ModalHeader color={'white'} mr={8}>{buttonLabel}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
  );
};
export default CustomModal;
