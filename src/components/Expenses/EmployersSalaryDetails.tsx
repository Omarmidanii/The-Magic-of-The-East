import {
  Box,
  Icon,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tooltip,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import loading from "../../assets/loading.mp4";
import React, { useState } from "react";
import CustomDelete from "../Delete";
import { BsExclamationCircle } from "react-icons/bs";
import CustomModal from "../Modal";
import SalaryDetailsModal from "./SalaryDetailsModal";
import useFetchEmplyeesExpenses from "../../hooks/useFetchEmplyeesExpenses";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactPlayer from "react-player";
import { Error } from "../Error";

interface Props {
  month: string;
}

const EmployersSalaryDetails = ({ month }: Props) => {
  const { data, error, fetchNextPage, hasNextPage, refetch } =
    useFetchEmplyeesExpenses(month);
  if (error) return <Error message={error.message} />;

  const fetchedCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  const { isOpen, onClose, onOpen } = useDisclosure();
  const [emp, setEmp] = useState({ id: 0, name: "" });

  return (
    <Box
      mb={16}
      mr={4}
      ml={16}
      borderColor={"blue.500"}
      borderWidth={"1px"}
      borderRadius={10}
    >
      <TableContainer
        id="scrollableTable"
        overflowY={"auto"}
        maxH={window.innerHeight / 1.36}
      >
        <InfiniteScroll
          dataLength={fetchedCount}
          hasMore={hasNextPage}
          next={() => fetchNextPage()}
          loader={
            <Stack placeItems={"center"} my={5}>
              <ReactPlayer
                url={loading}
                playing
                loop
                controls={false}
                width="88px"
                height="88px"
                muted
              />{" "}
            </Stack>
          }
          endMessage={
            <p style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
              <b>لا يوجد موظفين اكثر للتحميل</b>
            </p>
          }
          scrollableTarget="scrollableTable"
        >
          <Table variant="simple" width="100%">
            <Thead>
              <Tr>
                <Th textAlign={"center"}>اسم العامل</Th>
                <Th textAlign={"center"}>الراتب</Th>
                <Th textAlign={"center"}>المكافآت+الخصومات</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.pages.map((page, ind) => (
                <React.Fragment key={ind}>
                  {page.data.map((em, Index) => (
                    <React.Fragment key={Index}>
                      <Tr>
                        <Td>
                          <CustomDelete
                            refetch={refetch}
                            type=""
                            ID={em.id}
                            endpoint="totaladditionals"
                          />
                          <Text textAlign={"center"} pr={2}>
                            {em.employer_name}
                          </Text>
                        </Td>
                        <Td textAlign={"center"}>{em.salary}</Td>
                        <Td textAlign={"center"}>
                          {em.total}{" "}
                          <Tooltip
                            label={"تفاصيل مكافئات وخصومات " + em.employer_name}
                            borderRadius={20}
                            textColor={"gray.200"}
                            bgColor={"gray"}
                            placement="bottom"
                          >
                            <button>
                              <Icon
                                onClick={() => {
                                  setEmp({
                                    id: em.employee_id,
                                    name: em.employer_name,
                                  });
                                  onOpen();
                                }}
                                as={BsExclamationCircle}
                                mr={2}
                                mb={-0.5}
                                cursor={"pointer"}
                                color={"gray.500"}
                              />
                            </button>
                          </Tooltip>
                        </Td>
                      </Tr>
                    </React.Fragment>
                  ))}
                </React.Fragment>
              ))}
            </Tbody>
          </Table>
        </InfiniteScroll>
      </TableContainer>
      <CustomModal
        buttonLabel="تفاصيل مكافئات وخصومات "
        isOpen={isOpen}
        onClose={onClose}
        color={"white"}
      >
        <SalaryDetailsModal month={month} empId={emp.id} empName={emp.name} />
      </CustomModal>
    </Box>
  );
};

export default EmployersSalaryDetails;
