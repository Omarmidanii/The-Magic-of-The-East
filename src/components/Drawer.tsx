import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";
interface Props {
  headerColor?: string;
  bodyColor?: string;
  isOpen: boolean;
  onClose: () => void;
  body: ReactNode | ReactNode[];
  header: ReactNode | ReactNode[];
}
const CustomDrawer = ({
  isOpen,
  onClose,
  headerColor: HeaderColor,
  bodyColor: BodyColor,
  body,
  header,
}: Props) => {
  return (
    <Drawer isOpen={isOpen} placement={"left"} onClose={onClose} size={{base : 'sm' , md: 'md' , lg:'lg'}}>
      <DrawerOverlay />
      <DrawerContent m={5}  >
        <DrawerCloseButton />
        <DrawerHeader  bgColor={HeaderColor}>{header}</DrawerHeader>
        <DrawerBody bgColor={BodyColor} overflowY={"auto"} maxHeight={"100vh"}>
          {body}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
