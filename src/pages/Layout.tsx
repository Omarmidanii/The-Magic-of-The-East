import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar";
import YALLOW from "../constants";

export const Layout = () => {
  document.dir = "rtl";
  return (
    <Grid
      templateAreas={`
      "nav"
      "main"
      `}
      bg={YALLOW}
    >
      <GridItem 
        area={"nav"} 
        w={"100%"}
      >
        <NavBar />
      </GridItem>

      <GridItem
        area={"main"}
        maxHeight={"100%"}
        overflowY={"hidden"}
        height={window.innerHeight/1.16 }
        borderTopRadius={60}
        bg={"white"}
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
