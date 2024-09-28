import {
  Button,
  ButtonGroup,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverTrigger,
  useDisclosure,
} from "@chakra-ui/react";
import { LuSettings2 } from "react-icons/lu";
import { RED } from "../../constants";
import ItemsColorFilter from "./itemsColorFilter";
import ItemsSizesFilter from "./ItemsSizesFilter";
import resizeWindow from "../../services/resizeWindow";

export interface colorProperties {
  base: string;
  border: string;
  checked: boolean;
}

export const colors: Record<string, colorProperties> = {
  yellow: { base: "yellow", border: "#FFD700", checked: false },
  blue: { base: "blue.500", border: "#1E3A8A", checked: true },
  orange: { base: "orange", border: "#FF4500", checked: false },
  pink: { base: "pink", border: "#FF78BF", checked: true },
  red: { base: "red.500", border: "#B22222", checked: false },
  gray: { base: "gray", border: "#63666A", checked: true },
  green: { base: "green", border: "#63666A", checked: true },
};

const ItemsFilter = () => {
  const { width } = resizeWindow();
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement={width >= 500 ? "left-start" : "bottom"}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          leftIcon={<LuSettings2 />}
          borderRadius={20}
          bgColor={RED}
          textColor={"gray.100"}
          _hover={{
            textColor: "black",
            bgColor: "gray.200",
          }}
          boxShadow={'lg'}
          onClick={onToggle}
        >
          فلترة النتائج
        </Button>
      </PopoverTrigger>
      <PopoverContent mr={2} shadow={"xl"}>
        <PopoverBody m={2}>
          <ItemsColorFilter colors={colors} />
          <br />
          <ItemsSizesFilter name="الطول :" max={400} />
          <ItemsSizesFilter name="العرض :" max={200} />
          <ItemsSizesFilter name="الارتفاع :" max={300} />
        </PopoverBody>
        <PopoverFooter display="flex" justifyContent="flex-end">
          <ButtonGroup size="sm">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="green">Apply</Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsFilter;
