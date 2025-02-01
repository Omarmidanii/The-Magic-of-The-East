import {
  Collapse,
  HStack,
  Icon,
  IconButton,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import loading from "../../assets/loading.mp4";
import React, { useState } from "react";
import { BsFillCalendar2MonthFill } from "react-icons/bs";
import EmployersSalaryDetails from "./EmployersSalaryDetails";
import WarehouseExpensesDetails from "./WarehouseExpensesDetails";
import { IoArrowDownCircleOutline } from "react-icons/io5";
import { IconType } from "react-icons/lib";
import useFetchExpesesTable from "../../hooks/useFetchExpesesTable";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactPlayer from "react-player";
import { Error } from "../Error";
interface ExpandedRows {
  [key: string]: "salary" | "expenses" | "bills" | "rent" | null;
}

interface Props {
  headers: {
    icon: IconType;
    name: string;
    enName: "salary" | "expenses" | "bills" | "rent";
  }[];
}


const ExpensesTable = ({ headers }: Props) => {
  const [expandedRows, setExpandedRows] = useState<ExpandedRows>({});

  const handleRowToggle = (
    month: string,
    type: "salary" | "expenses" | "bills" | "rent"
  ) => {
    setExpandedRows((prev) => ({
      ...prev,
      [month]: prev[month] === type ? null : type,
    }));
  };
  const { data, error, fetchNextPage, hasNextPage } = useFetchExpesesTable(headers[0].enName == "salary" ? 1 : 2);

  if (error) return <Error message={error.message} />;
  
    const fetchedCount =
      data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  return (
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
        <Table
          variant="simple"
          width="100%"
          size={{ base: "sm", md: "md", lg: "lg" }}
        >
          <Thead>
            <Tr>
              <Th>
                <HStack justifyContent={"center"}>
                  <BsFillCalendar2MonthFill />
                  <Text>الشهر </Text>
                </HStack>
              </Th>
              {headers.map((val, ind) => (
                <Th key={ind}>
                  <HStack justifyContent={"center"}>
                    <Icon as={val.icon} />
                    <Text>{val.name} </Text>
                  </HStack>
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {data?.pages.map((page, ind) => (
              <React.Fragment key={ind}>
                {page.data.map((item, index) => (
                  <React.Fragment key={index}>
                    <Tr>
                      <Td>{item.date}</Td>
                      <Td>
                        <HStack justifyContent={"center"}>
                          <Text>{item.total_2}</Text>
                          <IconButton
                            _hover={{
                              bgColor: "yellow.100",
                              color: "gray.700",
                            }}
                            color={"gray.600"}
                            borderRadius={50}
                            cursor="pointer"
                            bg={"none"}
                            onClick={() =>
                              handleRowToggle(item.date, headers[0].enName)
                            }
                            boxSize={"30px"}
                            as={IoArrowDownCircleOutline}
                            aria-label=""
                          />
                        </HStack>
                      </Td>
                      <Td>
                        <HStack justifyContent={"center"}>
                          <Text>{item.total_1}</Text>
                          <IconButton
                            _hover={{
                              bgColor: "yellow.100",
                              color: "gray.700",
                            }}
                            color={"gray.600"}
                            borderRadius={50}
                            cursor="pointer"
                            bg={"none"}
                            onClick={() =>
                              handleRowToggle(item.date, headers[1].enName)
                            }
                            boxSize={"30px"}
                            as={IoArrowDownCircleOutline}
                            aria-label=""
                          />
                        </HStack>
                      </Td>
                    </Tr>
                    <Tr>
                      <Td colSpan={3}>
                        <Collapse in={expandedRows[item.date] === "salary"}>
                          <EmployersSalaryDetails
                            month={
                              expandedRows[item.date] === "salary"
                                ? item.date
                                : data.pages[0].data[0].date
                            }
                          />
                        </Collapse>
                        <Collapse
                          in={
                            expandedRows[item.date] != "salary" &&
                            expandedRows[item.date] != null
                          }
                        >
                          <WarehouseExpensesDetails
                            name={expandedRows[item.date] || ""}
                            month={
                              expandedRows[item.date] != "salary"
                                ? item.date
                                : data.pages[0].data[0].date
                            }
                          />
                        </Collapse>
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
  );
};

export default ExpensesTable;
