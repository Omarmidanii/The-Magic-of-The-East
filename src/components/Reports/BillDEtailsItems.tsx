import { Tr, Td } from "@chakra-ui/react";
import { billItem2 } from "./BillDetailsGroup";

interface Props {
  index: number;
}

const BillDetailsitems = ({ index }: Props) => {
  return (
    <>
      {billItem2.map((value) => (
        <Tr bgColor={"#FFEEEE"}>
          {[...Array(11)].map((s, ind) => (
            <Td borderColor={"gray.200"}>
              {ind == 0 ? (
                value.sell + 10000
              ) : ind == 1 ? (
                value.buy + 50000
              ) : ind == 8 ? (
                value.name + index
              ) : (
                <></>
              )}
            </Td>
          ))}
        </Tr>
      ))}
    </>
  );
};

export default BillDetailsitems;
