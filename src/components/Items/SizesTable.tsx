import {
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Table,
  Text,
  Icon,
} from "@chakra-ui/react";

import { AiOutlineColumnHeight } from "react-icons/ai";
import { AiOutlineColumnWidth } from "react-icons/ai";
import { IoResizeSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import useGroupItemsStore from "../../stores/GroupitemsStore";

interface Props {
  items: { name: string; sizes: Record<string, number> }[] | undefined;
  newItem?: boolean;
}

const SizesTable = ({ items, newItem = false }: Props) => {
  const icons: { [key: string]: React.ComponentType } = {
    الطول: AiOutlineColumnHeight,
    العرض: AiOutlineColumnWidth,
    العمق: IoResizeSharp,
  };

  const { removeItems } = useGroupItemsStore();

  return (
    <TableContainer mt={5}>
      <Table>
        <TableCaption>انتهت القطع (cm)</TableCaption>
        <Thead>
          <Tr>
            <Th pl={14}>الاسم</Th>

            <Th>
              <Text mr={-5} ml={5} fontSize={14}>
                <Icon as={icons["الطول"]} mb={-1} ml={2} />
                الطول
              </Text>
            </Th>
            <Th>
              <Text mr={-5} ml={5} fontSize={14}>
                <Icon as={icons["العرض"]} mb={-1} ml={2} />
                العرض
              </Text>
            </Th>
            <Th>
              <Text mr={-5} ml={5} fontSize={14}>
                <Icon as={icons["العمق"]} mb={-1} ml={2} />
                العمق
              </Text>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {items?.map((val, ind) => (
            <Tr key={ind}>
              <Th>
                {newItem && (
                  <Icon
                    as={RxCross2}
                    borderRadius={20}
                    p={1}
                    mb={-1.5} 
                    mr={-3}
                    boxSize={5}
                    _hover={{ bgColor: "red.600", color: "white" }}
                    cursor="pointer"
                    onClick={() => removeItems(ind)}
                  />
                )}{" "}
                {val.name}{" "}
              </Th>
              <Th>{val.sizes["الطول"]}</Th>
              <Th>{val.sizes["العرض"]}</Th>
              <Th>{val.sizes["العمق"]}</Th>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SizesTable;
