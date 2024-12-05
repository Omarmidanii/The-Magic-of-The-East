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
import { FaPhoneFlip } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import CustomerItemsDrawer from "./CustomerItemsDrawer";
import { PiBasketFill } from "react-icons/pi";
import { TableSkeleton } from "../Skeleton/TableSkeleton";
import { Error } from "../Error";
import InfiniteScroll from "react-infinite-scroll-component";
import React from "react";
import loading from "../../assets/loading.mp4";
import ReactPlayer from "react-player";
import useFetchAllCustomers from "../../hooks/useFetchAllCustomers";

const CustomerTable = () => {
  const { data, isLoading, error, fetchNextPage, refetch, hasNextPage } =
    useFetchAllCustomers();
  if (isLoading) return <TableSkeleton />;
  if (error) return <Error message={error.message} />;
  const fetchedBranchesCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;
  return (
    <TableContainer
      id="scrollableTable"
      overflowY={"auto"}
      maxH={window.innerHeight / 1.36}
    >
      <InfiniteScroll
        dataLength={fetchedBranchesCount}
        next={fetchNextPage}
        hasMore={hasNextPage}
        loader={
          <Stack placeItems={"center"} my={5}>
            <ReactPlayer
              url={loading}
              playing
              loop
              controls={false}
              width="7%"
              height="7%"
              muted
            />{" "}
          </Stack>
        }
        endMessage={
          <p style={{ textAlign: "center", marginBottom: 20, marginTop: 20 }}>
            <b>لا يوجد زبائن اكثر للعرض</b>
          </p>
        }
        scrollableTarget="scrollableTable"
      >
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
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.data.map((customer, index) => (
                  <Tr key={index}>
                    <Td>{customer.id}</Td>
                    <Td textAlign={"center"}>
                      {customer.firstname + " " + customer.lastname}
                    </Td>
                    <Show above="md">
                      <Td textAlign={"center"}>{customer.phonenumber}</Td>
                      <Td textAlign={"center"}>{customer.address}</Td>
                    </Show>
                    <Td paddingX={4}>
                      <CustomerItemsDrawer customer={customer} fun={refetch} />
                    </Td>
                  </Tr>
                ))}
              </React.Fragment>
            ))}
          </Tbody>
        </Table>
      </InfiniteScroll>
    </TableContainer>
  );
};

export default CustomerTable;
