import React from "react";
import { Grid } from "@mui/material";
import NavBar from '../components/NavBar';
import women_photo from '../women_photo.jpg';

const WomenScreen = () => {

  return (
    <Grid className="App">
      <NavBar></NavBar>
      <p id='itemListContainer'> ... BUILDING WOMEN PAGE ... </p>
      <img id="portadaWomen" src={women_photo} alt="eliminar"></img>
    </Grid>
  );
}
  
export default WomenScreen;