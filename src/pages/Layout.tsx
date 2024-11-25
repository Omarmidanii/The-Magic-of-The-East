import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar";
import YALLOW from "../constants";
import resizeWindow from "../services/resizeWindow";

export const Layout = () => {
  document.dir = "rtl";
  const { height, width } = resizeWindow();
  return (
    <Grid
      templateAreas={`
      "nav"
      "main"
      `}
      bg={YALLOW}
    >
      <GridItem area={"nav"} w={"100%"} overflow={"hidden"}>
        <NavBar />
      </GridItem>

      <GridItem
        area={"main"}
        maxHeight={"100%"}
        overflowY={"hidden"}
        overflowX={"hidden"}
        height={height - 120}
        w={width}
        borderTopRadius={60}
        bg={"white"}
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
