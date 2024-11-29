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
  Icon,
} from "@chakra-ui/react";
import bill from "../../entities/bill";
import { RxCross2 } from "react-icons/rx";

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
      paddingRight: "20px",
      paddingLeft: "0px",
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
            <Th w={2}></Th>
          </Tr>
        </Thead>
        <Tbody>
          {bills.map((val, index) => (
            <Tr cursor="pointer" key={index}>
              <Td
                sx={styles.leftCell}
                onClick={() => {
                  onToggle();
                  setTimeout(onToggle2, 1000);
                }}
              >
                {val.date}
              </Td>
              <Td
                sx={styles.midCell}
                isNumeric
                onClick={() => {
                  onToggle();
                  setTimeout(onToggle2, 1000);
                }}
              >
                {val.customerName}
              </Td>
              <Show above="sm">
                <Td
                  sx={styles.midCell}
                  isNumeric
                  onClick={() => {
                    onToggle();
                    setTimeout(onToggle2, 1000);
                  }}
                >
                  {val.id}
                </Td>
              </Show>
              <Td sx={styles.rightCell} w={0} isNumeric>
                {" "}
                <Icon
                  as={RxCross2}
                  borderRadius={20}
                  p={0.5}
                  mt={1}
                  mb={-0.5}
                  boxSize={5}
                  _hover={{ bgColor: "red.600", color: "white" }}
                  cursor="pointer"
                  onClick={() => {
                    console.log(index);
                  }}
                />
              </Td>
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
