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

interface Props {
  items: { name: string; sizes: Record<string, number> }[] | undefined;
}

const SizesTable = ({ items }: Props) => {
  const icons: { [key: string]: React.ComponentType } = {
    الطول: AiOutlineColumnHeight,
    العرض: AiOutlineColumnWidth,
    العمق: IoResizeSharp,
  };

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
              <Th>{val.name} </Th>
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
