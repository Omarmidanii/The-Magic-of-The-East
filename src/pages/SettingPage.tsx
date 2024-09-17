import { Grid, GridItem } from "@chakra-ui/react"
import { SettingList } from "../components/SettingPage/SettingList"
import { Outlet } from "react-router-dom"

export const SettingPage = () => {
  return (
    <Grid
      templateAreas={{
        lg: `"side main"`,
        base: `"side"`
      }}
      templateRows={{ lg: 'auto 1fr' }}
      templateColumns={{ lg: '1fr 4fr' }} 
    >
      <GridItem
        area={"side"}
      >
        <SettingList />
      </GridItem>
     
      <GridItem  area={"main"} >
      <Outlet />  
      </GridItem>
    </Grid>
  )
}
