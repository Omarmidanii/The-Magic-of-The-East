import {
  Icon,
  Show,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { FaUser } from "react-icons/fa";
import EmployerInfo from "./EmployerInfo";
import InfiniteScroll from "react-infinite-scroll-component";
import useFetchEmplyees from "../../hooks/useFetchEmplyees";
import React from "react";
import loading from "../../assets/loading.mp4";
import ReactPlayer from "react-player";
import { Error } from "../Error";

export const data = [
  {
    firstname: "عمر",
    lastname: "الميداني",
    phone: "963938625359+",
    address: "ضاحية قدسيا",
    position: "مدير صالة",
    salary: "1000000",
  },
  {
    firstname: "غنى",
    lastname: "الحرش",
    phone: "963996681459+",
    address: "مشروع دمر",
    position: "مديرة صالة",
    salary: "2000000",
  },
  {
    firstname: "عمر",
    lastname: "الميداني",
    phone: "963938625359+",
    address: "ضاحية قدسيا",
    position: "مدير صالة",
    salary: "1000000",
  },
  {
    firstname: "غنى",
    lastname: "الحرش",
    phone: "963996681459+",
    address: "مشروع دمر",
    position: "مديرة صالة",
    salary: "2000000",
  },
];

const EmployersTabel = () => {
  const textAlign = "right";

  const { data, refetch, error, fetchNextPage, hasNextPage } =
    useFetchEmplyees();

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
        <Table>
          <Thead>
            <Tr>
              <Th fontSize={"medium"} textAlign={textAlign}>
                الاسم
              </Th>
              <Show above="md">
                <Th textAlign={textAlign} fontSize={"medium"}>
                  الرقم
                </Th>
              </Show>
              <Th fontSize={"medium"} textAlign={textAlign}>
                المزيد
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.pages.map((page, ind) => (
              <React.Fragment key={ind}>
                {page.data.map((employer, index) => (
                  <Tr key={index}>
                    <Td textAlign={textAlign}>
                      <Icon as={FaUser} ml={2} />
                      {employer.firstname} {employer.lastname}
                    </Td>
                    <Show above="md">
                      <Td textAlign={textAlign} textColor={"blue.300"}>
                        {employer.phonenumber}
                      </Td>
                    </Show>
                    <Td textAlign={textAlign}>
                      <EmployerInfo
                        employer={employer}
                        fun={() => {
                          refetch();
                        }}
                      />
                    </Td>
                  </Tr>
                ))}{" "}
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </InfiniteScroll>
    </TableContainer>
  );
};

export default EmployersTabel;
