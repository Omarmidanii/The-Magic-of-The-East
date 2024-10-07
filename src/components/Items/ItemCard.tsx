import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import Rating from "../Rating";

interface Props {
  name: string | undefined;
  images: string[];
}

const ItemCard = ({ name, images }: Props) => {
  return (
    <Card
      p={2}
      overflow="hidden"
      borderRadius={20}
      _hover={{
        transform: "scale(1.05)",
        transition: "transform 0.3s ease",
      }}
      boxShadow={`0`}
      //bgGradient={`linear(210deg,gray.100 , white  )`}
      //bgColor={'#FFFFE0'}
    >
      <Stack>
        <Box>
          <Grid
            templateAreas={
              images.length >= 3
                ? `
                "side up"
                "side down"
              `
                : images.length == 2
                ? `"side up"`
                : `"side"`
            }
            height={"200"}
            templateRows="repeat(5, 1fr)"
          >
            <GridItem
              m={1}
              boxShadow={`0 10px 20px -2px gray`}
              marginLeft={1.5}
              borderRadius={15}
              rowSpan={5}
              area={"side"}
              bgPosition={"center"}
              bgImage={images[0 % images.length]}
              bgSize={"cover"}
            />
            {images.length >= 2 && (
              <GridItem
                m={1}
                boxShadow={`0 10px 20px -2px gray`}
                rowSpan={images.length == 2 ? 5 : 3}
                area={"up"}
                borderRadius={15}
                marginBottom={1.5}
                bgPosition={"center"}
                bgImage={images[1 % images.length]}
                bgSize={"cover"}
              />
            )}
            {images.length >= 3 && (
              <GridItem
                m={1}
                boxShadow={`0 10px 20px -2px gray`}
                rowSpan={2}
                borderRadius={15}
                area={"down"}
                bgPosition={"center"}
                bgImage={images[2 % images.length]}
                bgSize={"cover"}
              />
            )}
          </Grid>
        </Box>

        <CardBody>
          <Heading size="sm" marginBottom="5px" marginTop={-2} padding="1px">
            <Text color={"gray.500"} fontSize={13} mt={-2} mb={1}>
              غرفة نوم
            </Text>
            {name}
          </Heading>
          <Rating rate={75} />
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ItemCard;
