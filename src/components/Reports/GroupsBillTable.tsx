import {
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
  Icon,
  Image,
  Text,
  HStack,
  Input,
} from "@chakra-ui/react";
import { RxCross2 } from "react-icons/rx";
import useBillGroupStore from "../../stores/BillGroupStore";
import { number } from "yup";

const GroupsBillTable = () => {
  const { groups, removeGroup, changeCount } = useBillGroupStore();

  console.log(groups);
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th w={2}></Th>
            <Th mr={-8}> المجموعة</Th>
            <Th>العدد</Th>
          </Tr>
        </Thead>
        <Tbody>
          {groups?.map((val, index) => (
            <Tr cursor="pointer" key={index}>
              <Td w={0}>
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
                    removeGroup(val.group);
                  }}
                />
              </Td>
              <Td>
                <HStack>
                  <Image
                    borderRadius={10}
                    boxSize={8}
                    mr={-8}
                    src={val.group.photos[0]}
                  />
                  <Text>{val.group.name}</Text>
                </HStack>
              </Td>
              <Td>
                <Input
                  type="number"
                  onChange={(e) => {
                    changeCount(Number(e.target.value), val.group.id);
                  }}
                  value={val.count}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default GroupsBillTable;
