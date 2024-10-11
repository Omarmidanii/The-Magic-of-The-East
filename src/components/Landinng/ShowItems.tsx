import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import item from "../../entities/item";
import ItemCard from "../Items/ItemCard";
import resizeWindow from "../../services/resizeWindow";
import Lottie from "lottie-react";
import scrollDown from "../../assets/scrollDown.json";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { RED } from "../../constants";

interface Props {
  items: item[];
}
const ShowItems = ({ items }: Props) => {
  const { width } = resizeWindow();

  return (
    <Stack
      bgGradient={`linear(10deg,#AA4455,#992233 )`} // blanchedalmond, honeydew
      bgColor={"#992233"}
      pt={20}
      mb={32}
    >
      <Text
        placeSelf={"center"}
        borderBottom={"2px"}
        borderColor={"#EEAA77"}
        fontFamily="Khebrat"
        mb={20}
        fontSize={32}
        color={"#FFEEaa"}
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
                boxShadow={`0px 5px 20px 7px white`}
                key={index}
                boxSize={300}
                height={305}
                m={5}
                borderRadius={20}
              >
                <ItemCard images={image.images} name={image.name} />
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
        <Link to={"/Home/categories"}>
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
          <Lottie animationData={scrollDown} loop={true} />
        </Link>
      </div>
    </Stack>
  );
};

export default ShowItems;
