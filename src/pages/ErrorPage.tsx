import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar";
import YALLOW from "../constants";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <Grid
      templateAreas={`"nav" "main"`}
      bg={YALLOW}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      
      <GridItem area={"main"}  borderTopRadius={60}
        bg={"white"}>
        <Box padding={5}>
          <Heading textAlign={'center'}>Oops</Heading>
          <Text textAlign={'center'}>
            {isRouteErrorResponse(error)
              ? "What an achievment!! You found a page that does not even exist!! You can go back if you want :) "
              : "An unexpected error occurred"}
          </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};
