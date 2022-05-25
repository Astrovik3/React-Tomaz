import React from "react";
import { Grid } from '@mui/material';

const Item = ({ids, name, price, photo}) => {
  
  return (
    <Grid>
      <p>{ids}</p>
      <p>{name}</p>
      <p>{price}</p>
      <img src={photo} alt="si"></img>

    </Grid>
  );
};
  
export default Item;