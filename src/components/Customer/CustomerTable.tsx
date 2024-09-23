import {
  Icon,
  Show,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import CustomerItemsDrawer from "./CustomerItemsDrawer";
import { PiBasketFill } from "react-icons/pi";
const CustomerTable = () => {
  const data = [
    { name: "عمر الميداني", phone: "963938625359+", address: "ضاحية قدسيا" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
    { name: "omar", phone: "963938625359+", address: "Qudsaya suburb" },
    { name: "ghina", phone: "963996681459+", address: "dummer" },
  ];
  return (
    <TableContainer overflowY={"auto"} height={window.innerHeight / 1.36}>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th fontSize={"medium"} textAlign={"center"}>
              الاسم
            </Th>
            <Show above="md">
              <Th textAlign={"center"} fontSize={"medium"}>
                <Icon
                  boxSize={"16px"}
                  as={FaPhoneFlip}
                  pl={1}
                  ml={0.5}
                  marginBottom={-0.5}
                />
                الرقم
              </Th>
              <Th textAlign={"center"} fontSize={"medium"}>
                <Icon
                  boxSize={"19px"}
                  as={MdLocationOn}
                  pl={1}
                  marginBottom={-1}
                />
                المنطقة
              </Th>
            </Show>
            <Th fontSize={"medium"}>
              <Icon boxSize={"23px"} as={PiBasketFill} marginBottom={-1.5} />
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((customer, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td textAlign={"center"}>{customer.name}</Td>
              <Show above="md">
                <Td textAlign={"center"}>{customer.phone}</Td>
                <Td textAlign={"center"}>{customer.address}</Td>
              </Show>
              <Td paddingX={4}>
                <CustomerItemsDrawer customer={customer} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
