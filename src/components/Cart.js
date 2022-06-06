import React from "react";
import { Grid } from '@mui/material';
import NavBar from "./NavBar";

const Cart = () => {

  return (
    <Grid>
      <NavBar/>
      <p style={{marginTop: '80px'}}> CART </p>
    </Grid>
  );
};
  
export default Cart;
