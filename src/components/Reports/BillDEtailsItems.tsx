import { Tr, Td } from "@chakra-ui/react";
import { billItem2 } from "./BillDetailsGroup";
import resizeWindow from "../../services/resizeWindow";

interface Props {
  index: number;
}

const BillDetailsitems = ({ index }: Props) => {
  const { width } = resizeWindow();

  return (
    <>
      {billItem2.map((value, ind2) => (
        <Tr key={ind2} bgColor={"#FFEEEE"}>
          {[
            ...Array(width < 600 ? 6 : width < 900 ? 9 : width < 1200 ? 8 : 11),
          ].map((s, ind, arr) => (
            <Td key={ind} borderColor={"gray.200"}>
              {ind == 0 ? (
                value.sell + 10000
              ) : ind == 1 ? (
                value.buy + 50000
              ) : ind == arr.length - 3 ? (
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
