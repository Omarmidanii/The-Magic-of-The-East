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
import resizeWindow from "../../services/resizeWindow";

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
  const { width } = resizeWindow();
  const [openedIndex, setOpenedIndex] = useState(-1);
  return (
    <TableContainer mt={20}>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Collapse in={true}>
            <Tr>
              {[
                ...Array(
                  width < 600 ? 6 : width < 900 ? 9 : width < 1200 ? 8 : 11
                ),
              ].map((_, ind, arr) => (
                <Th key={ind}>
                  {ind == 0 ? (
                    "المبيع"
                  ) : ind == 1 ? (
                    "الشراء"
                  ) : ind == arr.length - 1 ? (
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
            <div key={index}>
              <Collapse in={true}>
                <Tr>
                  {[
                    ...Array(
                      width < 600 ? 5 : width < 900 ? 8 : width < 1200 ? 7 : 10
                    ),
                  ].map((_, ind, arr) => (
                    <Td key={ind}>
                      {ind == 0 ? (
                        value.sell
                      ) : ind == 1 ? (
                        value.buy
                      ) : ind == arr.length - 1 ? (
                        <>
                          <Icon
                            cursor="pointer"
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
            </div>
          ))}
        </Tbody>

        <Tfoot>
          <Collapse in={true}>
            <Tr>
              {[
                ...Array(
                  width < 600 ? 6 : width < 900 ? 9 : width < 1200 ? 8 : 11
                ),
              ].map((_, ind, arr) => (
                <Th key={ind}>
                  {ind == 0 ? (
                    "المبيع"
                  ) : ind == 1 ? (
                    "الشراء"
                  ) : ind == arr.length - 1 ? (
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
