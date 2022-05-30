import React from "react";
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount';

const ItemDetail = ({item}) => {

  return (
    <Grid>
      {
        item.photo
        ?
        <Grid id="gridProductoSolo">
          <Grid>
            <img src={item.photo} alt='itemDetail' />
          </Grid>
          <Grid>
          <p>{item.name}</p>
          <p>{item.ids}</p>
          <p>{item.price}</p>
          
          <ItemCount stock={item.stock} initial={1}/>
          </Grid>
        </Grid>
        : <Box sx={{ display: 'flex', justifyContent: 'center', margin: '80px'}}>
            <CircularProgress color='secondary' />
          </Box>
      }
    </Grid>
  );
};
  
export default ItemDetail;