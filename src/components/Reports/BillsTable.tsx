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
} from "@chakra-ui/react";
import bill from "../../entities/bill";

interface Props {
  bills: bill[];
  onToggle: () => void
  onToggle2: () => void
}

const BillsTable = ({ bills , onToggle, onToggle2}: Props) => {
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
            <Th isNumeric> رقم الفاتورة #</Th>
          </Tr>
        </Thead>
        <Tbody>
          {bills.map((val, index) => (
            <Tr key={index} onClick={()=>{onToggle(); setTimeout(onToggle2,1000)}}>
              <Td sx={styles.leftCell}>{val.date}</Td>
              <Td sx={styles.midCell} isNumeric>
                {val.customerName}
              </Td>
              <Td sx={styles.rightCell} isNumeric>
                {val.id}
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>التاريح</Th>
            <Th isNumeric>المشتري</Th>
            <Th isNumeric>رقم الفاتورة</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default BillsTable;
