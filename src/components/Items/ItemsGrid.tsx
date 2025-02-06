import { Box, Icon, SimpleGrid, Stack, useDisclosure } from "@chakra-ui/react";
import loading from "../../assets/loading.mp4";
import ItemCard from "./ItemCard";
import OIP from "../../assets/OIP.jpg";
import OIP1 from "../../assets/OIP1.jpg";
import OIP2 from "../../assets/OIP2.jpg";
import OIP3 from "../../assets/OIP3.jpeg";
import OIP4 from "../../assets/OIP4.jpeg";
import React, { useState } from "react";
import CustomModal from "../Modal";
import GroupForm from "./GroupForm";
import useBillGroupStore from "../../stores/BillGroupStore";
import { GiCheckMark } from "react-icons/gi";
import useFetchGroups from "../../hooks/useFetchGroups";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactPlayer from "react-player";
import ItemDrawer from "./ItemDrawer";
import { useNavigate } from "react-router-dom";
import { Card } from "../../hooks/useFetchAllClassGroups";

interface Props {
  width: number;
  height: number;
  customerId?: number;
}

export const itemss = [
  {
    id: 1,
    name: "غرفة ريفي بيج",
    photos: [OIP, OIP1, OIP2, OIP3, OIP4],
    state: "1",
    classification_id: "hi",
  },
  {
    id: 1,
    name: "1غرفة نوم",
    photos: [OIP],
    state: "1",
    classification_id: "hi",
  },
  {
    id: 1,
    name: "2غرفة نوم",
    photos: [OIP, OIP1, OIP3, OIP4, OIP2],
    state: "1",
    classification_id: "hi",
  },
  {
    id: 1,
    name: "غرفة نوم3",
    photos: [OIP, OIP1],
    state: "1",
    classification_id: "hi",
  },
  {
    id: 1,
    name: "4غرفة نوم",
    photos: [OIP, OIP1, OIP2],
    state: "1",
    classification_id: "hi",
  },
  {
    id: 1,
    name: "5غرفة نوم",
    photos: [OIP, OIP4, OIP1, OIP2],
    state: "1",
    classification_id: "hi",
  },
];

const ItemsGrid = ({ width, height, customerId }: Props) => {
  const navigate = useNavigate();
  const currentPathname = window.location.pathname;

  const id = Number(
    currentPathname.substring(
      currentPathname.substring(0, 11) == "/dash/items" ? 12 : 7
    )
  );
  const { data, fetchNextPage, hasNextPage, refetch } = useFetchGroups(
    id ? id : undefined,
    customerId ? customerId : undefined
  );

  const fetchedCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [currentIem, setCurrentItem] = useState<Card>({
    id: 0,
    name: "",
    photos: [""],
    state: "1",
    classification_id: "",
  });

  const { groups, setGroups, removeGroup, pickOne } = useBillGroupStore();

  return (
    <Box>
      <InfiniteScroll
        dataLength={fetchedCount}
        hasMore={hasNextPage}
        next={() => fetchNextPage()}
        loader={
          <Stack placeItems={"center"} my={20} mt={-5}>
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
          <p
            style={{
              textAlign: "center",
              marginBottom:
                currentPathname.substring(0, 11) == "/dash/custo" ? 30 : 70,
              marginTop: 0,
            }}
          >
            <b>لا يوجد سلع اكثر للتحميل</b>
          </p>
        }
        scrollableTarget="k"
      >
        <Box
          borderRadius={20}
          width={width}
          mt={8}
          height={
            currentPathname.substring(0, 11) == "/dash/items"
              ? height - 180
              : currentPathname.substring(0, 11) == "/dash/custo" ||
                currentPathname == "/chooseGroup"
              ? height
              : 380 *
                (fetchedCount /
                  (width >= 1400
                    ? 5
                    : width >= 1180
                    ? 4
                    : width >= 850
                    ? 3
                    : width >= 560
                    ? 2
                    : 1) +
                  (fetchedCount %
                    (width >= 1400
                      ? 5
                      : width >= 1180
                      ? 4
                      : width >= 850
                      ? 3
                      : width >= 560
                      ? 2
                      : 1) >
                  0
                    ? 1
                    : 0))
          }
          overflowY={"auto"}
          id="k"
        >
          <SimpleGrid
            columns={
              width >= 1400
                ? 5
                : width >= 1180
                ? 4
                : width >= 850
                ? 3
                : width >= 560
                ? 2
                : 1
            } //{{  sm: 1, base: 1, md: 2, lg: 3, xl: 4 }}
            spacing={10}
            padding={10}
          >
            {data?.pages.map((page, ind) => (
              <React.Fragment key={ind}>
                {page.data.map((info, index) => (
                  <Box mt={8} key={index}>
                    {!isOpen && currentPathname == "/chooseGroup" && (
                      <span
                        style={{
                          zIndex: 99999,
                          display: "inline-block",
                          position: "sticky",
                        }}
                      >
                        <Icon
                          cursor={"pointer"}
                          as={GiCheckMark}
                          p={0.5}
                          bgColor={"white"}
                          borderRadius={50}
                          boxSize={7}
                          color={
                            groups?.some((group) => group.group.id === info.id)
                              ? "green.300"
                              : "white"
                          }
                          boxShadow={"lg"}
                          borderWidth={"2px"}
                          borderColor={"gray.200"}
                          onClick={() => {
                            groups?.some((group) => group.group.id === info.id)
                              ? removeGroup(info)
                              : (setGroups(info),
                                pickOne ? navigate("/dash/reports") : "");
                          }}
                        />
                      </span>
                    )}
                    <Box
                      mt={-8}
                      key={index}
                      cursor="pointer"
                      _hover={{
                        transform: "scale(1.05)",
                        transition: "transform 0.3s ease",
                      }}
                      onClick={() => {
                        onOpen();
                        setCurrentItem(info);
                      }}
                    >
                      <ItemCard
                        images={info.photos}
                        name={info.name}
                        badge={info.state}
                        gat={info.classification_id}
                      />
                    </Box>
                  </Box>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Box>
      </InfiniteScroll>
      {currentIem.id && (
        <ItemDrawer
          refetch={refetch}
          groupId={currentIem.id}
          isOpen={isOpen}
          onClose={onClose}
          onOpenEdit={onOpenEdit}
        />
      )}
      <CustomModal
        buttonLabel="تعديل مجموعة"
        isOpen={isOpenEdit}
        onClose={onCloseEdit}
        color={"white"}
        size={{ md: "xl", base: "md" }}
      >
        <Box
          h={400}
          mb={10}
          px={5}
          style={{ scrollbarWidth: "thin" }}
          overflow={"auto"}
        >
          <GroupForm
            onSuccess={() => {
              refetch();
              onCloseEdit();
            }}
            groupId={currentIem.id}
          />{" "}
        </Box>
      </CustomModal>
    </Box>
  );
};

export default ItemsGrid;
