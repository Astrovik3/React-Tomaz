import React, { useState } from "react";
import { Grid, Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setQuantity] = useState(1);

  const restar = () => {
    if(quantity > initial) {
      setQuantity(quantity - 1);
    }
  }
  const sumar = () => {
    if(quantity < stock) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <Grid id='bttnsCantidad'>
      <RemoveIcon class='addRemoveIcon' onClick={restar} />
      <p id="itemCountQuantity">{quantity}</p>
      <AddIcon class='addRemoveIcon' onClick={sumar} />
      <Button id='bttnAgregar' variant="outlined" size="small">agregar al carrito</Button>
    </Grid>
  );
};
  
export default ItemCount;