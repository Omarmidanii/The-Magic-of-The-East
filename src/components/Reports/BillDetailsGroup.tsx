import {
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
} from "@chakra-ui/react";
import { BillItem } from "../../entities/bill";

interface Props {
  billItems: BillItem[];
}
const BillDetailsGroup = ({ billItems }: Props) => {
  return (
    <TableContainer
      mt={20}
      sx={{
        direction: "rtl",
        textAlign: "right",
      }}
    >
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>اسم المجموعة</Th>
            <Th> العدد</Th>
            <Th>الورشة</Th>
          </Tr>
        </Thead>
        <Tbody>
          {billItems.map((value, index) => (
            <Tr key={index}>
              <Td>{value.name}</Td>
              <Td> {value.quantity}</Td>
              <Td>{value.workshop}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BillDetailsGroup;
