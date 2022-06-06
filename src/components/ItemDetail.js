import { React, useState } from "react";
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount';
import ItemCart from "./ItemCart";

const ItemDetail = ({item}) => {
  const [ itemCounter, setItemCount ] = useState(0);

  const onAdd = (qty) => {
    setItemCount(qty);
  }

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
            
            <Grid>
              {
                itemCounter === 0
                  ? <ItemCount stock={item.stock} initial={itemCounter} onAdd={onAdd}/>
                  : <ItemCart />
              }
            </Grid>
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
