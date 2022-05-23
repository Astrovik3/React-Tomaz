import React, { useState } from "react";
import { Grid, Button } from "@mui/material";

const ItemCount = () => {
  const [quantity, setQuantity] = useState(0);

  const restar = () => {
    if(quantity > 0) {
      setQuantity(quantity - 1);
    }
  }
  const sumar = () => {
    if(quantity < 8) {
      setQuantity(quantity + 1);
    }
  }

  return (
    <Grid>
      <Button variant="outlined" onClick={restar}>RESTAR</Button>
      <p id="itemCountQuantity">{quantity}</p>
      <Button variant="outlined" onClick={sumar}>SUMAR</Button>
    </Grid>
  );
};
  
export default ItemCount;