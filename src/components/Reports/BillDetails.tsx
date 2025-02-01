import { Box } from "@chakra-ui/react";
import BillDetailsHeader from "./BillDetailsHeader";
import BillDetailsGroup from "./BillDetailsGroup";
import usefetchbilldetails from "../../hooks/usefetchbilldetails";

interface Props {
  onToggle: () => void;
  onToggle2: () => void;
}

const BillDetails = ({ BillId, onToggle, onToggle2 }: Props) => {
  const details = BillId ? usefetchbilldetails(BillId) : undefined;
  const bill =
    details && details.data?.data
      ? details.data?.data
      : {
          customer: "",
          date: "",
          total_net_price: 0,
          total_sell_price: 0,
          notes: "",
          groups: [],
        };
  return (
    <Box px={5} py={5}>
      <BillDetailsHeader
        bill={bill}
        onToggle={onToggle}
        onToggle2={onToggle2}
      />
      <BillDetailsGroup billItems={bill.groups} />
    </Box>
  );
};

export default BillDetails;
