import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import ItemCard from "../Items/ItemCard";
import resizeWindow from "../../services/resizeWindow";
import Lottie from "lottie-react";
import scrollDown from "../../assets/scrollDown.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "../../hooks/useFetchAllClassGroups";

interface Props {
  items: Card[];
}
const ShowItems = ({ items }: Props) => {
  const { width } = resizeWindow();

  return (
    <Stack
      bgGradient={`linear(10deg,#AA3344,#992233 )`}
      pt={20}
      mb={48}
      mt={10}
    >
      <Text
        placeSelf={"center"}
        borderBottom={"2px"}
        borderColor={"yellow.400"}
        fontFamily="Khebrat"
        mb={20}
        fontSize={32}
        color={"yellow.300"}
      >
        {" "}
        تفقد أخر منتجاتنا المصنعة باحترافية عالية!
      </Text>
      <HStack mb={32} mx={20}>
        {items?.map((image, index) => (
          <>
            {index <
              (width > 1400 ? 5 : width > 1080 ? 4 : width > 770 ? 3 : 1) && (
              <Box
                boxShadow={`0px 5px 20px 1px white`}
                key={index}
                boxSize={300}
                height={280}
                m={5}
                borderRadius={20}
              >
                <ItemCard
                  images={image.photos}
                  name={image.name}
                  badge={image.state}
                  gat={image.classification_id}
                />
              </Box>
            )}
          </>
        ))}
      </HStack>
      <div
        style={{
          width: 60,
          height: 60,
          marginRight: -100,
          placeSelf: "center",
        }}
      >
        <Link to={"/categories"}>
          <Text
            as={motion.div}
            animate={{
              y: [12, 0, 0, 0, 0, 0, 12],
              transition: {
                duration: 1.624,
                repeat: Infinity,
                repeatType: "loop",
              },
            }}
            w={32}
            mr={-8}
            mt={-20}
            color={"white"}
          >
            عرض جميع منتجاتنا
          </Text>{" "}
          <Box boxSize={16}>
            <Lottie animationData={scrollDown} loop={true} />
          </Box>
        </Link>
      </div>
    </Stack>
  );
};

export default ShowItems;
