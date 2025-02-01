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
          boxShadow={"lg"}
          onClick={onToggle}
        >
          فلترة النتائج
        </Button>
      </PopoverTrigger>
      <PopoverContent mr={2} shadow={"xl"}>
        <PopoverBody m={2}>
          <ItemsColorFilter filter={true} />
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
