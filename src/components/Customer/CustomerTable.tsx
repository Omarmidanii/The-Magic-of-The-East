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
import {AiOutlinePhone } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import CustomerItemsDrawer from "./CustomerItemsDrawer";
const CustomerTable = () => {
  const data = [
    { firstname: "عمر",lastname: "الميداني", phone: "963938625359+", address: "ضاحية قدسيا" },
    { firstname: "غنى",lastname: "الحرش", phone: "963996681459+", address: "dummer" },
    { firstname: "عمر",lastname: "الميداني", phone: "963938625359+", address: "ضاحية قدسيا" },
    { firstname: "غنى",lastname: "الحرش", phone: "963996681459+", address: "dummer" },
    { firstname: "عمر",lastname: "الميداني", phone: "963938625359+", address: "ضاحية قدسيا" },
    { firstname: "غنى",lastname: "الحرش", phone: "963996681459+", address: "dummer" },
    { firstname: "عمر",lastname: "الميداني", phone: "963938625359+", address: "ضاحية قدسيا" },
    { firstname: "غنى",lastname: "الحرش", phone: "963996681459+", address: "dummer" },

  
  ];
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr  >
            <Th></Th>
            <Th fontSize={'medium'} textAlign={'center'} >
             الاسم
            </Th>
            <Show above="md">
            <Th textAlign={'center'} fontSize={'medium'}><Icon boxSize={"25px"} as={AiOutlinePhone} pl={1} pt={3} />الرقم</Th>
            <Th textAlign={'center'} fontSize={'medium'}><Icon boxSize={"25px"} as={MdLocationOn} pl={1} pt={3} />المنطقة</Th>
            </Show>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((customer, index) => (
            <Tr key={index}>
              <Td>{index + 1}</Td>
              <Td  textAlign={'center'}>{customer.firstname + " " + customer.lastname}</Td>
              <Show above="md">
              <Td textAlign={'center'}>{customer.phone}</Td>
              <Td textAlign={'center'}>{customer.address}</Td>
              </Show>
              <Td><CustomerItemsDrawer  customer={customer}/></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default CustomerTable;
