import React from "react";
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Item from "./Item";

const ItemList = ({items}) => {

  return (
    <Grid id='gridProductos'>
      {
        items.length > 0
        ? items.map(item => <Item ids={item.ids} name={item.name} price={item.price} photo={item.photo}/> )
        : <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <CircularProgress color='secondary' />
          </Box>
      }
    </Grid>
  );
};
  
export default ItemList;