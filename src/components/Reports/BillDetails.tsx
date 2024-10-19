import { Box } from "@chakra-ui/react";
import BillDetailsHeader from "./BillDetailsHeader";
import BillDetailsGroup from "./BillDetailsGroup";

interface Props {
  BillId: number;
  onToggle: () => void;
  onToggle2: () => void;
}

const BillDetails = ({ BillId, onToggle, onToggle2 }: Props) => {
  return (
    <Box px={5} py={5}>
      <BillDetailsHeader onToggle={onToggle} onToggle2={onToggle2} />
      <BillDetailsGroup/>
    </Box>
  );
};

export default BillDetails;
