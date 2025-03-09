import {
  Badge,
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import noImage from "../../assets/noImage.jpeg";
interface Props {
  name: string | undefined;
  images: string[];
  badge: string;
  gat: string;
  istransparent?: number;
}

const ItemCard = ({ name, images, badge, gat, istransparent = 0 }: Props) => {
  return (
    <Card
      p={2}
      overflow="hidden"
      borderRadius={20}
      boxShadow={`0`}
      bg={istransparent ? "rgba(244, 232, 232, 0.6)" : "auto"}
      backdropFilter={istransparent ?"blur(3px)":'auto'}
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
              boxShadow={`0 10px 20px -8px gray`}
              marginLeft={1.5}
              borderRadius={15}
              rowSpan={5}
              area={"side"}
              bgPosition={"center"}
              bgImage={
                images[0 % images.length] ? images[0 % images.length] : noImage
              }
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
              {gat}
              <Badge
                borderRadius={3}
                px={1.5}
                mr={3}
                variant="solid"
                fontSize="0.7em"
                colorScheme={badge == "1" ? "green" : "red"}
              >
                {badge == "1" ? "متاح" : "مباع"}
              </Badge>
            </Text>
            {name}
          </Heading>
          {/*<Rating rate={75} />*/}
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ItemCard;
