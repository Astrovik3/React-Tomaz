import React from "react";
import { Grid } from "@mui/material";
import NavBar from "../components/NavBar";
import ItemListContainer from "../components/ItemListContainer";


const MenScreen = () => {

  return (
    <Grid className="App">
      <NavBar />
      <ItemListContainer greeting={'NUESTROS PRODUCTOS'} />
    </Grid>
  );
};
  
export default MenScreen;