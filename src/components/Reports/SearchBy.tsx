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
import { RED } from "../../constants";
import resizeWindow from "../../services/resizeWindow";
import SearchPopoverBody from "./SearchPopoverBody";

const SearchBy = () => {
  const { width } = resizeWindow();
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Popover
      returnFocusOnClose={false}
      isOpen={isOpen}
      onClose={onClose}
      placement={width >= 500 ? "right-start" : "bottom"}
      closeOnBlur={false}
    >
      <PopoverTrigger>
        <Button
          colorScheme="red"
          onClick={onToggle}
          bgColor={RED}
          borderRadius={20}
        >
          {" "}
          بحث حسب...
        </Button>
      </PopoverTrigger>
      <PopoverContent mr={2} shadow={"xl"} w={"sm"}>
        <PopoverBody m={2}>
          <SearchPopoverBody />
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

export default SearchBy;
