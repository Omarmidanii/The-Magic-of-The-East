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
  Icon,
  Collapse,
} from "@chakra-ui/react";
import BillDetailsitems from "./BillDEtailsItems";
import { LuArrowDown, LuArrowUp } from "react-icons/lu";
import { useState } from "react";

export const billItem = [
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
];

export const billItem2 = [
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
  { name: "فرشة", buy: 500000, sell: 800000 },
];

const BillDetailsGroup = () => {
  const [openedIndex, setOpenedIndex] = useState(-1);
  return (
    <TableContainer mt={20}>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Collapse in={true}>
            <Tr>
              {[...Array(11)].map((s, ind) => (
                <Th>
                  {ind == 0 ? (
                    "المبيع"
                  ) : ind == 1 ? (
                    "الشراء"
                  ) : ind == 10 ? (
                    "اسم المجموعة"
                  ) : (
                    <></>
                  )}
                </Th>
              ))}
            </Tr>
          </Collapse>
        </Thead>
        <Tbody>
          {billItem.map((value, index) => (
            <>
              <Collapse in={true}>
                <Tr key={index}>
                  {[...Array(10)].map((s, ind) => (
                    <Td>
                      {ind == 0 ? (
                        value.sell
                      ) : ind == 1 ? (
                        value.buy
                      ) : ind == 9 ? (
                        <>
                          <Icon
                            as={index == openedIndex ? LuArrowUp : LuArrowDown}
                            mr={5}
                            mb={-1}
                            onClick={() =>
                              setOpenedIndex(index == openedIndex ? -1 : index)
                            }
                          />
                          {value.name}
                        </>
                      ) : (
                        <></>
                      )}
                    </Td>
                  ))}
                </Tr>
              </Collapse>

              <Collapse in={openedIndex == index}>
                <BillDetailsitems index={index} />
              </Collapse>
            </>
          ))}
        </Tbody>

        <Tfoot>
          <Collapse in={true}>
            <Tr>
              {[...Array(11)].map((s, ind) => (
                <Th>
                  {ind == 0 ? (
                    "المبيع"
                  ) : ind == 1 ? (
                    "الشراء"
                  ) : ind == 10 ? (
                    "اسم المجموعة"
                  ) : (
                    <></>
                  )}
                </Th>
              ))}
            </Tr>
          </Collapse>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};

export default BillDetailsGroup;
