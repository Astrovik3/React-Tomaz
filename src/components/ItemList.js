import React from "react";
import { Grid } from '@mui/material';
import Item from "./Item";

const ItemList = ({items}) => {

  return (
    <Grid>
      {
        items.length > 0
        ? items.map(item => <Item ids={item.ids} name={item.name} price={item.price} photo={item.photo}/> )
        : <p>cargando.....</p>
      }
    </Grid>
  );
};
  
export default ItemList;