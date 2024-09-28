import {
    Icon,
    Show,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import { AiOutlinePhone } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import EmployerInfo from "./EmployerInfo";

const EmployersTabel = () => {
  const data = [
    { firstname: "عمر" , lastname : "الميداني", phone: "963938625359+", address: "ضاحية قدسيا" , position : "مدير صالة" , salary : "1000000" },
    { firstname: "غنى", lastname : "الحرش" , phone: "963996681459+", address: "مشروع دمر" , position : "مديرة صالة" , salary : "2000000" },
    { firstname: "عمر" , lastname : "الميداني", phone: "963938625359+", address: "ضاحية قدسيا" , position : "مدير صالة" , salary : "1000000" },
    { firstname: "غنى", lastname : "الحرش" , phone: "963996681459+", address: "مشروع دمر" , position : "مديرة صالة" , salary : "2000000" },
   
  ];
  const textAlign = "right";
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr borderBottom={'2px'}>
            <Th fontSize={"medium"} textAlign={textAlign}>
              الاسم
            </Th>
            <Show above="md">
            <Th textAlign={textAlign} fontSize={"medium"}>
              <Icon boxSize={"25px"} as={AiOutlinePhone} pl={1} pt={3} />
              الرقم
            </Th>
            </Show>
            <Th fontSize={"medium"} textAlign={textAlign}>
              المزيد
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((employer, index) => (
            <Tr key={index}>
              <Td textAlign={textAlign}>
                <Icon as={FaUser} ml={2} />
                {employer.firstname} {employer.lastname}
              </Td>
              <Show above="md">
              <Td textAlign={textAlign} textColor={'blue.300'}>{employer.phone}</Td>
              </Show>
              <Td textAlign={textAlign}>
                <EmployerInfo employer={employer} />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default EmployersTabel;
