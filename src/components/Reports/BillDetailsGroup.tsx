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

export const billItem = [
  { name: "فرشة", workshop: 500000, count: 800000 },
  { name: "فرشة", workshop: 500000, count: 800000 },
  { name: "فرشة", workshop: 500000, count: 800000 },
  { name: "فرشة", workshop: 500000, count: 800000 },
  { name: "فرشة", workshop: 500000, count: 800000 },
  { name: "فرشة", workshop: 500000, count: 800000 },
  { name: "فرشة", workshop: 500000, count: 800000 },
];

const BillDetailsGroup = () => {
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
          {billItem.map((value, index) => (
            <Tr key={index}>
              <Td>{value.name}</Td>
              <Td> {value.count}</Td>
              <Td>{value.workshop}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default BillDetailsGroup;
