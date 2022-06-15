import React, { useContext, useState } from "react";
import { Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ItemCount from './ItemCount';
import ItemCart from "./ItemCart";
import { CartContext } from "./CartContext";

const ItemDetail = ({item}) => {
  const [ itemCount, setItemCount ] = useState(0);

  const addNewItem = useContext(CartContext);

  const onAdd = (qty) => {
    setItemCount(qty);
    addNewItem.addItem(item, qty);
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
            <p>{item.id}</p>
            <p>{item.price}</p>
            
            <Grid>
              {
              itemCount === 0
              ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
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
