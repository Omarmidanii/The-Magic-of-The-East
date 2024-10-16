import { Box, Button, Icon } from "@chakra-ui/react";
import { PiArrowRightBold } from "react-icons/pi";

interface Props {
  onToggle: () => void;
  onToggle2: () => void;
}

const BillDetails = ({ onToggle, onToggle2 }: Props) => {
  return (
    <Box px={5} py={5}>
      <Button
        px={-1}
        onClick={() => {
          onToggle();
          setTimeout(onToggle2, 1000);
        }}
      >
        <Icon as={PiArrowRightBold} boxSize={5} />
      </Button>
<br/><br/><br/><br/><br/>
      HI ITS DETAILS
    </Box>
  );
};

export default BillDetails;
