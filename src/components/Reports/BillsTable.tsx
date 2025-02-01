import {
  TableContainer,
  TableCaption,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Table,
  Show,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import loading from "../../assets/loading.mp4";
import ReactPlayer from "react-player";
import InfiniteScroll from "react-infinite-scroll-component";
import resizeWindow from "../../services/resizeWindow";
import { Error } from "../Error";
import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import indexResponse from "../../entities";
import billInfo from "../../entities/billinfo";
import CustomError from "../../entities/customeError";
import CustomDelete from "../Delete";

interface Props {
  onToggle: (id: number) => void;
  onToggle2: () => void;
  bills: UseInfiniteQueryResult<
    InfiniteData<indexResponse<billInfo>, unknown>,
    CustomError
  >;
}

const BillsTable = ({ bills, onToggle, onToggle2 }: Props) => {
  const styles = {
    table: {
      borderCollapse: "separate",
      borderSpacing: "0 20px",
      paddingX: "10px",
      marginY: "-15px",
    },
    leftCell: {
      borderLeftRadius: "10px",
      backgroundColor: "#EEEEEE",
      padding: "20px",
    },
    midCell: {
      borderRightRadius: { sm: "0px", base: "10px" },
      backgroundColor: "#EEEEEE",
      padding: "20px",
    },
    rightCell: {
      borderRightRadius: "10px",
      backgroundColor: "#EEEEEE",
      paddingRight: "20px",
      paddingLeft: "0px",
    },
  };

  if (bills.error) return <Error message={bills.error.message} />;

  const fetchedCount =
    bills.data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  const { height } = resizeWindow();

  return (
    <TableContainer
      id="scrollableTable"
      overflowY={"auto"}
      h={Math.max(height - 220, 300)}
      sx={{ scrollbarWidth: "thin" }}
    >
      <InfiniteScroll
        dataLength={fetchedCount}
        hasMore={bills.hasNextPage}
        next={() => bills.fetchNextPage()}
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
        scrollableTarget="scrollableTable"
      >
        <Table sx={styles.table}>
          <TableCaption>انتهت الفواتير</TableCaption>
          <Thead>
            <Tr>
              <Th>التاريح</Th>
              <Th isNumeric>المشتري</Th>
              <Show above="sm">
                <Th isNumeric> رقم الفاتورة #</Th>
              </Show>
              <Th w={2}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {bills?.data?.pages?.map((page, ind) => (
              <React.Fragment key={ind}>
                {page.data.map((val, index) => (
                  <Tr cursor="pointer" key={index}>
                    <Td
                      sx={styles.leftCell}
                      onClick={() => {
                        onToggle(val.id);
                        setTimeout(onToggle2, 1000);
                      }}
                    >
                      {val.date}
                    </Td>
                    <Td
                      sx={styles.midCell}
                      isNumeric
                      onClick={() => {
                        onToggle(val.id);
                        setTimeout(onToggle2, 1000);
                      }}
                    >
                      {val.customer}
                    </Td>
                    <Show above="sm">
                      <Td
                        sx={styles.midCell}
                        isNumeric
                        onClick={() => {
                          onToggle(val.id);
                          setTimeout(onToggle2, 1000);
                        }}
                      >
                        {val.id}
                      </Td>
                    </Show>
                    <Td sx={styles.rightCell} w={0} isNumeric>
                      {" "}
                      <CustomDelete
                        ID={val.id || -1}
                        refetch={bills.refetch}
                        endpoint="invoices"
                        type="smallButton"
                      />
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

export default BillsTable;
