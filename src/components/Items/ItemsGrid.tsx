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

interface Props {
  width: number;
  height: number;
}

export const itemss = [
  {
    name: "غرفة ريفي بيج",
    description:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln asjx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln        asjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1, OIP2, OIP3, OIP4],
    colors: [1, 5, 3, 5, 6, 8, 10],
    items: [{ name: "تخت", sizes: { الطول: 205, العرض: 100, العمق: 120 } }],
  },
  {
    name: "1غرفة نوم",
    description:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln asjx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln        asjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP],
    colors: [1, 5, 3, 5, 6, 8],
    items: [{ name: "تخت", sizes: { الطول: 205, العرض: 100, العمق: 120 } }],
  },
  {
    name: "2غرفة نوم",
    description:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajs        xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1, OIP3, OIP4, OIP2],
    colors: [1, 5, 3, 8],
    items: [{ name: "تخت", sizes: { الطول: 205, العرض: 100, العمق: 120 } }],
  },
  {
    name: "غرفة نوم3",
    description:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1],
    colors: [1, 5, 3, 5, 6, 13],
    items: [{ name: "تخت", sizes: { الطول: 205, العرض: 100, العمق: 120 } }],
  },
  {
    name: "4غرفة نوم",
    description:
      " هايisd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa      ",
    images: [OIP, OIP1, OIP2],
    colors: [1, 5, 6, 8],
    items: [{ name: "تخت", sizes: { الطول: 205, العرض: 100, العمق: 120 } }],
  },
  {
    name: "5غرفة نوم",
    description:
      "isd cnsaldncsal nlasln asjx lasxsajl asl xlajs xaljsxjla xja xlas  xlsakxalx salj xa isd cnsaldncsal nlasln asjx lasxsajl asl xlajsxaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlasln ajx lasxsajl        asl xlajs xaljsxjla xja xlas xlsakxalx salj xaisd cnsaldncsal nlaslnasjx lasxsajl asl xlajs xaljsxjla xja xlas xlsakxalx salj xa",
    images: [OIP, OIP4, OIP1, OIP2],
    colors: [1, 5, 3, 5, 6, 8],
    items: [{ name: "تخت", sizes: { الطول: 205, العرض: 100, العمق: 120 } }],
  },
];

const ItemsGrid = ({ width, height }: Props) => {
  const currentPathname = window.location.pathname;

  const id = Number(
    currentPathname.substring(
      currentPathname.substring(0, 11) == "/dash/items" ? 12 : 7
    )
  );
  console.log(id);

  const { data, fetchNextPage, hasNextPage } = useFetchGroups(
    id ? id : undefined
  );

  const fetchedCount =
    data?.pages.reduce((total, page) => total + page.data.length, 0) || 0;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenEdit,
    onOpen: onOpenEdit,
    onClose: onCloseEdit,
  } = useDisclosure();
  const [currentIem, setCurrentItem] = useState({
    id: 0,
    name: "",
    photos: [""],
  });

  const { groups, setGroups, removeGroup } = useBillGroupStore();

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
          <p style={{ textAlign: "center", marginBottom: 70, marginTop: 0 }}>
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
              : height * (fetchedCount / 6.2)
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
                            groups?.some((group) => group.name === info.name)
                              ? "green.300"
                              : "white"
                          }
                          boxShadow={"lg"}
                          borderWidth={"2px"}
                          borderColor={"gray.200"}
                          onClick={() => {
                            groups?.some((group) => group.name === info.name)
                              ? removeGroup(info)
                              : setGroups(info);
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
                      <ItemCard images={info.photos} name={info.name} />
                    </Box>
                  </Box>
                ))}
              </React.Fragment>
            ))}
          </SimpleGrid>
        </Box>
      </InfiniteScroll>
      <ItemDrawer
        groupId={currentIem.id}
        isOpen={isOpen}
        onClose={onClose}
        onOpenEdit={onOpenEdit}
      />
      <CustomModal
        buttonLabel="اضافة مجموعة"
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
          <GroupForm groupId={currentIem.id} />{" "}
        </Box>
      </CustomModal>
    </Box>
  );
};

export default ItemsGrid;
