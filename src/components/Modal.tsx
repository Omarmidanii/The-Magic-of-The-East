import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props{
    children: ReactNode | ReactNode[];
    color : string;
    buttonLabel: string;
    isOpen: boolean;
    onClose: () => void;
    size?: Record<string, string>;
}
const CustomModal = ({ children, buttonLabel, isOpen , onClose , color, size={lg:'lg' , base:'md'} } : Props) => {
  return (
      <Modal isOpen={isOpen} size={size} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor={color}>
          <ModalHeader mr={8}>{buttonLabel}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
  );
};
export default CustomModal;
