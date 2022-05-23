import React from "react";
import { Grid } from '@mui/material';
import ItemCount from './ItemCount.js';


const ItemListContainer = ({greeting}) => {

  return (
    <Grid id='itemListContainer'>
      <p>
        {greeting}
      </p>
      <br />
      <ItemCount stock={8} initial={0}/>

    </Grid>
  );
};
  
export default ItemListContainer;
