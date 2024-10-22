import {
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Table,
  Show,
} from "@chakra-ui/react";
import bill from "../../entities/bill";

interface Props {
  bills: bill[];
  onToggle: () => void;
  onToggle2: () => void;
}

const BillsTable = ({ bills, onToggle, onToggle2 }: Props) => {
  const styles = {
    table: {
      borderCollapse: "separate",
      borderSpacing: "0 20px",
      paddingX: "10px",
      marginY: "-15px",
    },
    leftCell: {
      borderLeftRadius: "10px",
      backgroundColor: "#EEEEEE",
      padding: "20px",
    },
    midCell: {
      borderRightRadius: { sm: "0px", base: "10px" },
      backgroundColor: "#EEEEEE",
      padding: "20px",
    },
    rightCell: {
      borderRightRadius: "10px",
      backgroundColor: "#EEEEEE",
      padding: "20px",
    },
  };

  return (
    <TableContainer>
      <Table sx={styles.table}>
        <TableCaption>انتهت الفواتير</TableCaption>
        <Thead>
          <Tr>
            <Th>التاريح</Th>
            <Th isNumeric>المشتري</Th>
            <Show above="sm">
              <Th isNumeric> رقم الفاتورة #</Th>
            </Show>
          </Tr>
        </Thead>
        <Tbody>
          {bills.map((val, index) => (
            <Tr
              cursor="pointer"
              key={index}
              onClick={() => {
                onToggle();
                setTimeout(onToggle2, 1000);
              }}
            >
              <Td sx={styles.leftCell}>{val.date}</Td>
              <Td sx={styles.midCell} isNumeric>
                {val.customerName}
              </Td>
              <Show above="sm">
                <Td sx={styles.rightCell} isNumeric>
                  {val.id}
                </Td>
              </Show>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>التاريح</Th>
            <Th isNumeric>المشتري</Th>
            <Show above="sm">
              <Th isNumeric>رقم الفاتورة</Th>
            </Show>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default BillsTable;
