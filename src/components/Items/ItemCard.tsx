import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/react";


interface Props {
  children: string | undefined;
  images:string[]
}

const ItemCard = ({ children , images}: Props) => {
  
  return (
    <Card
      overflow="hidden"
      borderRadius={20}
      _hover={{
        transform: "scale(1.1)",
        transition: "transform 0.3s ease",
      }}
      boxShadow={'lg'}
      bgGradient={`linear(210deg,gray.100 , #FFFFE0  )`} 
      //bgColor={'#FFFFE0'}
    >
      <Stack>
        <Box>
          <Grid
            templateAreas={`
                "side up"
                "side down"
              `}
            height={"200"}
          >
            <GridItem marginLeft={1.5} area={"side"}  bgPosition={'center'} bgImage={images[0%images.length]} bgSize={'cover'}>
            </GridItem>
            <GridItem area={"up"}  marginBottom={1.5} bgPosition={'center'}  bgImage={images[1%images.length]} bgSize={'cover'}>
            </GridItem>
            <GridItem area={"down"} bgPosition={'center'} bgImage={images[2%images.length]} bgSize={'cover'}>
            </GridItem>
          </Grid>
        </Box>

        <CardBody>
          <Heading size="sm" marginBottom="5px" marginTop={-2} padding="1px">
            {children}
          </Heading>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default ItemCard;
