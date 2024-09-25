import { Grid, GridItem } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../components/Layout/NavBar";
import YALLOW from "../constants";
import resizeWindow from "../services/resizeWindow";

export const Layout = () => {
  document.dir = "rtl";
  const {height}=resizeWindow();
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
        height={height-100 }
        borderTopRadius={60}
        bg={"white"}
      >
        <Outlet />
      </GridItem>
    </Grid>
  );
};
